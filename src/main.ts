import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from './store'
import '~/css/tailwind.css'

/**
 * 应用启动
 */
function bootstrap() {
  const app = createApp(App)

  app.use(pinia)
  app.use(router)

  app.mount('#app')

  return app
}

bootstrap()
