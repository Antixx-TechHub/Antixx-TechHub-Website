<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Cloud Strategy" pageDesc="" />
        <CloudStrategyAbout />
        <WhyYouNeed />
        <WhatWeOffer />
        <HowWeWork />
        <WhyYouShould />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import CloudStrategyAbout from '../components/cloud-strategy/CloudStrategyAbout';
import WhyYouNeed from '../components/cloud-strategy/WhyYouNeed';
import WhatWeOffer from '../components/cloud-strategy/WhatWeOffer';
import HowWeWork from '../components/cloud-strategy/HowWeWork';
import WhyYouShould from '../components/cloud-strategy/WhyYouShould';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        CloudStrategyAbout,
        WhyYouNeed,
        WhatWeOffer,
        HowWeWork,
        WhyYouShould,
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
