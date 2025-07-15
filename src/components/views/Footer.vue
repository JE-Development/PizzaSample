<style scoped>

.footer{
  padding-top: 30px;
  padding-bottom: 30px;
  background: #1f2937;
}

.footer-inner{
  width: 60%;
}

.decent-text{
  color: #8ca3af;
}

.line{
  height: 1px;
  background: rgba(140, 163, 175, 0.5);
}

@media (max-width: 1000px) {
  .footer-inner{
    width: 95%;
  }
}

@media (max-width: 600px) {

  h3{
    font-size: 15px;
  }

  p{
    font-size: 12px;
  }

}

</style>

<template>

  <div class="max-width footer center-horizontal">
    <div class="max-width">
      <div class="center-horizontal">
        <div class="footer-inner center-horizontal" style="gap: 30px">
          <div class="flex-1">
            <h3 class="white">Öffnungszeiten</h3>
            <p class="decent-text">Montag - Donnerstag: 11:00 - 22:00</p>
            <p class="decent-text">Freitag - Samstag: 11:00 - 23:00</p>
            <p class="decent-text">Sonntag: 12:00 - 22:00</p>
          </div>
          <div class="flex-1 center-horizontal">
            <div>
              <h3 class="white">Service</h3>
              <p class="decent-text">Lieferservice</p>
              <p class="decent-text">Abholung</p>
              <p class="decent-text">Tischreservierung</p>
              <p class="decent-text">Catering</p>
              <p class="decent-text">Private Feiern</p>
            </div>
          </div>
          <div class="flex-1 right">
            <div>
              <h3 class="white">Folgen Sie uns</h3>
              <div class="center-vertical">
                <Icon size="20" class="decent-text">
                  <Instagram/>
                </Icon>
                <p class="reset-margin"><a target="_blank" href="https://www.instagram.com/" class="decent-text">Instagram</a></p>
              </div>
              <div style="height: 5px"></div>
              <div class="center-vertical">
                <Icon size="20" class="decent-text">
                  <Facebook/>
                </Icon>
                <p class="reset-margin"><a target="_blank" href="https://www.facebook.com/" class="decent-text">Facebook</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="center-horizontal">
        <div class="footer-inner">
          <div style="height: 20px"></div>
          <div class="max-width line"></div>
          <div style="height: 30px"></div>
          <div class="space-between">
            <div><p class="decent-text reset-margin">© 2025 Bella Vista Pizzeria. | Powered by <a style="text-decoration: none" href="https://web.inforge.de">Inforge</a></p></div>
            <div class="flex">
              <p class="reset-margin"><a href="" class="decent-text">Impressum</a></p>
              <div style="width: 20px"></div>
              <p class="reset-margin"><a href="" class="decent-text">Datenschutz</a></p>
            </div>
          </div>
          <div style="height: 20px"></div>
        </div>
      </div>
    </div>
  </div>

</template>


<script>

import {Instagram, Facebook} from "@vicons/fa"
import {Icon} from "@vicons/utils"

export default {
  name: "Footer",
  components: {Icon, Instagram, Facebook},
  data() {
    return {
    };
  },

  props: {
  },

  created() {
  },

  mounted() {


  },


  methods: {


  }
}
</script>