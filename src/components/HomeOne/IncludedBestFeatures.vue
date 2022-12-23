<template>
    <div class="features-area ptb-100 bg-F7F7FF">
        <div 
            class="container"
            v-if="features !== null"
        >
            <div class="section-title">
                <span class="sub-title">{{features.subtitle}}</span>
                <h2>{{features.heading}}</h2>
            </div>
            <div class="row justify-content-center">
                <div 
                    class="col-xl-4 col-lg-6 col-sm-6 col-md-6"
                    v-for="feature in features.singleFeatures"
                    :key="feature.id"
                >
                    <div class="single-features-item">
                        <div :class="feature.class">
                            <i :class="feature.icon"></i>
                        </div>
                        <h3>{{feature.title}}</h3>
                        <p>{{feature.shortDesc}}</p>
                    </div>
                </div>
                <div class="col-xl-12 col-lg-12 col-sm-12 col-md-12">
                    <div class="view-more-box">
                        <router-link :to="features.btnLink" class="default-btn">
                            {{features.btnText}}
                        </router-link>
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
        const response = await axios.get('http://localhost:1337/api/includedbestfeature?populate=*')
        const { data: {attributes} } = response.data
        this.features = attributes
    },
}
</script>