<template>
    <div class="about-area pb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="features !== null"
            >
                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <span class="sub-title">{{features.subtitle}}</span>
                        <h2>{{features.heading}}</h2>
                        <p>{{features.desc}}</p>
                        <div 
                            class="features-text"
                            v-for="feature in features.featuresText"
                            :key="feature.id"
                        >
                            <h6>{{feature.title}}</h6>
                            <p>{{feature.shortDesc}}</p>
                        </div>
                        <div class="btn-box">
                            <router-link to="/sign-up" class="default-btn">Start Free Trial</router-link>
                            <router-link to="/features-one" class="link-btn">See All Features</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="about-image">
                        <img :src="features.image.data.attributes.url" data-aos="fade-up" alt="about">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'GettingBestApp',
    data: () => ({
        features: null,
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/gettingbestapphomefive?populate=*')
        const { data: {attributes} } = response.data
        this.features = attributes
    },
}
</script>