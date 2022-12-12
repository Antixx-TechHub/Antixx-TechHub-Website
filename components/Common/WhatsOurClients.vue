<template>
    <div class="is-testimonials-area ptb-100">
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
                    v-if="feedbacks !== []"
                >
                    <slide v-for="feedback in feedbacks" :key="feedback.id" >
                        <div class="is-testimonials-card">
                            <p>{{ feedback.shortDesc }}</p>

                            <div class="client-info d-flex align-items-center">
                                <img :src="feedback.img.url" alt="image">

                                <div class="title">
                                    <h3>{{ feedback.name }}</h3>
                                    <span>{{ feedback.position }}</span>
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
export default {
    name: 'WhatsOurClients',
    data() {
        return {
            feedbacks: []
        }
    },

    created: async function () {
        this.feedbacks = await this.$strapi.find('feedbackcards')
    }
}
</script>