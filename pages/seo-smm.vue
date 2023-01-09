<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="SEO SMM" pageDesc="" />
        <SeoSmoAbout />
        <WhyYouNeed />
        <ScopeofTechnical />
        <ScopeofWebsite />
        <QualitySEO />
        <OurApproach />
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
import SeoSmoAbout from '../components/seo-smm/SeoSmoAbout';
import WhyYouNeed from '../components/seo-smm/WhyYouNeed';
import ScopeofTechnical from '../components/seo-smm/ScopeofTechnical';
import ScopeofWebsite from '../components/seo-smm/ScopeofWebsite';
import QualitySEO from '../components/seo-smm/QualitySEO';
import OurApproach from '../components/seo-smm/OurApproach';
import WhyHireAntixxTechHub from '../components/seo-smm/WhyHireAntixxTechHub';
import Faq from '../components/seo-smm/Faq';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        SeoSmoAbout,
        WhyYouNeed,
        ScopeofTechnical,
        ScopeofWebsite,
        QualitySEO,
        OurApproach,
        WhyHireAntixxTechHub,
        Faq,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: 'An SEO specialist company offers affordable SEO packages',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub, a leading SEO service company, offers customized SEO packages for ranking and visibility improvement in organic & paid search results.' },
            { hid: 'keywords', name: 'keywords', content: 'SEO Company, Digital Marketing Services, SEO services, SEO Services Company, search engine optimization services, Hire SEO Agency, SEO Packages, SEO plans, SEO experts, On-page SEO packages, Off-Page SEO Packages, Local SEO Packages, Website SEO Audit Packages, top SEO companies in India SEO services provider, SEO service support, Top SEO Services Company, SEO Solutions, PPC marketing' }
       
        ],
    },
};
</script>
