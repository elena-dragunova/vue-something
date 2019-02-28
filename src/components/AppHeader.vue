<template>
  <header :class="$style.header">
    <h2>Simple Header</h2>
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
  }
</style>
