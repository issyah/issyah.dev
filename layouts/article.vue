<template>
    <div class="bg-body text-gray-100 leading-normal">
        <navbar></navbar>
        <div class="bg-white text-gray-800">
            <div class="w-full md:w-10/12 lg:w-1/2 p-4 mx-auto min-h-screen pt-8">
                <nuxt/>
            </div>
        </div>

    </div>
</template>
<script>
    import Navbar from '~/components/navbar.vue';
    export default {
        components: {
            Navbar,
        },
        mounted(){
            console.log(this);
        }
    }
</script>
<style>
    h1{
        @apply text-6xl font-medium;
    }
    h2{
        @apply text-4xl font-medium;
    }
    h3{
        @apply text-2xl font-medium;
    }
    p{
        @apply text-lg mt-4 leading-relaxed tracking-wide;
    }
    .created-date{
        @apply text-gray-500
    }
    img{
        @apply h-20 w-auto mx-auto;
    }
</style>
