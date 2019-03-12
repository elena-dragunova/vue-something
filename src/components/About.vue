<template>
  <div :class="$style.aboutPage">
    <h2>About Us</h2>

    <section :class="$style.companyStructure">
      <button
        v-for="tab in tabs"
        :key="tab"
        :class="[$style.tabButton, {[$style.tabButtonActive] : currentTab === tab}]"
        @click="currentTab = tab"
      >
        Our {{ tab }}
      </button>

      <keep-alive>
        <component :is="currentTabComponent"></component>
      </keep-alive>

    </section>
  </div>
</template>

<script>
    import greetings from '../listMixin';
    import Leaders from './Leaders';
    import Departments from './Departments';

    export default {
      name: "About",
      data() {
        return {
          tabs: ["Leaders", "Departments"],
          currentTab: "Leaders"
        }
      },
      components: {
        Leaders,
        Departments
      },
      computed: {
        currentTabComponent() {
          return this.currentTab.toLowerCase();
        }
      },
      mixins: [ greetings ]
    }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .aboutPage{
    padding: 40px 0;
    @extend %container;
    h2 {
      font-size: 40px;
      text-align: center;
    }
  }
  .tabButton {
    border: 1px solid $dark-color;
    border-bottom: none;
    background-color: #fff;
    padding: 10px 20px;
    font-size: 18px;
    text-transform: uppercase;
    cursor: pointer;
    outline: none;
    &Active {
      background-color: $dark-color;
      color: #fff;
    }
  }
</style>
