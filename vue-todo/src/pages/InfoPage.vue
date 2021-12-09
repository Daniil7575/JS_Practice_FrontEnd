<template>
  <div class="hello">
    <info-card />
    <form-card />
  </div>
</template>

<script>
import InfoCard from '../components/cards/InfoCard.vue'
import FormCard from "../components/cards/FormCard.vue"

export default {
  components: { InfoCard, FormCard },
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


