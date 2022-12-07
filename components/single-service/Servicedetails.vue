<template>
    <div class="service-details ptb-100">
        <div class="container">
            <div class="service-details-image">
                <img :src="details[0].img.url" alt="image">
            </div>

            <div class="service-details-content">
                <h3>{{details[0].title}}</h3>
    
                <span v-html="details[0].longDesc"></span>

                <div class="service-details-info">
                    <div 
                        class="single-info-box"
                        v-for="detail in details[0].details"
                        :key="detail.id"
                    >
                        <h4>{{detail.title}}</h4>
                        <span>{{detail.info}}</span>
                    </div>

                    <div class="single-info-box">
                        <h4>Share</h4>
                        <ul class="social">
                            <li>
                                <a target="_blank" href="#">
                                    <i class='bx bxl-linkedin'></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="#">
                                    <i class='bx bxl-twitter'></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="#">
                                    <i class='bx bxl-facebook'></i>
                                </a>
                            </li>
                            <li>
                                <a target="_blank" href="#">
                                    <i class='bx bxl-instagram'></i>
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div class="single-info-box">
                        <a class="default-btn" href="#">Live Preview</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Servicedetails',
    props: ['servicesDetails'],
    data: function () {
        return {
            details: this.servicesDetails,
        }
    }
}
</script>