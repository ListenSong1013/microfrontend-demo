<template>
  <div class="home">
    <div>
      <button @click="$router.push('/about')">home</button>
      <button @click="toApp2">app2</button>
    </div>
    <img alt="Vue logo" src="../assets/logo.png"/>
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name: 'home',
  components: {
    HelloWorld
  },
  methods: {
    toApp2 () {
      this.$mainRouter.push('/subapp2')
    }
  }
}
</script>
