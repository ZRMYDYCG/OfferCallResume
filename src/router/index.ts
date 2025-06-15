import { createRouter, createWebHistory } from 'vue-router'
import Editor from '@/pages/editor/index.vue'
import Template from '@/pages/template/index.vue'

const routes = [
  {
    path: '/',
    redirect: '/editor',
  },
  {
    path: '/editor',
    name: 'Editor',
    component: Editor,
  },
  {
    path: '/template',
    name: 'Template',
    component: Template,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
