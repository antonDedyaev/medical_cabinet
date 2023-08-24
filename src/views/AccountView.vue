<template>
  <div class="accountWrapper">
    <div class="accountWrapper__controls">
      <h1>Привет, {{ username }}</h1>
      <div class="accountWrapper__buttons">
        <MainButton @click="logout">Выйти из аккаунта</MainButton>
        <MainButton
          class="buttonWrapper_white"
          @click="$router.push('/contacts')"
          >Перейти в контакты</MainButton
        >
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import MainButton from "@/components/UI/MainButton.vue";
import { defineComponent } from "vue";
export default defineComponent({
  components: { MainButton },
  emits: ["setAuth"],

  data() {
    return {
      username: "",
    };
  },
  methods: {
    logout() {
      this.$router.push("/");
      localStorage.removeItem("currentUser");
      this.$emit("setAuth", false);
    },
  },
  mounted() {
    const currentUser = localStorage.getItem("currentUser");
    if (currentUser) this.username = JSON.parse(currentUser).name;
    this.$emit("setAuth", true);
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/main";

.accountWrapper {
  display: flex;
  align-items: center;
  height: 280px;

  &__controls {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 35px;

    h1 {
      height: 71px;
      color: $text;
      font-family: Montserrat;
      font-size: 58px;
      font-style: normal;
      font-weight: 700;
      line-height: 80px;
      letter-spacing: 0.2px;
    }
  }
  &__buttons {
    display: flex;
    gap: 10px;
  }
}

@media screen and (max-width: 540px) {
  .accountWrapper {
    &__controls {
      h1 {
        font-size: 42px;
      }
    }
  }
}
</style>
