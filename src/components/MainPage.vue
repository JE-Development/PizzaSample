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

.down-icon{
  opacity: 0.5;
  transform: translateY(-60px);
}

.huge-headline{
  font-size: 50px;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 50px;
}

.us-background{
  background: linear-gradient(to right, #ff432a, #ff6a2a);
  padding-top: 50px;
  padding-bottom: 50px;
}

.tri-width{
  width: 33%;
}

.address-card{
  width: 95%;
  max-width: 500px;
  padding: 20px;
}

.message-card{
  width: 95%;
  max-width: 500px;
  padding: 20px;
}

.contact-circle{
  width: 50px;
  height: 50px;
  background: rgba(255, 0, 0, 0.2);
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

  <div class="center-horizontal down-icon">
    <Icon size="40" class="prim-color">
      <ChevronDoubleDown20Regular/>
    </Icon>
  </div>

  <div class="center-horizontal">
    <div class="main-content-width center-horizontal">
      <div>
        <div class="center-horizontal">
          <h1 class="huge-headline">Unsere <span class="prim-color">Spezialitäten</span></h1>
        </div>
        <div class="center-horizontal">
          <p class="decent-color default-textsize reset-margin">Jede Pizza wird mit Liebe und den frischesten Zutaten zubereitet</p>
        </div>
      </div>
    </div>
  </div>

  <div style="height: 50px"></div>

  <div class="center-horizontal">
    <div class="main-content-width center-horizontal product-grid">
      <ProductCard title="Margherita Classica" sub="Frische Tomaten, Mozzarella, Basilikum, Olivenöl" price="12,90€" img="pizza-product-1"/>
      <ProductCard title="Quattro Stagioni" sub="Tomaten, Mozzarella, Schinken, Pilze, Artischocken, Oliven" price="13,90€" img="pizza-product-2"/>
      <ProductCard title="Diavola Piccante" sub="Tomaten, Mozzarella, scharfe Salami, Peperoni, Chili" price="14,90€" img="pizza-product-3"/>
      <ProductCard title="Prosciutto e Funghi" sub="Tomaten, Mozzarella, Prosciutto, frische Champignons" price="13,90€" img="pizza-product-4"/>
      <ProductCard title="Vegetariana Deluxe" sub="Tomaten, Mozzarella, Zucchini, Auberginen, Paprika, Rucola" price="12,90€" img="pizza-product-5"/>
      <ProductCard title="Quattro Formaggi" sub="Mozzarella, Gorgonzola, Parmesan, Ricotta, Walnüsse" price="11,90€" img="pizza-product-6"/>
    </div>
  </div>

  <div style="height: 50px"></div>

  <div class="max-width us-background center-horizontal">
    <div class="header-inner main-content-width space-between center-vertical">
      <div class="center half-width">
        <div>
          <h1 class="huge-headline white">Unsere Geschichte</h1>
          <p class="white default-textsize reset-margin">Seit 1985 bringen wir die authentischen Aromen Italiens nach Deutschland. Unser Familienrezept wird seit Generationen weitergegeben.</p>
          <div style="height: 20px">

          </div>
          <p class="white default-textsize reset-margin">Mit traditionellen Methoden und den besten Zutaten direkt aus Italien kreieren wir Pizzen, die Sie direkt nach Neapel versetzen.</p>
          <div style="height: 20px"></div>
          <div class="center-horizontal">
            <div class="tri-width center-horizontal">
              <div>
                <div class="center-horizontal">
                  <h2 class="reset-margin white" style="font-size: 40px">35+</h2>
                </div>
                <div class="center-horizontal">
                  <p class="white reset-margin">Jahre Erfahrung</p>
                </div>
              </div>
            </div>
            <div class="tri-width center-horizontal">
              <div>
                <div class="center-horizontal">
                  <h2 class="reset-margin white" style="font-size: 40px">50k+</h2>
                </div>
                <div class="center-horizontal">
                  <p class="white reset-margin">Zufriedene Kunden</p>
                </div>
              </div>
            </div>
            <div class="tri-width center-horizontal">
              <div>
                <div class="center-horizontal">
                  <h2 class="reset-margin white" style="font-size: 40px">15</h2>
                </div>
                <div class="center-horizontal">
                  <p class="white reset-margin">Pizzasorten</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center half-width">
        <img src="../assets/pizzeria.jpg" class="max-width round-corner max-height contain">
      </div>
    </div>
  </div>

  <div style="height: 50px"></div>

  <div class="center-horizontal">
    <div class="main-content-width center-horizontal">
      <div>
        <div class="center-horizontal">
          <h1 class="huge-headline">Kontakt & <span class="prim-color">Reservierung</span></h1>
        </div>
        <div class="center-horizontal">
          <p class="decent-color default-textsize reset-margin">Rufen Sie uns an, oder schreiben Sie eine Nachricht.</p>
        </div>
      </div>
    </div>
  </div>

  <div style="height: 50px"></div>

  <div class="center-horizontal">
    <div class="main-content-width center-horizontal">
      <div class="address-card shadow round-corner flex" style="flex-direction: column;">
        <h2 class="reset-margin">Kontaktinformationen</h2>
        <div style="height: 20px"></div>
        <div class="center-vertical flex-1">
          <div>
            <div class="center-vertical">
              <div class="full-round prim-color-background contact-circle center">
                <Icon size="35" class="prim-color">
                  <Location20Regular/>
                </Icon>
              </div>
              <div style="width: 20px"></div>
              <div>
                <p class="reset-margin bold">Adresse</p>
                <p class="decent-color reset-margin">Musterstraße 123, 12345 Berlin</p>
              </div>
            </div>
            <div style="height: 20px"></div>
            <div class="center-vertical">
              <div class="full-round prim-color-background contact-circle center">
                <Icon size="35" class="prim-color">
                  <Call28Regular/>
                </Icon>
              </div>
              <div style="width: 20px"></div>
              <div>
                <p class="reset-margin bold">Telefon</p>
                <p class="decent-color reset-margin">+49 30 12345678</p>
              </div>
            </div>
            <div style="height: 20px"></div>
            <div class="center-vertical">
              <div class="full-round prim-color-background contact-circle center">
                <Icon size="35" class="prim-color">
                  <Mail20Regular/>
                </Icon>
              </div>
              <div style="width: 20px"></div>
              <div>
                <p class="reset-margin bold">E-Mail</p>
                <p class="decent-color reset-margin">info@bellavista-pizza.de</p>
              </div>
            </div>
            <div style="height: 20px"></div>
            <div class="center-vertical">
              <div class="full-round prim-color-background contact-circle center">
                <Icon size="35" class="prim-color">
                  <Clock20Regular/>
                </Icon>
              </div>
              <div style="width: 20px"></div>
              <div>
                <p class="reset-margin bold">Öffnungszeiten</p>
                <p class="decent-color reset-margin">Mo-So: 11:00 - 23:00 Uhr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style="width: 20px"></div>
      <div class="message-card shadow round-corner">
        <h2 class="reset-margin">Nachricht senden</h2>
        <div style="height: 20px"></div>
        <div class="center">
          <div class="flex-1">
            <div>
              <p class="reset-margin">Name</p>
            </div>
            <div class="center-horizontal max-width">
              <div class="input-layer">
                <input class="input"/>
              </div>
            </div>
          </div>
          <div class="flex-1">
            <div>
              <p class="reset-margin">E-Mail</p>
            </div>
            <div class="center-horizontal max-width">
              <div class="input-layer">
                <input class="input"/>
              </div>
            </div>
          </div>
        </div>
        <div style="height: 10px"></div>
        <div>
          <p class="reset-margin">Anliegen</p>
        </div>
        <div class="center-horizontal max-width">
          <div class="input-layer">
            <input class="input" placeholder="Reservierung / Frage">
          </div>
        </div>
        <div style="height: 10px"></div>
        <div>
          <p class="reset-margin">Ihr Anliegen</p>
        </div>
        <div class="center-horizontal max-width">
          <textarea class="textarea" style="min-height: 100px; font-size: 15px"/>
        </div>
        <div style="height: 10px"></div>
        <div class="center-horizontal">
          <UIButton title="Absenden"/>
        </div>
      </div>
    </div>
  </div>

  <div style="height: 100px"></div>

</template>


<script>

import Nav from "@/components/views/Nav.vue"
import UIButton from "@/components/views/UIButton.vue"
import {Icon} from "@vicons/utils"
import {FoodPizza20Regular, Call28Regular, Clock20Regular, Star16Filled, ChevronDoubleDown20Regular, Location20Regular, Mail20Regular} from "@vicons/fluent"
import ProductCard from "@/components/views/ProductCard.vue";

export default {
  name: "MainPage",
  components: {
    ProductCard,
    Icon, UIButton, Nav, FoodPizza20Regular, Call28Regular, Clock20Regular, Star16Filled, ChevronDoubleDown20Regular, Location20Regular, Mail20Regular},
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