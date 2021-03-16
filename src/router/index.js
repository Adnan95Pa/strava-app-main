import Vue from 'vue'
import VueRouter from 'vue-router'
import { getCode, getToken, refreshToken } from "../../api";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
    children: [
      { path: 'exchange_token', component: () => import('@/views/ExchangeToken.vue') }
    ],
    beforeEnter(to, from, next) {
      let access_token = localStorage.access_token;
      let refresh_token = localStorage.refresh_token;
      let expires_at = localStorage.expires_at;
      if (!refresh_token) {
        if (!localStorage.code) {
          getCode();
          if (to.path == '/exchange_token') {
            let code = to.query.code
            console.log(code);
            localStorage.code = code
            window.location = '/'
          }
        } else {
          getToken(localStorage.code).then(response => {
            if (response.access_token) {
              localStorage.access_token = response.access_token
            }
            if (response.refresh_token) {
              localStorage.refresh_token = response.refresh_token
            }
            if (response.expires_at) {
              localStorage.expires_at = response.expires_at
            }
            if (response.expires_in) {
              localStorage.expires_in = response.expires_in
            }
            localStorage.removeItem('code');
            window.location.reload();
          })
        }
      }

      let currentTimeInSecond = new Date().getTime() / 1000;
      if(expires_at < currentTimeInSecond){
        console.log('Token expaire');
        refreshToken(localStorage.refresh_token).then(response => {
          if (response.access_token) {
            localStorage.access_token = response.access_token
          }
          if (response.refresh_token) {
            localStorage.refresh_token = response.refresh_token
          }
          if (response.expires_at) {
            localStorage.expires_at = response.expires_at
          }
          if (response.expires_in) {
            localStorage.expires_in = response.expires_in
          }
          window.location.reload();
          console.log(response);
        })
      }
      next()
    }
  },
  {
  path: '/about',
  name: 'About',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
