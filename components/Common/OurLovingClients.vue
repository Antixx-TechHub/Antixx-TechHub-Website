<template>
    <div class="our-loving-clients ptb-100 bg-f4f5fe">
        <div class="container">
            <div class="section-title">
                <h2>Our Loving Clients</h2>
            </div>

            <div 
                class="clients-logo-list align-items-center"
                v-if="clients !== []"
            >
                <div 
                    class="single-clients-logo"
                    v-for="client in clients"
                    :key="client.id"
                >
                    <a href="#">
                        <img :src="client.img.url" alt="image">
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OurLovingClients',
    data(){
        return{
            clients: []
        }
    },
    created: async function(){
        this.clients = await this.$strapi.find('lovingclientscards')
    }
}
</script>