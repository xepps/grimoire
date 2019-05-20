<template>
  <div>
    <b-jumbotron class="hero">
      <template slot="header">Search <br />through the misty tome</template>

      <template slot="lead">
        <SearchBar />
      </template>

    </b-jumbotron>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue';

export default {
  name: 'HeroSearch',
  components: {
    SearchBar,
  },
};
</script>

<style lang="scss" scoped>
  .hero {
    background: url('../assets/DnD_DMG_Art.jpg');
    background-size: cover;
    background-position: center;
    border-radius: 0;
  }

  .hero h1 {
    font-family: 'Berkshire Swash', cursive;
    color: white;
    text-shadow: black 0px 0px 5px;
  }
</style>
