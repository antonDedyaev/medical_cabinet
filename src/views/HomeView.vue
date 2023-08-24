<template>
  <div class="mainWrapper__content mainWrapper__content_top">
    <h1>Место для получения медицинской помощи</h1>
    <div class="mainWrapper__buttons">
      <MainButton @click="showModal">Войти</MainButton>
      <MainButton class="buttonWrapper_white" @click="$router.push('/contacts')"
        >Контакты</MainButton
      >
    </div>
    <ModalWindow v-model:show="modalVisible"><AuthorizationForm /></ModalWindow>
  </div>
  <div class="mainWrapper__content mainWrapper__content_bottom">
    <MenuCard
      class="mainWrapper__card"
      :cardData="item"
      v-for="item in menuItems"
      :key="item.id"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import MenuCard from "@/components/MenuCard.vue";
import MainButton from "@/components/UI/MainButton.vue";
import ModalWindow from "@/components/UI/ModalWindow.vue";
import AuthorizationForm from "@/components/AuthorizationForm.vue";

export default defineComponent({
  components: { MenuCard, MainButton, ModalWindow, AuthorizationForm },
  emits: ["setAuth"],

  data() {
    return {
      menuItems: [
        {
          id: 1,
          title: "Онлайн-прием",
          image: require("@/assets/images/heart.svg"),
          text: "Рыба текст",
        },
        {
          id: 2,
          title: "Экстренный Случай",
          image: require("@/assets/images/stethoscope.svg"),
          text: "Рыба текст",
        },
        {
          id: 3,
          title: "Лечение рака",
          image: require("@/assets/images/med-history.svg"),
          text: "Рыба текст",
        },
      ],
      modalVisible: false,
    };
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    },
  },
  mounted() {
    !localStorage.getItem("currentUser") && this.$emit("setAuth", false);
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/main";

.mainWrapper {
  &__content {
    &_top {
      width: 727px;
      height: 280px;
      padding: 0;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      gap: 35px;
      flex-shrink: 0;

      h1 {
        height: 160px;

        color: $text;
        font-family: Montserrat;
        font-size: 58px;
        font-style: normal;
        font-weight: 700;
        line-height: 80px;
        letter-spacing: 0.2px;
      }
    }

    &_bottom {
      padding: 0;
      display: grid;
      grid-template-areas: "card1 card2 card3";
      gap: 30px;
    }
  }
  &__card {
    &:nth-child(1) {
      grid-area: card1;
    }
    &:nth-child(2) {
      grid-area: card2;
    }
    &:nth-child(3) {
      grid-area: card3;
    }
  }

  &__buttons {
    display: flex;
    gap: 10px;
  }
}

@media screen and (max-width: 1050px) {
  .mainWrapper {
    &__content {
      &_top {
        text-align: center;
        align-items: center;
        h1 {
          font-size: 48px;
        }
      }
      &_bottom {
        grid-template-areas:
          "card1 card2"
          "card3 .";
      }
    }
  }
}

@media screen and (max-width: 760px) {
  .mainWrapper {
    &__content {
      &_top {
        width: auto;
        h1 {
          font-size: 38px;
          line-height: 130%;
        }
      }
      &_bottom {
        grid-template-areas: "card3" "card1" "card2";
      }
    }
  }
}

@media screen and (max-width: 540px) {
  .mainWrapper {
    &__content {
      padding-top: 0;
      &_top {
        height: 213px;
        padding-top: 0;
        h1 {
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: 39px;
        }
      }
    }
  }
}

@media screen and (max-width: 420px) {
  .mainWrapper {
    &__content {
      padding-top: 0;
      &_top {
        text-align: left;
        align-items: flex-start;

        height: 213px;
        padding-top: 0;

        h1 {
          height: 89px;

          font-family: Montserrat;
          font-size: 28px;
          font-style: normal;
          font-weight: 700;
          line-height: 39px;
          letter-spacing: 0.2px;
        }
      }
    }
  }
}

@media screen and (max-width: 370px) {
  .mainWrapper {
    &__content {
      &_top {
        h1 {
          font-size: 24px;
        }
      }
    }
  }
}
</style>
