<template>
  <div :class="$style.stepsMenu">
    <ul :class="$style.stepsList">
      <li
        v-for="step in steps"
        :key="step.id"
        :class="[$style.step, {[$style.checked] : step.checked === true}]"
      >
        <div :class="$style.stepTitleContainer">
          <div :class="$style.stepCheckmark">
            <svg
              v-svg
              symbol="checkmark-icon"
              :class="$style.checkmarkIcon"
            />
          </div>
          <h4 :class="$style.stepTitle">{{ step.title }}</h4>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: "Steps",
    data () {
      return {
        steps: [
          {
            id: 1,
            title: "Protein",
            checked: true
          },
          {
            id: 2,
            title: "Bun",
            checked: true
          },
          {
            id: 3,
            title: "Cheese",
            checked: true
          },
          {
            id: 4,
            title: "Sauce",
            checked: false
          },
          {
            id: 5,
            title: "Toppings",
            checked: false
          },
          {
            id: 6,
            title: "Premium Toppings",
            checked: false
          },
          {
            id: 7,
            title: "Boss Bundle",
            checked: false
          },

        ]
      }
    }
  }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .stepsMenu {
    width: 100%;
    box-shadow: 0 1px 2px 0 rgba(125,125,125,0.37);
    border: 1px solid #eee;
    .stepsList {
      list-style: none;
      padding-left: 0;
      margin: 0;
      height: 60px;
      display: flex;
      .step {
        background-color: #F0F0F0;
        width: 14.3%;
        padding-left: 16px;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        position: relative;
        transition: all 0.3s ease-in-out;
        &:before {
          content: '';
          position: absolute;
          width: 23px;
          height: 50%;
          top: 0;
          left: calc(100% - 16px);
          z-index: 10;
          background-color: #F0F0F0;
          box-shadow: 1px 0 0 0 #FFFFFF;
          transform: skew(30deg);
          transition: all 0.3s ease-in-out;
        }
        &:after {
          content: '';
          position: absolute;
          width: 23px;
          height: 50%;
          top: auto;
          bottom: 0;
          left: calc(100% - 16px);
          z-index: 10;
          background-color: #F0F0F0;
          box-shadow: 1px 0 0 0 #FFFFFF;
          transform: skew(-30deg);
          transition: all 0.3s ease-in-out;
        }
        &:first-child {
          padding-left: 0;
        }
        &:last-child:before,
        &:last-child:after {
          content: none;
        }
        .stepTitleContainer {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 100%;
          .stepCheckmark {
            display: inline-block;
            width: 24px;
            height: 24px;
            margin-right: 8px;
            background-color: #B3B3B3;
            border-radius: 50%;
            opacity: 0.5;
            transition: all 0.3s ease-in-out;
            .checkmarkIcon {
              width: 24px;
              height: 24px;
              fill: #F4F4F4;
              transition: all 0.3s ease-in-out;
            }
          }
          .stepTitle {
            color: rgba(39,39,39,0.3);
            font-size: 17px;
            font-weight: 700;
            margin: 0;
            text-align: left;
            text-transform: uppercase;
            display: block;
            max-width: calc(100% - 62px);
            transition: all 0.3s ease-in-out;
          }
        }
        &.checked {
          background-color: #fff;
          cursor: pointer;
          .stepCheckmark {
            opacity: 1;
            background-color: #38AA3F;
          }
          &:before,
          &:after {
            background-color: #fff;
            box-shadow: 1px 0 0 0 #E1E1E1;
          }
          &:hover,
          &:focus {
            background-color: #38AA3F;
            &:before,
            &:after {
              background-color: #38AA3F;
            }
            .stepCheckmark {
              background-color: #d4d4d4;
              opacity: 1;
              .checkmarkIcon {
                fill: #38AA3F;
              }
            }
          }
          &:active {
            background-color: #000;
            &:before,
            &:after {
              background-color: #000;
            }
            .stepTitle {
              color: rgba(255,255,255,0.8);
            }
            .stepCheckmark {
              opacity: 1;
              background-color: #38AA3F;
              .checkmarkIcon {
                fill: #F4F4F4;
              }
            }
          }

          .stepTitle {
            color: rgba(0,0,0,0.8);

          }
        }

      }
    }
  }

</style>
