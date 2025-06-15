import { createRouter, createWebHistory } from 'vue-router'
import Editor from '@/pages/editor/index.vue'
import Template from '@/pages/template/index.vue'

const routes = [
  {
    path: '/',
    name: 'Template',
    component: Template,
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
