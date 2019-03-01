<template>
  <header :class="$style.header">
    <h2>Simple Header</h2>
    <ul :class="$style.nav">
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/news">News</router-link></li>
      <li><router-link to="/contacts">Contacts</router-link></li>
    </ul>
  </header>
</template>

<script>
    export default {
        name: "AppHeader"
    }
</script>

<style lang="scss" module>
  @import '../assets/global';
  .header {
    background-color: $light-color;
    padding: 20px 0;
    text-align: center;
    h2 {
      color: #000;
      font-size: 26px;
    }
    .nav {
      margin-top: 30px;
      padding-left: 0;
      list-style: none;
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      li {
        margin: 0 30px;
        font-size: 18px;
        a {
          color: #000;
          text-decoration: none;
          transition: color 0.25s ease-in-out;
          &:hover {
            color: $dark-color;
          }
        }
      }
    }
  }
</style>
