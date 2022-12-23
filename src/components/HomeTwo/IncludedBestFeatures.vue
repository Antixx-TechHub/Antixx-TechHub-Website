<template>
    <div class="features-area pb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="features !== null"
            >
                <div class="col-lg-6 col-md-12">
                    <div class="features-content">
                        <span class="sub-title">{{features.subtitle}}</span>
                        <h2>{{features.heading}}</h2>
                        <p>{{features.descriptionOne}}</p>
                        <p>{{features.descriptionTwo}}</p>
                        <div class="btn-box">
                            <router-link to="/pricing" class="default-btn">Start Free Trial</router-link>
                            <router-link to="/features-two" class="link-btn">See All Features</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="features-lists">
                        <ul>
                            <li
                                v-for="feature in features.singleFeatures"
                                :key="feature.id"
                            >
                                <div :class="feature.class">
                                    <i :class="feature.icon"></i>
                                </div>
                                <h3>{{feature.title}}</h3>
                                <p>{{feature.shortDesc}}</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'IncludedBestFeatures',
    data (){
        return {
            features: null,
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/includedbestfeaturehometwo?populate=*')
        const { data: {attributes} } = response.data
        this.features = attributes
    },
}
</script>