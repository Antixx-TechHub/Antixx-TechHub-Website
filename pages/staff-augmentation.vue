<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Staff Augmentation" pageDesc="" />
        <StaffAugAbout />
        <BenefitsOfHiring />
        <ExploreOurTask />
        <WhyChooseAntixx />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import StaffAugAbout from '../components/staff-augmentation/StaffAugAbout';
import BenefitsOfHiring from '../components/staff-augmentation/BenefitsOfHiring';
import ExploreOurTask from '../components/staff-augmentation/ExploreOurTask';
import WhyChooseAntixx from '../components/staff-augmentation/WhyChooseAntixx';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';
export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        StaffAugAbout,
        BenefitsOfHiring,
        ExploreOurTask,
        WhyChooseAntixx,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: 'Antixx TechHub for IT staff augmentation services',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Antixx TechHub, the leading staff augmentation agency, offers dependable IT staff augmentation services to provide the best IT skills on contract basis.' },
            { hid: 'keywords', name: 'keywords', content: 'IT Staff Augmentation Services, IT experts augmentation services, Staff Augmentation Agency, staff augmentation service provider, IT staff augmentation specialists' }
       
        ],
    },
};
</script>