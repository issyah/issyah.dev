<template>
    <div class="w-full p-4 sm:p-0 sm:w-10/12 md:w-1/2 mx-auto md:min-h-screen">
        <h1 class="text-5xl font-bold">Articles</h1>
        <template v-if="articles.length">
            <div v-for="article in articles" class="rounded-lg overflow-hidden mt-10">
                <div class="bg-green-500 p-5" v-if="article.attributes.img">
                    <nuxt-link :to="(article.attributes.online) ? '/articles/' + article.attributes.url : ''">
                        <img :src="article.attributes.img" alt="Image Article" class="w-auto h-64 mx-auto"/>
                    </nuxt-link>
                </div>
                <div class="py-4 px-8 bg-gray-100 text-black">
                    <nuxt-link :to="(article.attributes.online) ? '/articles/' + article.attributes.url : ''">
                        <h1 class="text-3xl font-light">{{article.attributes.title}}</h1>
                    </nuxt-link>
                    <h4 class="text-gray-500 text-sm">{{article.attributes.date}}</h4>
                    <p class="mt-4">{{article.attributes.description}}</p>
                    <div class="mt-8 text-right">
                        <template v-if="article.attributes.online">
                            <nuxt-link :to="'/articles/' + article.attributes.url" class="rounded-full px-10 p-2 border bg-red-500 block md:inline-block text-center hover:bg-red-600">Read Article</nuxt-link>
                        </template>
                        <template v-else>
                            Article coming soon.
                        </template>
                    </div>
                </div>
                <!-- <hr class="my-5 border-gray-800"> -->
            </div>
        </template>
    </div>
</template>
<script>
    export default {
        transition: 'slide',
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
        methods:{

        }
    }
</script>
