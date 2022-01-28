<template>
<section class=market>
  <div class="container">
    
      <div v-if=" posts.length != 0" class="market__content">
        <div class="market_item">
          <div v-for="( post,index ) of posts" :key="index" :class="post.category" class="market_main">
            <div class="item_category-and-title">
              <p class="item_category"><strong>{{ post.category }}</strong></p>
              <p class="item_title">{{ post.title }}</p>
            </div>
            <img :src="post.image" alt="" class="img">
            <div class="item_rating-and-count">
              <p> rating: {{post.rating.rate}}</p>
              <p>count: {{post.rating.count}}</p>
            </div>
            <div class="market__basket">
              <div class="market__basket_coutner">
                <button class="button" @click="addCount()"><span class="sign">+</span></button>  {{ this.count }}  <button class="button" @click="subCount()"><span class="sign">-</span></button>
            </div>
            <button class="market__basket_button">В корзину</button>
          </div>
        </div>
          
        </div>
      </div>
      <ul v-if="errors != 0">
        <li v-for="( error, index) of errors" :key="index">
          {{error.message}}
        </li>
      </ul>
    
    </div>
</section>
</template>

<script>
// `<img src=${posts[post].image}>`
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  data: () => ({
    posts: [],
    errors:[],
    counter: 0,
    count: 0

  }),

  created() {
    axios.get('https://fakestoreapi.com/products')
    .then(response =>{
      this.posts = response.data
    })
    .catch(e =>{
      this.errors.push(e)
    })
  },
 methods: {
   addCount() {
  
 }
}}
// 'https://fakestoreapi.com/products'
</script>

<style lang="scss" scoped>

.market{
  background-color: black;
  // &__content{
  //   display: flex;
  //   flex-wrap:wrap;
  //   justify-content: space-between;
  //   padding-top: 50px;
  // }
  &_item{
    display: flex;
    flex-wrap:wrap;
    justify-content: space-between;
    padding-top: 50px;
  }
  &_main{
  width: 30%;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: white;
  align-items: center;
}
&__basket{
    display: flex;
    flex-direction: column;
    padding-bottom: 25px;
    align-items: center;
    justify-content: center;
    &_coutner{
  padding-bottom: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #000;
  font-size: 32px;
  font-weight: bold;
  max-width: 150px;
  }
  &_button{
  border: none;
  background: rgba(169,169,169,0.7);
  color: black;
  padding: 10px 20px;
  border-radius: 8px;

}
}

}
.item_category{
  text-align: center;
}
.item_title{
  max-width: 260px;
  text-align: center 
}
.container{
  max-width: 1024px;
  margin: 0 auto;
}
.img{
  max-width: 200px;
max-height: 200px;
}

.button{
  border: none;
  background-color: white;
  margin: 0 10px;
 
  
 
  .sign{
    color: rgb(169,169,169);
    font-size: 52px;
    
    
  }
}
// rgba(255,255,0,0.7)
</style>