<template>
    <section class="contact-area ptb-100">
        <div class="container">
            <div class="contact-inner">
                <div class="row">
                    <div class="col-lg-6 col-md-12">
                        <div class="contact-features-list">
                            <div class="mapouter">
                                <div class="gmap_canvas">
                                    <iframe class="gmap_iframe" width="100%" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=antixx techhb&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
                                    <a href="https://formatjson.org/word-counter">Word Counter</a></div>
                                </div>
                        </div>
                    </div>

                    <div class="col-lg-6 col-md-12">
                        <div class="contact-form">
                            <h5>Get in touch</h5>
                            <h3>Have Any Project Plan In Your Mind?</h3>

                            <form id="contactForm">
                                <div class="row">
                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="name" id="name" class="form-control" placeholder="Your Name">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="email" name="email" id="email" class="form-control" placeholder="Your Email">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="phone_number" id="phone_number" class="form-control" placeholder="Your Phone">
                                        </div>
                                    </div>

                                    <div class="col-lg-6 col-md-6">
                                        <div class="form-group">
                                            <input type="text" name="msg_subject" id="msg_subject" class="form-control" placeholder="Your Subject">
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <textarea name="message" class="form-control" id="message" cols="30" rows="6" placeholder="Your Message"></textarea>
                                        </div>
                                    </div>

                                    <div class="col-lg-12 col-md-12">
                                        <button type="submit" class="default-btn"><i class='bx bxs-paper-plane'></i>Send Message<span></span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="contact-info">
                    <div class="contact-info-content">
                        <h3>Contact us by Phone Number or Email Address</h3>
                        <h2>
                            <a href="tel:+917796554407">+91 77 96 55 44 07</a>
                            <span>OR</span>
                            <a href="mailto:sales@antixxtechhub.com">sales@antixxtechhub.com</a>
                        </h2>

                        <ul class="social">
                                <li><a href="https://www.facebook.com/" target="_blank"><i class="bx bxl-facebook"></i></a></li>
                                <li><a href="https://www.linkedin.com/" target="_blank"><i class="bx bxl-linkedin"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><i class="bx bxl-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i class="bx bxl-instagram"></i></a></li>
                            </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'contact'
}
</script>