<template>
  <div class="home">
    <ul v-if=" posts.length != 0">
      <li v-for="(index, post) of posts" :key="index">
        <p><strong>{{ posts[post].category }}</strong></p>
        <p>{{posts[post].title}}</p>
        <p class="img" v-if="posts[post].image != undefined">{{
          imagePost(posts[post].image)
          }}</p>
        <p>{{posts[post].rating.rate}}</p>
        <p>{{posts[post].rating.count}}</p>
      </li>
    </ul>
    <ul v-if="errors != 0">
      <li v-for="(index, error) of errors" :key="index">
        {{errors[error].message}}
      </li>
    </ul>
  </div>
</template>

<script>
// `<img src=${posts[post].image}>`
// @ is an alias to /src
import axios from 'axios'

export default {
  name: 'Home',
  data: () => ({
    posts: [],
    errors:[]
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
  methods:{
    imagePost(item) {
      console.log(item);
      return this.innerHTML =`<img src=${item}>`;
    }
  }
}
// 'https://fakestoreapi.com/products'
</script>

