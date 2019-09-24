<template>
    <div class="bg-body text-gray-100 leading normal overflow-hidden">
        <navbar></navbar>
        <div class="mt-12 lg:mt-0">
            <nuxt />
        </div>
    </div>
</template>
<script>
import Navbar from '~/components/navbar.vue';
export default {
    components: {
        Navbar,
    },
}
</script>
