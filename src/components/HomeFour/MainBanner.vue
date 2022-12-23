<template>
    <div class="main-banner">
        <div class="container">
            <div 
                class="content"
                v-if="banner !== null"
            >
                <span class="sub-title">{{banner.subtitle}}</span>
                <h1>{{banner.heading}}</h1>
                <router-link :to="banner.btnLink" class="default-btn">{{banner.btnText}}</router-link>
                <img :src="banner.image.data.attributes.url" alt="image">
            </div>
        </div>
        <div class="divider"></div>
        <div class="banner-shape3">
            <img src="../../assets/images/shape/shape2.png" alt="image">
        </div>
        <div class="banner-shape8">
            <img src="../../assets/images/shape/shape11.png" alt="image">
        </div>
        <div class="banner-shape7">
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
        const response = await axios.get('http://localhost:1337/api/bannerhomefour?populate=*')
        const { data: {attributes} } = response.data
        this.banner = attributes
    },
}
</script>