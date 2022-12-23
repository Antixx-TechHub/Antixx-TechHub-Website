<template>
    <div class="pricing-area bg-gradient-color ptb-100">
        <div class="container">
            <div class="pricing-tabs">
                <div 
                    class="row align-items-center"
                    v-if="tabs !== null"
                >
                    <div class="col-lg-4 col-md-12">
                        <div class="pricing-section-title">
                            <span class="sub-title">{{tabs.subtitle}}</span>
                            <h2>{{tabs.heading}}</h2>
                            <div class="tabs">
                                <ul class="tabs__header">
                                    <li 
                                        class="tabs__header-item" 
                                        v-for="tab in tabs.pricingTable" 
                                        v-on:click="selectTab (tab.id)" 
                                        v-bind:class="{ 'active': activeTab == tab.id }"
                                        :key="tab.id"
                                    >
                                        {{tab.title}}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-8 col-md-12">
                        <div class="tab-content">
                            <div class="tabs__container">
                                <div 
                                    class="tabs__list"
                                    ref='tabsList'
                                >
                                    <div 
                                        class="tabs__list-tab"
                                        v-for="tab in tabs.pricingTable"
                                        v-bind:class="{ 'active': activeTab == tab.id }"
                                        :key="tab.id"
                                    >
                                        <div class="row justify-content-center">
                                            <div 
                                                class="col-lg-6 col-md-6 col-sm-6"
                                                v-for="pricing in tab.pricingTab"
                                                :key="pricing.id"
                                            >
                                                <div class="single-pricing-table">
                                                    <div class="title">
                                                        <h3>{{pricing.title}}</h3>
                                                        <p>{{pricing.desc}}</p>
                                                    </div>
                                                    <div class="price">
                                                        ${{pricing.price}} <span>/{{pricing.period}}</span>
                                                    </div>
                                                    <router-link to="/contact" class="default-btn">
                                                        Purchase Plan
                                                    </router-link>
                                                    <ul class="features-list">
                                                        <li
                                                            v-for="features in pricing.pricingFeatures"
                                                            :key="features.id"
                                                        >
                                                            <i :class="features.icon"></i> 
                                                            {{features.list}}
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-12 col-md-12">
                        <div class="see-more-pricing">
                            <router-link :to="tabs.btnLink" class="link-btn">{{tabs.btnText}}</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="shape7"><img src="../../assets/images/shape/shape6.png" alt="shape"></div>
        <div class="shape8"><img src="../../assets/images/shape/shape7.png" alt="shape"></div>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Pricing',
    data () {
        return {
            tabs: null,
            activeTab: 1,
            offsetRight: 0,
        }
    },
    methods: {
        selectTab (id) {
            let tabsList = this.$refs.tabsList
            this.activeTab = id
            this.offsetRight = tabsList.clientWidth * (id - 1)
            tabsList.style.right = this.offsetRight + 'px'
        }
    },
    created: async function (){
        const response = await axios.get('http://localhost:1337/api/pricing?populate=pricingTable.pricingTab.pricingFeatures')
        const { data: {attributes} } = response.data
        this.tabs = attributes
    },
}
</script>