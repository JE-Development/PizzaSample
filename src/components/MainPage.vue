<style scoped>

.header-background{
  background: #fff7ee;
}

.header-outer{
  height: 100vh;
}

.header-inner{
  height: 80%;
}

.main-headline{
  font-size: 80px;
}

.half-width{
  width: 50%;
}

@media (max-width: 510px) {

}

</style>

<template>

  <Nav/>

  <div class="header-background header-outer center">
    <div class="header-inner main-content-width space-between center-vertical">
      <div class="center half-width">
        <div>
          <h1 class="reset-margin main-headline">Authentische <span class="prim-color">italienische</span> Pizza</h1>
          <p class="default-textsize decent-color">Frisch gebacken mit den besten Zutaten direkt aus Italien. Erleben Sie den wahren Geschmack Neapels in jedem Bissen.</p>
          <div class="flex">
            <UIButton title="Menü ansehen">
              <Icon size="25" class="white">
                <FoodPizza20Regular/>
              </Icon>
            </UIButton>
            <div style="width: 20px"></div>
            <UIButton title="Menü ansehen" sec>
              <Icon size="25" class="prim-color">
                <Call28Regular/>
              </Icon>
            </UIButton>
          </div>
          <div style="height: 30px"></div>
          <div class="center-vertical">
            <Icon size="25" class="prim-color">
              <Clock20Regular/>
            </Icon>
            <div style="width: 5px"></div>
            <p class="reset-margin decent-color">Lieferung in 30 min.</p>
            <div style="width: 30px"></div>
            <Icon size="25" class="gold">
              <Star16Filled/>
            </Icon>
            <div style="width: 5px"></div>
            <p class="reset-margin decent-color">4.8/5 Bewertung</p>
          </div>
        </div>
      </div>
      <div class="center half-width">
        <img src="../assets/pizza.png" class="max-width">
      </div>
    </div>
  </div>

</template>


<script>

import Nav from "@/components/views/Nav.vue"
import UIButton from "@/components/views/UIButton.vue"
import {Icon} from "@vicons/utils"
import {FoodPizza20Regular, Call28Regular, Clock20Regular, Star16Filled} from "@vicons/fluent"

export default {
  name: "MainPage",
  components: {Icon, UIButton, Nav, FoodPizza20Regular, Call28Regular, Clock20Regular, Star16Filled},
  data() {
    return {
    };
  },

  created() {
  },

  beforeDestroy() {
  },

  mounted() {
  },

  methods: {


    getCookies(key) {
      return this.$cookies.get(key);
    },
    setCookies(key, value) {
      this.$cookies.set(key, value, 2147483647);
    },
  }
}
</script>