<template>
  <div>
    <div class="orderTit">
      <span>订单详情</span>
    </div>
    <div v-if="isKon">
      <div class="xCart" v-for="(item, index) in caiList" :key="index">
        <img
          src="https://dss2.bdstatic.com/6Ot1bjeh1BF3odCf/it/u=1779210353,712713214&fm=218&app=92&f=JPEG?w=121&h=75&s=DC202ED544557DD250AE347C0300D03B"
          alt=""
        />
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
      caiList: [
        {
          id: 1,
          img: "/img/laziji.465cab2b.png",
          name: "干煸牛蛙",
          ingredients: "干辣椒 鸡腿肉",
          sales: "6",
          price: "38.00",
          jianJie: "这是一个干煸牛蛙 主要配料是干辣椒 青蛙头",
          shuoMing:
            "牛蛙去皮去内脏剪去指甲,一定要去除背上的中骨,剪成块状；蒜和香菜除外的蔬菜切成片,油锅炸8分熟；牛蛙用姜片绍酒盐腌制20分钟后拍上面粉油锅炸九分熟。",
        },
      ],
    };
  },
  created() {
    if (this.caiList.length !== 0) {
      this.isKon = true;
    } else {
      this.isKon = false;
    }
  },
};
</script>

<style scoped>
@import "~assets/css/cart.css";
</style>