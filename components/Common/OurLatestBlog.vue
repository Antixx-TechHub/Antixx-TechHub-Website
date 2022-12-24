<template>
    <div class="blog-area pt-100 pb-75">
        <div class="container">
            <div class="section-title-with-large-box">
                <span>Latest Blog</span>
                <h2>Check our Latest & Trending Blogs</h2>
            </div>
            <div class="row justify-content-center" v-if="blogs !== []">
                <div class="col-lg-4 col-md-6 justify-content-center" v-for="blog in blogs.slice(0, 3)" :key="blog.id">
                    <div class="single-blog-post">
                        <div class="post-image">

                            <NuxtLink :to="'/blog-details/' + blog.attributes.slug" class="d-block">
                                <img :src="blog.attributes.image.data.attributes.url" alt="blog">
                            </NuxtLink>

                            <div class="date">
                                <i class='bx bx-calendar'></i>
                                {{ blog.attributes.date }}
                            </div>
                        </div>

                        <div class="post-content">
                            <ul class="meta">
                                <!-- <li><i class="ri-time-line"></i> {{ blog.attributes.date }}</li> -->
                                <!-- <li><i class="ri-message-2-line"></i> <NuxtLink to="/blog-details">(0) Comment</NuxtLink></li> -->
                            </ul>
                            <h3>
                                <NuxtLink :to="'/blog-details/' + blog.attributes.slug">
                                    {{ blog.attributes.title }}
                                </NuxtLink>
                            </h3>
                        </div>
                        <div class="post-info">
                            <div class="post-by">
                                <h6>{{ blog.attributes.name }}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'Blog',
    data() {
        return {
            blogs: []
        }
    },
    created: async function () {
        const response = await axios.get('http://localhost:1337/api/blogs?populate=*')
        this.blogs = response.data.data
    },
}
</script>