<template>
    <div class="relative">
        <div class="bg-gray-400 lg:pt-16">
            <div class="w-full md:w-1/2 p-4 mx-auto text-gray-700" ref="jumbotron">
                <nuxt-link to="/articles" class="rounded-full px-5 p-2 block md:inline-block text-center font-bold hover:underline">Back to Articles</nuxt-link>
                <h1 class="text-4xl lg:text-6xl text-center font-normal" :style="{transform: parallexArticle(0.5)}">{{attributes.title}}</h1>
                <div :style="{transform:parallexArticle(0.6)}">
                    <img :src="attributes.img" :alt="attributes.imgAlt" class="mt-5 w-auto">
                </div>
            </div>
        </div>
        <div class="bg-white relative text-gray-900">
            <div class="article w-full md:w-10/12 pt-10 lg:w-1/2 p-4 mx-auto">
                <p class="lead">{{attributes.description}}</p>
                <div v-html="html">

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        transition: 'slide',
        async asyncData({params}){
            let article = await import(`~/contents/${params.slug}.md`);
            return {
                attributes: article.attributes,
                html: article.html,
            }
            // try{
            //     let article = await import(`~/contents/${params.slug}.md`);
            //     return {
            //         attributes: article.attributes,
            //         html: article.html
            //     }
            // } catch(err){
            //     return false
            // }
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
            },
        },
        head(){
            return {
                title: this.attributes.title,
                meta: [
                    {hid: 'description', name: 'description', content: this.attributes.title},
                    {hid: 'og:description', property: 'og:description', content: this.attributes.title}
                ]
            }
        },
        mounted(){
            window.addEventListener('scroll', this.handleScroll);
        }
    }
</script>
<style>
    .article a {
        @apply text-red-500 font-bold;
    }
    .article a:hover{
        @apply underline;
    }
    .article h1{
        @apply text-6xl font-medium my-4;
    }
    .article h2{
        @apply text-4xl font-medium my-4;
    }
    .article h3{
        @apply text-2xl font-medium my-4;
    }
    .article p{
        @apply text-xl font-normal mb-6 leading-relaxed tracking-wide;
    }
    .article .lead{
        @apply font-light text-2xl;
    }

    .article .well {
        @apply p-4 bg-gray-200 rounded-lg;
    }
    .article .well p:last-child{
        margin-bottom: 0;
    }
    .article ol{
        @apply list-decimal pl-10;
    }
    .article ul{
        @apply list-disc pl-10;
    }
    .article ul li{
        @apply text-xl font-normal mt-4 leading-relaxed tracking-wide;
    }
    .article ol li{
        @apply text-xl font-normal mt-4 leading-relaxed tracking-wide;
    }
    .article .created-date{
        @apply text-gray-500
    }
    .article img{
        @apply h-auto w-full mx-auto my-5 rounded-lg;
    }

    .article blockquote{
        @apply border-l-8 p-2 border-gray-200 bg-gray-100 rounded-lg;
    }
    .article blockquote p{
        @apply m-0;
    }
    .article hr{
        @apply my-2;
    }
</style>
