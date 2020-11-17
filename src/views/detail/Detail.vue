<template>
  <div id="detail">
    <detail-nav-bar/>
  </div>
</template>

<script>
import DetailNavBar from "@/views/detail/detailChildComps/DetailNavBar";

export default {
  name: "Detail",
  components: {DetailNavBar},
  data() {
    return {
      id: null
    }
  },
  created() {
    console.log(this.$route.query);
    this.id = this.$route.query.id;
  }
}
</script>

<style scoped>

</style>
