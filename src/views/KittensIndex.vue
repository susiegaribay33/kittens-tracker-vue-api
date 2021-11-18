<template>
  <div class="kittens-index">
    <!-- <h1>{{ message }}</h1> -->
    <div v-for="kitten in kittens" v-bind:key="kitten.id">
      <p><b>Name: </b>{{ kitten.name }}</p>
      <p><b>Color: </b>{{ kitten.color }}</p>
      <p><b>Age: </b>{{ kitten.age }}</p>
      <hr>
    </div>
  </div>
</template>

<style></style>

<script>
  import axios from 'axios';
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.js!",
        kittens: [],
      };
    },
    created: function () {
      this.indexKittens();
    },
    methods: {
      indexKittens: function() {
        console.log("in index...")
        axios.get("/kittens").then((response) => {
          console.log(response.data);
          this.kittens = response.data;
        })
      }
    },
  };
</script>