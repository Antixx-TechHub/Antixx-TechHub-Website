<template>
    <footer class="footer-area">
        <div class="divider"></div>
        <div class="container">
            <div v-if="footer !== null" class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <div class="logo">
                            <NuxtLink to="/">
                                <img :src="footer.img.url" alt="image">
                            </NuxtLink>
                        </div>
                        <p>{{footer.shortDesc}}</p>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>{{footer.title}}</h3>

                        <ul class="services-list">
                            <li
                                v-for="service in footer.services"
                                :key="service.id"
                            >
                                <NuxtLink :to="service.link">
                                    {{service.text}}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-2 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>{{footer.titleOne}}</h3>

                        <ul class="support-list">
                            <li
                                v-for="support in footer.supports"
                                :key="support.id"
                            >
                                <NuxtLink :to="support.link">
                                    {{support.text}}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                </div>

                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="single-footer-widget">
                        <h3>{{footer.titleTwo}}</h3>

                        <ul class="footer-contact-info">
                            <li>Location: 
                                <a 
                                    href="https://goo.gl/maps/MQ78iGP5g9VgZcJ38" 
                                    target="_blank"
                                >
                                    {{footer.location}}
                                </a>
                            </li>
                            <li>Email: 
                                <a href="mailto:hello@striki.com">
                                    {{footer.email}}
                                </a>
                            </li>
                            <li>Phone: 
                                <a href="tel:+321754754">
                                    {{footer.phone}}
                                </a>
                            </li>
                        </ul>
                        <ul class="social">
                            <li><a href="https://www.facebook.com/" target="_blank"><i class="bx bxl-facebook"></i></a></li>
                            <li><a href="https://twitter.com/" target="_blank"><i class="bx bxl-twitter"></i></a></li>
                            <li><a href="https://www.linkedin.com/" target="_blank"><i class="bx bxl-linkedin"></i></a></li>
                            <li><a href="https://www.instagram.com/" target="_blank"><i class="bx bxl-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="copyright-area">
                <p>&copy; <a href="http://hibotheme.com/" target="_blank">HiboTheme.com</a> All rights reserved by Striki</p>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterStyleOne',
    data(){
        return{
            footer: null
        }
    },
    created: async function(){
        this.footer = await this.$strapi.find('footer')
    }
}
</script>