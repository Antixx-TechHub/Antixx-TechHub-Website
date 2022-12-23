<template>
    <div class="features-area pb-100">
        <div class="container">
            <div class="features-inner">
                <div 
                    class="row justify-content-center"
                    v-if="features !== null"
                >
                    <div 
                        class="col-xl-3 col-lg-3 col-sm-6 col-md-3 col-6"
                        v-for="feature in features.singleFeatures"
                        :key="feature.id"
                    >
                        <div class="features-box">
                            <div :class="feature.class">
                                <i :class="feature.icon"></i>
                            </div>
                            <h3>{{feature.title}}</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Features',
    data (){
        return {
            features: null,
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/feature?populate=*')
        const { data: {attributes} } = response.data
        this.features = attributes
    },
}
</script>