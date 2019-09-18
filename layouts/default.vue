<template>
    <div class="bg-body text-gray-100 leading normal overflow-hidden">
        <navbar></navbar>
        <nuxt />
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
