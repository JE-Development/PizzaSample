<style scoped>

.nav{
  height: 60px;
  background: white;
}

.gradient{
  height: 15px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.1), transparent);
}

.icon{
  width: 30px;
  height: 30px;
}

.logo-area{
  font-size: 20px;
  font-weight: bold;
}

.nav-item{
  margin-left: 40px;
  text-decoration: none;
  color: #5c5c5c;
  transition: color 0.1s linear;
}

.nav-item:hover{
  color: #ff432a;
}

</style>

<template>

  <div class="fixed max-width">
    <div class="nav center-horizontal">
      <div class="space-between max-height main-content-width center-vertical">
        <div class="logo-area center-vertical">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon prim-color"><path d="M15 11h.01"></path><path d="M11 15h.01"></path><path d="M16 16h.01"></path><path d="m2 16 20 6-6-20A20 20 0 0 0 2 16"></path><path d="M5.71 17.11a17.04 17.04 0 0 1 11.4-11.4"></path></svg>
          <div style="width: 10px"></div>
          Bella Vista
        </div>
        <div class="center-vertical">
          <a href="/#home" class="nav-item">Home</a>
          <a href="/#about" class="nav-item">Menü</a>
          <a href="/#us" class="nav-item">Über uns</a>
          <a href="/#contact" class="nav-item">Kontakt</a>
        </div>
      </div>
    </div>
    <div class="gradient max-width"></div>
  </div>

</template>


<script>

export default {
  name: "Nav",
  components: {},
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