<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="eCommerce Development" pageDesc="" />
        <eCommerceAbout />
        <HireAntixxTechHub />
        <ThekeyeCommerce />
        <CustomizedEcommerce  />
        <OurApproach />
        <WhatWeOffer />
        <Thespectrum />
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
import eCommerceAbout from '../components/eCommerce-development/eCommerceAbout';
import HireAntixxTechHub from '../components/eCommerce-development/HireAntixxTechHub';
import ThekeyeCommerce from '../components/eCommerce-development/ThekeyeCommerce';
import CustomizedEcommerce from '../components/eCommerce-development/CustomizedEcommerce';
import OurApproach from '../components/eCommerce-development/OurApproach';
import WhatWeOffer from '../components/eCommerce-development/WhatWeOffer';
import Thespectrum from '../components/eCommerce-development/Thespectrum';
import WhyHireAntixxTechHub from '../components/eCommerce-development/WhyHireAntixxTechHub';
import Faq from '../components/eCommerce-development/Faq';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        eCommerceAbout,
        HireAntixxTechHub,
        ThekeyeCommerce,
        CustomizedEcommerce,
        OurApproach,
        WhatWeOffer,
        Thespectrum,
        WhyHireAntixxTechHub,
        Faq,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: 'Antixx TechHub- Best agency for eCommerce design & development',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Hire Antixx TechHub for eCommerce design, development & support services with a difference that keep your business competitive and performing with profitability.' },
            { hid: 'keywords', name: 'keywords', content: 'eCommerce designers, eCommerce website designers, eCommerce developers, eCommerce development services, eCommerce development company, eCommerce development companies, eCommerce website development agency, eCommerce solutions, eCommerce support services, eCommerce design and development agency, eCommerce web designers, Ecommerce Development Packages, eCommerce management services, eCommerce Services Agency, top eCommerce development platforms' }
       
        ],
    },
};
</script>