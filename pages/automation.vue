<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Automation" pageDesc="" />
        <AutomationAbout />
        <BenefitsofHiring />
        <WhatWeDoAsBA />
        <OurTechnicalExcellence />
        <IndustriesWeServe />
        <WhyChooseAntixx />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import AutomationAbout from '../components/automation/AutomationAbout';
import BenefitsofHiring from '../components/automation/BenefitsofHiring';
import WhatWeDoAsBA from '../components/automation/WhatWeDoAsBA';
import OurTechnicalExcellence from '../components/automation/OurTechnicalExcellence';
import IndustriesWeServe from '../components/automation/IndustriesWeServe';
import WhyChooseAntixx from '../components/automation/WhyChooseAntixx';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        AutomationAbout,
        BenefitsofHiring,
        WhatWeDoAsBA,
        OurTechnicalExcellence,
        IndustriesWeServe,
        WhyChooseAntixx,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: 'Business process automation consulting & solution company',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub, as a top business automation consultancy agency, offers tailored-to-need business process automation service support solutions.' },
            { hid: 'keywords', name: 'keywords', content: '#1 Business Automation Solution Development Company, business automation solutions provider company, business automation software development, Business Automation Services Company, top business automation consultancy agency, Business Automation Software Development Agency, Business Process Automation Consulting, business automation support services, Business Automation Solutions Development, business process automation service solutions, Business Automation consultant, BPA specialists, business automation software developer agency, business process automation consultancy' }
       
        ],
    },
};
</script>