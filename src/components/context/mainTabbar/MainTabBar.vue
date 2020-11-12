<template>
  <div class="main-tab-bar">
    <tab-bar>
      <tab-bar-item path="/home">
        <template v-slot:item-icon>
          <img src="~@/assets/images/tabbar/home.svg"/>
        </template>
        <template v-slot:item-icon-active>
          <img src="~@/assets/images/tabbar/home-active.svg"/>
        </template>
        <template v-slot:item-text>
          <div>首页</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/cateGory">
        <template v-slot:item-icon>
          <img src="~@/assets/images/tabbar/category.svg"/>
        </template>
        <template v-slot:item-icon-active>
          <img src="~@/assets/images/tabbar/category-active.svg"/>
        </template>
        <template v-slot:item-text>
          <div>分类</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/car">
        <template v-slot:item-icon>
          <img src="~@/assets/images/tabbar/car.svg"/>
        </template>
        <template v-slot:item-icon-active>
          <img src="~@/assets/images/tabbar/car-active.svg"/>
        </template>
        <template v-slot:item-text>
          <div>购物车</div>
        </template>
      </tab-bar-item>
      <tab-bar-item path="/profile">
        <template v-slot:item-icon>
          <img src="~@/assets/images/tabbar/profile.svg"/>
        </template>
        <template v-slot:item-icon-active>
          <img src="~@/assets/images/tabbar/profile-active.svg"/>
        </template>
        <template v-slot:item-text>
          <div>我的</div>
        </template>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from "@/components/common/tabbar/TabBar";
import TabBarItem from "@/components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components: {TabBar, TabBarItem},
}
</script>

<style scoped>
img {
  width: 24px;
  height: 24px;
  margin-top: 3px;
  margin-bottom: 2px;
  vertical-align: middle;
}
</style>
