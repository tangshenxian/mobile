<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll';

export default {
  name: "Scroll",
  data() {
    return {
      scroll: null,
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      probeType: 3,
      pullUpLoad: true
    });
    console.log(this.scroll);

    this.scroll.on('scroll', (position) => {

    });

    this.scroll.on('pullingUp', () => {
      console.log("上拉加载更多");
    });
  },
  methods: {
    refresh() {
      this.scroll.refresh();
    }
  }
}
</script>

<style scoped>

</style>
