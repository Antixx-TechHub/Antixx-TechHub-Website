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
        title: 'Antixx TechHub |Best AI & ML consulting & service company',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub, #1 AI & ML solutions development company, offers AI & ML consultancy as well as AI & ML service support to boost business performance.' },
            { hid: 'keywords', name: 'keywords', content: 'AI & ML developers, AI services company, AI & ML specialists, AI and ML service support, AI and ML integration, AI & ML consulting company, AI & ML managed service providers, custom AI solutions, ML solutions development services, AI engineers, AI & ML specialists, Machine Learning Developers, #1 AI & ML consulting agency, AI & ML solutions, AI & ML Consultancy, AI & ML service support, AI consultancy, AI and ML support services, AI & ML service support company, AI & ML Solutions Development Company, Machine Learning Solutions Integration, AI and ML service provider company, configuration' }
       
        ],
    },
};
</script>
