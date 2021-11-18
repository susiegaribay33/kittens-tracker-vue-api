<template>
  <div class="kittens-new">
    <!-- <h1>{{ message }}</h1> -->
    <form v-on:submit.prevent="addKitten()">
      <h1>Add Kitten!</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name: </label>
        <input type="text" v-model="newKittenParams.name" />
      </div>
      <div>
        <label>Color: </label>
        <input type="text" v-model="newKittenParams.color" />
      </div>
      <div>
        <label>Age: </label>
        <input type="number" v-model="newKittenParams.age" />
      </div>
      <input type="submit" value="Create" />
    </form>
  </div>
</template>

<style></style>

<script>
  import axios from 'axios';
  export default {
    data: function () {
      return {
        message: "Welcome to Vue.js!",
        newKittenParams: {},
        errors: []
      };
    },
    created: function () {},
    methods: {
      addKitten: function() {
        axios
        .post("/kittens", this.newKittenParams)
        .then((response) => {
          console.log(response);
          this.$router.push("/kittens");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = error.response.data.errors
        })
      }
    },
  };
</script>