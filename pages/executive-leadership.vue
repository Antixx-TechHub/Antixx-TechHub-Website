<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            pageTitle="Executive Leadership" 
            pageDesc="Meet Our experts always ready to help you" 
        />
        <leadership />
        <Team />
        <OurLovingClients />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import leadership from '../components/executive-leadership/leadership'
import Team from '../components/Common/Team'
import OurLovingClients from '../components/Common/OurLovingClients'
import BestSupport from '../components/Common/BestSupport'
import FreeTrial from '../components/Common/FreeTrial'
import FooterStyleOne from '../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        leadership,
        Team,
        OurLovingClients,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>