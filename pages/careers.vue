<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Careers" pageDesc="" />
        <Servicedetails />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import Servicedetails from '../components/careers/ComingSoon'
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
    },
    head: {
        title: 'Antixx TechHub - Careers',
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