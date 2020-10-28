<template>
   <homepage/>
</template>

<script>
//import "./assets/js/bootstrap.js";
import homepage from "./components/homepage.vue";

export default {
  name: "App",
  components: {
    homepage,
  },
};
</script>

<style>
@import "./assets/css/bootstrap.css";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
