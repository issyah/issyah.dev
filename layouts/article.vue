<template>
    <div class="bg-body text-gray-100 leading-normal">
        <navbar></navbar>
        <nuxt/>
    </div>
</template>
<script>
    import Navbar from '~/components/navbar.vue';
    export default {
        components: {
            Navbar,
        },
        mounted(){
        }
    }
</script>
<style>
    .article h1{
        @apply text-6xl font-medium;
    }
    .article h2{
        @apply text-4xl font-medium;
    }
    .article h3{
        @apply text-2xl font-medium;
    }
    .article p{
        @apply text-lg mt-4 leading-relaxed tracking-wide;
    }
    .article .created-date{
        @apply text-gray-500
    }
    .article img{
        @apply h-auto w-full mx-auto;
    }
</style>
