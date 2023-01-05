<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Graphics Design" pageDesc="" />
        <AboutGraphics />
        <WhyYouNeedGraphics />
        <BenefitsofHiringGraphicsDesigners />
        <HowWeCreateUniqueGraphics />
        <GraphicsDevelopmentStage />
        <WhatMakesAntixxTechHub />
        <SevenKeyElements />
        <WhyHireAntixxTechHub />
        <Faq />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import AboutGraphics from '../components/graphics-design/AboutGraphics';
import WhyYouNeedGraphics from '../components/graphics-design/WhyYouNeedGraphics';
import BenefitsofHiringGraphicsDesigners from '../components/graphics-design/BenefitsofHiringGraphicsDesigners';
import HowWeCreateUniqueGraphics from '../components/graphics-design/HowWeCreateUniqueGraphics';
import GraphicsDevelopmentStage from '../components/graphics-design/GraphicsDevelopmentStage';
import WhatMakesAntixxTechHub from '../components/graphics-design/WhatMakesAntixxTechHub';
import SevenKeyElements from '../components/graphics-design/SevenKeyElements';
import WhyHireAntixxTechHub from '../components/graphics-design/WhyHireAntixxTechHub';
import Faq from '../components/graphics-design/Faq';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        AboutGraphics,
        WhyYouNeedGraphics,
        BenefitsofHiringGraphicsDesigners,
        HowWeCreateUniqueGraphics,
        GraphicsDevelopmentStage,
        WhatMakesAntixxTechHub,
        SevenKeyElements,
        WhyHireAntixxTechHub,
        Faq,
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
