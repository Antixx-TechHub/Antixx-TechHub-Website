<template>
    <div class="partner-area pt-100 pb-70 bg-f8fbfa">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-3 col-md-12">
                    <div class="partner-title">
                        <h3>Our Trusted Clients:</h3>
                    </div>
                </div>

                <div class="col-lg-9 col-md-12">
                    <div class="partner-slides owl-carousel owl-theme">
                        <carousel :autoplay="true" :loop="true" :paginationEnabled="false"
                            :perPageCustom="[[0, 2], [576, 3], [768, 3], [1200, 4]]" v-if="partners !== null">
                            <slide v-for="slide in partners.partnerSlides" :key="slide.id">
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img :src="slide.image.data.attributes.url" alt="image">
                                    </a>
                                </div>
                            </slide>
                        </carousel>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'OurClients',
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        partners: null,
    }),
    created: async function () {
        const response = await axios.get('https://cms.antixxtechhub.in/api/partner?populate=partnerSlides.image')
        const { data: { attributes } } = response.data
        this.partners = attributes
    },
}
</script>