<template>
    <div class="blog-area pt-100 pb-70 bg-f4e9da">
        <div class="container">
            <div class="section-title text-left">
                <span class="sub-title">Our News</span>
                <h2>Check Out Our Latest Blog</h2>
            </div>
            <div class="row">
                <BlogCard v-if="posts !== []" :blogPost="posts" />s

                <div class="col-lg-12 col-md-12">
                    <div class="blog-notes">
                        <p>Insights to help you do what you do better, faster and more profitably. <NuxtLink
                                to="/blogs">Read Full Blog</NuxtLink>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import BlogCard from '../Common/BlogCard'

export default {
    name: 'OurLatestBlog',
    components: {
        BlogCard
    },
    data() {
        return {
            posts: []
        }
    },
    created: async function () {
        this.posts = await this.$strapi.find('blog-cards', '_limit=3')
    }
}

</script>