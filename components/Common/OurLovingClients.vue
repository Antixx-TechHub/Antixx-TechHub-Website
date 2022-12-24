<template>
    <div class="our-loving-clients ptb-100 bg-f4f5fe">
        <div class="container">
            <div class="section-title">
                <h2>Our Loving Clients</h2>
            </div>

            <div 
                class="clients-logo-list align-items-center"
                v-if="partners !== null"
            >
                <div 
                    class="single-clients-logo"
                    v-for="slide in partners.partnerSlides" :key="slide.id"
                >
                    <a href="#">
                        <img :src="slide.image.data.attributes.url" alt="image">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'OurLovingClients',
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        partners: null,
    }),
    created: async function () {
        const response = await axios.get('http://localhost:1337/api/partner?populate=partnerSlides.image')
        const { data: { attributes } } = response.data
        this.partners = attributes
    },
}
</script>