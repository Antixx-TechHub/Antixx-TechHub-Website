<template>
    <div class="row">
        <div 
            class="col-lg-3 col-sm-6"
            v-for="team in teamCard"
            :key="team.id"
        >
            <div class="single-team-box">
                <div class="image">
                    <img :src="team.img.url" alt="image">

                    <!-- <ul class="social">
                        <li><a href="https://www.facebook.com/" target="_blank"><i class="bx bxl-facebook"></i></a></li>
                        <li><a href="https://www.linkedin.com/" target="_blank"><i class="bx bxl-linkedin"></i></a></li>
                        <li><a href="https://twitter.com/" target="_blank"><i class="bx bxl-twitter"></i></a></li>
                        <li><a href="https://www.instagram.com/" target="_blank"><i class="bx bxl-instagram"></i></a></li>
                    </ul> -->
                </div>

                <div class="content">
                    <h3>{{team.name}}</h3>
                    <span>{{team.position}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TeamCard',
    props: ['teamCard']
}
</script>