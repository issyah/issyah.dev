<template>
    <div class="relative">
        <div class="bg-green-500">
            <div class="w-full md:w-1/2 p-4 mx-auto" ref="jumbotron">
                <div :style="{transform:parallexArticle(0.4)}">
                    <nuxt-link to="/articles" class="rounded-full px-5 p-2  text-white block md:inline-block text-center font-bold hover:underline">Back to Articles</nuxt-link>
                    <img :src="this.attributes.img" alt="Article Image" class="mt-5
                    10">
                </div>
                <h1 class="text-6xl text-center font-normal" :style="{transform: parallexArticle(0.5)}">{{this.attributes.title}}</h1>
            </div>
        </div>
        <!-- <div class="content" v-html="post.html"></div> -->
        <div class="bg-white relative text-gray-900">
            <div class="article w-full md:w-1/2 p-4 mx-auto " v-html="this.html">

            </div>
        </div>

    </div>

</template>
<script>
    export default {
        transition: 'slide',
        async asyncData({params}){
            try{
                let article = await import(`~/contents/${params.slug}.md`);
                return {
                    attributes: article.attributes,
                    html: article.html
                }
            } catch(err){
                return false
            }
        },
        data:() => ({
            scroll:'',
        }),
        computed:{
            parallex() {
                return `translateY(${this.scroll* 0.4}px)`
            },
        },
        methods:{
            handleScroll() {
                this.scroll = window.scrollY;
            },
            parallexArticle(factor){
                return `translateY(${this.scroll* factor}px)`
            }
        },
        head(){
            return {
                title: this.attributes.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.attributes.description}
                ]
            }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll);
        }
    }
</script>
