import {createRouter} from 'vue-router'

const lazyLoad = (page) => {
  return () => import(`./pages/${page}.vue`) 
}

const routes = [
  { path: '/',
  component: lazyLoad('Home')
},
]
export default function (history) {
  return createRouter({
  history,
  routes, // short for `routes: routes`
})
}
