<template>
  <div class="home">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <img alt="Vue logo" src="@/assets/logo.png">
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'home',
  components: {
    HelloWorld
  }
}
</script>
