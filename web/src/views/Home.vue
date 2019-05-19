<template>
  <div class="home">
    <SearchBar :baseUrl="this.baseUrl" />
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'home',
  components: {
    SearchBar,
    HelloWorld,
  },
  data: () => ({
    baseUrl: window.location.origin,
  }),
};
</script>
