<template>
  <div id="app">
    <NavBar />
    <HeroSearch />
    <router-view/>
    <Footer />
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import HeroSearch from '@/components/HeroSearch.vue';
import Footer from '@/components/Footer.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    HeroSearch,
    Footer,
  },
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Berkshire+Swash&display=swap');

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;

}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
