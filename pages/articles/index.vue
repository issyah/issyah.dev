<template>
    <div class="w-full md:w-1/2 p-4 mx-auto min-h-screen">
        <h1 class="text-5xl font-bold">Articles</h1>
        <div class="mt-5">
            <div v-for="article in articles">
                <nuxt-link :to="article.attributes.url">
                    <h1 class="text-3xl font-light">{{article.attributes.title}}</h1>
                </nuxt-link>
                <h4 class="text-gray-500 text-sm">{{article.attributes.date}}</h4>
                <p class="mt-4">{{article.attributes.description}}</p>
                <div class="mt-8">
                    <nuxt-link :to="article.attributes.url" class="rounded-full px-5 p-2 bg-red-500 block md:inline-block text-center hover:bg-red-700">Read Article</nuxt-link>
                </div>
                <hr class="my-5 border-gray-700">
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        async asyncData(){
            const resolve = require.context("~/contents/", true, /\.md$/)
            const imports = resolve.keys().map((key) => {
                const [,name] = key.match(/\/(.+)\.md$/);
                return resolve(key)
            });
            return {
                articles : imports
            }
        },
    }
</script>
