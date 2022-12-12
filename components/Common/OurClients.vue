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
                        <carousel
                            :autoplay = "true"
                            :loop = "true"
                            :paginationEnabled = "false"
                            :perPageCustom = "[[0, 2], [576, 3], [768, 3], [1200, 4]]"
                            v-if="partners !== []"
                        >
                            <slide
                                v-for="partner in partners"
                                :key="partner.id"
                            >
                                <div class="single-partner-item">
                                    <a href="#">
                                        <img :src="partner.img.url" alt="image">
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
export default {
    name: 'OurClients',
    data(){
        return{
            partners: []
        }
    },
    created: async function(){
        this.partners = await this.$strapi.find('partnercards')
    }
}
</script>