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
        title: 'Antixx TechHub, a branding company, for branding solutions ',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub, one of the top branding companies in India, has the best branding specialists to design the best branding solutions and consulting services.' },
            { hid: 'keywords', name: 'keywords', content: 'branding specialists, branding strategists, Hire Branding Agency, branding company, Branding Services Provider, Branding Strategist Agency , branding experts, Branding Consulting Agency, branding consulting services, Branding Specialist Agency, branding solutions, Branding Support Services, top branding companies in India' }
       
        ],
    },
};
</script>
