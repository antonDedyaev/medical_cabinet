<template>
  <TopNavbar
    @open-modal="showModal"
    @set-auth="setAuth"
    v-model:is-auth="auth"
  />
  <div class="mainWrapper">
    <ModalWindow v-model:show="modalVisible"
      ><AuthorizationForm @close-modal="hideModal" @set-auth="setAuth"
    /></ModalWindow>
    <div class="mainWrapper__content">
      <router-view @set-auth="setAuth" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopNavbar from "@/components/TopNavbar.vue";
import ModalWindow from "@/components/UI/ModalWindow.vue";
import AuthorizationForm from "@/components/AuthorizationForm.vue";

export default defineComponent({
  components: { TopNavbar, ModalWindow, AuthorizationForm },
  data() {
    return {
      modalVisible: false,
      isAuthorized: false,
      auth: false,
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
    hideModal() {
      this.modalVisible = false;
    },
    setAuth(value: boolean) {
      console.log(value);
      this.auth = value;
    },
  },
});
</script>

<style lang="scss">
@import "@/styles/main";

.mainWrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 1046px;
    padding: 80px 0px;
    gap: 80px;
  }
}

@media screen and (max-width: 1050px) {
  .mainWrapper {
    &__content {
      align-items: center;
      justify-content: center;
      width: fit-content;
      margin: 0 15px;
    }
  }
}

@media screen and (max-width: 540px) {
  .mainWrapper {
    &__content {
      align-items: center;
      justify-content: center;
      margin: 0 10px;
      padding-top: 38px;
      gap: 11px;
    }
  }
}
</style>
