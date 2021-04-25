<template>
  <div>
    <div class="orderTit">
      <span>订单详情</span>
    </div>
    <div v-if="isKon">
      <div class="xCart" v-for="(item, index) in caiList" :key="index">
        <img :src="item.img" alt="" />
        <div class="xcName">{{ item.name }}</div>
        <!-- <div class="xcIng">{{ item.explain }}</div> -->
        <div class="xNum">数量：{{ item.num }}</div>
        <div class="xcPrice">￥{{ item.order_price }}</div>
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
  methods: {
    caiLis() {
      request({
        url: "/?c=order&a=index",
        method: "get",
        params: {
          desk_id: 1,
        },
      })
        .then((res) => {
          console.log(res.data.data.order.order_detail);
          if (res.data.error == 1) {
            this.isKon = true;
            this.caiList = res.data.data.order.order_detail;
          } else {
            this.isKon = false;
          }
        })
        .catch((err) => {});
    },
  },
  created() {
    this.caiLis();
  },
};
</script>

<style scoped>
@import "~assets/css/cart.css";
</style>