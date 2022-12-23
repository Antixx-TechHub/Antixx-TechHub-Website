<template>
    <div class="main-banner-area">
        <div class="container">
            <div 
                class="row"
                v-if="banner !== null"
            >
                <div class="col-lg-8 col-md-12">
                    <div class="main-banner-content">
                        <div class="content">
                            <span class="sub-title">{{banner.subtitle}}</span>
                            <h1>{{banner.heading}}</h1>
                            <router-link :to="banner.btnLink" class="default-btn">
                                {{banner.btnText}}
                            </router-link>
                        </div>
                        <TrustedBy />
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <div class="main-banner-image" data-aos="fade-up">
                        <img :src="banner.image.data.attributes.url" alt="image">
                    </div>
                </div>
            </div>
        </div>
        <div class="shape-overlay"></div>
        <div class="banner-shape1"><img src="../../assets/images/shape/shape9.png" alt="image"></div>
        <div class="banner-shape2"><img src="../../assets/images/shape/shape7.png" alt="image"></div>
        <div class="banner-shape3"><img src="../../assets/images/shape/shape2.png" alt="image"></div>
        <div class="banner-shape4"><img src="../../assets/images/shape/shape10.png" alt="image"></div>
        <div class="banner-shape5"><img src="../../assets/images/shape/shape11.png" alt="image"></div>
    </div>
</template>

<script>
import axios from 'axios'
import TrustedBy from '../HomeOne/TrustedBy'

export default {
    name: 'MainBanner',
    components: {
        TrustedBy
    },
    data (){
        return {
            banner: null,
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/bannerhomeone?populate=*')
        const { data: {attributes} } = response.data
        this.banner = attributes
    },
}
</script>