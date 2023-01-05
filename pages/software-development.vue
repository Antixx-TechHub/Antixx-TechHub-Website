<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Software Development" pageDesc="" />
        <SoftwareAbout />
        <CustomIoTSolutions />
        <CustomSoftwareDevelopment />
        <TechnologyandTools />
        <HowWeWork />
        <WhyHireAntixxTechhub />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import SoftwareAbout from '../components/software-development/SoftwareAbout';
import CustomIoTSolutions from '../components/software-development/CustomIoTSolutions';
import CustomSoftwareDevelopment from '../components/software-development/CustomSoftwareDevelopment';
import TechnologyandTools from '../components/software-development/TechnologyandTools';
import HowWeWork from '../components/software-development/HowWeWork';
import WhyHireAntixxTechhub from '../components/software-development/WhyHireAntixxTechhub';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        SoftwareAbout,
        CustomIoTSolutions,
        CustomSoftwareDevelopment,
        TechnologyandTools,
        HowWeWork,
        WhyHireAntixxTechhub,
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
