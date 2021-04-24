<template>
  <div>
    <div class="cartTit">购物车</div>
    <div v-if="isKon" style="height: 17rem; overflow: auto">
      <van-swipe-cell v-for="(item, index) in caiList" :key="index">
        <van-checkbox-group v-model="result">
          <van-checkbox
            shape="square"
            :name="item.id"
            @click="cartCheck(item)"
          ></van-checkbox>
        </van-checkbox-group>
        <van-card
          :price="item.price"
          :desc="item.ingredients"
          :title="item.name"
          class="goods-card"
          :thumb="item.img"
        />
        <template #right>
          <van-button
            square
            text="删除"
            type="danger"
            class="delete-button"
            @click="deleteCai(item)"
          />
        </template>
        <div class="adds">
          <van-stepper
            v-model="item.num"
            theme="round"
            button-size="22"
            disable-input
            @plus="countAdd(item)"
            @minus="countCre(item)"
          />
        </div>
      </van-swipe-cell>
      <div class="jieSuan">
        <div class="jSleft">合计：<i>￥</i>{{ this.$store.state.price }}</div>
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
      isKon: false,
      value: 1,
      caiList: [],
      result: [],
      // sumprice: null, // this.totalPrice
    };
  },
  methods: {
    cartClick() {
      const checkee = this.$store.state.cart.every((item) => {
        return item.checked == false;
      });
      if (checkee) {
        this.$toast("您还未选择菜品呢~");
      } else {
        this.$router.push("/childCart");
      }
    },
    countAdd(item) {
      // console.log(item.id);
      this.$store.commit("countAdd", item.id);
    },
    countCre(item) {
      // console.log("jianshao");
      this.$store.commit("countCre", item.id);
    },
    cartCheck(item) {
      this.$store.commit("cartCheck", item.id);
    },
    deleteCai(item) {
      this.$store.commit("deleteCai", item.id);
      if (this.caiList.length !== 0) {
        this.isKon = true;
      } else {
        this.isKon = false;
      }
    },
  },
  created() {
    this.caiList = this.$store.state.cart;
    // this.caiList = JSON.parse(localStorage.getItem("cart"));
    // console.log(JSON.parse(localStorage.getItem("cart")));
    // console.log(this.caiList);
    if (this.caiList.length !== 0) {
      this.isKon = true;
    } else {
      this.isKon = false;
    }
    // 菜品默认选中
    this.caiList.forEach((item) => {
      if (item.checked == true) {
        this.result.push(item.id);
      }
    });
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