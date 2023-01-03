<template>
    <div class="page-title-area">
        <div class="container">
            <div class="page-title-content">
                <h2>{{pageTitle}}</h2>
                <p>{{pageDesc}}</p>
            </div>
        </div>
        <div class="pbdivider"></div>
        <div class="lines">
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
            <div class="line"></div>
        </div>
        <div class="banner-shape1">
            <img src="../../assets/img/shape9.png" alt="image">
        </div>
    </div>
</template>

<script>
export default {
    name: 'PageTitle',
    props: ['pageTitle', 'pageDesc']
}
</script>