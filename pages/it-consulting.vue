<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="IT Consulting" pageDesc="" />
        <ITConsultingAbout />
        <ReasonsToHire />
        <ShouldYouHire />
        <HowWeHelp />
        <IndustriesWeHave />
        <WhyHireAntixx />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import ITConsultingAbout from '../components/it-consulting/ITConsultingAbout';
import ReasonsToHire from '../components/it-consulting/ReasonsToHire';
import ShouldYouHire from '../components/it-consulting/ShouldYouHire';
import HowWeHelp from '../components/it-consulting/HowWeHelp'
import IndustriesWeHave from '../components/it-consulting/IndustriesWeHave';
import WhyHireAntixx from '../components/it-consulting/WhyHireAntixx';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        ITConsultingAbout,
        ReasonsToHire,
        ShouldYouHire,
        HowWeHelp,
        IndustriesWeHave,
        WhyHireAntixx,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>