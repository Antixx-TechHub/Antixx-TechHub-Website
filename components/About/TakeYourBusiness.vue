<template>
    <div class="about-area ptb-100">
        <div class="container">
            <div 
                class="row align-items-center"
                v-if="about !== null"
            >
                <div class="col-lg-6 col-md-12">
                    <div class="about-content">
                        <span class="sub-title">{{about.subTitle}}</span>
                        <h2>{{about.heading}}</h2>
                        <p
                            v-for="desc in about.description"
                            :key="desc"
                        >
                            {{desc.shortDesc}}
                        </p>
                    </div>
                </div>

                <div class="col-lg-6 col-md-12">
                    <div class="about-image">
                        <img :src="about.img.url" alt="image">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TakeYourBusiness',
    data(){
        return{
            about: null
        }
    },
    created: async function(){
        this.about = await this.$strapi.find('takeyourbusiness')
    }
}
</script>