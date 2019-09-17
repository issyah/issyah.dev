<template>
    <div class="article">
        <h1>{{this.attributes.title}}</h1>
        <div v-html="this.html">
            
        </div>
        <!-- <div class="content" v-html="post.html"></div> -->
    </div>
</template>
<script>
    export default {
        layout: 'article',
        async asyncData({params}){
            try{
                let article = await import(`~/contents/${params.slug}.md`);
                return {
                    attributes: article.attributes,
                    html: article.html
                }
            } catch(err){
                return false
            }
        }
    }
</script>
