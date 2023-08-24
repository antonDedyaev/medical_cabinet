<template>
  <div class="modalWrapper" v-if="show" @click="hideModal">
    <div class="modalWrapper__content" @click.stop><slot></slot></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalWindow",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    hideModal() {
      this.$emit("update:show", false);
    },
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/main";
.modalWrapper {
  height: 100vh;
  width: 100vw;
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.4);

  z-index: 3;

  &__content {
    margin: auto;
    padding: 30px 60px;
    background: $background-main;
    border-radius: 8px;
  }
}

@media screen and (max-width: 540px) {
  .modalWrapper {
    &__content {
      margin: auto;
      padding: 20px 30px;
      background: $background-main;
      border-radius: 8px;
    }
  }
}

@media screen and (max-width: 370px) {
  .modalWrapper {
    &__content {
      margin: auto;
      padding: 20px;
    }
  }
}
</style>
