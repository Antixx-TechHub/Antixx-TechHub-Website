<template>
    <div class="partner-area ptb-100">
        <div class="container">
            <div class="partner-slides">
                <carousel
                    :autoplay="5000"
                    :settings='settings'
                    :breakpoints='breakpoints'
                    v-if="partners !== null"
                >
                    <slide 
                        v-for="slide in partners.partnerSlides" 
                        :key="slide.id"
                    >
                        <div class="partner-item">
                            <img :src="slide.image.data.attributes.url" alt="image">
                        </div>
                    </slide>
                </carousel>
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
    name: 'Partner',
    components: {
        Carousel,
        Slide,
    },
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        partners: null,
        breakpoints: {
            0: {
                itemsToShow: 2,
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
                itemsToShow: 5,
                snapAlign: 'center',
            },
            1200: {
                itemsToShow: 7,
                snapAlign: 'center',
            },
        },
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/partner?populate=partnerSlides.image')
        const { data: {attributes} } = response.data
        this.partners = attributes
    },
})
</script>