<template>
  <section :class="$style.contactsSection">
    <h2>Contact Us</h2>
    <form
      :class="$style.contactsForm"
      id="contactsForm"
    >
      <div :class="$style.inputField">
        <label for="contactsName">Name <span :class="$style.required">*</span></label>
        <input
          type="text"
          id="contactsName"
          v-model="contactsName"
          @blur="checkField(contactsName, $event.target)"
        >

        <p
          :class="$style.error"
          v-if="this.contactsErrors.indexOf('contactsName') > -1"
        >Your name is required.</p>
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
          id="contactsEmail"
          v-model="contactsEmail"
          @blur="checkField(contactsEmail, $event.target)"
        >

        <p
          :class="$style.error"
          v-if="this.contactsErrors.indexOf('contactsEmail') > -1"
        >Your e-mail is required.</p>
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
          id="contactsMessage"
          v-model="contactsMessage"
          @blur="checkField(contactsMessage, $event.target)"
        ></textarea>

        <p
          :class="$style.error"
          v-if="this.contactsErrors.indexOf('contactsMessage') > -1"
        >Please, type your message.</p>
      </div>

      <div :class="$style.checkboxField">
        <input
          type="checkbox"
          id="contactsAgreement"
          v-model="contactsAgreement"
          @change="checkField(contactsAgreement, $event.target)"
        >
        <label for="contactsAgreement">I agree with something<span :class="$style.required">*</span></label>

        <p
          :class="$style.error"
          v-if="this.contactsErrors.indexOf('contactsAgreement') > -1"
        >We need your agreement to continue.</p>
      </div>

      <button :class="[$style.submitBtn, {[$style.errors]: hasErrors}]">Send</button>

    </form>
  </section>
</template>

<script>
    export default {
      name: "Contacts",
      data: function () {
        return {
          contactsErrors: [],
          contactsName: null,
          contactsPhone: null,
          contactsEmail: null,
          contactsAddress: null,
          contactsMessage: null,
          contactsAgreement: false
        }
      },
      methods: {
        // Think how to avoid of e.id!!! Important!
        checkField(name, e) {
          if (!name) {
            this.contactsErrors.push(e.id);
          } else {
            this.contactsErrors = this.contactsErrors.filter(item => item !== e.id);
          }
        }
      },
      computed: {
        // Button should be not-active when the required fields are untouched and empty too!
        hasErrors() {
          if (this.contactsErrors.length > 0) {
            return true;
          }
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
        }
      }
      .checkboxField {
        width: calc(100% - 30px);
        margin-right: 15px;
        margin-left: 15px;
        margin-top: 20px;
        label {
          color: $text-color;
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
