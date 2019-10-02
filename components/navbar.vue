<template>
    <nav class="w-full fixed z-10 bg-body text-gray-100 overflow-hidden">
        <div class="container mx-auto px-4 py-2 flex flex-wrap justify-between text-gray-400 ">
            <div class="self-center">
                <router-link :to="{ name: 'index', params: {} }" @click="nav = false">
                    <div class="flex flex-row border-gray-900 border rounded overflow-hidden">
                        <div class="py-1 px-2 text-xl border-r-0 font-semibold text-red-500">
                                &lt;/i&gt;
                        </div>
                        <div class=" py-1 px-2 text-xl border-l border-gray-900 md:inline-block">
                            _ISSYAH_ISMAIL
                        </div>
                    </div>
                </router-link>
            </div>
            <div class="block self-center lg:hidden pt-2">
                <button class="hamburger hamburger--minus" @click="toggleNav" :class="{'is-active' : nav}">
                    <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                    </span>
                </button>
            </div>
            <div class="self-center lg:block nav-item w-full block lg:items-center lg:w-auto h-screen lg:h-auto flex" :class="{'active' : nav}">
                <ul class="nav-link text-4xl lg:text-base pl-10 lg:pl-0">
                    <li class="mt-10 lg:mt-0 block lg:inline-block" @click="nav = false" :class="{'text-red-500' : $route.hash == '#readme'}">
                        <nuxt-link to="/#readme" class="hover:text-gray-500 mr-5">
                            About
                        </nuxt-link>
                    </li>
                    <li class="mt-10 lg:mt-0 block lg:inline-block" @click="nav = false">
                        <nuxt-link to="/#works" class="hover:text-gray-500 mr-5" :class="{'text-red-500' : $route.hash == '#works'}">
                            Works
                        </nuxt-link>
                    </li>
                    <li class="mt-10 lg:mt-0 block lg:inline-block" @click="nav = false" :class="{'text-red-500' : $route.name == 'workstation'}">
                        <nuxt-link to="/workstation/" class="hover:text-gray-500 mr-5">Workstation</nuxt-link>
                    </li>
                    <li class="mt-10 lg:mt-0 block lg:inline-block" @click="nav = false" :class="{'text-red-500' : ($route.path.indexOf('articles')!= -1) }">
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
        computed:{
        },
        methods:{
            toggleNav(){
                this.nav = !this.nav;
            }
        },
        mounted(){
        },
        watch:{
        }
    }
</script>
<style>
    .nav-item{
        transition: all ease-in 300ms;
    }
    ul.nav-link{
        @apply list-none;
    }
</style>
