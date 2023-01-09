<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Big Data Solutions" pageDesc="" />
        <BigDataAbout />
        <WhatIsBigData />
        <BigDataImplementation />
        <WeUseTheMost />
        <TheBenefitsOfHiring />
        <TheKeyBenefits />
        <WhyHireBigData />
        <Howimportant />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import BigDataAbout from '../components/big-data-solutions/BigDataAbout';
import WhatIsBigData from '../components/big-data-solutions/WhatIsBigData';
import BigDataImplementation from '../components/big-data-solutions/BigDataImplementation';
import WeUseTheMost from '../components/big-data-solutions/WeUseTheMost';
import TheBenefitsOfHiring from '../components/big-data-solutions/TheBenefitsOfHiring';
import TheKeyBenefits from '../components/big-data-solutions/TheKeyBenefits';
import WhyHireBigData from '../components/big-data-solutions/WhyHireBigData';
import Howimportant from '../components/big-data-solutions/Howimportant';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        BigDataAbout,
        WhatIsBigData,
        BigDataImplementation,
        WeUseTheMost,
        TheBenefitsOfHiring,
        TheKeyBenefits,
        WhyHireBigData,
        Howimportant,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: 'Big Data Analytics Solutions, Support Services, & Consultancy',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub offers Big Data analytics solutions, support services & consultancy to empower businesses to perform and grow with a competitive excellence.' },
            { hid: 'keywords', name: 'keywords', content: 'Big Data Analytics Solutions Provider, Big Data analytics solutions, Big Data consulting services, Big Data Analytics service support providers, Big Data Consultant, big data consultancy, Big Data Analytics solutions company, Big Data analytics services, Big data analytics managed services, Big Data Solutions, Big Data Analytics Consultant Agency' }
       
        ],
    },
};
</script>
