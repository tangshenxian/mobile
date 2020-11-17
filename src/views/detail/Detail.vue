<template>
  <div id="detail">
    <detail-nav-bar @click="navBarClick" ref="nav"/>
    <scroll class="content"
            ref="scroll"
            @position="backTop"
            :probe-type="3"
            :pull-up-load="true">
      <detail-swiper :top-images="topImages" @detailImgLoad="detailImgLoad"/>
      <div class="shabi">废物玩意自己看</div>
      <div>{{ result }}</div>
    </scroll>
    <back-top @click="backTopClick" v-show="isShowBackTop"/>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/detailChildComps/DetailNavBar";
import DetailSwiper from "@/views/detail/detailChildComps/DetailSwiper";

import Scroll from "@/components/common/scroll/Scroll";
import BackTop from "@/components/context/backTop/BackTop";

import {getDetail} from "@/network/detail";

export default {
  name: "Detail",
  components: {DetailNavBar, DetailSwiper, Scroll, BackTop},
  data() {
    return {
      id: null,
      topImages: [],
      result: {},
      isShowBackTop: false
    }
  },
  created() {
    this.id = this.$route.query.id;

    getDetail(this.id).then(res => {
      this.topImages = res.result.itemInfo.topImages;
      this.result = res.result;
    })
  },
  methods: {
    detailImgLoad() {
      this.$refs.scroll.refresh();
    },

    backTopClick(){
      this.$refs.scroll.scrollTo(0, 0, 500);
    },

    backTop(position) {
      this.isShowBackTop = (-position.y) >= 1000;
    },

    navBarClick(){
      const currentIndex = this.$refs.nav.currentIndex;
      this.$refs.scroll.scrollTo(0, - currentIndex * 1000, 300);
    }
  }
}
</script>

<style scoped>
.shabi {
  color: red;
  font-size: 20px;
  text-align: center;
  margin: 20px 0;
}

.content {
  position: absolute;
  overflow: hidden;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
