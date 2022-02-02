<template>
    <section class="cart">
        <div class="container">
            <div class="cart-header">
                <h1> This is a cart</h1>
                <button class="button"> В магазин</button>
            </div>
            <div class="cart-content">
                
                <div class="cart-content_main" v-for="( item,index ) of getCartContent" :key="index" >
                    <div class="item_category-and-title">
              <p class="item_category"><strong>{{ item.category }}</strong></p>
              <p class="item_title">{{ item.title }}</p>
            </div>
            <img :src="item.image" alt="" class="img">
            <div class="item_rating-and-count">
              <p> rating: {{item.rating.rate}}</p>
              <p>count: {{item.rating.count}}</p>
            </div>
            <p class="item_number">Кол-во: {{ item.number }}</p>
                </div>
            </div>
        </div>

    </section>
</template>


<style lang='scss' scoped>
.cart{
  background: #000;
   &-header{
     display: flex;
     justify-content: space-around;
     padding-top: 50px;
   }
  &-content{
 display: grid;
    grid-template-columns: 30% 30% 30%;
    
    justify-content: space-between;
    padding: 50px 0;
    grid-column-gap: 50px;
    grid-row-gap: 50px;
    justify-items:center
 
}
 &-content_main{
    color: black;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: white;
    align-items: center;

    }}
.img{
    max-width: 200px;
max-height: 200px;
}
 .container{
  max-width: 1024px;
  margin: 0 auto;
}
.item_category{
  text-align: center;
}
.item_title{
  max-width: 260px;
  text-align: center 
}
h1{
  margin: 0;
  color: rgb(169,169,169);
  font-size: 48px;
}
.button{
border: none;
  background: rgba(169,169,169,0.7);
  color: black;
  padding: 10px 20px;
  border-radius: 8px;
  font-size: 18px;
}
</style>

<script>
import {mapState,mapGetters,mapActions} from 'vuex'


export default {
  name: 'Cart',
  computed:{
    ...mapState(['count']), // возвращаемое значение mapState ():{count(){return this.store.state['count']}}
                 // Примечание: в mapGetters ([]При использовании массива в) имя должно соответствовать имени, определенному в store.js. Если оно несовместимо, необходимо использовать объект и другие карты. . . () тоже похоже на это
                 //Последовательность
        /*  ...mapGetters(['eventOrOdd'])  //mapGetters()возвращаемое значение:{eventOrOdd(){return this.$store.getters.eventOrOdd}}*/
                 // Несоответствие
    ...mapGetters(['getCartContent'])
      },
    methods: {
        ...mapActions(['increatable','decreatable','Oddcreatable','timecreatable','handOverCart'])
      }

}
</script>
