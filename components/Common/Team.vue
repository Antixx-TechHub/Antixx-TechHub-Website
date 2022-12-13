<template>
    <div class="team-area pt-100 pb-70">
        <div class="container">
            <div class="row">
                <TeamCard 
                    v-if="cards !== []"
                    :teamCard="cards"
                />
            </div>
        </div>
    </div>
</template>

<script>
import TeamCard from '../Common/TeamCard'

export default {
    name: 'Team',
    components: {
        TeamCard
    },
    data(){
        return{
            cards: []
        }
    },

    created: async function(){
        this.cards = await this.$strapi.find('teamcards')
    }
}
</script>