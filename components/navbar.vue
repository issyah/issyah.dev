<template>
    <nav class="w-full z-10">
        <div class="container mx-auto px-4 py-3 flex justify-between text-gray-400">
            <router-link :to="{ name: 'index', params: {} }">
                <div class="flex flex-row border-gray-900 border rounded overflow-hidden">
                    <div class="py-1 px-2 text-xl border-r-0 font-bold text-red-500">
                            &lt;/&gt;
                    </div>
                    <div class=" py-1 px-2 text-xl border-l border-gray-900 hidden md:inline-block">
                        _ISSYAH_ISMAIL
                    </div>
                </div>
            </router-link>
            <div class="self-center">
                <ul class="nav-link">
                    <li>
                        <nuxt-link to="/#readme" class="hover:text-gray-500 mr-5">
                            About
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/#works" class="hover:text-gray-500 mr-5">
                            Works
                        </nuxt-link>
                    </li>
                    <li>
                        <nuxt-link to="/articles/" class="hover:text-gray-500 mr-5">Articles</nuxt-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
    export default {
        data:() => ({

        }),
        methods:{},
        mounted(){

        }
    }
</script>
<style>
    ul.nav-link{
        @apply list-none;
    }
    ul.nav-link > li {
        @apply inline-block;
    }
    /* @media (max-width: 768px){
        ul.nav-link{
            display: block;
        }
        ul.nav-link > li {
            @apply block;
        }
    } */
</style>
