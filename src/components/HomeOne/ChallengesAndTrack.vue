<template>
    <div class="app-progress-area ptb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="progress !== null"
            >
                <div class="col-lg-6 col-md-12">
                    <div class="app-progress-image text-center">
                        <img :src="progress.image.data.attributes.url" alt="app-img">
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="app-progress-content">
                        <span class="sub-title">{{progress.subtitle}}</span>
                        <h2>{{progress.heading}}</h2>
                        <p>{{progress.descriptionOne}}</p>
                        <p>{{progress.descriptionTwo}}</p>
                        <router-link :to="progress.btnLink" class="default-btn">{{progress.btnText}}</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'ChallengesAndTrack',
    data (){
        return {
            progress: null,
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/challengesandtrack?populate=*')
        const { data: {attributes} } = response.data
        this.progress = attributes
    },
}
</script>