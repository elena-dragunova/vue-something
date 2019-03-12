<template>
  <section :class="$style.contactsSection">
    <h2>Contact Us</h2>
    <form
      :class="$style.contactsForm"
      id="contactsForm"
      @submit.prevent="submitForm"
    >
      <div :class="$style.inputField">
        <label for="contactsName">Name <span :class="$style.required">*</span></label>
        <input
          :class="{[$style.error]: $v.contactsName.$error }"
          type="text"
          id="contactsName"
          v-model.trim="$v.contactsName.$model"
        >

        <p
          :class="$style.error"
          v-if="$v.contactsName.$error && !$v.contactsName.required"
        >Name is required.</p>
        <p
          :class="$style.error"
          v-if="!$v.contactsName.minLength"
        >Name must have at least {{ $v.contactsName.$params.minLength.min }} characters.</p>
      </div>
      <div :class="$style.inputField">
        <label for="contactsPhone">Phone</label>
        <input
          type="text"
          id="contactsPhone"
          v-model="contactsPhone"
        >
      </div>
      <div :class="$style.inputField">
        <label for="contactsEmail">E-mail<span :class="$style.required">*</span></label>
        <input
          type="text"
          :class="{[$style.error]: $v.contactsEmail.$error }"
          id="contactsEmail"
          v-model="contactsEmail"
          @input="$v.contactsEmail.$touch()"
        >

        <p
          :class="$style.error"
          v-if="$v.contactsEmail.$dirty && !$v.contactsEmail.required"
        >Email is required.</p>
        <p
          :class="$style.error"
          v-if="!$v.contactsEmail.email"
        >Please, type valid email.</p>
      </div>
      <div :class="$style.inputField">
        <label for="contactsAddress">Address</label>
        <input
          type="text"
          id="contactsAddress"
          v-model="contactsAddress"
        >
      </div>

      <div :class="$style.textField">
        <label for="contactsMessage">Your message<span :class="$style.required">*</span></label>
        <textarea
          :class="{[$style.error]: $v.contactsMessage.$error }"
          id="contactsMessage"
          v-model="contactsMessage"
          @input="$v.contactsMessage.$touch()"
        ></textarea>

        <p
          :class="$style.error"
          v-if="$v.contactsMessage.$dirty && !$v.contactsMessage.required"
        >Please, type your message.</p>
      </div>

      <div :class="$style.checkboxField">
        <label for="contactsAgreement">I agree with something<span :class="$style.required">*</span>
          <input
            :class="[$style.checkbox, {[$style.error]: $v.contactsAgreement.$error }]"
            type="checkbox"
            id="contactsAgreement"
            v-model="contactsAgreement"
            @change="$v.contactsAgreement.$touch()"
          >
          <span :class="$style.checkmark"></span>
        </label>



        <p
          :class="$style.error"
          v-if="$v.contactsAgreement.$dirty && !$v.contactsAgreement.agreed"
        >You should agree with something.</p>
      </div>

      <button :class="[$style.submitBtn, {[$style.errors]: $v.$invalid }]" type="submit">Send</button>

    </form>
  </section>
</template>

<script>
    import { required, minLength, email } from 'vuelidate/lib/validators';

    export default {
      name: "Contacts",
      data: function () {
        return {
          contactsName: "",
          contactsPhone: "",
          contactsEmail: "",
          contactsAddress: "",
          contactsMessage: "",
          contactsAgreement: false
        }
      },
      validations: {
        contactsName: {
          required,
          minLength: minLength(2)
        },
        contactsEmail: {
          required,
          email
        },
        contactsMessage: {
          required
        },
        contactsAgreement: {
          agreed: function (agreement) {
            return agreement === true;
          }
        }

      },
      methods: {
        submitForm() {
          console.log("Form is sent");
        }
      }
    }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .contactsSection {
    padding: 40px 0;
    @extend %container;
    h2 {
      font-size: 40px;
      text-align: center;
      margin-bottom: 10px;
    }
    .contactsForm {
      display: flex;
      flex-flow: row wrap;
      margin-right: -15px;
      margin-left: -15px;
      label {
        margin-bottom: 10px;
        margin-top: 20px;
        color: $text-color;
        font-size: 20px;
      }
      .inputField {
        width: calc(50% - 30px);
        display: flex;
        flex-direction: column;
        margin-right: 15px;
        margin-left: 15px;
        input {
          height: 40px;
          border: 1px solid $dark-color;
          border-radius: 6px;
          outline: none;
          padding: 0 10px;
          font-size: 18px;
          color: $text-color;
          &.error {
            border: 1px solid $accent-color;
          }
        }
      }
      .checkboxField {
        width: calc(100% - 30px);
        margin-right: 15px;
        margin-left: 15px;
        margin-top: 20px;
        label {
          color: $text-color;
          position: relative;
          padding-left: 35px;
          .checkmark {
            position: absolute;
            top: 2px;
            left: 0;
            border: 1px solid $dark-color;
            width: 20px;
            height: 20px;
            &:after {
              content: '';
              position: absolute;
              top: 0;
              left: 5px;
              width: 5px;
              height: 10px;
              border: solid white;
              border-width: 0 3px 3px 0;
              -webkit-transform: rotate(45deg);
              -ms-transform: rotate(45deg);
              transform: rotate(45deg);
              display: none;
            }
          }
          input.checkbox {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            margin: 0;
            width: 20px;
            height: 20px;
            &:checked + .checkmark {
              background-color: $dark-color;
              &:after {
                display: block;
              }
            }
            &.error + .checkmark {
              border-color: $accent-color;
            }
          }

        }
      }
      .textField {
        display: flex;
        flex-direction: column;
        width: calc(100% - 30px);
        margin-right: 15px;
        margin-left: 15px;
        textarea {
          height: 80px;
          border: 1px solid $dark-color;
          border-radius: 6px;
          outline: none;
          padding: 10px;
          font-size: 18px;
          color: $text-color;
          resize: none;
          &.error {
            border: 1px solid $accent-color;
          }
        }

      }
      .submitBtn {
        margin: 30px 15px 0;
        padding: 10px 60px;
        color: #fff;
        background-color: $dark-color;
        font-size: 26px;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        outline: none;
        &.errors {
          background-color: $light-color;
          cursor: default;
        }

      }
    }

  }

  .required {
    color: $accent-color;
    padding-left: 6px;
  }
  .error {
    color: $accent-color;
    margin-top: 6px;
    margin-bottom: 0;
  }


</style>
