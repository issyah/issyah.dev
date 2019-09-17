<template>
    <!-- <div>
        <h1>Using Github Pages</h1>
        <span class="created-date">Sep 16 2019</span>
        <template lang="md">
            <img src="~/assets/icons/github-pages.svg" alt="Github Pages"/>

            So you are about to embark on a whole new journey into the industry. You have finally graduated but you have no experience. You want to spice up your resume but can't afford to buy a hosting service and domain to host your personal website. How do you even show your skills?
        </template>

    </div> -->
    <vue-article
        title="Using Github Pages"
        created-date="Sep 16 2019">
        fjldksjflsajdlskjf
    </vue-article>
</template>
<script>
    import VueArticle from '~/components/article.vue';
    export default {
        components:{
            VueArticle,
        },
        layout: 'article',
        head: {
            title: 'Using Github Pages'
        }
    }
</script>
