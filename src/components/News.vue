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

    export default {
        name: "News",
        components: {
          NewsItem
        },
        methods: {
            removeFromNews: function (id) {
              this.news = this.news.filter(item => item.id !== id)
            }
        },
        data: function () {
          return {
            news: [
              {
                id: 1,
                title: "News Title",
                date: "25.02.2019",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, at delectus enim excepturi facilis id impedit inventore libero maiores maxime molestiae quam quasi, quia saepe sunt tenetur totam veritatis?"
              },
              {
                id: 2,
                title: "News Long Long Title May Be In Two Lines And More",
                date: "20.02.2019",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, at delectus enim excepturi facilis id impedit inventore libero maiores maxime molestiae quam quasi, quia saepe sunt tenetur totam veritatis?"
              },
              {
                id: 3,
                title: "News Long Title May Be In Two Lines",
                date: "20.02.2019",
                text: "Lorem ipsum dolor sit amet?"
              },
              {
                id: 4,
                title: "News Title",
                date: "20.02.2019",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, at delectus enim excepturi facilis id impedit inventore libero maiores maxime molestiae quam quasi, quia saepe sunt tenetur totam veritatis?"
              },
              {
                id: 5,
                title: "News Title",
                date: "20.02.2019",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, at delectus enim excepturi facilis id impedit inventore libero maiores maxime molestiae quam quasi, quia saepe sunt tenetur totam veritatis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, at delectus enim excepturi facilis id impedit inventore libero maiores maxime molestiae quam quasi, quia saepe sunt tenetur totam veritatis?"
              },
              {
                id: 6,
                title: "News Long Long Title May Be In Two Lines And More",
                date: "20.02.2019",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, at delectus enim excepturi facilis id impedit inventore libero maiores maxime molestiae quam quasi, quia saepe sunt tenetur totam veritatis?"
              },
              {
                id: 7,
                title: "News Title",
                date: "20.02.2019",
                text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam, at delectus enim excepturi facilis id impedit inventore libero maiores maxime molestiae quam quasi, quia saepe sunt tenetur totam veritatis?"
              }

            ]
          }
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
