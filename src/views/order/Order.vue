<template>
  <div>
    <div class="orderTit">
      <span>订单详情</span>
    </div>
    <div v-if="isKon">
      <div class="xCart" v-for="(item, index) in cartLis" :key="index">
        <img :src="item.img" alt="" />
        <div class="xcName">{{ item.name }}</div>
        <div class="xcIng">{{ item.explain }}</div>
        <div class="xNum">数量：{{ item.num }}</div>
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
import { request } from "network/request";
export default {
  name: "Order",
  data() {
    return {
      isKon: false,
      caiList: [],
    };
  },
  methods: {},
  created() {
    if (this.caiList.length !== 0) {
      this.isKon = true;
      request({
        url: "/?c=order&a=index",
        method: "get",
        params: {
          desk_id: 1,
        },
      });
    } else {
      this.isKon = false;
    }
  },
};
</script>

<style scoped>
@import "~assets/css/cart.css";
</style>