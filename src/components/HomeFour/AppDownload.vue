<template>
    <div class="app-download-area pb-100">
        <div class="container">
            <div class="app-download-inner bg-gradient-color">
                <div 
                    class="row align-items-center"
                    v-if="download !== null"
                >
                    <div class="col-lg-6 col-md-12">
                        <div class="app-download-content">
                            <span class="sub-title">{{download.subtitle}}</span>
                            <h2>{{download.heading}}</h2>
                            <div class="btn-box">
                                <a href="#" class="playstore-btn" target="_blank">
                                    <img src="../../assets/images/play-store.png" alt="image">
                                    Get It On
                                    <span>Google Play</span>
                                </a>
                                <a href="#" class="applestore-btn" target="_blank">
                                    <img src="../../assets/images/apple-store.png" alt="image">
                                    Download on the
                                    <span>Apple Store</span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="app-download-image" data-aos="fade-up">
                            <img :src="download.imageThree.data.attributes.url" alt="app-img">
                        </div>
                    </div>
                </div>
                <div class="shape5"><img src="../../assets/images/shape/shape4.png" alt="shape4"></div>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'AppDownload',
    data (){
        return {
            download: null,
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/appdownload?populate=*')
        const { data: {attributes} } = response.data
        this.download = attributes
    },
}
</script>