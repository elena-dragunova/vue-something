<template>

  <transition name="fade">
    <article :class="$style.newsItem">
      <div :class="$style.newsItemInfo">
        <router-link
          :to="'/news/' + news.id"
          :class="$style.newsLink"
        >{{ news.title }}</router-link>
        <p>{{ news.date }}</p>
        <p>{{ news.text }}</p>
      </div>


      <button
        :class="$style.delete"
        @click="removeItem"
      >Delete News
      </button>

    </article>
  </transition>



</template>

<script>

    export default {
        name: "NewsItem",
        props: {
          news: Object
        },
        methods: {
          removeItem: function () {
            this.$emit("remove", this.news.id)
          }
        }
    }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .newsItem {
    width: calc(25% - 20px);
    margin: 10px;
    background-color: $light-color;
    border: 1px solid $dark-color;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .newsLink {
      display: block;
      text-decoration: none;
      font-size: 24px;
      margin: 10px 0;
      text-align: center;
      color: darken($dark-color, 25%);
      transition: all 0.25s ease-in-out;
      &:hover {
        color: $dark-color;
        text-decoration: underline;
      }
    }
  }

  .delete {
    background-color: $accent-color;
    color: #fff;
    border: none;
    padding: 10px 20px;
    font-size: 18px;
    outline: none;
    cursor: pointer;
    transition: background-color 0.25s ease-in-out;
    &:hover {
      background-color: darken($accent-color, 20%);
    }
  }


</style>

<style lang="scss" scoped>
  .fade-leave-active {
    transition: opacity 0.25s;
  }
  .fade-leave-to {
    opacity: 0;
  }
</style>
