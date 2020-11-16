<template>
  <div class="feature">
    <a href="http://act.mogujie.com/zzlx67">
      <img src="~@/assets/images/home/recommend_bg.jpg" @load="featureImgLoad">
    </a>
  </div>
</template>

<script>
export default {
  name: "HomeFeature",
  methods: {
    featureImgLoad() {
      this.$emit("featureImgLoad");
    }
  }
}
</script>

<style scoped>
.feature img {
  width: 100%;
}
</style>
