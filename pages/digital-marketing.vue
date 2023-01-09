<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Digital Marketing" pageDesc="" />
        <DigitalMarketingAbout />
        <WhyYouNeed />
        <DigitalMarketingServices />
        <DigitalMarketingExperts />
        <Faq />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import DigitalMarketingAbout from '../components/digital-marketing/DigitalMarketingAbout';
import WhyYouNeed from '../components/digital-marketing/WhyYouNeed';
import DigitalMarketingServices from '../components/digital-marketing/DigitalMarketingServices';
import DigitalMarketingExperts from '../components/digital-marketing/DigitalMarketingExperts';
import Faq from '../components/digital-marketing/Faq';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        DigitalMarketingAbout,
        WhyYouNeed,
        DigitalMarketingServices,
        DigitalMarketingExperts,
        Faq,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: 'Top Digital Marketing Company For SMO, SMM, Google Adword, PPC',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub, the best digital marketing company with expertise in SMO, SMM, Google Adword, PPC, YouTube promotion, email marketing, etc. offers affordable packages.' },
            { hid: 'keywords', name: 'keywords', content: 'Digital marketing services, digital marketing agency, digital marketing company, digital marketing support services, digital marketing experts, Online marketing, digital marketing packages, top digital marketing companies digital marketing service support, digital marketing plans, digital marketing specialists, digital marketing services provider' }
       
        ],
    },
};
</script>
