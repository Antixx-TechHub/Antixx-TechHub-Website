<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="AI & ML" pageDesc="" />
        <AiMlAbout />
        <ImportanceofArtificial />
        <TechnologiesTools />
        <WhyHireAntixxTechhub />
        <WeOfferAIML />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import AiMlAbout from '../components/ai-ml/AiMlAbout';
import ImportanceofArtificial from '../components/ai-ml/ImportanceofArtificial';
import TechnologiesTools from '../components/ai-ml/TechnologiesTools';
import WhyHireAntixxTechhub from '../components/ai-ml/WhyHireAntixxTechhub';
import WeOfferAIML from '../components/ai-ml/WeOfferAIML';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        AiMlAbout,
        ImportanceofArtificial,
        TechnologiesTools,
        WhyHireAntixxTechhub,
        WeOfferAIML,
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
