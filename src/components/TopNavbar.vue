<template>
  <div class="navbarWrapper">
    <div class="navbarWrapper__menu">
      <img
        class="navbarWrapper__logo"
        src="@/assets/images/logo.svg"
        alt="Main logo"
      />
      <div class="navbarWrapper__contacts" @click="$router.push('/contacts')">
        Контакты
      </div>
      <button
        class="navbarWrapper__loginButton"
        @click="isAuth ? logout() : showModal()"
      >
        {{ isAuth ? "Выйти" : "Войти" }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopNavbar",
  props: {
    isAuth: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      modalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.$emit("openModal");
    },

    logout() {
      this.$router.push("/");
      localStorage.removeItem("currentUser");
    },
  },
});
</script>

<style lang="scss">
@import "@/styles/main";

.navbarWrapper {
  position: relative;
  display: flex;
  align-items: center;

  height: 80px;
  padding: 0 70px;
  border-bottom: 1px solid $black;

  &__logo {
    position: absolute;
    top: 31px;
  }

  &__menu {
    display: flex;
    width: 100%;
  }

  &__contacts {
    margin-left: auto;
    margin-right: 49px;
    padding: 10px;
    color: $subtext;
    text-align: center;
    text-align: center;
    font-family: Open Sans;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    letter-spacing: 0.2px;

    cursor: pointer;

    &:hover {
      text-shadow: -1px 1px 1px $background-red;
    }
  }

  &__loginButton {
    display: inline-flex;
    flex-direction: column;
    align-items: flex-start;

    padding: 8px 60px;

    border-radius: 7px;
    border: 2px solid $button-red;
    background: $background-main;

    color: $button-red;
    text-align: center;
    font-family: Montserrat;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    &:hover {
      cursor: pointer;
      background: $background-shade;
    }
  }
}

@media screen and (max-width: 760px) {
  .navbarWrapper {
    padding: 0 10px;

    &__contacts {
      margin-right: 0;
    }
  }
}

@media screen and (max-width: 540px) {
  .navbarWrapper {
    &__loginButton {
      display: inline-flex;
      padding: 6px 20px;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
    }
  }
}
</style>
