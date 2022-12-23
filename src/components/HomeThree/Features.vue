<template>
    <div class="features-area pt-100 pb-75">
        <div class="container">
            <ul 
                class="features-boxes-list"
                v-if="features !== null"
            >
                <li
                    v-for="feature in features.singleFeatures"
                    :key="feature.id"
                >
                    <div class="features-list-box">
                        <div :class="feature.class">
                            <i :class="feature.icon"></i>
                        </div>
                        <h3>{{feature.title}}</h3>
                    </div>
                </li>
            </ul>
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
        const response = await axios.get('http://localhost:1337/api/featurehomethree?populate=*')
        const { data: {attributes} } = response.data
        this.features = attributes
    },
}
</script>