<template>
    <div class="widget-area" id="secondary">
        <div class="widget widget_search">
            <form class="search-form">
                <label>
                    <span class="screen-reader-text">Search for:</span>
                    <input type="search" class="search-field" placeholder="Search...">
                </label>
                <button type="submit"><i class='bx bx-search-alt'></i></button>
            </form>
        </div>

        <!-- <div class="widget widget_striki_posts_thumb">
            <h3 class="widget-title">Popular Posts</h3>

            <div class="item">
                <NuxtLink to="/single-blog" class="thumb">
                    <span class="fullimage cover bg1" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <time datetime="2022-06-30">June 10, 2022</time>
                    <h4 class="title usmall"><NuxtLink to="/single-blog">Making Peace With The Feast Or Famine Of Freelancing</NuxtLink></h4>
                </div>

                <div class="clear"></div>
            </div>

            <div class="item">
                <NuxtLink to="/single-blog" class="thumb">
                    <span class="fullimage cover bg2" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <time datetime="2022-06-30">June 21, 2022</time>
                    <h4 class="title usmall"><NuxtLink to="/single-blog">I Used The Web For A Day On A 50 MB Budget</NuxtLink></h4>
                </div>

                <div class="clear"></div>
            </div>

            <div class="item">
                <NuxtLink to="/single-blog" class="thumb">
                    <span class="fullimage cover bg3" role="img"></span>
                </NuxtLink>
                <div class="info">
                    <time datetime="2022-06-30">June 30, 2022</time>
                    <h4 class="title usmall"><NuxtLink to="/single-blog">How To Create A Responsive Popup Gallery?</NuxtLink></h4>
                </div>

                <div class="clear"></div>
            </div>
        </div>

        <div class="widget widget_categories">
            <h3 class="widget-title">Categories</h3>

            <ul>
                <li><a href="#">Business</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Technology</a></li>
                <li><a href="#">Tips</a></li>
                <li><a href="#">Uncategorized</a></li>
            </ul>
        </div>

        <div class="widget widget_archive">
            <h3 class="widget-title">Archives</h3>

            <ul>
                <li><a href="#">May 2022</a></li>
                <li><a href="#">April 2022</a></li>
                <li><a href="#">June 2022</a></li>
            </ul>
        </div>

        <div class="widget widget_meta">
            <h3 class="widget-title">Meta</h3>

            <ul>
                <li><a href="#">Log in</a></li>
                <li><a href="#">Entries <abbr title="Really Simple Syndication">RSS</abbr></a></li>
                <li><a href="#">Comments <abbr title="Really Simple Syndication">RSS</abbr></a></li>
                <li><a href="#">WordPress.org</a></li>
            </ul>
        </div> -->

        <div class="widget widget_tag_cloud">
            <h3 class="widget-title">Tags</h3>

            <div class="tagcloud">
                <a href="#">next Js <span class="tag-link-count"> (1)</span></a>
                <a href="#">Strapi <span class="tag-link-count"> (1)</span></a>
                <a href="#">react Native <span class="tag-link-count"> (1)</span></a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'BlogSidebar'
}
</script>