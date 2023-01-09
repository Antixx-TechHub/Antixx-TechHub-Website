<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Mobile App Development" pageDesc="" />
        <MobileAppAbout />
        <ShouldYouHire />
        <NativeMobileApps />
        <MobileAppDevelopment />
        <TechnicalExcellence class="pt-0" />
        <TheTopMobileApp />
        <FeaturesEnriched />
        <OurApproach />
        <WeFollowTheRobustMobile />
        <WhyChooseAntixxTechHub />
        <Faq />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import MobileAppAbout from '../components/mobile-app-development/MobileAppAbout';
import ShouldYouHire from '../components/mobile-app-development/ShouldYouHire';
import NativeMobileApps from '../components/mobile-app-development/NativeMobileApps';
import MobileAppDevelopment from '../components/mobile-app-development/MobileAppDevelopment';
import TechnicalExcellence from '../components/mobile-app-development/TechnicalExcellence';
import TheTopMobileApp from '../components/mobile-app-development/TheTopMobileApp';
import FeaturesEnriched from '../components/mobile-app-development/FeaturesEnriched';
import OurApproach from '../components/mobile-app-development/OurApproach';
import WeFollowTheRobustMobile from '../components/mobile-app-development/WeFollowTheRobustMobile';
import WhyChooseAntixxTechHub from '../components/mobile-app-development/WhyChooseAntixxTechHub';
import Faq from '../components/mobile-app-development/Faq';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        MobileAppAbout,
        ShouldYouHire,
        NativeMobileApps,
        MobileAppDevelopment,
        TechnicalExcellence,
        TheTopMobileApp,
        FeaturesEnriched,
        OurApproach,
        WeFollowTheRobustMobile,
        WhyChooseAntixxTechHub,
        Faq,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: 'Best Mobile App Development Company for Android & iOS Apps',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub offers development, consulting, and support services for native mobile Apps, Web Apps, & Hybrid Apps powered with top app development frameworks.' },
            { hid: 'keywords', name: 'keywords', content: 'App Development Company, Mobile App Development Agency, Mobile App Development Solutions, mobile app designers, mobile app developers, top mobile app design and development companies, Mobile App Development Services, Mobile App Services Provider, mobile app development packages, mobile app designer agency, Mobile App Design and Development Services, mobile app testers, mobile app development vendor, top agencies for mobile app development' }
       
        ],
    },
};
</script>
