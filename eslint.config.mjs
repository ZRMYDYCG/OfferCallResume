// 规则预览: pnpm run eslint:config
import antfu from '@antfu/eslint-config'

export default antfu({
  /**
   * 规则覆盖
   */
  rules: {
    // 允许使用全局 process 变量
    'node/prefer-global/process': 'off',
    // 允许空对象类型 {}
    'ts/no-empty-object-type': 'off',
  },
})
