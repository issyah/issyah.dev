<template>
    <div class="w-full p-4 sm:p-0 sm:w-10/12 md:w-1/2 mx-auto md:min-h-screen mt-10">
        <h1 class="text-5xl font-bold">Articles</h1>
        <p>Guide Articles and some other stuff.</p>
        <template v-if="articlesSorted">
            <div v-for="article in articlesSorted" class="rounded-lg overflow-hidden mt-10">
                <div class="bg-gray-400 p-4" v-if="article.img">
                    <nuxt-link :to="(article.online) ? '/articles/' + article.url : ''">
                        <img :src="article.img" alt="Image Article" class="mx-auto h-64 "/>
                    </nuxt-link>
                </div>
                <div class="py-4 px-8 bg-gray-100 text-black">
                    <nuxt-link :to="(article.online) ? '/articles/' + article.url : ''">
                        <h1 class="text-3xl font-light">{{article.title}}</h1>
                    </nuxt-link>
                    <h4 class="text-gray-500 text-sm">{{formattedDate(article.date)}}</h4>
                    <p class="mt-4">{{article.description}}</p>
                    <div class="mt-8 text-right">
                        <template v-if="article.online">
                            <nuxt-link :to="'/articles/' + article.url" class="rounded-full px-10 p-2 border bg-red-500 block md:inline-block text-center hover:bg-red-600">Read Article</nuxt-link>
                        </template>
                        <template v-else>
                            Article coming soon.
                        </template>
                    </div>
                </div>
            </div>
            <div class="mb-10"></div>
        </template>
    </div>
</template>
<script>
    import articles from '~/assets/json/articles.json';
    import moment from 'moment';
    export default {
        transition: 'slide',
        async asyncData({app, params}){
            // const articles = articles;
            let articlesSorted = Object.keys(articles).map((key) => {
                return articles[key];
            });
            articlesSorted.sort((a,b) => {
                return new Date(b.date) - new Date(a.date);
            })
            return {
                articlesSorted,
            };
        },
        computed:{

        },
        methods:{
            formattedDate(date){
                return moment(date).format('DD MMM YYYY');
            }
        },
        // async asyncData(){
        //     const resolve = require.context("~/contents/", true, /\.md$/)
        //     const imports = resolve.keys().map((key) => {
        //         const [,name] = key.match(/\/(.+)\.md$/);
        //         return resolve(key)
        //     });
        //     imports.sort((a,b) => {
        //         return new Date(b.attributes.date) - new Date(a.attributes.date)
        //     });
        //     imports.forEach((e) => delete e.html);
        //     return {
        //         articles : imports
        //     }
        // },
        head(){
            return {
                title: 'Issyah Ismail - Articles',
            }
        },
        mounted(){
        }
    }
</script>
