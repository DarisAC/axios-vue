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
                <button class="button" @click="increatable(post)"><span class="sign">+</span></button>  {{ count }}  <button class="button" @click="decreatable"><span class="sign">-</span></button>
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
import {mapState,mapGetters,mapActions} from 'vuex'

export default {
  name: 'Home',
  data: () => ({
    posts: [],
    errors:[],
    

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
 



  computed:{
    ...mapState(['count']), // возвращаемое значение mapState ():{count(){return this.store.state['count']}}
                 // Примечание: в mapGetters ([]При использовании массива в) имя должно соответствовать имени, определенному в store.js. Если оно несовместимо, необходимо использовать объект и другие карты. . . () тоже похоже на это
                 //Последовательность
        /*  ...mapGetters(['eventOrOdd'])  //mapGetters()возвращаемое значение:{eventOrOdd(){return this.$store.getters.eventOrOdd}}*/
                 // Несоответствие
    ...mapGetters({eventOrOdd:'eventOrOdd2'})
      },
    methods: {
        ...mapActions(['increatable','decreatable','Oddcreatable','timecreatable'])
      }

  

}
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
    
    display: grid;
    grid-template-columns: 30% 30% 30%;
    
    justify-content: space-between;
    padding: 50px 0;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    justify-items:center
  }
  &_main{
  width: 100%;
  
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