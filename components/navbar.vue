<template>
    <nav class="w-full z-10 bg-body text-gray-100">
        <div class="container mx-auto px-4 py-2 flex flex-wrap justify-between text-gray-400 ">
            <div class="self-center">
                <router-link :to="{ name: 'index', params: {} }">
                    <div class="flex flex-row border-gray-900 border rounded overflow-hidden">
                        <div class="py-1 px-2 text-xl border-r-0 font-bold text-red-500">
                                &lt;/&gt;
                        </div>
                        <div class=" py-1 px-2 text-xl border-l border-gray-900 md:inline-block">
                            _ISSYAH_ISMAIL
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="block self-center lg:hidden">
                <button class="hamburger hamburger--minus" @click="toggleNav" :class="{'is-active' : nav}">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div class="self-center lg:block  w-full block lg:flex lg:items-center lg:w-auto" :class="{'hidden' : !nav}">
                <ul class="nav-link text-2xl lg:text-base">
                    <li class="mt-4 lg:mt-0 block lg:inline-block" @click="nav = false">
                        <nuxt-link to="/#readme" class="hover:text-gray-500 mr-5">
                            About
                        </nuxt-link>
                    </li>
                    <li class="mt-4 lg:mt-0 block lg:inline-block" @click="nav = false">
                        <nuxt-link to="/#works" class="hover:text-gray-500 mr-5">
                            Works
                        </nuxt-link>
                    </li>
                    <li class="mt-4 lg:mt-0 block lg:inline-block" @click="nav = false">
                        <nuxt-link to="/workstation/" class="hover:text-gray-500 mr-5">Workstation</nuxt-link>
                    </li>
                    <li class="mt-4 lg:mt-0 block lg:inline-block" @click="nav = false">
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
            nav: false,
        }),
        methods:{
            toggleNav(){
                this.nav = !this.nav;
            }
        },
        mounted(){
            console.log(window);
        },
    }
</script>
<style>
    ul.nav-link{
        @apply list-none;
    }
    /* ul.nav-link > li {
        @apply inline-block;
    } */
    /* @media (max-width: 768px){
        ul.nav-link{
            display: block;
        }
        ul.nav-link > li {
            @apply block;
        }
    } */
</style>
