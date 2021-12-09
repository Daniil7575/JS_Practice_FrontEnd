<template>
  <div id="app">
    <component :is="layout">
       <router-view/>
    </component>
     
    </div>
    <!-- <img alt="Vue logo" src="./assets/lol.png">
    <ul>
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/info">
        Info
      </router-link>
    </ul>
    <router-view />
    <InfoPage msg="Welcome to my About page"/> -->
</template>

<script>
import MainLayout from '@/layout/MainLayout.vue'
import AuthLayout from '@/layout/AuthLayout.vue'
// import InfoPage from './components/pages/InfoPage.vue'


export default {
  name: 'App',
  components: {
    MainLayout, AuthLayout
  },

  computed:{
    layout() {
      return this.$route.meta?.layout || "main-layout"
    }
  }
}
</script>

<style>
/* img
{
  box-shadow: 5px 2px 2px rgba(0, 0, 0, 0.459);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ff0fa3;
  margin-top: 30px;
}

ul {
  list-style-type: none;;
  padding: 0;
} */
</style>