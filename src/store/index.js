import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    cart: [],
    price: '0.00'
  },
  mutations: {
    addCart(state, goodsInfo) {
      var flag = false
      state.cart.some(item => {
        if (item.id === goodsInfo.id) {
          item.count += 1
          flag = true
          return true
        }
      })
      if (!flag) {
        goodsInfo.count = 1
        goodsInfo.checked = true
        state.cart.push(goodsInfo)
      }
      this.commit('totalPrice')
      // localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    countAdd(state, id) {
      // console.log(id);
      state.cart.some(item => {
        if (item.id === id) {
          item.count++
        }
      })
      this.commit('totalPrice')
    },
    countCre(state, id) {
      state.cart.some(item => {
        if (item.id === id) {
          item.count--
        }
      })
      this.commit('totalPrice')
    },
    cartCheck(state, id) {
      state.cart.some(item => {
        if (item.id === id) {
          item.checked = !item.checked
        }
      })
      this.commit('totalPrice')
    },
    deleteCai(state, id) {
      state.cart.some((item, index) => {
        if (item.id === id) {
          state.cart.splice(index, 1)
        }
      })
      this.commit('totalPrice')
    },
    // 计算总价方法
    totalPrice(state) {
      let totalPrice = 0.00;
      state.cart.some((item) => {
        if (item.checked == true) {
          totalPrice += item.count * item.price
        }
      })
      state.price = totalPrice + '.00'
    },
    cleanCheck(state) {
      console.log(state.cart)
      // 过滤数组中选中为true的值
      state.cart = state.cart.filter(row => {
        if (row.checked == true) {
          return false;
        }
        return true;
      })
      // state.cart.forEach((item, index) => {
      //   if (item.checked) {
      //     console.log(index)
      //     state.cart.splice(index, 1)
      //     // console.log(item, '-----', state.cart[index])
      //     // console.log('11111eee', state.cart)
      //   }
      // })
    }
  },
  actions: {},
  getters: {
    // 获取商品总价
    // totalPrice: state => {
    // let totalPrice = 0;
    //   state.cart.forEach((item) => {
    //     if (goodsInfo.checked = true) {
    //       totalPrice += item.count * item.price
    //     }
    //   })
    //   return totalPrice
    // },
    // cart(state) {
    //   let cart = state.cart
    //   cart.forEach((item) => {
    //     if (item.checked == checked) {
    //       item.totalPrice = item.count * item.price
    //     }
    //   })
    //   return cart

    // }
  },
  modules: {}
})

export default store