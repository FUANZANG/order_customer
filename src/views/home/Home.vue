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
        <van-swipe-item
          ><img
            class="itemImg"
            src="//i0.hdslb.com/bfs/feed-admin/f19665f6b7c4053af3b25b44c0649cd9ca6e27bc.jpg@880w_388h_1c_95q"
            alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img
            class="itemImg"
            src="https://img0.baidu.com/it/u=3545834692,4156954932&fm=26&fmt=auto&gp=0.jpg"
            alt=""
        /></van-swipe-item>
        <van-swipe-item
          ><img
            class="itemImg"
            src="https://img2.baidu.com/it/u=1725340245,2397117074&fm=26&fmt=auto&gp=0.jpg"
            alt="" /></van-swipe-item
        ><van-swipe-item
          ><img
            class="itemImg"
            src="https://img0.baidu.com/it/u=1241842266,669455961&fm=26&fmt=auto&gp=0.jpg"
            alt=""
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
          <div class="caiRight">
            <button class="more">+</button>
          </div>
        </div>
        <div class="kong">再怎么滑动也没有了，到底啦~</div>
      </div>
      <div class="ac" v-show="currentIndex == 1">
        <span class="title">秘制烤鱼</span>
        <div class="cai" v-for="item in 9" :key="item">
          <div class="caiLeft"><img src="~assets/img/laziji.png" alt="" /></div>
          <div class="caiCenter">
            <strong>豆豉烤鱼</strong>
            <span class="caiShuoming">干辣椒 鸡腿肉</span>
            <div><span>销量：6</span> <span class="price">￥38</span></div>
          </div>
          <div class="caiRight">
            <button class="more">+</button>
          </div>
        </div>
        <div class="kong">再怎么滑动也没有了，到底啦~</div>
      </div>
      <div class="ac" v-show="currentIndex == 2">
        <span class="title">内有玄鸡</span>
        <div class="cai" v-for="item in 9" :key="item">
          <div class="caiLeft"><img src="~assets/img/laziji.png" alt="" /></div>
          <div class="caiCenter">
            <strong>辣子鸡</strong>
            <span class="caiShuoming">干辣椒 鸡腿肉</span>
            <div><span>销量：6</span> <span class="price">￥38</span></div>
          </div>
          <div class="caiRight">
            <button class="more">+</button>
          </div>
        </div>
        <div class="kong">再怎么滑动也没有了，到底啦~</div>
      </div>
      <div class="ac" v-show="currentIndex == 3">
        <span class="title">必点配菜</span>
        <div class="cai" v-for="item in 9" :key="item">
          <div class="caiLeft"><img src="~assets/img/laziji.png" alt="" /></div>
          <div class="caiCenter">
            <strong>小凉菜</strong>
            <span class="caiShuoming">干辣椒 鸡腿肉</span>
            <div><span>销量：6</span> <span class="price">￥38</span></div>
          </div>
          <div class="caiRight">
            <button class="more">+</button>
          </div>
        </div>
        <div class="kong">再怎么滑动也没有了，到底啦~</div>
      </div>
      <div class="ac" v-show="currentIndex == 4">
        <span class="title">特色川菜</span>
        <div class="cai" v-for="item in 9" :key="item">
          <div class="caiLeft"><img src="~assets/img/laziji.png" alt="" /></div>
          <div class="caiCenter">
            <strong>川香辣椒</strong>
            <span class="caiShuoming">干辣椒 鸡腿肉</span>
            <div><span>销量：6</span> <span class="price">￥38</span></div>
          </div>
          <div class="caiRight">
            <button class="more">+</button>
          </div>
        </div>
        <div class="kong">再怎么滑动也没有了，到底啦~</div>
      </div>
    </div>
    <!-- 菜品详情面板 -->
    <van-action-sheet v-model="xiangQingShow" title=" ">
      <div class="content">
        <div class="xImg"><img src="~assets/img/laziji.png" alt="" /></div>
        <div class="xName">干煸牛蛙</div>
        <div class="xPrice"><i>￥</i>38.00</div>
        <div class="xSales">销量：6</div>
        <div class="xContent">这是一个干煸牛蛙 主要配料是干辣椒</div>
        <div class="xShuoming">
          <i>说明</i>
          <div class="shuoMing">
            牛蛙去皮去内脏剪去指甲,一定要去除背上的中骨,剪成块状;
            蒜和香菜除外的蔬菜切成片,油锅炸8分熟;
            牛蛙用姜片绍酒盐腌制20分钟后拍上面粉油锅炸九分熟。
          </div>
        </div>
        <van-button round type="info" size="large" color="firebrick"
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
      caiList: [
        {
          id: 1,
          img: "/img/laziji.465cab2b.png",
          name: "干煸牛蛙",
          ingredients: "干辣椒 鸡腿肉",
          sales: "6",
          price: "38",
          jianJie: "这是一个干煸牛蛙 主要配料是干辣椒 青蛙头",
          shuoMing:
            "牛蛙去皮去内脏剪去指甲,一定要去除背上的中骨,剪成块状；蒜和香菜除外的蔬菜切成片,油锅炸8分熟；牛蛙用姜片绍酒盐腌制20分钟后拍上面粉油锅炸九分熟。",
        },
        {
          id: 2,
          img: "/img/laziji.465cab2b.png",
          name: "干煸牛蛙",
          ingredients: "干辣椒 鸡腿肉",
          sales: "6",
          price: "38",
          content: "这是一个干煸牛蛙 主要配料是干辣椒 青蛙头",
        },
        {
          id: 3,
          img: "/img/laziji.465cab2b.png",
          name: "干煸牛蛙",
          ingredients: "干辣椒 鸡腿肉",
          sales: "6",
          price: "38",
          content: "这是一个干煸牛蛙 主要配料是干辣椒 青蛙头",
        },
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
    },
  },
};
</script>

<style scoped>
@import "~assets/css/home.css";
</style>