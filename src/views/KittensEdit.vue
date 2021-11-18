<template>
  <div class="kittens-edit">
    <!-- <h1>{{ message }}</h1> -->
    <form v-on:submit.prevent="editKitten()">
      <h1>Update Kitten Info:</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Name:</label>
        <input type="text" v-model="editKittenParams.name" />
      </div>
      <div>
        <label>Color:</label>
        <input type="text" v-model="editKittenParams.color" />
      </div>
      <div>
        <label>Age:</label>
        <input type="number" v-model="editKittenParams.age" />
      </div>
      <input type="submit" value="Update" />
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
        editKittenParams: {},
        errors: []
      };
    },
    created: function () {
      // this.showKitten());
    },
    methods: {
      editKitten: function() {
        axios.patch("/kittens/" + this.$route.params.id, this.editKittenParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/kittens");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        })
      }
    },
  };
</script>