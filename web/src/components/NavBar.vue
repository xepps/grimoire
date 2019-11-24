<template>
  <div>
    <b-navbar toggleable="lg" type="light">
      <b-navbar-brand href="#">Grimoire</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item href="/">Home</b-nav-item>
        </b-navbar-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<style lang="scss" scoped>
  .navbar-light {
    border-bottom: #9d0a0e 3px solid;
  }

  .navbar-brand {
    font-family: 'Berkshire Swash', cursive;
    color: #9d0a0e;
    text-shadow: white 0px 0px 1px;
  }
</style>
