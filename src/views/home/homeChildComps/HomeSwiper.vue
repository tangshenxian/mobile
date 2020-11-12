<template>
  <swiper>
    <swiper-item v-for="item in banners">
      <div class="slide">
        <a :href="item.link">
          <img :src="item.image">
        </a>
      </div>
    </swiper-item>
  </swiper>
</template>

<script>
import {Swiper, SwiperItem} from "@/components/common/swiper";

export default {
  name: "HomeSwiper",
  props: {
    banners: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {Swiper, SwiperItem},
}
</script>

<style scoped>
.slide {
  width: 100%;
  flex-shrink: 0;
}

.slide img {
  width: 100%;
}
</style>
