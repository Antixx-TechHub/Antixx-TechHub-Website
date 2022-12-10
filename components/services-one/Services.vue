<template>
    <div class="features-area pt-100 pb-70 bg-f4f6fc">
        <div class="container">
            <div v-if="features !== []" class="row">
                <div 
                    class="col-lg-4 col-md-6"
                    v-for="feature in features"
                    :key="feature.id"
                >
                    <div class="features-box-one">
                        <div :class="feature.className">
                            <i :class='feature.icon'></i>
                        </div>
                        <h3>{{feature.title}}</h3>
                        <p>{{feature.shortDesc}}</p>

                        <NuxtLink 
                            :to="`/services/${feature.slug}`" 
                            class="read-more"
                        >
                            Read more 
                            <i class='bx bx-right-arrow-alt'></i>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services',
    data(){
        return{
            features: []
        }
    },
    created: async function(){
        this.features = await this.$strapi.find('servicescards')
    }
}
</script>