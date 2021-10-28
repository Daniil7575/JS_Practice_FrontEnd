<template>
  <div class="hello">
    <info-card />
    <form-card />
  </div>
</template>

<script>
import InfoCard from '../cards/InfoCard.vue'
import FormCard from "../cards/FormCard.vue"


export default {
  components: { InfoCard, FormCard },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  color: rgb(255, 255, 255);
  margin: 20px 0 0;
}
ul {
  list-style-type: none;;
  padding: 0;
  color: rgb(255, 255, 255);
}

li {
  display: inline-block;
  margin: 0 10px;
  color: rgb(255, 255, 255);
}

a {
  color: #c8ff00;
}

#hello, .card1{
  float: left;
}

#hello, .card2{
  float: right;
}

input{
  display: inline-block;
  padding: auto;
  margin: 10px;
}

form{
  margin: 10px;
}

div{
  box-shadow: 5px 2px 2px rgba(0, 0, 0, 0.459);
}

</style>

