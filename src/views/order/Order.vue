<template>
  <div>
    <div class="orderTit">
      <span>订单详情</span>
    </div>
    <div v-if="isKon">
      <div class="xCart" v-for="(item, index) in caiList" :key="index">
        <img :src="item.img" alt="" />
        <div class="xcName">{{ item.name }}</div>
        <div class="xcIng">{{ item.ingredients }}</div>
        <div class="xNum">数量：{{ item.sales }}</div>
        <div class="xcPrice">￥{{ item.price }}</div>
      </div>
    </div>
    <div class="orderNone" v-else>
      <img src="~assets/img/order.png" alt="" />
      <p>你还没有订单，去挑点什么吧~</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Order",
  data() {
    return {
      isKon: false,
      caiList: [],
    };
  },
  created() {
    if (this.caiList.length !== 0) {
      this.isKon = true;
      // this.caiList =
    } else {
      this.isKon = false;
    }
  },
};
</script>

<style scoped>
@import "~assets/css/cart.css";
</style>