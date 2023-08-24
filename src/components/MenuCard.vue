<template>
  <div class="cardWrapper">
    <img :src="cardData.image" alt="Card icon" class="cardWrapper__image" />
    <span class="cardWrapper__title">{{ cardData.title }}</span>
    <img src="@/assets/images/line.png" alt="Solid horizontal line" />
    <p class="cardWrapper__text">{{ cardData.text }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "MenuCard",
  props: { cardData: { type: Object, required: true } },
});
</script>

<style lang="scss">
@import "@/styles/main";

.cardWrapper {
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  width: 328px;
  padding: 35px 40px !important;

  gap: 20px;

  background: $background-main;
  box-shadow: 0px 13px 19px 0px rgba(0, 0, 0, 0.07);

  cursor: pointer;

  &:not(:hover) {
    transform: translateY(0);
    transition: all 0.4s ease;
  }

  &:hover {
    transform: translateY(-10px);
    transition: all 0.4s ease;
  }

  &__image {
    display: flex;
    width: 72px;
    height: 72px;
    padding: 20px;
    justify-content: center;
    align-items: center;

    border-radius: 200px;
    background: $background-red;
  }

  &__title {
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 0.1px;
  }

  &__text {
    color: $subtext;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.2px;
  }
}
</style>
