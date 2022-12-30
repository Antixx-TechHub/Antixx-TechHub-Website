<template>
    <div class="team-area pt-100 pb-70">
        <div class="container">
            <div class="row" v-if="teams !== null">
                <TeamCard 
                v-for="team in teams.singleTeam"
                    :key="team.id"
                />
                <div 
                    class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
                    v-for="team in teams.singleTeam"
                    :key="team.id"
                >
                    <div class="single-team-box">
                        <div class="image">
                            <!-- <img :src="team.img.url" alt="image"> -->
                            <!-- <img :src="team.attributes.img.url" > -->
                            <!-- <div :class="team.class"></div> -->
                        </div>
                        <div class="content">
                            <h3>{{team.title}}</h3>
                            <span>{{team.position}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Team',
    data (){
        return {
            teams: null,
        }
    },
    created: async function (){
        const response = await axios.get('https://strapi.antixxtechhub.com/api/team?populate=*')
        const { data: {attributes} } = response.data
        this.teams = attributes
    },
}
</script>