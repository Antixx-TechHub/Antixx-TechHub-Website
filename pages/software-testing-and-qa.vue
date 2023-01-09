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
        title: 'Antixx TechHub- a Software testing & QA services company',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub, as one of the top Software testing and QA companies in India, offers Software testing and QA consultancy, solutions, and support services.' },
            { hid: 'keywords', name: 'keywords', content: 'Top Software Testing and QA Companies, Software testing and QA services, software testers, QA engineers QA Specialist Company, Software testing specialist agency, QA and Software Testing Agency, Software Testing and QA Experts, Software testing and QA consultancy, Software testing solutions' }
       
        ],
    },
};
</script>