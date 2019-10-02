<template>
    <div>
        <ul class="pl-10 md:pl-16 list-none mt-5">
            <li v-for="item in hardwareList" class="mt-5">
                <h3 class="text-2xl font-bold block mt-2">{{item.header}}</h3>
                <img :src="item.img" class="h-10 mr-4 w-auto inline-block" v-if="item.img" />
                <span class="font-bold font-mono mt-3 inline-block  text-red-400 py-1 px-2 rounded-full">
                    {{item.title}}
                </span>
                <div class="mt-2 tracking-wide leading-relaxed">
                    {{item.description}}
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        props:{
            hardwareList : {Type: Array},
        }
    }
</script>
