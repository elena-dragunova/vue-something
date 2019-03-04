<template>
  <section :class="$style.aboutSection">
    <h2>About Us</h2>
  </section>
</template>

<script>
    export default {
        name: "About"
    }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .aboutSection {
    padding: 40px 0;
    @extend %container;
    h2 {
      font-size: 40px;
      text-align: center;
    }
  }
</style>
