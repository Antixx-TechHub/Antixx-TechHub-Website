<template>
    <div class="funfacts-area pb-75">
        <div class="container">
            <div 
                class="row justify-content-center"
                v-if="funfacts !== null"
            >
                <div 
                    class="col-lg-3 col-sm-6 col-md-6"
                    v-for="funfact in funfacts.funfactsBox"
                    :key="funfact.id"
                >
                    <div :class="funfact.class">
                        <div class="icon">
                            <i :class="funfact.icon"></i>
                        </div>
                        <p>{{funfact.title}}</p>
                        <h3>{{funfact.number}}</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Funfacts',
    data: () => ({
        funfacts: null,
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/funfact?populate=*')
        const { data: {attributes} } = response.data
        this.funfacts = attributes
    },
}
</script>