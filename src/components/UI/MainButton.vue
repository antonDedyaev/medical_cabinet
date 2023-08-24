<template>
  <button class="buttonWrapper">
    <slot></slot>
  </button>
</template>

<script lang="ts">
export default {};
</script>

<style scoped lang="scss">
@import "../../styles/main.scss";

.buttonWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 40px;
  gap: 10px;
  border-radius: 5px;
  border: none;
  background: $button-red;
  color: $background-main;
  text-align: center;

  font-family: Montserrat;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0.2px;

  &:hover {
    cursor: pointer;

    background: $background-red;
  }

  &_white {
    background: $background-main;
    border-radius: 5px;
    border: 1px solid $button-red;
    background: $background-main;
    color: $button-red;

    &:hover {
      background: $background-shade;
    }
  }
}
</style>
