<template>
  <router-view v-slot="{ Component }">
    <keep-alive exclude="Detail">
      <component :is="Component"/>
    </keep-alive>
  </router-view>
  <main-tab-bar/>
</template>

<script>
import MainTabBar from "@/components/context/mainTabbar/MainTabBar";

export default {
  components: {MainTabBar}
}

</script>

<style>
@import "assets/css/base.css";
</style>
