<template>
    <div>
        <NavbarStyleOne />
        <PageTitle 
            v-if="details !== null"
            :pageTitle="details[0].title" 
            pageDesc="Our Services" 
        />
        <div v-if="details !== null">
            <Servicedetails 
                v-bind:servicesDetails="details"
            />
        </div>
        <BestSupport />
        <OurLovingClients />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleOne from '../../../layouts/NavbarStyleOne';
import PageTitle from '../../../components/Common/PageTitle';
import Servicedetails from '../../../components/single-service/Servicedetails'
import BestSupport from '../../../components/Common/BestSupport'
import OurLovingClients from '../../../components/Common/OurLovingClients'
import FooterStyleOne from '../../../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleOne,
        PageTitle,
        Servicedetails,
        BestSupport,
        OurLovingClients,
        FooterStyleOne,
    },

    data(){
        return{
            details: null
        }
    },

    created: async function(){
        const { slug } = this.$route.params
        this.details = await this.$strapi.find('servicedetails', `slug=${slug}`)
        // console.log(this.details)
    }
};
</script>