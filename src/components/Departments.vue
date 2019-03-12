<template>
  <div :class="$style.departmentsTab">
    <ul :class="$style.departmentsTabs">
      <li
        v-for="depart in departments"
        :key="depart.id"
        :class="[$style.departmentsTabButton, {[$style.selected] : depart === selectedDepartment}]"
        @click="selectedDepartment = depart"
      >
        {{ depart.title }}
      </li>
    </ul>
    <div :class="$style.selectedDepartmentContainer">
      <div v-if="selectedDepartment">
        <h4>{{ selectedDepartment.title }}</h4>
        <h5>Director: {{ selectedDepartment.director }}</h5>
        <p>{{ selectedDepartment.description }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "Departments",
    data() {
      return {
        departments: [
          {
            id: 1,
            title: "Finance Department",
            director: "Jane Smith",
            description: "Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi tristique. Vestibulum lectus mauris ultrices eros in cursus turpis massa. Adipiscing enim eu turpis egestas pretium aenean. Risus commodo viverra maecenas accumsan lacus vel facilisis volutpat est. Donec adipiscing tristique risus nec. Orci dapibus ultrices in iaculis nunc sed. Nulla porttitor massa id neque aliquam vestibulum. Lacus laoreet non curabitur gravida arcu. Facilisis magna etiam tempor orci eu. Tempor commodo ullamcorper a lacus vestibulum. Massa enim nec dui nunc mattis enim ut tellus. Mi proin sed libero enim sed faucibus. Nulla facilisi etiam dignissim diam quis. Elementum curabitur vitae nunc sed velit. Quis eleifend quam adipiscing vitae. Magna sit amet purus gravida quis blandit turpis cursus. Cursus sit amet dictum sit amet justo donec enim. Vel eros donec ac odio tempor orci."
          },
          {
            id: 2,
            title: "Sales Department",
            director: "John Smith",
            description: "Tellus molestie nunc non blandit. Id aliquet risus feugiat in ante metus. Eu consequat ac felis donec et odio. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Dui faucibus in ornare quam viverra orci. Porttitor lacus luctus accumsan tortor posuere. Facilisis magna etiam tempor orci eu lobortis elementum nibh tellus. Orci porta non pulvinar neque laoreet suspendisse interdum consectetur libero. Accumsan tortor posuere ac ut consequat semper. Nisl suscipit adipiscing bibendum est ultricies integer quis. Massa eget egestas purus viverra accumsan in. Vestibulum morbi blandit cursus risus. Mauris in aliquam sem fringilla ut morbi tincidunt. Leo vel fringilla est ullamcorper eget nulla facilisi etiam. Odio ut sem nulla pharetra diam sit amet nisl. Aliquet risus feugiat in ante. Sit amet porttitor eget dolor morbi non arcu risus quis. Integer feugiat scelerisque varius morbi."
          },
          {
            id: 3,
            title: "Marketing and Risks",
            director: "Jane Doe",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus metus aliquam eleifend mi in nulla posuere sollicitudin. Imperdiet sed euismod nisi porta lorem mollis aliquam. Massa tempor nec feugiat nisl. Risus in hendrerit gravida rutrum quisque non tellus orci ac. Sit amet cursus sit amet dictum sit amet justo. Hac habitasse platea dictumst vestibulum rhoncus est. Duis ut diam quam nulla porttitor massa id neque. Malesuada pellentesque elit eget gravida cum sociis natoque. Ut tristique et egestas quis ipsum suspendisse. Consequat ac felis donec et odio."
          }
        ],
        selectedDepartment: null
      }
    }

  }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .departmentsTab {
    display: flex;
    width: 100%;
    .departmentsTabs {
      list-style: none;
      padding-left: 0;
      border: 1px solid $dark-color;
      margin: 0;
      width: 300px;
      background-color: $light-color;
      .departmentsTabButton {
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
    .selectedDepartmentContainer {
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
      h5 {
        font-size: 18px;
        color: $text-color;
        margin-top: 0;
        margin-bottom: 0;
        text-align: right;
      }
    }
  }
</style>
