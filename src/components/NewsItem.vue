<template>

    <article :class="$style.newsItem">
      <div :class="$style.newsItemInfo">
        <h4>{{ news.title }}</h4>
        <p>{{ news.date }}</p>
        <p>{{ news.text }}</p>
      </div>

      <button
        :class="$style.delete"
        @click="removeItem"
      >Delete News
      </button>
    </article>

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
    h4 {
      font-size: 24px;
      margin: 10px 0;
      text-align: center;
      color: darken($dark-color, 25%);
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
