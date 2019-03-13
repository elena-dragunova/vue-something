<template>
  <div :class="$style.homePage">
    <h1>Welcome!</h1>

    <steps />
  </div>
</template>

<script>

  import Steps from "./Steps";

  export default {
    name: "Home",
    components: {
      Steps
    }
  }
</script>

<style lang="scss" module>
  @import "../assets/global";

  .homePage {
    padding: 40px 0;
    @extend %container;
    h1 {
      font-size: 40px;
      text-align: center;
    }
  }
</style>
