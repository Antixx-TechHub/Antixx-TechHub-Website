<template>
    <div class="screenshots-area pb-100">
        <div 
            class="container"
            v-if="screenshots !== null"
        >
            <div class="section-title">
                <span class="sub-title">{{screenshots.subtitle}}</span>
                <h2>{{screenshots.heding}}</h2>
            </div>
            <div class="screenshots-swiper-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                    :wrap-around="true"
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
        breakpoints: {
            0: {
                itemsToShow: 1,
                snapAlign: 'left',
			},
            576: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 2.1,
                snapAlign: 'center',
            },
        },
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/screenshot?populate=screenshotsSlides.image')
        const { data: {attributes} } = response.data
        this.screenshots = attributes
    },
})
</script>