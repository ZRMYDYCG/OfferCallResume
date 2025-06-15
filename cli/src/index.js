import { program } from 'commander'
import { installCommand } from './commands/install.js'
import { uninstallCommand } from './commands/uninstall.js'

// 初始化所有命令
function initializeCommands() {
  // 注册 install 命令组
  program.command('install').description('安装项目依赖').action(installCommand)
  // 注册 uninstall 命令组
  program.command('uninstall').description('卸载项目依赖').action(uninstallCommand)
  // 最后解析参数
  program.parse(process.argv)
}

initializeCommands()
