<template>
  <div class="tab-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon"></slot></div>
    <div v-else><slot name="item-icon-active"></slot></div>
    <div :style="activeColor"><slot name="item-text"></slot></div>
  </div>
</template>

<script>
export default {
  name: "TabBarItem",
  props: {
    path: String,
    activeStyle: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeColor() {
      return this.isActive ? { color: this.activeStyle } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.replace(this.path).catch((err) => {});
    },
  },
};
</script>

<style scoped>
.tab-bar-item {
  font-size: 0.4rem;
  flex: 1;
  text-align: center;
}
.tab-bar-item img {
  width: 1rem;
  height: 1rem;
  margin: 0.04rem 0;
  vertical-align: middle;
}
</style>