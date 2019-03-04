<template>
  <div :class="$style.newsItemContainer">
    <h2>{{ currentNews.title }}</h2>
    <p v-html="currentNews.text"></p>
    <p :class="$style.newsItemDate">{{ currentNews.date }}</p>
  </div>
</template>

<script>

    import NewsService from '../NewsService';
    export default {
      name: "NewsItemDetail",
      computed: {
        news() {
          return this.$store.getters.getNews;
        },
        currentNews() {
          return this.news.filter(item => item.id === +(this.$route.params.id))[0];
        }
      },
      created() {
        this.$store.commit('loadNews', NewsService.news);
      }
    }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .newsItemContainer {
    padding: 40px 0;
    @extend %container;
    h2 {
      font-size: 40px;
      text-align: center;
      color: $accent-color;
    }
    p {
      font-size: 18px;
    }
    .newsItemDate {
      text-align: right;
      font-size: 16px;
      color: $dark-color;
    }
  }
</style>
