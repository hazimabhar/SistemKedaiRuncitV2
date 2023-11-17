<template>
    <div class="flex">
        <div class="sidebar" id="sidebar-manager" :class="{ 'w-5-percent': !isOpen }" >
            <div  class="">
                <Icon 
                icon="icon-park:left" 
                class="text-[25px] absolute -right-3 shadow-box-shadow rounded-full top-[75px] bg-white cursor-pointer block float-left"
                :class="{ 'rotate-180': !isOpen }"
                @click=sideBarOpen
                />
            </div>
            <div class="user-icon">
                <Icon :icon="$router.options.routes[1].children[0].icon" class="text-[56px] mr-10 cursor-pointer"/>
                <p v-if="role === 'manager'"
                    class="font-semibold text-[18px] origin-left cursor-pointer"
                    :class="{'disappear': !isOpen}"
                    >Manager
                </p>
                <p v-else
                    class="font-semibold text-[18px] origin-left cursor-pointer"
                    :class="{'disappear': !isOpen}"
                    >Worker
                </p>
            </div>
            <router-link 
            :to="{ name: 'Manager'}"
            type="button"
            class="option-background"
            @click="openOtherMenu">
                <div class="navigation-option">
                    <Icon :icon="$router.options.routes[1].icon" class="option-icon"/>
                    <div class="option-text" :class="{'disappear': !isOpen}">
                        {{ $router.options.routes[1].name}}
                    </div>            
                </div>
            </router-link>
            <div class="option-background" @click="openInventory">
                <router-link 
                :to="{ name: 'Inventory'}"
                type="button"
                class="option-background">
                        <div class="navigation-option">
                            <Icon :icon="$router.options.routes[1].children[2].icon" class="option-icon"/>
                            <div class="option-text" :class="{'disappear': !isOpen}">
                                {{ $router.options.routes[1].children[2].name}}
                            </div>            
                        </div>
                </router-link>
                <div>
                    <Icon icon="subway:down-2" class="text-[15px] mr-8 cursor-pointer" :class="{'disappear': !isOpen} "/>
                </div>
            </div>
            <div v-for="child in $router.options.routes[1].children[2].children" :key="child.name" class="sub-menu" :class="{ 'close-submenu': !inventoryDropown  }">
                <div class="flex">
                    <div class="option-icon" :class="{ 'close-submenu': !isOpen }" >
                        <Icon :icon="child.icon"/>
                    </div>
                    <div class="option-text" :class="{ 'close-submenu': !isOpen }" >
                        {{ child.name }}
                    </div>
                </div> 
            </div>
            <div class="option-background" @click="openCatalogue">
                <router-link 
                :to="{ name: 'Catalogue'}"
                type="button"
                class="option-background" >
                    <div class=" navigation-option">
                    <Icon :icon="$router.options.routes[1].children[3].icon" class="option-icon"/>
                        <div class="option-text" :class="{'disappear': !isOpen}">
                            {{ $router.options.routes[1].children[3].name}}
                        </div>      
                    </div>
                </router-link>
                <div>
                    <Icon icon="subway:down-2" class="text-[15px] mr-8 cursor-pointer" :class="{'disappear': !isOpen}"/>
                </div>
            </div>
                <div v-for="child in $router.options.routes[1].children[3].children" :key="child.name" class="sub-menu" :class="{ 'close-submenu': !catalogueDropown  }">
                    <div class="flex">
                        <div class="option-icon" :class="{ 'close-submenu': !isOpen }" >
                            <Icon :icon="child.icon"/>
                        </div>
                        <div class="option-text" :class="{ 'close-submenu': !isOpen }" >
                            {{ child.name }}
                        </div>
                    </div>   
                </div>
            <div v-if="role === 'manager'">
                <router-link
                :to="{ name: 'User'}"
                type="button"
                 class="option-background"
                 @click="openOtherMenu">
                    <div class="navigation-option">
                        <Icon :icon="$router.options.routes[1].children[6].icon" class="option-icon"/>
                        <div class="option-text" :class="{'disappear': !isOpen}">
                            {{ $router.options.routes[1].children[6].name}}
                        </div>            
                    </div>
                </router-link>
                <router-link 
                :to="{ name: 'Sales Report'}"
                type="button"
                class="option-background"
                @click="openOtherMenu">
                    <div class="navigation-option">
                        <Icon :icon="$router.options.routes[1].children[7].icon" class="option-icon"/>
                        <div class="option-text" :class="{'disappear': !isOpen}">
                            {{ $router.options.routes[1].children[7].name}}
                        </div>            
                    </div>
                </router-link>
            </div>
            <div v-else>
                <router-link 
                :to="{ name: 'Cashier'}"
                type="button"
                class="option-background"
                @click="openOtherMenu">
                    <div class="navigation-option">
                        <Icon :icon="$router.options.routes[1].children[4].icon" class="option-icon"/>
                        <div class="option-text" :class="{'disappear': !isOpen}">
                            {{ $router.options.routes[1].children[4].name}}
                        </div>            
                    </div>
                </router-link>
                <router-link 
                :to="{ name: 'Closing'}"
                type="button"
                class="option-background"
                @click="openOtherMenu">
                    <div class="navigation-option">
                        <Icon :icon="$router.options.routes[1].children[5].icon" class="option-icon"/>
                        <div class="option-text" :class="{'disappear': !isOpen}">
                            {{ $router.options.routes[1].children[5].name}}
                        </div>            
                    </div>
                </router-link>
            </div>
        </div>
        <div class="pt-10 pl-16">
            <router-view/>
        </div>
    </div>

</template>
<script>
import { Icon } from '@iconify/vue';

export default{
    computed:{
      role(){
        return sessionStorage.getItem('user')
      },
    },
    components:{
        Icon,
    },
    data(){
        return{
            isOpen: true,
            inventoryDropown: false,
            catalogueDropown: false,
        }
    },
    methods:{
        sideBarOpen(){
            this.isOpen = !this.isOpen
            this.inventoryDropown = false
            this.catalogueDropown = false
        },
        openInventory(){
            this.isOpen = true
            this.inventoryDropown = !this.inventoryDropown
            this.catalogueDropown = false
        },
        openCatalogue(){
            this.isOpen = true
            this.catalogueDropown = !this.catalogueDropown
            this.inventoryDropown = false
        },
        openOtherMenu(){
            this.isOpen = true
            this.catalogueDropown = false
            this.inventoryDropown = false
        },
    },
}
</script>