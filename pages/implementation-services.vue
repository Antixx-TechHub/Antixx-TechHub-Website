<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Implementation Services" pageDesc="" />
        <ImplementationAbout />
        <WhyYouNeed />
        <WhatServices />
        <ExpertServices />
        <ToolsAndTechnologies />
        <OurApproach />
        <WhyHireAntixxTechhub />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import ImplementationAbout from '../components/implementation-services/ImplementationAbout';
import WhyYouNeed from '../components/implementation-services/WhyYouNeed';
import WhatServices from '../components/implementation-services/WhatServices';
import ExpertServices from '../components/implementation-services/ExpertServices';
import ToolsAndTechnologies from '../components/implementation-services/ToolsAndTechnologies';
import OurApproach from '../components/implementation-services/OurApproach';
import WhyHireAntixxTechhub from '../components/implementation-services/WhyHireAntixxTechhub';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';
export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        ImplementationAbout,
        WhyYouNeed,
        WhatServices,
        ExpertServices,
        ToolsAndTechnologies,
        OurApproach,
        WhyHireAntixxTechhub,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: 'Cloud implementation solutions and consulting company',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub, one of the top Cloud implementation services companies in India, offers Cloud consultancy, Cloud solutions, Cloud computing support services.' },
            { hid: 'keywords', name: 'keywords', content: 'Cloud Implementation Services Provider company, top Cloud implementation services companies in India, Cloud implementation solutions, Cloud implementation Solution Company, cloud-computing solutions, Cloud Implementation Specialist Agency, Cloud implementation services company, Cloud managed service providers, Cloud management and implementation services, Cloud strategy consulting, Cloud Consultancy, Cloud implementation consulting, Cloud implementation specialists, Cloud Computing Solutions Implementation, Cloud Computing Support Solutions' }
       
        ],
    },
};
</script>