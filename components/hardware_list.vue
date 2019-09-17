<template>
    <ul class="pl-10 md:pl-16 list-disc mt-5">
        <li v-for="item in hardwareList" class="mt-5">
            <h3 class="text-2xl font-bold">{{item.header}}</h3>
            <span class="font-bold font-mono mt-3 inline-block bg-red-200 text-red-800 py-1 px-2">
                {{item.title}}
            </span>
            <div class="mt-2">
                {{item.description}}
            </div>
        </li>
    </ul>
</template>
<script>
    export default {
        props:{
            hardwareList : {Type: Array},
        }
    }
</script>
