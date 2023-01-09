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
        title: 'Cloud strategy solutions, consulting & services provider',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub, a Cloud strategy specialist company, offers Cloud strategy consultancy service support and Cloud strategy solutions' },
            { hid: 'keywords', name: 'keywords', content: 'Cloud strategy specialists, Cloud Strategy Partner, Cloud strategy service support, Cloud strategic solutions, Cloud Strategy Agency, Cloud strategy consulting services, #1 Cloud strategy company, Google Strategy Services Provider, Cloud strategy consultancy services, Cloud strategy consulting agency, Cloud strategy consultancy company, Cloud strategy specialists, Cloud strategy developers, best Cloud strategic solutions companies, Cloud Strategy Implementation, Cloud consulting and services provider' }
       
        ],
    },
};
</script>
