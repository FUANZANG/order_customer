<template>
  <div>
    <div class="cCartTit">
      <span @click="backClick"><img src="~assets/img/back.png" alt="" /></span>
      确认订单
    </div>
    <div class="xCart" v-for="(item, index) in caiList" :key="index">
      <img :src="item.img" alt="" />
      <div class="xcName">{{ item.name }}</div>
      <div class="xcIng">{{ item.ingredients }}</div>
      <div class="xNum">数量：{{ item.sales }}</div>
      <div class="xcPrice">￥{{ item.price }}</div>
    </div>
    <div class="cjieSuan">
      <div class="cjSleft"><i>￥</i></div>
      <div class="cjSright" @click="isKan">提交订单</div>
    </div>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  name: "childCart",

  // mounted() {
  //   console.log(this.$aaa);
  // },
  data() {
    return {
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
  // 生命周期函数
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  // 如果加了keep-alive 多两个函数
  activated() {},
  deactivated() {},

  methods: {
    backClick() {
      this.$router.go(-1);
    },
    isKan() {
      Dialog.confirm({
        title: "订单已提交",
        message: "是否查看订单",
      })
        .then(() => {
          this.$router.replace("/Order");
        })
        .catch(() => {
          // on cancel
        });
    },
  },
};
</script>

<style>
@import "~assets/css/cart.css";
</style>