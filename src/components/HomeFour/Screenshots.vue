<template>
    <div class="screenshots-area bg-black ptb-100">
        <div 
            class="container"
            v-if="screenshots !== null"
        >
            <div class="section-title">
                <span class="sub-title">{{screenshots.subtitle}}</span>
                <h2>{{screenshots.heding}}</h2>
            </div>
            <div class="screen-swiper-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                >
                    <slide 
                        v-for="slide in screenshots.screenshotsSlides" 
                        :key="slide.id"
                    >
                        <div class="swiper-slide">
                            <img :src="slide.image.data.attributes.url" alt="screenshots">
                        </div>
                    </slide>
                    
                    <template #addons>
                        <navigation>
                            <template #next>
                                <i class='ri-arrow-right-s-line'></i>
                            </template>
                            <template #prev>
                                <i class='ri-arrow-left-s-line'></i>
                            </template>
                        </navigation>
                    </template>
                </carousel>
            </div>
            <div class="free-trial-btn">
                <router-link to="/sign-in" class="default-btn">Start Free Trial</router-link>
            </div>
        </div>
        </div>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue';
import { Carousel, Slide, Navigation  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'Screenshots',
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
        screenshots: null,
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/screenshot?populate=screenshotsSlides.image')
        const { data: {attributes} } = response.data
        this.screenshots = attributes
    },
})
</script>