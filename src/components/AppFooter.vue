<template>
  <footer :class="$style.footer">
    <h2>Simple Footer</h2>
  </footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .footer {
    flex: 0 0 auto;
    background-color: $dark-color;
    color: #fff;
    text-align: center;
  }
</style>
