<template>
    <div class="trusted-by">
        <div class="row align-items-center">
            <div class="col-lg-2 col-md-12">
                <span class="title">Trusted by:</span>
            </div>
            <div class="col-lg-10 col-md-12">
                <div class="trusted-by-slides">
                    <carousel
                        :autoplay="5000"
                        :settings='settings'
                        :breakpoints='breakpoints'
                        v-if="trusted !== null"
                    >
                        <slide 
                            v-for="slide in trusted.trustedBySlides"
                            :key="slide.id"
                        >
                            <div class="item">
                                <img :src="slide.image.data.attributes.url" alt="partner">
                            </div>
                        </slide>

                        <template #addons>
                        </template>
                    </carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { defineComponent } from 'vue';
import { Carousel, Slide  } from 'vue3-carousel';

import 'vue3-carousel/dist/carousel.css';

export default defineComponent ({
    name: 'TrustedBy',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        trusted: null,
        breakpoints: {
            0: {
                itemsToShow: 2,
                snapAlign: 'left',
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
                itemsToShow: 3,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 4,
                snapAlign: 'center',
            },
        },
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/trustedby?populate=trustedBySlides.image')
        const { data: {attributes} } = response.data
        this.trusted = attributes
    },
})
</script>