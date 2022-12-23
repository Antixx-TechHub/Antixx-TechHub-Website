<template>
    <div class="pricing-area ptb-100">
        <div 
            class="container"
            v-if="pricings !== null"
        >
            <div class="section-title">
                <span class="sub-title">{{pricings.subtitle}}</span>
                <h2>{{pricings.heading}}</h2>
            </div>
            <div class="row align-items-center justify-content-center">
                <div 
                    class="col-lg-4 col-md-6 col-sm-6"
                    v-for="pricing in pricings.pricingCard"
                    :key="pricing.id"
                >
                    <div class="single-pricing-box">
                        <div class="title">
                            <h3>{{pricing.title}}</h3>
                            <p>{{pricing.desc}}</p>
                        </div>
                        <div class="price">
                            ${{pricing.price}} <span>/{{pricing.period}}</span>
                        </div>
                        <router-link to="/contact" class="default-btn">Purchase Plan</router-link>
                        <ul class="features-list">
                            <li
                                v-for="feature in pricing.pricingFeatures"
                                :key="feature.id"
                            >
                                <i :class="feature.icon"></i>
                                {{feature.list}}
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="see-more-pricing color-black">
                        <router-link to="/pricing" class="link-btn">See All Pricing Plan</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape12"><img src="../../assets/images/shape/shape11.png" alt="shape"></div>
        <div class="shape13"><img src="../../assets/images/shape/shape15.png" alt="shape"></div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Pricing',
    data (){
        return {
            pricings: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/pricinghometwo?populate=pricingCard.pricingFeatures')
        const { data: {attributes} } = response.data
        this.pricings = attributes
    },
}
</script>