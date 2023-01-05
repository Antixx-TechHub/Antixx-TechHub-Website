<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Software Testing & QA" pageDesc="" />
        <SoftwareTestingAbout />
        <WhyYouNeed />
        <TestingTypes />
        <WhatWeOffer />
        <ToolsAndTechnologies />
        <WhyHireAntixxTechhub />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import SoftwareTestingAbout from '../components/software-testing-and-qa/SoftwareTestingAbout';
import WhyYouNeed from '../components/software-testing-and-qa/WhyYouNeed';
import TestingTypes from '../components/software-testing-and-qa/TestingTypes';
import WhatWeOffer from '../components/software-testing-and-qa/WhatWeOffer';
import ToolsAndTechnologies from '../components/software-testing-and-qa/ToolsAndTechnologies';
import WhyHireAntixxTechhub from '../components/software-testing-and-qa/WhyHireAntixxTechhub';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        SoftwareTestingAbout,
        WhyYouNeed,
        TestingTypes,
        WhatWeOffer,
        ToolsAndTechnologies,
        WhyHireAntixxTechhub,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: '#',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '#' },
            { hid: 'keywords', name: 'keywords', content: '#' }
       
        ],
    },
};
</script>