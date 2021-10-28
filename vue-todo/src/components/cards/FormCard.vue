<template>
    <div class="card2 base-card"> 
      <form id="form" class="form1" @submit.prevent="onFormSubmit">
        <ul>
          <input
            required
            type="text"
            placeholder="Ваше имя: "
            :readonly="false"
          />
        </ul>

        <ul>
          <input
            type="text"
            placeholder="Ваш email"
            :readonly="false"
          />
        </ul>

        <ul><textarea required placeholder="Ваше сопроводительное письмо"></textarea></ul>
        
        <ul><button id="submitButton" type="submit">Отправить</button></ul>
          
        <label for="checkbox">capcha</label>

        <input
          required
          id="checkbox"
          type="checkbox"
          :value="true"
        />
      </form>
    </div>
</template>

<script>
export default {
  name: 'FormCard'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>


input{
  display: inline-block;
  padding: auto;
  margin: 10px;
}

form{
  margin: 10px;
}



</style>

