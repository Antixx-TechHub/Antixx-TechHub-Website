<template>
    <div class="funfacts-inner">
        <div v-if="funfacts !== []" class="row">
            <div 
                class="col-lg-3 col-6 col-sm-6"
                v-for="funfact in funfacts"
                :key="funfact.id"
            >
                <div class="single-funfacts funfact-style-two">
                    <i :class='funfact.icon'></i>
                    <h3>{{funfact.number}}</h3>
                    <p>{{funfact.desc}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Funfacts',
    data(){
        return{
            funfacts: []
        }
    },

    created: async function(){
        this.funfacts = await this.$strapi.find('funfactscards')
    }
}
</script>