<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            v-if="details !== null"
            :pageTitle="details[0].title" 
            pageDesc="News and Insights" 
        />
        <div v-if="details !== null">
            <BlogDetails 
                v-bind:detailsContent="details"
            />
        </div>
        <FreeTrial />
        <FooterStyleOne />
    </div>
</template>

<script>
import NavbarStyleTwo from '../../layouts/NavbarStyleTwo';
import PageTitle from '../../components/Common/PageTitle';
import BlogDetails from '../../components/single-blog/BlogDetails'
import FreeTrial from '../../components/Common/FreeTrial'
import FooterStyleOne from '../../layouts/FooterStyleOne'

export default {
    components: {
        NavbarStyleTwo,
        PageTitle,
        BlogDetails,
        FreeTrial,
        FooterStyleOne,
    },

    data(){
        return{
            details: null
        }
    },

    created: async function(){
        const { slug } = this.$route.params
        this.details = await this.$strapi.find('blogdetails', `slug=${slug}`)
    }
};
</script>