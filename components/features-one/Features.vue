<template>
    <div class="features-area pt-100 pb-70 bg-f4f6fc">
        <div class="container">
            <div v-if="features !== []" class="row">
                <div 
                    class="col-lg-4 col-md-6 col-sm-6"
                    v-for="feature in features"
                    :key="feature.id"
                >
                    <div class="single-features-box">
                        <div class="icon">
                            <i :class='feature.icon'></i>
                        </div>
                        <h3>{{feature.title}}</h3>
                        <p>{{feature.shortDesc}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Features',
    data(){
        return{
            features: []
        }
    },
    created: async function(){
        this.features = await this.$strapi.find('featurespages')
    }
}
</script>