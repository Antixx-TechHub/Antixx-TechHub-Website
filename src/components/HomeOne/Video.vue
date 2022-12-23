<template>
    <div v-if="video">
        <div class="video-area">
            <div class="container">
                <div class="video-box">
                    <img :src="video.image.data.attributes.url" alt="video-bg1">
                    <div 
                        class="video-btn"
                        v-on:click="isPopupMethod(isPopup)"
                        style="cursor: pointer"
                    >
                        <i class="ri-play-line"></i>
                    </div>
                    <div class="shape">
                        <img class="shape1" src="../../assets/images/shape/shape1.png" alt="shape1">
                        <img class="shape2" src="../../assets/images/shape/shape2.png" alt="shape2">
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