<template>
  <div id="detail">
    <detail-nav-bar/>
    <detail-swiper :top-images="topImages"/>
    <div class="shabi">废物玩意自己看</div>
    <div>{{ result }}</div>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/detailChildComps/DetailNavBar";
import DetailSwiper from "@/views/detail/detailChildComps/DetailSwiper";

import {getDetail} from "@/network/detail";

export default {
  name: "Detail",
  components: {DetailNavBar, DetailSwiper},
  data() {
    return {
      id: null,
      topImages: [],
      result: {}
    }
  },
  created() {
    this.id = this.$route.query.id;

    getDetail(this.id).then(res => {
      this.topImages = res.result.itemInfo.topImages;
      this.result = res.result;
    })
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
</style>
