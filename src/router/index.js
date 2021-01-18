import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    title: "发布",
    icon: "el-icon-s-promotion",
    path: "/release",
    component: () => import('@/views/index.vue'),
    children: [{
      title: "保险APP发布",
      path: "/apps",
      component: () => import('@/views/version/list.vue')
    }]
  },
  {
    title: "日志管理",
    icon: "el-icon-collection",
    path: "/log",
    component: () => import('@/views/index.vue'),
    children: [{
      title: "保险APP日志",
      path: "/log-apps",
      component: () => import('@/views/version/list.vue')
    },{
      title: "日志管理",
      path: "/log-manage",
      component: () => import('@/views/version/list2.vue')
    }]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export {router, routes}
