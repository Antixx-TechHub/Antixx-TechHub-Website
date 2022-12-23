<template>
    <div class="team-area pt-100 pb-75">
        <div 
            class="container"
            v-if="teams !== null"
        >
            <div class="section-title">
                <span class="sub-title">{{teams.subtitle}}</span>
                <h2>{{teams.heading}}</h2>
            </div>
            <div class="row justify-content-center">
                <div 
                    class="col-xl-2 col-lg-3 col-md-4 col-sm-4 col-6"
                    v-for="team in teams.singleTeam.slice(0, 6)"
                    :key="team.id"
                >
                    <div class="single-team-box">
                        <div class="image">
                            <div :class="team.class"></div>
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
    name: 'OurTeam',
    data (){
        return {
            teams: null,
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/team?populate=*')
        const { data: {attributes} } = response.data
        this.teams = attributes
    },
}
</script>