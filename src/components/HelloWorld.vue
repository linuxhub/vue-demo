<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Hello zeze!'
    }
  }
}
</script>


<style scoped>
.hello {
  color: red;
  font-size: 20px;
}
</style>
