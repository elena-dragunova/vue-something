<template>
  <div :class="$style.leadersTab">
    <ul :class="$style.leadersTabs">
      <li
        v-for="leader of leaders"
        :key="leader.id"
        :class="[$style.leadersTabButton, {[$style.selected] : leader === selectedLeader}]"
        @click="selectedLeader = leader"
      >
        {{ leader.position }}
      </li>
    </ul>

    <div :class="$style.selectedLeaderContainer">
      <div v-if="selectedLeader">
        <h4>{{ selectedLeader.name }}</h4>
        <p>{{ selectedLeader.bio }}</p>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: "Leaders",
    data () {
      return {
        leaders: [
          {
            id: 1,
            position: "CEO",
            name: "John Doe",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          },
          {
            id: 2,
            position: "Marketing and Risks Director",
            name: "Jane Doe",
            bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Imperdiet sed euismod nisi porta lorem mollis aliquam. Massa tempor nec feugiat nisl. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Sit amet cursus sit amet dictum sit amet justo. Hac habitasse platea dictumst vestibulum rhoncus est. Duis ut diam quam nulla porttitor massa id neque. Malesuada pellentesque elit eget gravida cum sociis natoque. Ut tristique et egestas quis ipsum suspendisse. Consequat ac felis donec et odio. Etiam sit amet nisl purus in mollis nunc sed. Viverra vitae congue eu consequat. Bibendum at varius vel pharetra vel turpis nunc eget lorem. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Nunc congue nisi vitae suscipit tellus mauris a."
          },
          {
            id: 3,
            position: "Sales Department Director",
            name: "John Smith",
            bio: "Est ante in nibh mauris cursus mattis molestie a. Vehicula ipsum a arcu cursus vitae congue mauris rhoncus aenean. Nec sagittis aliquam malesuada bibendum. Sit amet venenatis urna cursus eget. Pellentesque pulvinar pellentesque habitant morbi. Nisl nunc mi ipsum faucibus vitae aliquet. Aliquet risus feugiat in ante metus dictum at tempor commodo. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. In fermentum et sollicitudin ac orci phasellus egestas. Semper quis lectus nulla at volutpat. At risus viverra adipiscing at in tellus integer feugiat. Cras tincidunt lobortis feugiat vivamus at. Et pharetra pharetra massa massa ultricies mi. Hac habitasse platea dictumst quisque."
          },
          {
            id: 4,
            position: "Finance Department Director",
            name: "Jane Smith",
            bio: "Nunc eget lorem dolor sed. Et malesuada fames ac turpis. Purus non enim praesent elementum facilisis leo vel fringilla. Duis tristique sollicitudin nibh sit amet commodo nulla facilisi. Arcu felis bibendum ut tristique. Sit amet luctus venenatis lectus magna fringilla urna. Adipiscing tristique risus nec feugiat in fermentum posuere urna. Velit ut tortor pretium viverra. Elementum nibh tellus molestie nunc non blandit. Semper quis lectus nulla at volutpat diam. Cras semper auctor neque vitae. Facilisis sed odio morbi quis commodo. Tortor condimentum lacinia quis vel eros donec ac odio. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Diam maecenas sed enim ut. Sit amet est placerat in egestas erat imperdiet sed."
          }
        ],
        selectedLeader: null
      }
    }

  }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .leadersTab {
    display: flex;
    width: 100%;
    .leadersTabs {
      list-style: none;
      padding-left: 0;
      border: 1px solid $dark-color;
      margin: 0;
      width: 300px;
      background-color: $light-color;
      .leadersTabButton {
        border-bottom: 1px solid $dark-color;
        padding: 10px 20px;
        font-size: 16px;
        color: #000;
        cursor: pointer;
        &:last-child {
          border-bottom: none;
        }
        &.selected {
          background-color: $dark-color;
          color: #fff;
        }
      }
    }
    .selectedLeaderContainer {
      width: calc(100% - 300px);
      border-top: 1px solid $dark-color;
      border-bottom: 1px solid $dark-color;
      border-right: 1px solid $dark-color;
      padding: 20px;
      h4 {
        font-size: 22px;
        margin-top: 10px;
        margin-bottom: 10px;
        color: $accent-color;
      }
    }
  }

</style>
