<template>
    <div class="feedback-area pt-100">
        <div 
            class="container"
            v-if="feedbacks !== null"
        >
            <div class="section-title">
                <span class="sub-title">{{feedbacks.subtitle}}</span>
                <h2>{{feedbacks.heading}}</h2>
            </div>
            <div class="feedback-swiper-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                >
                    <slide 
                        v-for="slide in feedbacks.singleFeedbacks " 
                        :key="slide.id"
                    >
                        <div class="single-feedback-item">
                            <div class="client-info">
                                <img :src="slide.image.data.attributes.url" alt="user">
                                <div class="title">
                                    <h3>{{slide.name}}</h3>
                                    <span>{{slide.position}}</span>
                                </div>
                            </div>
                            <p>{{slide.desc}}</p>
                            <div class="rating">
                                <h5>{{slide.category}}</h5>
                                <div>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                    <i class="ri-star-fill"></i>
                                </div>
                            </div>
                        </div>
                    </slide>

                    <template #addons>
                        <navigation>
                            <template #next data-aos="fade-right">
                                <i class='ri-arrow-right-s-line'></i>
                            </template>
                            <template #prev data-aos="fade-left">
                                <i class='ri-arrow-left-s-line'></i>
                            </template>
                        </navigation>
                    </template>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'CustomerReviews',
    components: {
        Carousel,
        Slide,
        Navigation,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        feedbacks: null,
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/customerreviewhometwo?populate=singleFeedbacks.image')
        const { data: {attributes} } = response.data
        this.feedbacks = attributes
    },
})
</script>