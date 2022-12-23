<template>
    <div class="features-area ptb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="features !== null"
            >
                <div class="col-lg-6 col-md-12">
                    <div class="features-content">
                        <h2>{{features.heading}}</h2>
                        <p>{{features.desc}}</p>
                        <ul class="features-list">
                            <li
                                v-for="feature in features.featuresList"
                                :key="feature.id"
                            >
                                <div :class="feature.class">
                                    <i :class="feature.icon"></i>
                                </div>
                                <h3>{{feature.title}}</h3>
                                <p>{{feature.shortDesc}}</p>
                            </li>
                        </ul>
                        <div class="btn-box">
                            <router-link to="/app-download" class="default-btn">Start Free Trial</router-link>
                            <router-link to="/features-one" class="link-btn">See All Features</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="features-image text-center">
                        <img :src="features.image.data.attributes.url" alt="app-img" data-aos="fade-up">
                        <div class="shape">
                            <img class="shape3" src="../../assets/images/shape/shape2.png" alt="shape">
                            <img class="shape4" src="../../assets/images/shape/shape3.png" alt="shape">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="bg-shape1">
            <img src="../../assets/images/shape/bg-shape1.png" alt="bg-shape">
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
        const response = await axios.get('http://localhost:1337/api/gettingbestapp?populate=*')
        const { data: {attributes} } = response.data
        this.features = attributes
    },
}
</script>