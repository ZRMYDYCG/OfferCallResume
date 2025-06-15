import type { Stats } from 'node:fs'
import fs from 'node:fs'

export async function getBuildSize(dirPath: string): Promise<string> {
  const getSize = (path: string): number => {
    const stats: Stats = fs.statSync(path)
    if (stats.isDirectory()) {
      return fs.readdirSync(path)
        .reduce((acc: number, file: string) => acc + getSize(`${path}/${file}`), 0)
    }
    return stats.size
  }

  const bytes: number = getSize(dirPath)
  return (bytes / 1024 / 1024).toFixed(1)
}
