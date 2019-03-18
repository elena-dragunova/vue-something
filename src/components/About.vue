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

    <v-form v-model="valid">
      <v-container>
        <v-layout>
          <v-flex
            xs12
            md4
          >
            <v-text-field
              v-model="firstname"
              :rules="nameRules"
              :counter="10"
              label="First name"
              required
            ></v-text-field>
          </v-flex>

          <v-flex
            xs12
            md4
          >
            <v-text-field
              v-model="lastname"
              :rules="nameRules"
              :counter="10"
              label="Last name"
              required
            ></v-text-field>
          </v-flex>

          <v-flex
            xs12
            md4
          >
            <v-text-field
              v-model="email"
              :rules="emailRules"
              label="E-mail"
              required
            ></v-text-field>
          </v-flex>
        </v-layout>
      </v-container>
    </v-form>

    <v-container>
      <v-layout row wrap>
        <v-flex xs12 sm6 md4>
          <v-card>
            <v-card-title>
              <h4>Some Title</h4>
            </v-card-title>
            <v-card-text>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur dolores eveniet ipsum iste natus quam quod repellendus. Accusantium aliquam beatae dolorem laborum molestiae necessitatibus, nostrum pariatur perferendis quibusdam, quidem quis?</p>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>


  </div>
</template>

<script>
    import greetings from '../listMixin';
    import Leaders from './Leaders';
    import Departments from './Departments';
    import AccountForm from './AccountForm';

    export default {
      name: "About",
      data() {
        return {
          tabs: ["Leaders", "Departments"],
          currentTab: "Leaders",
          valid: false,
          firstname: '',
          lastname: '',
          nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters'
          ],
          email: '',
          emailRules: [
            v => !!v || 'E-mail is required',
            v => /.+@.+/.test(v) || 'E-mail must be valid'
          ]
        }
      },
      components: {
        Leaders,
        Departments,
        AccountForm
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
    .companyStructure {
      margin-bottom: 40px;
    }
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
