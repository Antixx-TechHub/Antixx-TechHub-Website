<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Branding" pageDesc="" />
        <AboutBranding />
        <WhyYouNeed />
        <TheBenefits />
        <BrandingServices />
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
import AboutBranding from '../components/branding/AboutBranding';
import WhyYouNeed from '../components/branding/WhyYouNeed';
import TheBenefits from '../components/branding/TheBenefits';
import BrandingServices from '../components/branding/BrandingServices';
import WhyHireAntixxTechHub from '../components/branding/WhyHireAntixxTechHub';
import Faq from '../components/branding/Faq';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        AboutBranding,
        WhyYouNeed,
        TheBenefits,
        BrandingServices,
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
