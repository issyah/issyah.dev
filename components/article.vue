<template>
    <div>
        <h1>{{title}}</h1>
        <span class="created-date">{{createdDate}}</span>
        <img v-if="headerImg" :src="headerImg.src" alt="headerImg.alt">
        <vue-markdown>
        </vue-markdown>
    </div>
</template>
<script>
    import VueMarkdown from '~/components/vue-markdown.vue';
    export default {
        components:{
            VueMarkdown
        },
        props:{
            title:'',
            createdDate: '',
            headerImg:{},
        },
    }
</script>
