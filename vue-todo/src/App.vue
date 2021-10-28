<template>
  <div id="app">
    <div class="nav">
      <router-link to="/">
        Home
      </router-link>
      <router-link to="/infopage">
        Info
      </router-link>
    </div>
    
    <img alt="Vue logo" src="./assets/aaaaa.jpg">
    <router-view/>
    <info-page msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>

//import InfoPage from './components/pages/InfoPage.vue'

export default {
  name: 'App'
}
</script>

<style>
#app {
  margin: auto;
  background-color: #696969;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255, 255, 255);
  margin-top: 60px;
  max-height: 500px;
  max-width: 730px;
  align-items: center;
  border-radius: 25px;
}

ul {
  list-style-type: none;;
  padding: 0;
  color: rgb(255, 255, 255);
}

.base-card {
  box-shadow: 5px 2px 2px rgba(0, 0, 0, 0.459);
  padding: 25px; 
  border-radius: 25px; 
  max-height: 900px;
  background-color: #113961;
  height: 325px;
  width: 310px;
  margin-top: 10px;
  max-width: 500px;
}

img{
  border-radius: 25px;
  box-shadow: 5px 2px 2px rgba(0, 0, 0, 0.459);
}
</style>
