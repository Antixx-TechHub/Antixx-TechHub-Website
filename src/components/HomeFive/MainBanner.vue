<template>
    <div class="gradient-banner-area">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="banner !== null"
            >
                <div class="col-lg-6 col-md-12">
                    <div class="gradient-banner-content">
                        <h1>{{banner.heading}}</h1>
                        <p>{{banner.desc}}</p>
                        <form>
                            <input type="text" class="input-newsletter" placeholder="Enter Your Email Address" name="email">
                            <button type="submit" class="default-btn">Get Started</button>
                        </form>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="gradient-banner-image" data-aos="fade-up">
                        <img :src="banner.image.data.attributes.url" alt="banner-img">
                    </div>
                </div>
            </div>
        </div>
        <div class="banner-shape1"><img src="../../assets/images/shape/shape9.png" alt="image"></div>
        <div class="banner-shape2"><img src="../../assets/images/shape/shape7.png" alt="image"></div>
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
        const response = await axios.get('http://localhost:1337/api/bannerhomefive?populate=*')
        const { data: {attributes} } = response.data
        this.banner = attributes
    },
}
</script>