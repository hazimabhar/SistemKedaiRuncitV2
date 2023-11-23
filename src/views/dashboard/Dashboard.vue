<template>
    <h1 class="text-[18px] font-semibold pb-10">
        Dashboard
    </h1>
    <p class="font-medium text-[18px]"> 
        Low in Stock
    </p>
    <div class="flex pt-10 pb-5 items-center select-none justify-center">
        <div class=" p-5">
            <Icon 
                icon="icon-park:right" 
                class="text-[25px] shadow-box-shadow rounded-full top-[75px] bg-white cursor-pointer block float-left rotate-180"
                @click="prevPicture"
            />        
        </div>
        <div class="flex p-2 gap-10">
            <div v-for="(picture, index) in currentPicture" :key="index"  class=" bg-[#D9D9D9] flex items-center justify-center w-full h-full sm:w-48 sm:h-24 md:w-64 md:h-32 lg:w-72 lg:h-40 xl:w-96 xl:h-56 rounded-2xl p-2">
                <img :src="picture" :alt="'Image ' + index">
            </div>
        </div>
        <div class=" p-5">
            <Icon 
                icon="icon-park:right" 
                class="text-[25px]  shadow-box-shadow rounded-full top-[75px] bg-white cursor-pointer block float-left"
                @click="nextPicture"
            /> 
        </div>
    </div>
    <div class="flex items-center select-none justify-center gap-2">
        <div v-for="(partition, index) in totalPartition" :key="index">
            <div class="bg-[#D9D9D9] flex items-center justify-center w-2 h-2 rounded-full p-1">
            </div>
        </div>
    </div>
    <div class="flex gap-5 p-2">
        <div class=" w-3/5 p-4">
            <div class=" text-center mb-5">
                <span class="font-medium text-[18px]">
                    Floor Plan
                </span>
            </div>
            <div class="rounded-2xl p-2 bg-[#D9D9D9] h-full sm:h-48 md:h-64 lg:h-72 xl:h-96">
                hehehe
            </div>
        </div>
        <div class=" w-2/5  p-4">
            <div class=" text-center mb-5 ">
                <span class="font-medium text-[18px]">
                    Recent Activity
                </span>
            </div>
            <div class=" rounded-2xl p-2 bg-[#D9D9D9] h-full sm:h-48 md:h-64 lg:h-72 xl:h-96">
                huhuhh
            </div>
        </div>
    </div>
</template>
<script>
import { Icon } from '@iconify/vue';

export default {
    data(){
        return{
            imageNumber:0,
            lowInStock:[
                "/favicon.ico",
                "/test.png",
                "/favicon.ico",
                "/test.png",
                "/favicon.ico",
                "/test.png",
                "/favicon.ico",
                "/test.png",
                "/favicon.ico",
                "/test.png",
                "/favicon.ico",
                "/test.png",
            ],
            currentPicture:[],
            totalPartition:0,
        }
    },
    components:{
        Icon,
    },
    mounted(){
        this.picturePartition()
    },
    methods:{
        picturePartition(){
            // Calculate the starting index for the current set of three elements
            const startIndex = this.imageNumber * 3
            // Extract a subarray of three elements based on the starting index
            this.currentPicture = this.lowInStock.slice(startIndex, startIndex + 3)

            this.totalPartition=Math.ceil(this.lowInStock.length/3)
        },
        prevPicture(){
            if (this.imageNumber == 0){
                this.picturePartition()
            }
            else{
                this.imageNumber--
                this.picturePartition()
            }
        },
        nextPicture(){
            if(this.currentPicture.length==3){
                this.imageNumber++
                this.picturePartition()
            }
        }
    },
}

</script>