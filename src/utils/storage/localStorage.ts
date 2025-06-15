/* eslint-disable no-console */
interface StoredItem<T> {
  value: T
  expiry?: number // 过期时间戳（毫秒）
  timestamp: number // 存储时间戳
}

interface StorageConfig {
  maxSize?: number // 最大存储大小（字节）
  defaultExpiry?: number // 默认过期时间（毫秒）
  checkExpiryInterval?: number // 过期检查间隔（毫秒）
}

class EnhancedLocalStorage {
  private prefix: string
  private config: Required<StorageConfig>
  private expiryCheckTimer: NodeJS.Timeout | null = null

  constructor(prefix = 'app_', config: StorageConfig = {}) {
    this.prefix = prefix
    this.config = {
      maxSize: config.maxSize || 5 * 1024 * 1024, // 默认5MB
      defaultExpiry: config.defaultExpiry || 7 * 24 * 60 * 60 * 1000, // 默认7天
      checkExpiryInterval: config.checkExpiryInterval || 24 * 60 * 60 * 1000, // 默认24小时检查一次
    }

    // 初始化时清理过期项目
    this.cleanExpiredItems()
    // 设置定期检查过期项目
    this.startExpiryCheck()
  }

  /**
   * 存储数据到localStorage
   */
  setItem<T>(key: string, value: T, expiry?: number): void {
    const fullKey = this.getFullKey(key)
    const item: StoredItem<T> = {
      value,
      timestamp: Date.now(),
      expiry: expiry ? Date.now() + expiry : undefined,
    }

    try {
      localStorage.setItem(fullKey, JSON.stringify(item))
      // 检查是否超过最大存储限制
      this.enforceMaxSize()
    }
    catch (error) {
      console.error('Failed to set item in localStorage:', error)
      // 如果存储失败，尝试清理空间后重试
      this.cleanExpiredItems()
      this.enforceMaxSize(true)
      try {
        localStorage.setItem(fullKey, JSON.stringify(item))
      }
      catch (retryError) {
        console.error('Failed to set item after cleanup:', retryError)
      }
    }
  }

  /**
   * 从localStorage获取数据
   */
  getItem<T>(key: string): T | null {
    const fullKey = this.getFullKey(key)
    const itemStr = localStorage.getItem(fullKey)

    if (!itemStr)
      return null

    try {
      const item: StoredItem<T> = JSON.parse(itemStr)

      // 检查是否过期
      if (item.expiry && Date.now() > item.expiry) {
        this.removeItem(key)
        return null
      }

      return item.value
    }
    catch (error) {
      console.error('Failed to parse item from localStorage:', error)
      this.removeItem(key)
      return null
    }
  }

  /**
   * 从localStorage移除数据
   */
  removeItem(key: string): void {
    const fullKey = this.getFullKey(key)
    localStorage.removeItem(fullKey)
  }

  /**
   * 清空所有存储数据
   */
  clear(): void {
    const keys = Object.keys(localStorage)
    keys.forEach((key) => {
      if (key.startsWith(this.prefix)) {
        localStorage.removeItem(key)
      }
    })
  }

  /**
   * 获取所有存储的键
   */
  getKeys(): string[] {
    const keys = Object.keys(localStorage)
    return keys
      .filter(key => key.startsWith(this.prefix))
      .map(key => key.slice(this.prefix.length))
  }

  /**
   * 清理过期项目
   */
  cleanExpiredItems(): void {
    const keys = Object.keys(localStorage)
    let cleanedCount = 0

    keys.forEach((key) => {
      if (key.startsWith(this.prefix)) {
        const itemStr = localStorage.getItem(key)
        if (itemStr) {
          try {
            const item: StoredItem<unknown> = JSON.parse(itemStr)
            if (item.expiry && Date.now() > item.expiry) {
              localStorage.removeItem(key)
              cleanedCount++
            }
          }
          catch (error) {
            console.error('Failed to parse item during expiry check:', error)
            localStorage.removeItem(key)
            cleanedCount++
          }
        }
      }
    })

    if (cleanedCount > 0) {
      console.log(`Cleaned up ${cleanedCount} expired localStorage items`)
    }
  }

  /**
   * 开始定期检查过期项目
   */
  private startExpiryCheck(): void {
    if (this.expiryCheckTimer) {
      clearInterval(this.expiryCheckTimer)
    }

    this.expiryCheckTimer = setInterval(() => {
      this.cleanExpiredItems()
    }, this.config.checkExpiryInterval)
  }

  /**
   * 强制实施最大存储大小限制
   */
  private enforceMaxSize(forceClean = false): void {
    const currentSize = this.calculateCurrentSize()

    if (currentSize <= this.config.maxSize && !forceClean) {
      return
    }

    // 如果超过限制，按时间戳从旧到新删除项目
    const keys = Object.keys(localStorage)
      .filter(key => key.startsWith(this.prefix))
      .map((key) => {
        const itemStr = localStorage.getItem(key)
        if (itemStr) {
          try {
            const item: StoredItem<unknown> = JSON.parse(itemStr)
            return { key, timestamp: item.timestamp }
          }
          catch (error) {
            console.error('Failed to parse item during enforcement:', error)
            return { key, timestamp: 0 }
          }
        }
        return { key, timestamp: 0 }
      })
      .sort((a, b) => a.timestamp - b.timestamp)

    // 逐个删除最旧的项目，直到满足大小限制
    for (const { key } of keys) {
      if (this.calculateCurrentSize() <= this.config.maxSize * 0.8 || forceClean) {
        break
      }
      localStorage.removeItem(key)
    }
  }

  /**
   * 计算当前存储大小
   */
  private calculateCurrentSize(): number {
    let totalSize = 0
    const keys = Object.keys(localStorage)

    keys.forEach((key) => {
      if (key.startsWith(this.prefix)) {
        const value = localStorage.getItem(key)
        if (value) {
          totalSize += key.length + value.length
        }
      }
    })

    return totalSize
  }

  /**
   * 获取带前缀的完整键名
   */
  private getFullKey(key: string): string {
    return `${this.prefix}${key}`
  }

  /**
   * 销毁实例，清除定时器
   */
  destroy(): void {
    if (this.expiryCheckTimer) {
      clearInterval(this.expiryCheckTimer)
      this.expiryCheckTimer = null
    }
  }
}

// 创建默认实例
export const storage = new EnhancedLocalStorage()

export default EnhancedLocalStorage
