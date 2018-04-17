import Vue from 'vue'
import Router from 'vue-router'
import HomeComponent from '../components/home'
import ListComponent from '../components/list'
import BuyComponent from '../components/buy'
import FoodComponent from '../components/food'
import login from '../components/login'
import register from '../components/register'
import comfirm from '../components/comfirm'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: HomeComponent
    },
    {
      path: '/list',
      component: ListComponent,

      children:[

    		{
    			path:"buy",
    			component:BuyComponent
    		},
    		{
    			path:"food",
    			component:FoodComponent
    		},
    		{
    			path:"/",
    			redirect:"/list/buy"
    		}
    	]
    },
    {
    	path:"/login",
    	component:login
    },
    {
    	path:"/register",
    	component:register
    },
    {
    	path:"/comfirm",
    	component:comfirm
    }
  ]
})
