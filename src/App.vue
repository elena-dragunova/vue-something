<template>
  <div id="app" :class="$style.app">
    <app-header />
    <main :class="$style.main">
      <news />
    </main>
    <app-footer />

  </div>
</template>

<script>

  import AppHeader from "./components/AppHeader";
  import AppFooter from "./components/AppFooter";
  import News from "./components/News";

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter,
      News
    },
    data () {
      return {

      }
    }
  }
</script>


<style lang="scss" module>
  @import './assets/global';

  .app {
    min-height: 100vh;
    display: flex;
    flex-flow: column nowrap;
  }
  .main {
    flex: 1 0 auto;
  }
</style>
