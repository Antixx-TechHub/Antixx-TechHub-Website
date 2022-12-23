<template>
    <div class="app-progress-area pb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="progress !== null"
            >
                <div class="col-lg-6 col-md-12">
                    <div class="app-progress-animation-image">
                        <img src="../../assets/images/app-progress/app-progress1.png" alt="app-progress" data-aos="fade-down" data-aos-duration="1000">
                        <img src="../../assets/images/app-progress/app-progress2.png" alt="app-progress" data-aos="fade-right" data-aos-duration="1000">
                        <img src="../../assets/images/app-progress/app-progress3.png" alt="app-progress" data-aos="fade-left" data-aos-duration="1000">
                        <img src="../../assets/images/app-progress/app-progress4.png" alt="app-progress" data-aos="fade-up" data-aos-duration="1000">
                        <img :src="progress.imageTwo.data.attributes.url" class="main-image" alt="app-progress">
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