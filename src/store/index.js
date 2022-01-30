import Vue from 'vue'

import Vuex from 'vuex'

Vue.use(Vuex)


const state = {
    count: 0
}

const mutations = {
    Increatable(state){
        state.count++
    },
    Decreatable(state){
        state.count--
    }
}
const actions = {
    increatable({commit}){
      commit('Increatable')
    },
    decreatable({commit}){
      commit('Decreatable')
    }}

    export default new Vuex.Store({
        state, // Объект состояния
        mutations, // содержит несколько объектов, которые обновляют функции состояния
        actions, // Содержит несколько объектов, соответствующих функциям обратного вызова событий
        // getters // Объекты, содержащие несколько функций свойств вычисления геттеров
   
   })

   