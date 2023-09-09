import { createRouter, createWebHashHistory } from 'vue-router'
import CoursesView from '../views/CoursesView.vue'
import HomeViewVue from '@/views/HomeView.vue'
import ProgramsView from '../views/ProgramsView.vue'
import CourseCateView from '../views/CourseCateView.vue'
import ProgramCateView from '../views/ProgramCateView.vue'
import AddNewPageView from '../views/AddNewView.vue'
import AddNewProgramsPage from '../views/AddNewProgramsView.vue'
import AddNewCourseCategory from '../views/AddNewCourseCateView.vue'
import AddNewProgramCategory from '../views/AddNewProgramsCateView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeViewVue
  },
  {
    path: '/Courses',
    name: 'Courses',
    component: CoursesView
  },
  {
    path: '/Programs',
    name: 'Programs',
    component: ProgramsView
  },
  {
    path: '/Coursecategories',
    name: 'Coursecategories',
    component: CourseCateView
  },
  {
    path: '/Programcategories',
    name: 'Programcategories',
    component: ProgramCateView
  },

  {
    path: '/AddNewPages',
    name: 'AddNewPages',
    component: AddNewPageView
  },

  {
    path: '/AddNewProgramsPage',
    name: 'AddNewProgramsPage',
    component: AddNewProgramsPage
  },
   
  {
    path: '/AddNewCourseCategory',
    name: 'AddNewCourseCategory',
    component: AddNewCourseCategory
  },

  {
    path: '/AddNewProgramCategory',
    name: 'AddNewProgramCategory',
    component: AddNewProgramCategory
  },  
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
