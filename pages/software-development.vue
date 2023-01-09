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
        title: 'Top software development agency for mobility solutions',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub is one of the top software development companies in India for software application development, app integration solutions, IoT solutions development.' },
            { hid: 'keywords', name: 'keywords', content: 'software development services, best software developers, Software Application Development Services, IoT Solutions Specialist Company, IoT app developers, full-stack IoT solutions development, Top Software Development Agency, enterprise software development, software development specialist agency, enterprise mobility solutions, app integration solutions, software application developers, top software development companies in India, Software and Solution Development' }
       
        ],
    },
};
</script>
