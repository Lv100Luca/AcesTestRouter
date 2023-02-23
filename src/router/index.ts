import { createRouter, createWebHistory } from 'vue-router'
import appView from "../App.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'app',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: appView,
    },
    {
      path: "/result",
      name: "result",
      component: () => import("../views/ResultView.vue")
    }
  ]
})

export default router
