<template>
  <section :class="$style.newsSection">
    <h2>The Latest News</h2>
    <div :class="$style.newsContainer">
      <news-item
        v-for="item of news"
        :key="item.id"
        :news="item"
        @remove="removeFromNews"
      />

    </div>
  </section>
</template>

<script>
    import NewsItem from './NewsItem';
    import store from '../main';
    import NewsService from '../NewsService';

    export default {
        store,
        name: "News",
        components: {
          NewsItem
        },
        // methods: {
        //     removeFromNews: function (id) {
        //       this.news = this.news.filter(item => item.id !== id)
        //     }
        // },
        methods: {
          removeFromNews: function (id) {
            this.$store.commit('deleteNews', id);
          }
        },
        computed: {
          news() {
            return this.$store.getters.getNews;
          }
        },
        created() {
          this.$store.commit('loadNews', NewsService.news);
        }

    }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .newsSection {
    padding: 40px 0;
    @extend %container;
    h2 {
      font-size: 40px;
      text-align: center;
    }
  }
  .newsContainer {
    margin: 0 -10px;
    display: flex;
    flex-flow: row wrap;
  }

</style>
