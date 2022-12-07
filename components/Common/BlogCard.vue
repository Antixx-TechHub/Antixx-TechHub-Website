<template>
    <div class="row">
        <div 
            class="col-lg-4 col-md-6 justify-content-center"
            v-for="blog in blogPost"
            :key="blog.id"
        >
            <div class="single-blog-post">
                <div class="post-image">
                    <NuxtLink :to="blog.slug">
                        <img :src="blog.img.url" alt="image">
                    </NuxtLink>

                    <div class="date">
                        <i class='bx bx-calendar'></i> 
                        {{blog.date}}
                    </div>
                </div>

                <div class="post-content">
                    <h3>
                        <NuxtLink :to="blog.slug">
                            {{blog.title}}
                        </NuxtLink>
                    </h3>

                    <div class="post-info">
                        <div class="post-by">
                            <img :src="blog.postImg.url" alt="image">

                            <h6>{{blog.name}}</h6>
                        </div>

                        <div class="details-btn">
                            <NuxtLink :to="blog.slug">
                                <i class="bx bx-right-arrow-alt"></i>
                            </NuxtLink>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogCard',
    props: ['blogPost']
}
</script>