<template>
    <div class="blog-details-area ptb-100">
        <div class="container">
            <div class="row">
                <div class="col-lg-8 col-md-12">
                    <div class="blog-details-desc">
                        <div class="article-image">
                            <img :src="[details[0]].attributes.image?.data?.attributes?.url" alt="image">
                        </div>

                        <div class="article-content">
                            <div class="entry-meta">
                                <ul>
                                    <li>
                                        <i class='bx bx-time'></i> 
                                        <a href="#">{{details[0].attributes.date}}</a>
                                    </li>
                                    <li>
                                        <i class='bx bx-user'></i> 
                                        <a href="#">{{details[0].attributes.name}}</a>
                                    </li>
                                </ul>
                            </div>

                            <h3>{{details[0].attributes.title}}</h3>

                            <span v-html="details[0].attributes.longDesc"></span>
                        </div>

                        <div class="article-footer">
                            <div class="article-tags">
                                <a 
                                    href="#"
                                    v-for="tag in details[0].attributes.tags"
                                    :key="tag.id"
                                >
                                    {{tag.tag}}
                                </a>
                            </div>
                        </div>

                        <div class="strax-post-navigation">
                            <div class="prev-link-wrapper">
                                <div class="info-prev-link-wrapper">
                                    <a href="#">
                                        <span class="image-prev">
                                            <img src="~/assets/img/blog-image/2.jpg" alt="image">
                                            <span class="post-nav-title">Prev</span>
                                        </span>
    
                                        <span class="prev-link-info-wrapper">
                                            <span class="prev-title">Don't buy a tech gift until you read these rules</span>
                                            <span class="meta-wrapper">
                                                <span class="date-post">January 21, 2021</span>
                                            </span>
                                        </span>
                                    </a>
                                </div>
                            </div>
    
                            <div class="next-link-wrapper">
                                <div class="info-next-link-wrapper">
                                    <a href="#">
                                        <span class="next-link-info-wrapper">
                                            <span class="next-title">The golden rule of buying a phone as a gift</span>
                                            <span class="meta-wrapper">
                                                <span class="date-post">January 21, 2021</span>
                                            </span>
                                        </span>
    
                                        <span class="image-next">
                                            <img src="~/assets/img/blog-image/3.jpg" alt="image">
                                            <span class="post-nav-title">Next</span>
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="comments-area">
                            <h3 class="comments-title">2 Comments:</h3>

                            <ol class="comment-list">
                                <li class="comment">
                                    <div class="comment-body">
                                        <footer class="comment-meta">
                                            <div class="comment-author vcard">
                                                <img src="~/assets/img/author-image/1.jpg" class="avatar" alt="image">
                                                <b class="fn">John Jones</b>
                                                <span class="says">says:</span>
                                            </div>

                                            <div class="comment-metadata">
                                                <a href="#">
                                                    April 24, 2021 at 10:59 am
                                                </a>
                                            </div>
                                        </footer>

                                        <div class="comment-content">
                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                        </div>

                                        <div class="reply">
                                            <a href="#" class="comment-reply-link">Reply</a>
                                        </div>
                                    </div>

                                    <ol class="children">
                                        <li class="comment">
                                            <div class="comment-body">
                                                <footer class="comment-meta">
                                                    <div class="comment-author vcard">
                                                        <img src="~/assets/img/author-image/2.jpg" class="avatar" alt="image">
                                                        <b class="fn">Steven Smith</b>
                                                        <span class="says">says:</span>
                                                    </div>
        
                                                    <div class="comment-metadata">
                                                        <a href="#">
                                                            April 24, 2021 at 10:59 am
                                                        </a>
                                                    </div>
                                                </footer>
        
                                                <div class="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>
        
                                                <div class="reply">
                                                    <a href="#" class="comment-reply-link">Reply</a>
                                                </div>
                                            </div>
                                        </li>

                                        <ol class="children">
                                            <li class="comment">
                                                <div class="comment-body">
                                                    <footer class="comment-meta">
                                                        <div class="comment-author vcard">
                                                            <img src="~/assets/img/author-image/3.jpg" class="avatar" alt="image">
                                                            <b class="fn">Sarah Taylor</b>
                                                            <span class="says">says:</span>
                                                        </div>
            
                                                        <div class="comment-metadata">
                                                            <a href="#">
                                                                April 24, 2021 at 10:59 am
                                                            </a>
                                                        </div>
                                                    </footer>
            
                                                    <div class="comment-content">
                                                        <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                    </div>
            
                                                    <div class="reply">
                                                        <a href="#" class="comment-reply-link">Reply</a>
                                                    </div>
                                                </div>
                                            </li>
                                        </ol>
                                    </ol>
                                </li>

                                <li class="comment">
                                    <div class="comment-body">
                                        <footer class="comment-meta">
                                            <div class="comment-author vcard">
                                                <img src="~/assets/img/author-image/4.jpg" class="avatar" alt="image">
                                                <b class="fn">John Doe</b>
                                                <span class="says">says:</span>
                                            </div>

                                            <div class="comment-metadata">
                                                <a href="#">
                                                    April 24, 2021 at 10:59 am
                                                </a>
                                            </div>
                                        </footer>

                                        <div class="comment-content">
                                            <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                        </div>

                                        <div class="reply">
                                            <a href="#" class="comment-reply-link">Reply</a>
                                        </div>
                                    </div>

                                    <ol class="children">
                                        <li class="comment">
                                            <div class="comment-body">
                                                <footer class="comment-meta">
                                                    <div class="comment-author vcard">
                                                        <img src="~/assets/img/author-image/1.jpg" class="avatar" alt="image">
                                                        <b class="fn">James Anderson</b>
                                                        <span class="says">says:</span>
                                                    </div>
        
                                                    <div class="comment-metadata">
                                                        <a href="#">
                                                            April 24, 2021 at 10:59 am
                                                        </a>
                                                    </div>
                                                </footer>
        
                                                <div class="comment-content">
                                                    <p>Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen.</p>
                                                </div>
        
                                                <div class="reply">
                                                    <a href="#" class="comment-reply-link">Reply</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ol>
                                </li>
                            </ol>

                            <div class="comment-respond">
                                <h3 class="comment-reply-title">Leave a Reply</h3>

                                <form class="comment-form">
                                    <p class="comment-notes">
                                        <span id="email-notes">Your email address will not be published.</span>
                                        Required fields are marked 
                                        <span class="required">*</span>
                                    </p>
                                    <p class="comment-form-comment">
                                        <label>Comment</label>
                                        <textarea name="comment" id="comment" cols="45" rows="5" maxlength="65525" required="required"></textarea>
                                    </p>
                                    <p class="comment-form-author">
                                        <label>Name <span class="required">*</span></label>
                                        <input type="text" id="author" name="author" required="required">
                                    </p>
                                    <p class="comment-form-email">
                                        <label>Email <span class="required">*</span></label>
                                        <input type="email" id="email" name="email" required="required">
                                    </p>
                                    <p class="comment-form-url">
                                        <label>Website</label>
                                        <input type="url" id="url" name="url">
                                    </p>
                                    <p class="comment-form-cookies-consent">
                                        <input type="checkbox" value="yes" name="wp-comment-cookies-consent" id="wp-comment-cookies-consent">
                                        <label for="wp-comment-cookies-consent">Save my name, email, and website in this browser for the next time I comment.</label>
                                    </p>
                                    <p class="form-submit">
                                        <input type="submit" name="submit" id="submit" class="submit" value="Post Comment">
                                    </p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12">
                    <BlogSidebar />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BlogSidebar from '../Common/BlogSidebar'

export default {
    name: 'BlogDetails',
    components: {
        BlogSidebar
    },
    props: ['detailsContent'],
    data: function () {
        return {
            details: this.detailsContent
        }
    }
}
</script>