<template>
    <div class="software-integrations-area ptb-100">
        <div class="container">
            <div class="row align-items-center">
                <div class="col-lg-6 col-md-12">
                    <div 
                        class="software-integrations-content"
                        v-if="software !== null"
                    >
                        <span class="sub-title">{{software.subtitle}}</span>
                        <h2>{{software.heading}}</h2>
                        <p>{{software.descriptionOne}}</p>
                        <p>{{software.descriptionTwo}}</p>
                        <router-link :to="software.btnLink" class="default-btn">{{software.btnText}}</router-link>
                    </div>
                </div>
                <div class="col-lg-6 col-md-12">
                    <div class="software-integrations-list">
                        <img src="../../assets/images/shape/bg-shape2.png" alt="bg-shape">
                        <ul>
                            <li data-aos="fade-down" data-aos-duration="1000">
                                <img src="../../assets/images/software-integrations/atlassian.png" class="atlassian" alt="atlassian">
                            </li>
                            <li data-aos="fade-right" data-aos-duration="1000">
                                <img src="../../assets/images/software-integrations/skype.png" class="skype" alt="skype">
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1000">
                                <img src="../../assets/images/software-integrations/gdrive.png" class="gdrive" alt="gdrive">
                            </li>
                            <li data-aos="fade-down" data-aos-duration="1000">
                                <img src="../../assets/images/software-integrations/slack.png" class="slack" alt="slack">
                            </li>
                            <li data-aos="fade-up" data-aos-duration="1000">
                                <img src="../../assets/images/software-integrations/jira.png" class="jira" alt="jira">
                            </li>
                            <li>
                                <img src="../../assets/images/software-integrations/frame.png" class="frame" alt="frame">
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape6">
            <img src="../../assets/images/shape/shape5.png" alt="shape">
        </div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'SoftwareIntegrations',
    data: () => ({
        software: null,
    }),
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/softwareintegration?populate=*')
        const { data: {attributes} } = response.data
        this.software = attributes
    },
}
</script>