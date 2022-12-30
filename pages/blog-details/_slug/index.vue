<template>
    <div>
        <NavbarStyleTwo />
        <PageTitle 
            v-if="details !== null"
            :pageTitle="details[0].attributes.title" 
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
import NavbarStyleTwo from '../../../layouts/NavbarStyleTwo';
import PageTitle from '../../../components/Common/PageTitle';
import BlogDetails from '../../../components/single-blog/BlogDetails'
import FreeTrial from '../../../components/Common/FreeTrial'
import FooterStyleOne from '../../../layouts/FooterStyleOne'
import axios from 'axios';

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

    created: async function (){
        const { slug } = this.$route.params
        const reaponse = await axios.get(`https://strapi.antixxtechhub.com/api/blogs?filters[slug][$eq]=${slug}&populate=*`, { params: { slug }})
        this.details = reaponse.data.data
    }
};
</script>