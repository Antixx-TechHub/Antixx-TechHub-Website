<template>
    <div class="blog-area ptb-100">
        <div class="container">
            <div class="row">
                <BlogCard v-if="posts !== []" :blogPost="posts" />

                <div class="col-lg-12 col-md-12">
                    <div class="pagination-area">
                        <a href="#" class="prev page-numbers"><i class='bx bxs-arrow-to-left'></i></a>
                        <span class="page-numbers current" aria-current="page">1</span>
                        <a href="#" class="page-numbers">2</a>
                        <a href="#" class="page-numbers">3</a>
                        <a href="#" class="page-numbers">4</a>
                        <a href="#" class="next page-numbers"><i class='bx bxs-arrow-to-right'></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogCard from '../Common/BlogCard'

export default {
    name: 'Blog',
    components: {
        BlogCard
    },
    data() {
        return {
            posts: []
        }
    },
    created: async function () {
        this.posts = await this.$strapi.find('blog-cards')
    }
}
</script>