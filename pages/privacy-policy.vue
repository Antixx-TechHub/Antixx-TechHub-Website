<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Privacy Policy" pageDesc="" />
        <Servicedetails />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import Servicedetails from '../components/privacy-policy/privacyPolicyDetails'
import BestSupport from '../components/Common/BestSupport'
import FreeTrial from '../components/Common/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Servicedetails,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>