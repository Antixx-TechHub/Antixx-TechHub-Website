<template>
    <div class="free-trial-area pt-100">
        <div class="container">
            <div class="free-trial-inner">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div 
                            class="content"
                            v-if="free !== null"
                        >
                            <span class="sub-title">{{free.subtitle}}</span>
                            <h2>{{free.heading}}</h2>
                            <form class="free-trial-form">
                                <input type="text" class="input-newsletter" placeholder="Enter Your Email Address" name="email">
                                <button type="submit" class="default-btn">Get Started</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-12">
                        <div class="image">
                            <img src="../../assets/images/app/app-img6.png" alt="free-trial">
                        </div>
                    </div>
                </div>
                <div class="shape8"><img src="../../assets/images/shape/shape7.png" alt="shape"></div>
                <div class="shape9"><img src="../../assets/images/shape/shape8.png" alt="shape"></div>
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
    name: 'FreeTrial',
    data (){
        return {
            free: null,
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/freetrial?populate=*')
        const { data: {attributes} } = response.data
        this.free = attributes
    },
}
</script>