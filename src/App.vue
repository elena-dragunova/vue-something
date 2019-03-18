<template>
  <div id="app" :class="$style.app">
    <v-app>
      <v-content>
        <app-header />
        <main :class="$style.main">

          <router-view />

        </main>

      </v-content>
      <v-footer>
        <app-footer />
      </v-footer>
    </v-app>


  </div>
</template>

<script>

  import AppHeader from "./components/AppHeader";
  import AppFooter from "./components/AppFooter";

  export default {
    name: 'app',
    components: {
      AppHeader,
      AppFooter,
    },
    data () {
      return {

      }
    }
  }
</script>


<style lang="scss" module>

  @import '../main.css';
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
