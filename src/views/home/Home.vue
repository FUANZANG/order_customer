<template>
  <div class="well">
    <!-- 开屏广告 -->
    <div class="ad" v-show="isShow" @click="goTo">
      <button class="jump" @click.stop="jump()">跳过 {{ timer }}</button>
    </div>
    <!-- 首页标题 -->
    <strong>欢迎点餐</strong>
    <!-- 轮播图 -->
    <div class="swipe">
      <van-swipe
        class="my-swipe"
        :autoplay="3000"
        indicator-color="white"
        duration="1000"
      >
        <van-swipe-item v-for="(item, index) in lunBt" :key="index">
          <img class="itemImg" :src="item.img" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 左侧列表 -->
    <div class="list">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          :title="item.name"
          v-for="(item, index) in leftList"
          :key="index"
          @click="change(item)"
        />
      </van-sidebar>
      <!-- 右侧详情 -->
      <div class="ac">
        <span class="title">招牌牛蛙</span>
        <div class="cai" v-for="(item, index) in rightList" :key="index">
          <div class="caiLeft" @click="xiangQingClick(item)">
            <img :src="item.img" alt="" />
          </div>
          <div class="caiCenter" @click="xiangQingClick(item)">
            <strong>{{ item.name }}</strong>
            <span class="caiShuoming">{{ item.explain }}</span>
            <div>
              <span>销量：{{ item.sales_volume }}</span>
              <span class="price">￥{{ item.price }}</span>
            </div>
          </div>
          <div class="caiRight" @click="addToShopCar(item)">
            <img src="~assets/img/add.png" alt="" />
          </div>
        </div>
      </div>
    </div>
    <!-- 菜品详情面板 -->
    <van-action-sheet v-model="xiangQingShow" title=" ">
      <div class="content">
        <div class="xImg"><img :src="xqImg" alt="" /></div>
        <div class="xName">{{ xqName }}</div>
        <div class="xPrice"><i>￥</i>{{ xqPrice }}</div>
        <div class="xSales">销量：{{ xqSales }}</div>
        <div class="xContent">{{ xqContent }}</div>
        <div class="xShuoming">
          <i>说明</i>
          <div class="shuoMing">
            {{ xqShuoming }}
          </div>
        </div>
        <van-button
          round
          type="info"
          size="large"
          color="firebrick"
          class="jrgwc"
          @click="addShopCar"
          >加入购物车</van-button
        >
      </div>
    </van-action-sheet>
  </div>
</template>

<script>
import { request } from "network/request";
export default {
  name: "Home",
  data() {
    return {
      activeKey: 0,
      xiangQingShow: false,
      xqName: "",
      xqPrice: "",
      xqSales: "",
      xqContent: "",
      xqShuoming: "",
      xqImg: "",
      xqAddCart: {},
      leftList: [],
      rightList: [],
      lunBt: [],
      timer: 5,
      Timer: null,
      isShow: true,
      date1: 0,
      date2: 0,
    };
  },
  methods: {
    // 开屏推送
    // clickJump() {
    // if (typeof Storage !== "undefined") {
    // } else {
    //   alert("浏览器不支持Web Storage");
    // }
    // },
    getDates() {
      this.dates = new Date().getDate();
    },
    jump() {
      this.isShow = false;
      this.getDates();
      console.log(this.dates);
      localStorage.setItem("dates", this.dates);
    },
    adShow() {
      this.Timer = setInterval(() => {
        this.timer--;
        if (this.timer == 0) {
          this.isShow = false;
          this.getDates();
          console.log(this.dates);
          localStorage.setItem("dates", this.dates);
          clearInterval(this.Timer);
        }
      }, 1000);
    },
    goTo() {
      window.open("https://www.baidu.com", "_blank");
    },
    change(item) {
      this.rightLis(item.id);
    },
    xiangQingClick(item) {
      this.xiangQingShow = true;
      console.log(item);
      this.xqName = item.name;
      this.xqPrice = item.price;
      this.xqSales = item.sales_volume;
      this.xqContent = item.explain;
      this.xqShuoming = item.content;
      this.xqImg = item.img;
      this.xqAddCart = item;
    },
    addToShopCar(item) {
      this.$store.commit("addCart", item);
      console.log(this.$store.state.cart);
      this.$toast(item.name + "加入购物车");
    },
    addShopCar() {
      this.$store.commit("addCart", this.xqAddCart);
      this.xiangQingShow = false;
      this.$toast(this.xqAddCart.name + "加入购物车");
    },
    lunBT() {
      request({
        url: "/?c=banner&a=index",
      })
        .then((res) => {
          // console.log(res);
          this.lunBt = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    leftLis() {
      request({
        url: "/?c=type&a=index",
      })
        .then((res) => {
          // console.log(res);
          this.leftList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    rightLis(left_id) {
      request({
        url: "/?c=food&a=index",
        method: "get",
        params: {
          type_id: left_id,
        },
      })
        .then((res) => {
          // console.log(res);
          this.rightList = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  created() {
    this.lunBT();
    this.leftLis();
    this.rightLis(1);
  },
  mounted() {
    this.date1 = new Date().getDate();
    this.date3 = this.date1.toString();
    this.date2 = localStorage.getItem("dates");
    console.log(this.date1);
    console.log(this.date2);
    if (this.date2 == this.date3) {
      this.isShow = false;
      console.log(1111);
    } else {
      this.isShow = true;
      console.log(2222);
    }
    this.adShow();
  },
};
</script>

<style scoped>
@import "~assets/css/home.css";
@import url("~assets/css/ad.css");
</style>