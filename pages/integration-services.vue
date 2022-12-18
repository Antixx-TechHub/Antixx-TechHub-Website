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
    }
};
</script>
