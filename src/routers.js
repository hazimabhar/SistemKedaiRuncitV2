
import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue'
import Dashboard from './views/dashboard/Dashboard.vue'
import Login from './views/Login.vue'
import Inventory from './views/inventory/Inventory.vue'
import Categories from './views/categories/Categories.vue'
import Cashier from './views/cashier/Cashier.vue'
import Closing from './views/closing/Closing.vue'
import User from './views/user/UserListing.vue'
import SaleReport from './views/saleReport/SaleReport.vue'

const router = createRouter({
 history: createWebHistory(import.meta.env.BASE_URL),

 routes:[
    {
        path: '/login',
        name : 'Login',
        component: Login,
        hidden : true,
    },
    {
        path: '/',
        name : 'Dashboard',
        component: Home,
        icon: 'material-symbols:dashboard',
        children: [
          {
            path: '',  
            name: 'Manager',
            component: Dashboard,
            icon: 'ph:user-circle-fill' ,
          },
          {
            path: '',  
            name: 'Worker',
            component: Dashboard,
            icon: 'ph:user-circle-fill' ,
          },
          {
            path: 'inventory',
            name: 'Inventory',
            component: Inventory,
            icon: 'ic:baseline-inventory' ,
            children:[
                {
                    path: '', 
                    name: 'Add Product',
                    component:'',
                    icon:'',
                },
                {
                    path: '', 
                    name: 'Delete Product',
                    component:'',
                    icon:'',
                },
                {
                    path: '', 
                    name: 'Update Product',
                    component:'',
                    icon:'',
                },
                {
                    path: '', 
                    name: 'Add Stock',
                    component:'',
                    icon:'',
                },
            ],
          },          
          {
            path: 'categories',
            name: 'Categories',
            component: Categories,
            icon: 'material-symbols:category' ,
          },
          {
            path: 'cashier',
            name: 'Cashier',
            component: Cashier,
            icon: 'mingcute:counter-2-fill' ,
          }, 
          {
            path: 'closing',
            name: 'Closing',
            component: Closing,
            icon: 'material-symbols:report' ,
          }, 
          {
            path: 'user',
            name: 'User',
            component: User,
            icon: 'clarity:users-solid' ,
          },   
          {
            path: 'SaleReport',
            name: 'Sales Report',
            component: SaleReport,
            icon: 'mdi:file-report-outline' ,
          }, 
        ],
      },
],

linkActiveClass: "routerlink-active-link",

})


export default router

