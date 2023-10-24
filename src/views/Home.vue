<template>
    <div class="flex">
        <div class="sidebar" id="sidebar-manager" v-if="role === 'manager'" :class="{ 'w-5-percent': !isOpen }" >
            <div  class="">
                <Icon 
                icon="icon-park:left" 
                class="text-[25px] absolute -right-3 shadow-box-shadow rounded-full top-[75px] bg-white cursor-pointer block float-left"
                :class="{ 'rotate-180': !isOpen }"
                @click=sideBarOpen
                />
            </div>
            <div class="user-icon">
                <Icon :icon="$router.options.routes[1].children[0].icon" class="text-[56px] mr-10 cursor-pointer"
                @click=alwaysOpen
                />
                <p 
                    class="font-semibold text-[18px] origin-left cursor-pointer"
                    :class="{'disappear': !isOpen}"
                    >Manager
                </p>
            </div>
            <div class="navigation-option">
                <Icon :icon="$router.options.routes[1].icon" class="option-icon" 
                @click=alwaysOpen
                />
                <router-link
                    :to="{ name: 'Manager'}"
                    type="button"
                    class="option-text"
                    :class="{'disappear': !isOpen}"
                    >
                    {{ $router.options.routes[1].name}}
                </router-link>            
            </div>
            <div class="flex items-center justify-between">
                <div class="navigation-option">
                    <Icon :icon="$router.options.routes[1].children[2].icon" class="option-icon" 
                    @click=alwaysOpen
                    />
                    <router-link
                        :to="{ name: 'Inventory'}"
                        type="button"
                        class="option-text"
                        :class="{'disappear': !isOpen}"
                        >
                        {{ $router.options.routes[1].children[2].name}}
                    </router-link>            
                </div>
                <div>
                    <Icon icon="subway:down-2" class="text-[15px] mr-8" :class="{'disappear': !isOpen}"/>
                    
                </div>
            </div>
                <div class="flex items-center justify-between">
                    <div class=" navigation-option">
                    <Icon :icon="$router.options.routes[1].children[3].icon" class="option-icon"
                    @click=alwaysOpen
                    />
                        <router-link
                            :to="{ name: 'Categories'}"
                            type="button"
                            class="option-text"
                            :class="{'disappear': !isOpen}"
                            >
                            {{ $router.options.routes[1].children[3].name}}
                        </router-link>      
                    </div>
                    <div>
                        <Icon icon="subway:down-2" class="text-[15px] mr-8" :class="{'disappear': !isOpen}"/>
                    </div>
                </div>
            <div class="navigation-option">
                <Icon :icon="$router.options.routes[1].children[6].icon" class="option-icon" 
                @click=alwaysOpen
                />
                <router-link
                    :to="{ name: 'User'}"
                    type="button"
                    class="option-text"
                    :class="{'disappear': !isOpen}"
                    >
                    {{ $router.options.routes[1].children[6].name}}
                </router-link>            
            </div>
            <div class="navigation-option">
                <Icon :icon="$router.options.routes[1].children[7].icon" class="option-icon" 
                @click=alwaysOpen
                />
                <router-link
                    :to="{ name: 'Sales Report'}"
                    type="button"
                    class="option-text"
                    :class="{'disappear': !isOpen}"
                    >
                    {{ $router.options.routes[1].children[7].name}}
                </router-link>            
            </div>
        </div>
        <div class="sidebar" id="sidebar-worker" v-else :class="{ 'w-5-percent': !isOpen }" >
            <div  class="">
                <Icon 
                icon="icon-park:left" 
                class="text-[25px] absolute -right-3 shadow-box-shadow rounded-full top-[75px] bg-white cursor-pointer block float-left"
                :class="{ 'rotate-180': !isOpen }"
                @click=sideBarOpen
                />
            </div>
            <div class="user-icon">
                <Icon :icon="$router.options.routes[1].children[1].icon" class="text-[56px] mr-10 cursor-pointer" />
                <p class="font-semibold text-[18px] cursor-pointer" :class="{'disappear': !isOpen}">Worker</p>
            </div>
            <div class="navigation-option">
                <Icon :icon="$router.options.routes[1].icon" class="option-icon"
                @click=alwaysOpen
                />
                <router-link
                    :to="{ name: 'Worker' }"
                    type="button"
                    class="option-text"
                    :class="{'disappear': !isOpen}"
                    >
                    {{ $router.options.routes[1].name}}
                </router-link>            
            </div>
            <div class="flex items-center justify-between">
                <div class="navigation-option">
                    <Icon :icon="$router.options.routes[1].children[2].icon" class="option-icon" 
                    @click=alwaysOpen
                    />
                    <router-link
                        :to="{ name: 'Inventory'}"
                        type="button"
                        class="option-text"
                        :class="{'disappear': !isOpen}"
                        >
                        {{ $router.options.routes[1].children[2].name}}
                    </router-link>            
                </div>
                <div>
                    <Icon icon="subway:down-2" class="text-[15px] mr-8" :class="{'disappear': !isOpen}"/>
                </div>
            </div>
                <div class="flex items-center justify-between">
                    <div class=" navigation-option">
                    <Icon :icon="$router.options.routes[1].children[3].icon" class="option-icon"
                    @click=alwaysOpen
                    />
                        <router-link
                            :to="{ name: 'Categories'}"
                            type="button"
                            class="option-text"
                            :class="{'disappear': !isOpen}"
                            >
                            {{ $router.options.routes[1].children[3].name}}
                        </router-link>      
                    </div>
                    <div>
                        <Icon icon="subway:down-2" class="text-[15px] mr-8" :class="{'disappear': !isOpen}"/>
                    </div>
                </div>
            <div class="navigation-option">
                <Icon :icon="$router.options.routes[1].children[4].icon" class="option-icon"
                @click=alwaysOpen
                />
                <router-link
                    :to="{ name: 'Cashier'}"
                    type="button"
                    class="option-text"
                    :class="{'disappear': !isOpen}"
                    >
                    {{ $router.options.routes[1].children[4].name}}
                </router-link>            
            </div>
            <div class="navigation-option">
                <Icon :icon="$router.options.routes[1].children[5].icon" class="option-icon" 
                @click=alwaysOpen
                />
                <router-link
                    :to="{ name: 'Closing'}"
                    type="button"
                    class="option-text"
                    :class="{'disappear': !isOpen}"
                    >
                    {{ $router.options.routes[1].children[5].name}}
                </router-link>            
            </div>
        </div>
        <router-view/>
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
        }
    },
    methods:{
        sideBarOpen(){
            this.isOpen = !this.isOpen
        },
        alwaysOpen(){
            this.isOpen = true
        },
    },
}
</script>