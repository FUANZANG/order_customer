<template>
  <div>
    <div class="cCartTit">
      <span @click="backClick"><img src="~assets/img/back.png" alt="" /></span>
      确认订单
    </div>
    <div style="height: 18rem; overflow: auto">
      <div class="xCart" v-for="(item, index) in caiList" :key="index">
        <img :src="item.img" alt="" />
        <div class="xcName">{{ item.name }}</div>
        <div class="xcIng">{{ item.ingredients }}</div>
        <div class="xNum">数量：{{ item.count }}</div>
        <div class="xcPrice">￥{{ item.price }}</div>
      </div>
    </div>

    <div class="cjieSuan">
      <div class="cjSleft"><i>￥</i>{{ this.$store.state.price }}</div>
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
      caiList: [],
    };
  },
  created() {
    this.caiList = this.$store.state.cart.filter((item) => {
      return item.checked;
    });
  },
  // 生命周期函数
  // beforeCreate() {},
  // created() {},
  // beforeMount() {},
  // mounted() {},
  // beforeUpdate() {},
  // updated() {},
  // beforeDestroy() {},
  // destroyed() {},
  // // 如果加了keep-alive 多两个函数
  // activated() {},
  // deactivated() {},

  methods: {
    backClick() {
      this.$router.go(-1);
    },
    isKan() {
      this.$store.commit("cleanCheck");
      // console.warn(this.$store.state.cart);

      Dialog.confirm({
        title: "订单已提交",
        message: "是否查看订单",
      })
        .then(() => {
          this.$router.replace("/Order");
          this.$store.state.price = "0.00";
        })
        .catch(() => {
          this.$router.replace("/Cart");
          this.$store.state.price = "0.00";
        });
    },
  },
};
</script>

<style>
@import "~assets/css/cart.css";
</style>