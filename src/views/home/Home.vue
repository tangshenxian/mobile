<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template v-slot:center>
        <div>
          购物街
        </div>
      </template>
    </nav-bar>
    <home-swiper :banners="banners"/>
    <HomeRecommend :recommends="recommends"/>
    <home-feature/>
    <tab-control :titles="tabControlText" class="tab-control" @tabClick="tabClick"/>
    <product-list :products="showProducts"/>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import TabControl from "@/components/context/tabControl/TabControl";
import ProductList from "@/components/context/productList/ProductList";

import HomeSwiper from "@/views/home/homeChildComps/HomeSwiper";
import HomeRecommend from "@/views/home/homeChildComps/HomeRecommend";
import HomeFeature from "@/views/home/homeChildComps/HomeFeature";
import {getHomeMultidata, getHomeProducts} from "@/network/home";

export default {
  name: "Home",
  components: {TabControl, HomeFeature, HomeRecommend, NavBar, HomeSwiper, ProductList},
  data() {
    return {
      banners: [],
      recommends: [],
      tabControlText: ['流行', '新款', '精选'],
      products: {
        "pop": {
          page: 0,
          list: []
        },
        "new": {
          page: 0,
          list: []
        },
        "sell": {
          page: 0,
          list: []
        }
      },
      currentType: 'pop',
    }
  },
  computed: {
    showProducts() {
      return this.products[this.currentType].list;
    }
  },
  created() {
    this.getHomeMultidata();
    this.getHomeProducts('pop');
    this.getHomeProducts('new');
    this.getHomeProducts('sell');
  },
  methods: {
    /**
     * 网络请求
     */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },

    getHomeProducts(type) {
      const page = this.products[type].page + 1;
      getHomeProducts(type, page).then(res => {
        console.log(res);
        this.products[type].list.push(...res.data.list);
        this.products[type].page += 1;
      });
    },

    /**
     * 事件监听
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = 'pop';
          break;
        case 1:
          this.currentType = 'new';
          break;
        case 2:
          this.currentType = 'sell';
          break;
      }
    }
  }
}
</script>

<style scoped>
#home {
  padding-top: 44px;
}

.home-nav {
  background-color: var(--color-tint);
  color: #f6f6f6;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.tab-control {
  position: sticky;
  top: 44px;
  z-index: 9;
}
</style>
