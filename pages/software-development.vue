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
    }
};
</script>
