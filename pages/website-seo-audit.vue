<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle pageTitle="Website SEO Audit" pageDesc="" />
        <WebsiteSEOAuditAbout />
        <WhatIsWebsiteSEO />
        <WhyYouShould />
        <WebsiteSEOHealth />
        <TheTopRanking />
        <WhatWeDo />
        <HowWeDoSEOAudit />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import PageTitle from '../components/Common/PageTitle';
import WebsiteSEOAuditAbout from '../components/website-seo-audit/WebsiteSEOAuditAbout';
import WhatIsWebsiteSEO from '../components/website-seo-audit/WhatIsWebsiteSEO';
import WhyYouShould from '../components/website-seo-audit/WhyYouShould';
import WebsiteSEOHealth from '../components/website-seo-audit/WebsiteSEOHealth';
import TheTopRanking from '../components/website-seo-audit/TheTopRanking';
import WhatWeDo from '../components/website-seo-audit/WhatWeDo';
import HowWeDoSEOAudit from '../components/website-seo-audit/HowWeDoSEOAudit';
import BestSupport from '../components/Common/BestSupport';
import FreeTrial from '../components/Common/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        WebsiteSEOAuditAbout,
        WhatIsWebsiteSEO,
        WhyYouShould,
        WebsiteSEOHealth,
        TheTopRanking,
        WhatWeDo,
        HowWeDoSEOAudit,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    },
    head: {
        title: '#',
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
