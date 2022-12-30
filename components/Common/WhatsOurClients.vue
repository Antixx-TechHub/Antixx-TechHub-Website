<template>
    <div class="is-testimonials-area pb-70">
        <div class="container">
            <div class="section-title-with-large-box">
                <span>Testimonials</span>
                <h2>Our Customer Valuable Feedback</h2>
            </div>

            <div class="is-testimonials-slides">
                <carousel
                    :autoplay = true
                    :loop = true
                    :paginationEnabled = false
                    :perPageCustom = "[[0, 1], [768, 1], [1024, 3], [1200,3]]"
                    v-if="feedbacks !== null"
                >
                    <slide v-for="slide in feedbacks.singleFeedbacks" 
                        :key="slide.id" >
                        <div class="is-testimonials-card">
                            <p>{{ slide.desc }}</p>

                            <div class="client-info d-flex align-items-center">
                                <img :src="slide.image.data.attributes.url" alt="image">

                                <div class="title">
                                    <h3>{{ slide.name }}</h3>
                                    <span>{{ slide.position }}</span>
                                </div>
                            </div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </div>
    </div>
</template>

<script>

import axios from 'axios'

export default {
    name: 'WhatsOurClients',
    data: () => ({
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        feedbacks: null,
    }),
    created: async function (){
        const response = await axios.get('https://strapi.antixxtechhub.com/api/customerreview?populate=singleFeedbacks.image')
        const { data: {attributes} } = response.data
        this.feedbacks = attributes
    },
}
</script>