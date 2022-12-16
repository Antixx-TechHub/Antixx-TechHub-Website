<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Contact Us" pageDesc="" />
        <Contact />
        <BestSupport />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import Contact from '../components/contact-us/contact'
import BestSupport from '../components/Common/BestSupport'
import OurLovingClients from '../components/Common/OurLovingClients'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        Contact,
        BestSupport,
        OurLovingClients,
        FooterStyleOne,
    }
};
</script>