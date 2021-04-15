<template>
  <div>
    <div class="cartTit">购物车</div>
    <div v-if="isKon">
      <van-swipe-cell v-for="(item, index) in caiList" :key="index">
        <van-checkbox v-model="checked" shape="square"></van-checkbox>
        <van-card
          :price="item.price"
          :desc="item.ingredients"
          :title="item.name"
          class="goods-card"
          :thumb="item.img"
        />
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" />
        </template>
        <div class="adds">
          <van-stepper
            v-model="value"
            theme="round"
            button-size="22"
            disable-input
          />
        </div>
      </van-swipe-cell>
      <div class="jieSuan">
        <div class="jSleft">合计：<i>￥</i></div>

        <div class="jSright" @click="cartClick">去结算</div>
      </div>
    </div>
    <div class="cartNone" v-else>
      <img src="~assets/img/cartNone.png" alt="" />
      <p>购物车空空如也，去挑点什么吧~</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cart",
  data() {
    return {
      checked: true,
      isKon: false,
      value: 1,
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
  methods: {
    cartClick() {
      this.$router.push("/childCart");
    },
  },
  created() {
    if (this.caiList.length !== 0) {
      this.isKon = true;
    } else {
      this.isKon = false;
    }
  },
  // destroyed() {
  //   console.log("cart首页 被销毁");
  // },
  // activated() {
  //   console.log("进来了");
  // },
  // deactivated() {
  //   console.log("走了");
  // },
};
</script>

<style scoped>
@import "~assets/css/cart.css";
</style>