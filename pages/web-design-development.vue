<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Web Design & Development" pageDesc="" />
        <WebDesignAbout />
        <FutureReadyWebsite />
        <TopTechnology />
        <ServicesByAntixxTechHub />
        <WeOfferTrade />
        <ApproachforWebsiteDesign />
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
import WebDesignAbout from '../components/web-design-development/WebDesignAbout';
import FutureReadyWebsite from '../components/web-design-development/FutureReadyWebsite';
import TopTechnology from '../components/web-design-development/TopTechnology';
import ServicesByAntixxTechHub from '../components/web-design-development/ServicesByAntixxTechHub';
import WeOfferTrade from '../components/web-design-development/WeOfferTrade';
import ApproachforWebsiteDesign from '../components/web-design-development/ApproachforWebsiteDesign';
import WhyChooseAntixxTechHub from '../components/web-design-development/WhyChooseAntixxTechHub';
import Faq from '../components/web-design-development/Faq';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        WebDesignAbout,
        FutureReadyWebsite,
        TopTechnology,
        ServicesByAntixxTechHub,
        WeOfferTrade,
        ApproachforWebsiteDesign,
        WhyChooseAntixxTechHub,
        Faq,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: 'Antixx TechHub – the website design & web development agency',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub offers the quality best website design & web development services customized for the particular business niche, business plans, and other concerns.' },
            { hid: 'keywords', name: 'keywords', content: 'web development company, IT services company, web designers, website developers, website design services, website designing agency, website development services, web development services, website design and development services, web design & development company, CMS development services , CMS developers, responsive website development, CMS integration services, website design package, top, best, cost-effective, user-friendly, client-centric, performance oriented, agency for web development' }
       
        ],
    },
};
</script>
