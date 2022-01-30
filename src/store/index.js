

import { createStore} from 'vuex'




const store = createStore ({
    state:{
    count: 0,
    cart: []
},
    mutations: {
      
    Increatable(state, product){
        state.count++
        
       
        
        

        
        const hasCartItem = state.cart.some(index => index.id === product.id);
        if(hasCartItem) {
            product.number++
            console.log(state.cart);
            
        }else{
        state.cart.push(product)
        console.log(state.cart);
    }
       
        // console.log(state.cart);
        // console.log(state.cart.zalypa)
    },
    Decreatable(state){
        state.count--
    }
},
 actions: {
    increatable({commit},product){
        if (product.number === undefined){
        product.number = 1}
      commit('Increatable', product)
     
      
    //   console.log(product);
      
    },
    decreatable({commit}){
      commit('Decreatable')
    }},});

    export default store;
    
//     export default new Vuex.Store({
//         state, // Объект состояния
//         mutations, // содержит несколько объектов, которые обновляют функции состояния
//         actions, // Содержит несколько объектов, соответствующих функциям обратного вызова событий
//         // getters // Объекты, содержащие несколько функций свойств вычисления геттеров
   
//    })

   