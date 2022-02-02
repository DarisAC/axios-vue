import { createStore } from "vuex";

const store = createStore({
  state: {
    count: 0,
    cart: [],
  },
  mutations: {
    HandOverCart(state) {
      console.log(state.cart);
    },

    Increatable(state, product) {
      state.count++;
      const hasCartItem = state.cart.some((index) => index.id === product.id);
      if (hasCartItem) {
        product.number++;
        console.log(state.cart);
      } else {
        state.cart.push(product);
        console.log(state.cart);
      }
    },

    Decreatable(state,product) {
      state.count--;
      const hasCartItem = state.cart.some((index) => index.count === product.count);
      if (hasCartItem) {
       
        // console.log(state.cart.id);
        product.number--
        // console.log(state.cart);
        console.log(state.cart);
      
      } else {
        // state.cart.number--;
        // console.log(state.cart);
        // console.log(hasCartItem);
        console.log(product);
        // console.log(state.cart[1].id);
      }
    },
  },
  actions: {
    handOverCart({ commit }) {
      commit("HandOverCart");
    },

    increatable({ commit }, product) {
      if (!product.number ) {
        product.number = 1;
      }
      commit("Increatable", product);
    },
    decreatable({ commit }, product) {
      if (product.number < 0) {
        product.number = 0;
      }
      commit("Decreatable", product);
    },
  },
  getters: {
    getCartContent: (state) => {
      return state.cart;
    },
  },
});

export default store;

//     export default new Vuex.Store({
//         state, // Объект состояния
//         mutations, // содержит несколько объектов, которые обновляют функции состояния
//         actions, // Содержит несколько объектов, соответствующих функциям обратного вызова событий
//         // getters // Объекты, содержащие несколько функций свойств вычисления геттеров

//    })
