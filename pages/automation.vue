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
    }
};
</script>