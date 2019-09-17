<template>
    <div class="w-full md:w-1/2 p-4 mx-auto min-h-screen">
        <h1 class="text-5xl font-bold">Articles</h1>
        <div class="mt-5">
            <div v-for="article in articles">
                <nuxt-link :to="article.link">
                    <h1 class="text-3xl font-light">{{article.title}}</h1>
                </nuxt-link>
                <h4 class="text-gray-500 text-sm">{{article.date}}</h4>
                <p class="mt-4">{{article.description}}</p>
                <div class="mt-8">
                    <nuxt-link :to="article.link" class="rounded-full px-5 p-2 bg-red-500 block md:inline-block text-center hover:bg-red-700">Read Article</nuxt-link>
                </div>
                <hr class="my-5 border-gray-700">
            </div>
        </div>
    </div>
</template>
<script>

    export default {
        data:() =>({
            articles: [],
        }),
        methods:{
            getArticles(){
                this.$axios.get('articles.json')
                .then((response) => {
                    if(! response.status){return false };
                    this.articles = response.data;
                })
            }
        },
        mounted(){
            this.getArticles();
        }
    }
</script>
