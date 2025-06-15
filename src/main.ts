import { createApp } from 'vue'
import App from './App.vue'

/**
 * 应用启动
 */
function bootstrap() {
  const app = createApp(App)

  app.mount('#app')

  return app
}

bootstrap()
