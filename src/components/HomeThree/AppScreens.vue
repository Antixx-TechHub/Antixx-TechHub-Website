<template>
    <div class="screenshots-area bg-black-color ptb-100">
        <div 
            class="container"
            v-if="screenshots !== null"
        >>
            <div class="section-title color-white">
                <span class="sub-title">{{screenshots.subtitle}}</span>
                <h2>{{screenshots.heading}}</h2>
            </div>
            <div class="screenshots-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                >
                    <slide 
                        v-for="screenshot in screenshots.singleScreenshot"
                        :key="screenshot.id"
                    >
                        <div class="single-screenshot-item">
                            <img :src="screenshot.image.data.attributes.url" alt="screenshots">
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
    name: 'AppScreens',
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
                snapAlign: 'center',
			},
            576: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            768: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            992: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 5,
                snapAlign: 'center',
            },
        },
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/appscreen?populate=singleScreenshot.image')
        const { data: {attributes} } = response.data
        this.screenshots = attributes
    },
})
</script>