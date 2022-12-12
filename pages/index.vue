<template>
    <div>
        <Navbar />
        <div class="seo-marketing-home-with-full-background">
            <HomeF1 />
            <Features />
            <Welcome />
            <About />
            <WhatWeDo />
            <WhyChooseUs />
            <Funfacts />
            <OurExpertise />
            <Analysis />
            <Videos />
            <Partner />
            <WhatsOurClients />
        </div>
        <OurLatestBlog />
        <FooterStyleOne />
    </div>
</template>

<script>
import Navbar from '../layouts/Navbar';
import HomeF1 from '../components/Index/HomeF1';
import Features from '../components/Index/Features';
import Welcome from '../components/Index/Welcome';
import About from '../components/Index/About';
import WhatWeDo from '../components/Index/WhatWeDo';
import WhyChooseUs from '../components/Index/WhyChooseUs';
import Funfacts from '../components/Index/Funfacts';
import OurExpertise from '../components/Index/OurExpertise';
import Analysis from '../components/Index/Analysis';
import Videos from '../components/Index/Videos';
import Partner from '../components/Common/Partner'
import WhatsOurClients from '../components/Common/WhatsOurClients';
import OurLatestBlog from '../components/Index/OurLatestBlog';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        Navbar,
        HomeF1,
        Features,
        Welcome,
        About,
        WhatWeDo,
        WhyChooseUs,
        Funfacts,
        OurExpertise,
        Analysis,
        Videos,
        Partner,
        WhatsOurClients,
        OurLatestBlog,
        FooterStyleOne,
    }
};
</script>
