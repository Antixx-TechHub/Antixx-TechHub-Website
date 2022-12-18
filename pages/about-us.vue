<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="About Us" pageDesc="" />
        <AboutUs />
        <EthicalValues />
        <VisionMission />
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
import VisionMission from '../components/about-us/VisionMission';
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
        VisionMission,
        OrganizationalCulture,
        OurServices,
        DespiteMaintaining,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>