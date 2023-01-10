<template>
    <div>
        <Navbar />
        <div class="seo-marketing-home-with-full-background">
            <HomeBanner />
            <MainServices />
            <WhoWeAre />
            <WhatWeDo />
            <WhyChooseUs />
            <Funfacts />
            <OurExpertise />
            <RelyToCompete />
            <HomeForm />
            <Videos />
            <OurClients />
        </div>
        <WhatsOurClients />
        <OurLatestBlog />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import HomeBanner from '../components/Index/HomeBanner';
import MainServices from '../components/Index/MainServices';
import WhoWeAre from '../components/Index/WhoWeAre';
import WhatWeDo from '../components/Index/WhatWeDo';
import WhyChooseUs from '../components/Index/WhyChooseUs';
import Funfacts from '../components/Index/Funfacts';
import OurExpertise from '../components/Index/OurExpertise';
import RelyToCompete from '../components/Index/RelyToCompete';
import HomeForm from '../components/Index/HomeForm';
// import Videos from '../components/Index/Videos';
import OurClients from '../components/Common/OurClients'
import WhatsOurClients from '../components/Common/WhatsOurClients';
import OurLatestBlog from '../components/Common/OurLatestBlog';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        Navbar,
        HomeBanner,
        MainServices,
        WhoWeAre,
        WhatWeDo,
        WhyChooseUs,
        Funfacts,
        OurExpertise,
        RelyToCompete,
        HomeForm,
        // Videos,
        OurClients,
        WhatsOurClients,
        OurLatestBlog,
        FooterStyleOne,
    }
};
</script>