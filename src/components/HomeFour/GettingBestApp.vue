<template>
    <div class="overview-area">
        <div class="container-fluid">
            <div 
                class="row m-0"
                v-if="overview !== null"
            >
                <div class="col-xl-6 col-lg-12 col-md-12 p-0">
                    <div class="overview-content">
                        <h2>{{overview.heading}}</h2>
                        <p>{{overview.desc}}</p>
                        <ul class="features-list">
                            <li
                                v-for="feature in overview.featuresList"
                                :key="feature.id"
                            >
                                <div class="icon">
                                    <i :class="feature.icon"></i>
                                </div>
                                <h3>{{feature.title}}</h3>
                                <p>{{feature.shortDesc}}</p>
                            </li>
                        </ul>
                        <div class="btn-box">
                            <router-link to="/sign-in" class="default-btn">Start Free Trial</router-link>
                            <router-link to="/features-two" class="link-btn">See All Features</router-link>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-12 col-md-12 p-0">
                    <div class="overview-image bg2">
                        <img :src="overview.imageTwo.data.attributes.url" alt="overview">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'GettingBestApp',
    data (){
        return {
            overview: null
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/gettingbestapphomethree?populate=*')
        const { data: {attributes} } = response.data
        this.overview = attributes
    },
}
</script>