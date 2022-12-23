<template>
    <div class="banner-wrapper-area">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="banner !== null"
            >
                <div class="col-lg-5 col-md-12">
                    <div class="banner-wrapper-content">
                        <span class="sub-title">{{banner.subtitle}}</span>
                        <h1>{{banner.heading}}</h1>
                        <p>{{banner.desc}}</p>
                        <router-link :to="banner.btnLink" class="default-btn">{{banner.btnText}}</router-link>
                    </div>
                </div>
                <div class="col-lg-7 col-md-12">
                    <div class="banner-wrapper-image">
                        <img :src="banner.img1.data.attributes.url" alt="banner-img">
                        <img :src="banner.img2.data.attributes.url" data-aos="fade-left" alt="banner-img">
                    </div>
                </div>
            </div>
        </div>
        <div class="shape13">
            <img src="../../assets/images/shape/shape15.png" alt="shape">
        </div>
        <div class="shape14">
            <img src="../../assets/images/shape/shape17.png" alt="shape">
        </div>
        <div class="shape15">
            <img src="../../assets/images/shape/shape18.png" alt="shape">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'MainBanner',
    data (){
        return {
            banner: null,
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/bannerhomethree?populate=*')
        const { data: {attributes} } = response.data
        this.banner = attributes
    },
}
</script>