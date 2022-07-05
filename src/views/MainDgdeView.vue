<template>
<div class="main">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="This is the main view"/>
  </div>

</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
