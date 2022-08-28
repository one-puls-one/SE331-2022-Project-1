import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SuggestionView from '@/views/SuggestionView.vue'
import PatientDetailView from '@/views/PatientDetailView.vue'
import PatientVaccineView from '@/views/PatientVaccineView.vue'
import PatientLayoutView from '@/views/PatientLayoutView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import NetWorkErrorView from '@/views/NetworkErrorView.vue'
import NProgress from 'nprogress'
import PatientService from '@/services/PatientService.js'
import GStore from '@/store'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    props: (route) => ({ page: parseInt(route.query.page) || 1 })
  },
  {
    path: '/about',
    name: 'about',
    component: SuggestionView
  },
  {
    path: '/event/:id',
    name: 'PatientLayout',
    props: true,
    component: PatientLayoutView,
    beforeEnter: (to) => {
      return PatientService.getPatient(to.params.id)
        .then((response) => {
          GStore.patient = response.data
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            this.$router.push({
              name: '404Resource',
              params: { resource: 'patient' }
            })
          } else {
            this.$router.push({ name: 'NetworkError' })
          }
        })
    },
    children: [
      {
        path: '',
        name: 'PatientDetail',
        component: PatientDetailView,
        props: true
      },
      {
        path: '',
        name: 'PatientVaccine',
        component: PatientVaccineView,
        props: true
      }
    ]
  },
  {
    path: '/404/:resource',
    name: '404Resource',
    component: NotFoundView,
    props: true
  },
  {
    path: '/:catchAll(.*)',
    name: 'NotFound',
    component: NotFoundView
  },
  {
    path: '/network-error',
    name: 'NetworkError',
    component: NetWorkErrorView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
router.beforeEach(() => {
  NProgress.start
  NProgress.set(0.4)
})
router.afterEach(() => {
  NProgress.done()
})
export default router
