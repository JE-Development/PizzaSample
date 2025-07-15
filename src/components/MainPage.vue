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
  width: 500px;
  padding: 20px;
}

.message-card{
  width: 500px;
  padding: 20px;
}

.contact-circle{
  width: 50px;
  height: 50px;
  background: rgba(255, 0, 0, 0.2);
}

.hide-pizza{
  display: flex;
}

.mobile-center-horizontal{
  display: flex;
}

.mobile-center{
  display: flex;
}

.button-space{
  width: 20px;
}

.contact-space{
  width: 20px;
}

@media (max-width: 1000px) {
  .hide-pizza{
    display: none;
  }
  .half-width{
    width: 100%;
  }

  .mobile-center-horizontal{
    display: flex;
    justify-content: center;
  }

  .mobile-center-text{
    text-align: center;
  }

  .mobile-center{
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  .mobile-column{
    flex-direction: column;
  }

}
@media (max-width: 720px) {
  .contact-column{
    flex-direction: column;
  }

  .address-card{
    width: 85%;
  }

  .message-card{
    width: 85%;
  }

  .contact-space{
    height: 10px;
  }

  .product-grid {
    grid-template-columns: repeat(1, 1fr);
  }
}

@media (max-width: 600px) {
  .main-headline{
    font-size: 10vw;
  }

  .mobile-button-column{
    flex-direction: column;
  }

  .button-space{
    height: 10px;
  }

  .small-mobile-font{
    font-size: 12px;
  }

}

</style>

<template>

  <Nav class="fade-bottom-before on-top" :class="fadeNav ? 'fade-bottom-after' : ''"/>

  <div class="header-background header-outer center" id="home">
    <div class="header-inner main-content-width space-between center-vertical">
      <div class="center half-width fade-right-before" :class="fadeHeader ? 'fade-right-after' : ''">
        <div>
          <h1 class="reset-margin main-headline mobile-center-text">Authentische <span class="prim-color">italienische</span> Pizza</h1>
          <p class="default-textsize decent-color fade-top-before mobile-center-text" :class="fadeSubHeader ? 'fade-top-after' : ''">Frisch gebacken mit den besten Zutaten direkt aus Italien. Erleben Sie den wahren Geschmack Neapels in jedem Bissen.</p>
          <div class="mobile-center-horizontal fade-top-before mobile-button-column" :class="fadeSubButtons ? 'fade-top-after' : ''">
            <div class="center-horizontal">
              <UIButton title="Menü ansehen" @click="onMenu">
                <Icon size="25" class="white">
                  <FoodPizza20Regular/>
                </Icon>
              </UIButton>
            </div>
            <div class="button-space"></div>
            <div class="center-horizontal">
              <UIButton title="Reservieren" sec @click="onReservation">
                <Icon size="25" class="prim-color">
                  <Call28Regular/>
                </Icon>
              </UIButton>
            </div>
          </div>
          <div style="height: 30px"></div>
          <div class="mobile-center fade-top-before" :class="fadeSubInfos ? 'fade-top-after' : ''">
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
      <div class="center half-width hide-pizza">
        <img src="../assets/pizza.png" class="max-width fade-left-before" :class="fadePizza ? 'fade-left-after' : ''">
      </div>
    </div>
  </div>

  <div class="center-horizontal down-icon" id="menu">
    <Icon size="40" class="prim-color">
      <ChevronDoubleDown20Regular/>
    </Icon>
  </div>

  <div class="center-horizontal" ref="menu">
    <div class="main-content-width center-horizontal">
      <div>
        <div class="center-horizontal">
          <h1 class="huge-headline center-text">Unsere <span class="prim-color">Spezialitäten</span></h1>
        </div>
        <div class="center-horizontal">
          <p class="decent-color default-textsize reset-margin center-text">Jede Pizza wird mit Liebe und den frischesten Zutaten zubereitet</p>
        </div>
      </div>
    </div>
  </div>

  <div style="height: 50px"></div>

  <div class="center-horizontal">
    <div class="main-content-width center-horizontal">
      <div class="product-grid">
        <ProductCard title="Margherita Classica" sub="Frische Tomaten, Mozzarella, Basilikum, Olivenöl" price="12,90€" img="pizza-product-1"/>
        <ProductCard title="Quattro Stagioni" sub="Tomaten, Mozzarella, Schinken, Pilze, Artischocken, Oliven" price="13,90€" img="pizza-product-2"/>
        <ProductCard title="Diavola Piccante" sub="Tomaten, Mozzarella, scharfe Salami, Peperoni, Chili" price="14,90€" img="pizza-product-3"/>
        <ProductCard title="Prosciutto e Funghi" sub="Tomaten, Mozzarella, Prosciutto, frische Champignons" price="13,90€" img="pizza-product-4"/>
        <ProductCard title="Vegetariana Deluxe" sub="Tomaten, Mozzarella, Zucchini, Auberginen, Paprika, Rucola" price="12,90€" img="pizza-product-5"/>
        <ProductCard title="Quattro Formaggi" sub="Mozzarella, Gorgonzola, Parmesan, Ricotta, Walnüsse" price="11,90€" img="pizza-product-6"/>
      </div>
    </div>
  </div>

  <div style="height: 50px" id="about"></div>

  <div class="max-width us-background center-horizontal">
    <div class="header-inner main-content-width space-between center-vertical mobile-column">
      <div class="center half-width">
        <div>
          <h1 class="huge-headline white mobile-center-text">Unsere Geschichte</h1>
          <p class="white default-textsize reset-margin mobile-center-text">Seit 1985 bringen wir die authentischen Aromen Italiens nach Deutschland. Unser Familienrezept wird seit Generationen weitergegeben.</p>
          <div style="height: 20px">

          </div>
          <p class="white default-textsize reset-margin mobile-center-text">Mit traditionellen Methoden und den besten Zutaten direkt aus Italien kreieren wir Pizzen, die Sie direkt nach Neapel versetzen.</p>
          <div style="height: 20px"></div>
          <div class="center-horizontal">
            <div class="tri-width center-horizontal">
              <div>
                <div class="center-horizontal">
                  <h2 class="reset-margin white" style="font-size: 40px">35+</h2>
                </div>
                <div class="center-horizontal">
                  <p class="white reset-margin center-text">Jahre Erfahrung</p>
                </div>
              </div>
            </div>
            <div class="tri-width center-horizontal">
              <div>
                <div class="center-horizontal">
                  <h2 class="reset-margin white" style="font-size: 40px">50k+</h2>
                </div>
                <div class="center-horizontal">
                  <p class="white reset-margin center-text">Zufriedene Kunden</p>
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

  <div style="height: 50px" id="contact"></div>

  <div class="center-horizontal" ref="contact">
    <div class="main-content-width center-horizontal">
      <div>
        <div class="center-horizontal">
          <h1 class="huge-headline center-text">Kontakt & <span class="prim-color">Reservierung</span></h1>
        </div>
        <div class="center-horizontal">
          <p class="decent-color default-textsize reset-margin center-text">Rufen Sie uns an, oder schreiben Sie eine Nachricht.</p>
        </div>
      </div>
    </div>
  </div>

  <div style="height: 50px"></div>

  <div class="center-horizontal">
    <div class="main-content-width center-horizontal contact-column">
      <div class="center-horizontal">
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
      </div>
      <div class="contact-space"></div>
      <div class="center-horizontal">
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
  </div>

  <div style="height: 100px"></div>

  <Footer/>

</template>


<script>

import Nav from "@/components/views/Nav.vue"
import UIButton from "@/components/views/UIButton.vue"
import {Icon} from "@vicons/utils"
import {FoodPizza20Regular, Call28Regular, Clock20Regular, Star16Filled, ChevronDoubleDown20Regular, Location20Regular, Mail20Regular} from "@vicons/fluent"
import ProductCard from "@/components/views/ProductCard.vue";
import Footer from "@/components/views/Footer.vue"

export default {
  name: "MainPage",
  components: {
    Footer,
    ProductCard,
    Icon, UIButton, Nav, FoodPizza20Regular, Call28Regular, Clock20Regular, Star16Filled, ChevronDoubleDown20Regular, Location20Regular, Mail20Regular},
  data() {
    return {
      fadePizza: false,
      fadeHeader: false,
      fadeNav: false,
      fadeSubHeader: false,
      fadeSubButtons: false,
      fadeSubInfos: false,
    };
  },

  created() {
  },

  beforeDestroy() {
  },

  mounted() {

    setTimeout(() => {
      this.fadeNav = true
      this.fadePizza = true
      this.fadeHeader = true
    },10)

    setTimeout(() => {
      this.fadeSubHeader = true
      setTimeout(() => {
        this.fadeSubButtons = true
        setTimeout(() => {
          this.fadeSubInfos = true
        },200)
      },200)
    },500)
  },

  methods: {

    onMenu(){
      const yOffset = -100;
      const element = this.$refs.menu
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    },

    onReservation(){
      const yOffset = -100;
      const element = this.$refs.contact
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({top: y, behavior: 'smooth'});
    },

    getCookies(key) {
      return this.$cookies.get(key);
    },
    setCookies(key, value) {
      this.$cookies.set(key, value, 2147483647);
    },
  }
}
</script>