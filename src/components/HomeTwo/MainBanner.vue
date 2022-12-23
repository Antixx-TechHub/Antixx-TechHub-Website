<template>
    <div class="banner-area">
        <div class="container-fluid">
            <div 
                class="row align-items-center m-0"
                v-if="banner !== null"
            >
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="banner-content">
                        <span class="sub-title">{{banner.subtitle}}</span>
                        <h1>{{banner.heading}}</h1>
                        <p>{{banner.desc}}</p>
                        <router-link :to="banner.btnLink" class="default-btn">{{banner.btnText}}</router-link>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12 p-0">
                    <div class="banner-image" data-aos="fade-down" data-aos-duration="2000">
                        <img :src="banner.image.data.attributes.url" alt="image">
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-shape3">
            <img src="../../assets/images/shape/shape2.png" alt="image">
        </div>
        <div class="shape13">
            <img src="../../assets/images/shape/shape15.png" alt="shape">
        </div>
        <div class="banner-shape6">
            <img src="../../assets/images/shape/shape16.png" alt="image">
        </div>
        <div class="banner-shape7">
            <img src="../../assets/images/shape/shape11.png" alt="image">
        </div>
        <div class="banner-shape8">
            <img src="../../assets/images/shape/shape11.png" alt="image">
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
        const response = await axios.get('http://localhost:1337/api/bannerhometwo?populate=*')
        const { data: {attributes} } = response.data
        this.banner = attributes
    },
}
</script>