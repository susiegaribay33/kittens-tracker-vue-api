<template>
  <div class="kittens-show">
    <!-- <h1>{{ message }}</h1> -->
    <p>Name: {{ kitten.name }}</p>
    <p>Color: {{ kitten.color }}</p>
    <p>Age: {{ kitten.age }}</p>
  </div>
</template>

<style></style>

<script>
  import axios from 'axios';
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.js!",
        kitten: {}
      };
    },
    created: function () {
      this.showKitten();
    },
    methods: {
      showKitten: function() {
        console.log("showing kitten...")
        axios.get("/kittens/" + this.$route.params.id)
        .then(response => {
          console.log(response.data);
          this.kitten = response.data;
        })
      }
    },
  };
</script>