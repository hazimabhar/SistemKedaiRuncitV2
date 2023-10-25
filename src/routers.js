
import { createRouter, createWebHistory } from "vue-router";
import Home from './views/Home.vue'
import Dashboard from './views/dashboard/Dashboard.vue'
import Login from './views/Login.vue'
import Inventory from './views/inventory/Inventory.vue'
import Catalogue from './views/catalogue/Catalogue.vue'
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
                    icon:'zondicons:add-solid',
                },
                {
                    path: '', 
                    name: 'Add Stock',
                    component:'',
                    icon:'material-symbols:box-add',
                },
                {
                    path: '', 
                    name: 'Update Product',
                    component:'',
                    icon:'icon-park-solid:update-rotation',
                },
                {
                    path: '', 
                    name: 'Delete Product',
                    component:'',
                    icon:'fluent:delete-32-filled',
                },
            ],
          },          
          {
            path: 'catalogue',
            name: 'Catalogue',
            component: Catalogue,
            icon: 'material-symbols:category' ,
            children: [
            {
              path: '', 
              name: 'Fresh Food',
              component:'',
              icon:'fluent:food-fish-20-filled',
            },
            {
              path: '', 
              name: 'Groceries',
              component:'',
              icon:'game-icons:opened-food-can',
            },
            {
              path: '', 
              name: 'Household Essentials',
              component:'',
              icon:'ph:paint-brush-household-fill',
            },
            {
              path: '', 
              name: 'Electronic',
              component:'',
              icon:'mdi:passport-electronic',
            },
            {
              path: '', 
              name: 'Fashion',
              component:'',
              icon:'game-icons:ample-dress',
            },
            {
              path: '', 
              name: 'Home & Garden',
              component:'',
              icon:'mdi:gardening',
            },
            {
              path: '', 
              name: 'House Brands',
              component:'',
              icon:'gridicons:house',
            },
            {
              path: '', 
              name: 'Sport Equipment',
              component:'',
              icon:'mdi:youtube-sports',
            },
            {
              path: '', 
              name: 'Toys',
              component:'',
              icon:'mdi:child-toy',
            },
            {
              path: '', 
              name: 'Pet Supplies',
              component:'',
              icon:'material-symbols:pet-supplies',
            },
            {
              path: '', 
              name: 'Office Supplies',
              component:'',
              icon:'ph:office-chair-fill',
            },
            {
              path: '', 
              name: 'Book and Magazines',
              component:'',
              icon:'ph:book-fill',
            },
            {
              path: '', 
              name: 'Gift and Flowers',
              component:'',
              icon:'mingcute:flower-fill',
            },
          ],
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

