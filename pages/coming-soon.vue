<template>
    <div>
        <NavbarStyleTwo />
        <ComingSoon />
        <BestSupport />
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../layouts/NavbarStyleTwo';
import ComingSoon from '../components/coming-soon/ComingSoon';
import BestSupport from '../components/coming-soon/BestSupport';
import FreeTrial from '../components/coming-soon/FreeTrial';
import FooterStyleOne from '../layouts/FooterStyleOne';

export default {
    components: {
        NavbarStyleTwo,
        ComingSoon,
        BestSupport,
        FreeTrial,
        FooterStyleOne,
    }
};
</script>
