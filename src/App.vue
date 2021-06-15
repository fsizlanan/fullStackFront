<template>
  <div id="app" class="container">
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css?family=Raleway:300,400,700,800"
    />
    <link rel="stylesheet" href="../src/assets/css/app.css" />
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/anasayfa">AnaSayfa</router-link> -->
      <header-component />
    </div>
    <router-view />
    <div class="footer">
      <Footer />
    </div>
  </div>
</template>

<script>
import Footer from './components/layouts/Footer.vue';
import HeaderComponent from "./components/layouts/HeaderComponent.vue";
export default {
  components: { HeaderComponent, Footer, }
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
