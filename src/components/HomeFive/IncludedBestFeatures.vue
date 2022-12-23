<template>
    <div class="features-area pb-75">
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
                    class="col-lg-4 col-sm-6 col-md-6"
                    v-for="feature in features.singleFeatures"
                    :key="feature.id"
                >
                    <div class="features-item with-border">
                        <div :class="feature.class">
                            <i :class="feature.icon"></i>
                        </div>
                        <h3>{{feature.title}}</h3>
                        <p>{{feature.shortDesc}}</p>
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