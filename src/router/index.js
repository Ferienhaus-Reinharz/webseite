import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PicturesView from '../views/PicturesView.vue'
import LocationView from '../views/LocationView.vue'
import PricesView from '../views/PricesView.vue'
import ContactView from '../views/ContactView.vue'
import ImpressumView from '../views/ImpressumView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/pictures',
    name: 'pictures',
    component: PicturesView
  },
  {
    path: '/location',
    name: 'location',
    component: LocationView
  },
  {
    path: '/prices',
    name: 'prices',
    component: PricesView
  },
  {
    path: '/contact',
    name: 'contact',
    component: ContactView
  },
  {
    path: '/impressum',
    name: 'impressum',
    component: ImpressumView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
