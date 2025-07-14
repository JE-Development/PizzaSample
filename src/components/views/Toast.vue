<template>
    <div class="toast-wrapper">
      <div class="toast center-horizontal center-text red-background" v-if="color === 'red'">
        {{text}}
      </div>
      <div class="toast center-horizontal center-text neutral-background" v-else-if="color === 'blue'">
        {{text}}
      </div>
      <div class="toast center-horizontal center-text green-background" v-else-if="color === 'green'">
        {{text}}
      </div>
    </div>
  </template>
  
  
  <script>
  
  export default {
    name: "Toast",
    data() {
      return {
      };
    },
  
    props:{
      text: String,
      color: String,
    },
  
    created() {
    },
    mounted() {
    },
  
  
  
    methods: {
      getCookies(key){
        return this.$cookies.get(key);
      },
      setCookies(key, value){
        return this.$cookies.set(key, value, 2147483647);
      },
    }
  }
  </script>
  
  <style>
  .toast-wrapper {
    position: fixed;
    width: 100%;
    top: 20px;
  }
  .toast {
    padding: 20px;
    color: white;
    border-radius: 10px;
    box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
    max-width: 400px;
    margin: 0 auto;
  }

  .red-background{
    background-color: red;
  }

  .green-background{
    background-color: #007700;
  }
  </style>