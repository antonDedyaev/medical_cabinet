<template>
  <div class="formWrapper">
    <h2 class="formWrapper__authHeader" v-if="authError.length !== 0">
      {{ authError }}
    </h2>
    <h2 v-else>Войти в личный кабинет</h2>
    <form class="formWrapper__content" action="">
      <div class="formWrapper__input">
        <label for="login-input">Логин *</label>
        <input
          type="text"
          id="login-input"
          :value="login"
          @input="login = ($event.target as HTMLInputElement).value"
        />
        <span
          class="formWrapper__errorMessage"
          :class="{ formWrapper__errorMessage_active: loginError.length !== 0 }"
          >{{ loginError }}</span
        >
      </div>

      <div class="formWrapper__input">
        <label for="password-input">Пароль *</label>
        <input
          type="text"
          id="password-input"
          :value="password"
          @input="password = ($event.target as HTMLInputElement).value"
        />
        <span
          class="formWrapper__errorMessage"
          :class="{
            formWrapper__errorMessage_active: passwordError.length !== 0,
          }"
          >{{ passwordError }}</span
        >
      </div>
      <button class="formWrapper__button" @click.prevent="validateForm">
        Войти
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import database from "@/database/users.json";
import IUser from "@/models/IUser";

export default defineComponent({
  name: "AuthorizationForm",
  data() {
    return {
      login: "",
      password: "",
      loginError: "",
      passwordError: "",
      authError: "",
    };
  },
  methods: {
    validateLogin() {
      this.loginError = this.login.length === 0 ? "Введите логин!" : "";
    },
    validatePassword() {
      this.passwordError =
        this.password.length < 8
          ? "Длина пароля должна быть не меньше 8 символов!"
          : "";
    },

    validateForm(): void {
      this.validateLogin();
      this.validatePassword();

      if (this.loginError.length === 0 && this.passwordError.length === 0) {
        const authorizedUsers: IUser[] = database.users;
        const matchedUser = authorizedUsers.find(
          (user) => user.login === this.login && user.password === this.password
        );
        if (matchedUser) {
          localStorage.setItem("currentUser", JSON.stringify(matchedUser));
          this.$router.push("/account");
          this.$emit("closeModal");
        } else {
          this.authError = "Неверный логин или пароль";
        }
      }
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/main";

.formWrapper {
  display: flex;
  flex-direction: column;

  &__authHeader {
    color: $button-red;
  }

  h2 {
    margin-bottom: 25px;
  }

  &__content {
    display: flex;
    flex-direction: column;
    gap: 30px;

    label {
      color: $subtext;
    }
  }

  &__input {
    position: relative;
    display: flex;
    justify-content: space-between;

    input {
      width: 70%;
      padding: 3px 5px;

      background: $background-shade;
      border: none;
      border-radius: 4px;

      box-shadow: 0 1px 5px 0 $subtext;

      font-family: "Montserrat";
      font-size: 14px;

      color: $subtext;
    }
  }

  &__errorMessage {
    position: absolute;
    top: 24px;
    right: 0;

    max-height: 0px;
    width: 70%;
    padding: 2px 5px;

    color: $background-red;
    background: $background-shade;
    text-shadow: 0 0 1px $button-red;
    font-size: 10px;
    line-height: 130%;
    opacity: 0;
    border-radius: 0 0 5px 5px;
    border: 1px solid $background-red;
    border-top: none;

    text-align: center;

    &_active {
      max-height: 50px;
      opacity: 1;
      transition: max-height 0.5s, opacity 0.6s;
    }
  }

  &__button {
    width: fit-content;

    padding: 6px 16px;
    border-radius: 5px;
    border: 2px solid $button-red;
    background: $background-main;
    color: $button-red;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;

    cursor: pointer;

    &:hover {
      background: $background-shade;
    }
  }
}
</style>
