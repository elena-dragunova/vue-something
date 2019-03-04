<template>
  <section :class="$style.contactsSection">
    <h2>Contact Us</h2>
  </section>
</template>

<script>
    export default {
        name: "Contacts"
    }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .contactsSection {
    padding: 40px 0;
    @extend %container;
    h2 {
      font-size: 40px;
      text-align: center;
    }
  }
</style>
