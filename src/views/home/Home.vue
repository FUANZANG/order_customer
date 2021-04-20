<template>
  <div class="well">
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
          <img class="itemImg" :src="item" alt=""
        /></van-swipe-item>
      </van-swipe>
    </div>
    <!-- 左侧列表 -->
    <div class="list">
      <van-sidebar v-model="activeKey" @change="onChange">
        <van-sidebar-item title="招牌牛蛙" />
        <van-sidebar-item title="秘制烤鱼" />
        <van-sidebar-item title="内有玄鸡" />
        <van-sidebar-item title="必点配菜" />
        <van-sidebar-item title="特色川菜" />
        <van-sidebar-item title="" />
      </van-sidebar>
      <!-- 右侧详情 -->
      <div class="ac" v-show="currentIndex == 0">
        <span class="title">招牌牛蛙</span>
        <div class="cai" v-for="(item, index) in caiList" :key="index">
          <div class="caiLeft" @click="xiangQingClick(item)">
            <img :src="item.img" alt="" />
          </div>
          <div class="caiCenter" @click="xiangQingClick(item)">
            <strong>{{ item.name }}</strong>
            <span class="caiShuoming">{{ item.ingredients }}</span>
            <div>
              <span>销量：{{ item.sales }}</span>
              <span class="price">￥{{ item.price }}</span>
            </div>
          </div>
          <div class="caiRight" @click="addToShopCar(item)">
            <img src="~assets/img/add.png" alt="" />
          </div>
        </div>
        <div class="kong">再怎么滑动也没有了，到底啦~</div>
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
export default {
  name: "Home",
  data() {
    return {
      activeKey: 0,
      currentIndex: 0,
      xiangQingShow: false,
      xqName: "",
      xqPrice: "",
      xqSales: "",
      xqContent: "",
      xqShuoming: "",
      xqImg: "",
      xqAddCart: {},
      caiList: [
        {
          id: 1,
          img:
            "https://img0.baidu.com/it/u=1580567929,1252970303&fm=26&fmt=auto&gp=0.jpg",
          name: "干煸牛蛙",
          ingredients: "干辣椒 鸡腿肉",
          sales: "6",
          price: "38.00",
          jianJie: "主要配料是干辣椒 青蛙头",
          shuoMing:
            "牛蛙去皮去内脏剪去指甲,一定要去除背上的中骨,剪成块状；蒜和香菜除外的蔬菜切成片,油锅炸8分熟；牛蛙用姜片绍酒盐腌制20分钟后拍上面粉油锅炸九分熟。",
        },
        {
          id: 2,
          img:
            "https://img0.baidu.com/it/u=1580567929,1252970303&fm=26&fmt=auto&gp=0.jpg",
          name: "清蒸牛蛙",
          ingredients: "干辣椒 鸡腿肉",
          sales: "5",
          price: "40.00",
          jianJie: "主要配料是干辣椒 青蛙头",
          shuoMing:
            "牛蛙去皮去内脏剪去指甲,一定要去除背上的中骨,剪成块状；蒜和香菜除外的蔬菜切成片,油锅炸8分熟；牛蛙用姜片绍酒盐腌制20分钟后拍上面粉油锅炸九分熟。",
        },
        {
          id: 3,
          img:
            "https://img0.baidu.com/it/u=1580567929,1252970303&fm=26&fmt=auto&gp=0.jpg",
          name: "爆炒牛蛙",
          ingredients: "干辣椒 鸡腿肉",
          sales: "7",
          price: "39.00",
          jianJie: "主要配料是干辣椒 青蛙头",
          shuoMing:
            "牛蛙去皮去内脏剪去指甲,一定要去除背上的中骨,剪成块状；蒜和香菜除外的蔬菜切成片,油锅炸8分熟；牛蛙用姜片绍酒盐腌制20分钟后拍上面粉油锅炸九分熟。",
        },
        {
          id: 4,
          img:
            "https://img0.baidu.com/it/u=1580567929,1252970303&fm=26&fmt=auto&gp=0.jpg",
          name: "油炸牛蛙",
          ingredients: "干辣椒 鸡腿肉",
          sales: "7",
          price: "39.00",
          jianJie: "主要配料是干辣椒 青蛙头",
          shuoMing:
            "牛蛙去皮去内脏剪去指甲,一定要去除背上的中骨,剪成块状；蒜和香菜除外的蔬菜切成片,油锅炸8分熟；牛蛙用姜片绍酒盐腌制20分钟后拍上面粉油锅炸九分熟。",
        },
        {
          id: 5,
          img:
            "https://img0.baidu.com/it/u=1580567929,1252970303&fm=26&fmt=auto&gp=0.jpg",
          name: "红烧牛蛙",
          ingredients: "干辣椒 鸡腿肉",
          sales: "7",
          price: "39.00",
          jianJie: "主要配料是干辣椒 青蛙头",
          shuoMing:
            "牛蛙去皮去内脏剪去指甲,一定要去除背上的中骨,剪成块状；蒜和香菜除外的蔬菜切成片,油锅炸8分熟；牛蛙用姜片绍酒盐腌制20分钟后拍上面粉油锅炸九分熟。",
        },
        {
          id: 6,
          img:
            "https://img0.baidu.com/it/u=1580567929,1252970303&fm=26&fmt=auto&gp=0.jpg",
          name: "焖牛蛙腿",
          ingredients: "干辣椒 鸡腿肉",
          sales: "7",
          price: "39.00",
          jianJie: "主要配料是干辣椒 青蛙头",
          shuoMing:
            "牛蛙去皮去内脏剪去指甲,一定要去除背上的中骨,剪成块状；蒜和香菜除外的蔬菜切成片,油锅炸8分熟；牛蛙用姜片绍酒盐腌制20分钟后拍上面粉油锅炸九分熟。",
        },
        {
          id: 7,
          img:
            "https://img0.baidu.com/it/u=1580567929,1252970303&fm=26&fmt=auto&gp=0.jpg",
          name: "溜牛蛙头",
          ingredients: "干辣椒 鸡腿肉",
          sales: "7",
          price: "39.00",
          jianJie: "主要配料是干辣椒 青蛙头",
          shuoMing:
            "牛蛙去皮去内脏剪去指甲,一定要去除背上的中骨,剪成块状；蒜和香菜除外的蔬菜切成片,油锅炸8分熟；牛蛙用姜片绍酒盐腌制20分钟后拍上面粉油锅炸九分熟。",
        },
        {
          id: 8,
          img:
            "https://img0.baidu.com/it/u=1580567929,1252970303&fm=26&fmt=auto&gp=0.jpg",
          name: "生牛蛙",
          ingredients: "干辣椒 鸡腿肉",
          sales: "7",
          price: "39.00",
          jianJie: "主要配料是干辣椒 青蛙头",
          shuoMing:
            "牛蛙去皮去内脏剪去指甲,一定要去除背上的中骨,剪成块状；蒜和香菜除外的蔬菜切成片,油锅炸8分熟；牛蛙用姜片绍酒盐腌制20分钟后拍上面粉油锅炸九分熟。",
        },
      ],
      lunBt: [
        "https://img0.baidu.com/it/u=3545834692,4156954932&fm=26&fmt=auto&gp=0.jpg",
        "https://img2.baidu.com/it/u=1725340245,2397117074&fm=26&fmt=auto&gp=0.jpg",
        "https://img0.baidu.com/it/u=3545834692,4156954932&fm=26&fmt=auto&gp=0.jpg",
        "https://img0.baidu.com/it/u=1241842266,669455961&fm=26&fmt=auto&gp=0.jpg",
      ],
    };
  },
  methods: {
    onChange(index) {
      // console.log(index);
      this.currentIndex = index;
    },
    xiangQingClick(item) {
      this.xiangQingShow = true;
      console.log(item);
      this.xqName = item.name;
      this.xqPrice = item.price;
      this.xqSales = item.sales;
      this.xqContent = item.jianJie;
      this.xqShuoming = item.shuoMing;
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
  },
};
</script>

<style scoped>
@import "~assets/css/home.css";
</style>