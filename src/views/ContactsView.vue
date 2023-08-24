<template>
  <div class="contactsWrapper">
    <h1 class="contactsWrapper__header">Контакты</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  emits: ["setAuth"],
  mounted() {
    this.$emit("setAuth", !!localStorage.getItem("currentUser"));
  },
});
</script>

<style lang="scss">
@import "@/styles/main";

.contactsWrapper {
  display: flex;
  align-items: center;
  height: 280px;

  &__header {
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
</style>
