<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="About-Us" pageDesc="" />
        <AboutUs />
        <EthicalValues />
        <!-- <VisionMission /> -->
        <OrganizationalCulture />
        <OurServices />
        <DespiteMaintaining />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle'
import AboutUs from '../components/about-us/AboutUs';
import EthicalValues from '../components/about-us/EthicalValues';
// import VisionMission from '../components/about-us/VisionMission';
import OrganizationalCulture from '../components/about-us/OrganizationalCulture';
import OurServices from '../components/about-us/OurServices';
import DespiteMaintaining from '../components/about-us/DespiteMaintaining';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        AboutUs,
        EthicalValues,
        // VisionMission,
        OrganizationalCulture,
        OurServices,
        DespiteMaintaining,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: 'Antixx TechHub is a ITSM consulting & IT services provider',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub is one of the top ITSM consulting companies and IT services providers with expertise in web, app, business automation solutions, big data, Cloud' },
            { hid: 'keywords', name: 'keywords', content: 'ITSM consulting, IT services provider company, IT solutions, top ITSM service provider agencies, IT support services, automation business solutions, IT service vendor, IT services management, Technology Consulting Company' }
        ],
    },
};
</script>