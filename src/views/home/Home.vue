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
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";
import HomeSwiper from "@/views/home/homeChildComps/HomeSwiper";
import HomeRecommend from "@/views/home/homeChildComps/HomeRecommend";
import HomeFeature from "@/views/home/homeChildComps/HomeFeature";
import {getHomeMultidata} from "@/network/home";

export default {
  name: "Home",
  components: {HomeFeature, HomeRecommend, NavBar, HomeSwiper},
  data() {
    return {
      banners: [],
      recommends: [],
    }
  },
  created() {
    getHomeMultidata().then(res => {
      console.log(res);
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    }).catch(error => {

    });
  },
  methods: {}
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
</style>
