<template>
  <div :class="$style.account">
    <h4>A new account!</h4>
    <h4>Enter in the required fields below:</h4>
    <form :class="$style.accountForm">
      <div :class="$style.accountMainInfo">
        <div :class="$style.formField">
          <label>First Name*</label>
          <input type="text">
        </div>
        <div :class="$style.formField">
          <label>Last Name*</label>
          <input type="text">
        </div>
        <div :class="$style.formField">
          <label>Email*</label>
          <input type="text">
        </div>
        <div :class="$style.formField">
          <label>Birthday (optional)</label>
          <input type="text">
        </div>
        <div :class="$style.formField">
          <label>Password*</label>
          <div :class="$style.inputGroup">
            <input type="text">
            <button :class="$style.linkBtn">Show</button>
          </div>
        </div>
        <div :class="$style.formField">
          <label>Mailing Address (optional)</label>
          <input type="text">
          <div :class="$style.addressGroup">
            <input type="text">
            <select>
              <option value="CA">CA</option>
              <option value="MI">MI</option>
              <option value="AR">AR</option>
            </select>
            <input type="text">
          </div>
        </div>
      </div>
      <div :class="$style.accountOptionalInfo">
        <h4>Preferences (optional)</h4>
        <div :class="$style.formField">
          <label>Preference Question #1</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div :class="$style.formField">
          <label>Preference Question #1</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div :class="$style.formField">
          <label>Preference Question #1</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <div :class="$style.formField">
          <label>Preference Question #1</label>
          <select>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
      </div>
      <button type="submit" :class="$style.submitBtn">Submit</button>
      <button :class="$style.linkBtn">Cancel</button>
    </form>


  </div>
</template>

<script>
    export default {
        name: "AccountForm"
    }
</script>

<style lang="scss" module>
  @import '../assets/global';

  .account {
    max-width: 779px;
    margin: 0 auto;
    h4 {
      color: #000000;
      font-size: 14px;
      font-weight: 300;
      letter-spacing: -0.2px;
      line-height: 22px;
      text-align: center;
      margin: 0;
    }
  }
  .accountForm {
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .accountMainInfo {
      display: flex;
      flex-flow: row wrap;
      margin-bottom: 25px;
    }
    .accountOptionalInfo {
      display: flex;
      flex-flow: row wrap;
      margin-bottom: 14px;
      h4 {
        width: 100%;
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 19px;
        letter-spacing: -0.21px;
        line-height: 22px;
      }
    }
    .formField {
      width: calc(50% - 90px);
      margin: 0 45px;
      label {
        display: block;
        margin-bottom: 10px;
        color: #39AA40;
        font-size: 14px;
        font-weight: 700;
        letter-spacing: -0.2px;
        line-height: 20px;
      }
      input {
        width: 100%;
        border: none;
        border-bottom: 1px solid #979797;
        padding: 0 0 10px;
        color: #000;
        font-size: 14px;
        letter-spacing: -0.2px;
        line-height: 19px;
        margin-bottom: 15px;
        outline: none;
      }
      .inputGroup {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-between;
        margin-bottom: 15px;
        border-bottom: 1px solid #979797;
        button {
          width: 50px;
          padding-bottom: 10px;
        }
        input {
          width: calc(100% - 50px);
          margin-bottom: 0;
          border-bottom: none;
        }
      }
      .addressGroup {
        display: flex;
        flex-flow: row nowrap;
        input:first-child {
          width: calc(100% - 179px);
          margin-right: 19px;
        }
        input:last-child {
          width: 96px;
          margin-left: 14px;
        }
        select {
          width: 50px;
          margin-bottom: 15px;
        }
      }
      select {
        width: 100%;
        margin-bottom: 18px;
      }

    }
    .submitBtn {
      margin-bottom: 26px;
    }
  }

  .linkBtn {
    border: none;
    background-color: transparent;
    color: #2087FF;
    font-size: 13px;
    line-height: 15px;
    cursor: pointer;
    outline: none;
  }
  .submitBtn {
    background: (linear-gradient(180deg, #58C762 0%, #16961E 100%));
    color: #fff;
    font-size: 24px;
    font-weight: 700;
    text-transform: uppercase;
    padding: 26px 140px;
    border-radius: 37.5px;
    border: none;
    outline: none;
    cursor: pointer;
  }
</style>
