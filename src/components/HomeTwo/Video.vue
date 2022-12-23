<template>
    <div
        v-if="video !== null"
    >
        <div class="video-area ptb-100">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 col-md-12">
                        <div class="intro-video-content">
                            <span class="sub-title">{{video.subtitle}}</span>
                            <h2>{{video.heading}}</h2>
                            <p>{{video.desc}}</p>
                            <router-link to="/contact" class="default-btn">Get Started</router-link>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="intro-video-box">
                            <img :src="video.imageTwo.data.attributes.url" alt="video-img">
                            <div 
                                class="video-btn"
                                v-on:click="isPopupMethod(isPopup)"
                                style="cursor: pointer"
                            >
                                <i class="ri-play-line"></i>
                            </div>
                            <div class="shape">
                                <img src="../../assets/images/shape/shape13.png" class="shape10" data-aos="fade-left" alt="image">
                                <img src="../../assets/images/shape/shape14.png" class="shape11" data-aos="fade-right" alt="image">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div 
            class="popup-video" 
            v-if="isPopup"
        >
            <div class="d-table">
                <div class="d-table-cell">
                    <div 
                        class="popup-overlay-close"
                        v-on:click="isPopupMethod(isPopup)"
                    >
                        <div class="popup-overlay-close-line"></div>
                        <div class="popup-overlay-close-line"></div>
                    </div>
                    <div class="play-video">
                        <iframe :src="video.videoLink"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Video',
    data (){
        return {
            video: null,
            isPopup: false
        }
    },
    methods: {
        isPopupMethod(isPopup){
            return this.isPopup = !isPopup
        },
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/video?populate=*')
        const { data: {attributes} } = response.data
        this.video = attributes
    },
}
</script>