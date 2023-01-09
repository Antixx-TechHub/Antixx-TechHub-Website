<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Integration Services" pageDesc="" />
        <IntegrationAbout />
        <WhyYouNeed />
        <ScopeOfOurIntegration />
        <WhatWeOffer />
        <IntegrationSolutions />
        <ToolsTechnologies />
        <Methodologies />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import IntegrationAbout from '../components/integration-services/IntegrationAbout';
import WhyYouNeed from '../components/integration-services/WhyYouNeed';
import ScopeOfOurIntegration from '../components/integration-services/ScopeOfOurIntegration';
import WhatWeOffer from '../components/integration-services/WhatWeOffer';
import IntegrationSolutions from '../components/integration-services/IntegrationSolutions';
import ToolsTechnologies from '../components/integration-services/ToolsTechnologies';
import Methodologies from '../components/integration-services/Methodologies';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        IntegrationAbout,
        WhyYouNeed,
        ScopeOfOurIntegration,
        WhatWeOffer,
        IntegrationSolutions,
        ToolsTechnologies,
        Methodologies,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: 'Integration services, solutions, & consulting company',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub, the top IT integration solutions & consultancy services company, offers easy-to-embrace integration services, solutions, and consulting support.' },
            { hid: 'keywords', name: 'keywords', content: 'Integration Services Provider Company, integration services experts, Integration Services Company, IT integration services agency, system integration services, IT Integration Solutions & Consultancy Services, integration service solutions company, Integration Services Consulting & Solutions Company, Integration & Implementation Services, Integration Consulting Services, top integration solutions companies, integration services consulting agency' }
       
        ],
    },
};
</script>
