<template>
  <tab-bar>
    <tab-bar-item path="/home">
      <img slot="item-icon" src="~assets/img/icon01.png" alt="" />
      <img slot="item-icon-active" src="~assets/img/icon01_active.png" alt="" />
      <div slot="item-text">首页</div>
    </tab-bar-item>
    <tab-bar-item path="/Cart">
      <img slot="item-icon" src="~assets/img/icon02.png" alt="" />
      <img slot="item-icon-active" src="~assets/img/icon02_active.png" alt="" />
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/Order">
      <img slot="item-icon" src="~assets/img/icon03.png" alt="" />
      <img slot="item-icon-active" src="~assets/img/icon03_active.png" alt="" />
      <div slot="item-text">订单</div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
import TabBar from "components/common/tabbar/TabBar.vue";
import TabBarItem from "components/common/tabbar/TabBarItem.vue";

export default {
  name: "MainTabBar",
  components: {
    TabBar,
    TabBarItem,
  },
};
</script>

<style>
</style>