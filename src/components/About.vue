<template>
  <section :class="$style.aboutSection">
    <h2>About Us</h2>
  </section>
</template>

<script>
    // import { greetings } from '../main.js';

    export default {
      name: "About",
      // mixins: [ greetings ]
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
