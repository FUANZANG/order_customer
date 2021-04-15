<template>
  <div id="app">
    <keep-alive>
      <router-view />
    </keep-alive>
    <main-tab-bar v-if="$route.meta.showTab" />
  </div>
</template>

<script>
import MainTabBar from "components/content/mainTabBar/MainTabBar.vue";

export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>

<style scoped>
@import "assets/css/reset.css";
</style>
