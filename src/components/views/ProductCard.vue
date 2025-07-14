<style scoped>

.card{
  width: 100%;
  max-width: 450px;
  height: 300px;
}
.img-layout{
  height: 180px;
}

.product-img{
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.info-layout{
  width: 90%;
}

</style>

<template>

  <div class="card shadow round-corner">
    <div class="center-horizontal max-width img-layout">
      <img :src="'../../src/assets/' + img + '.jpg'" class="max-width max-height product-img">
    </div>
    <div style="height: 20px"></div>
    <div class="center-horizontal">
      <div class="info-layout center-vertical space-between">
        <h2 class="reset-margin">{{title}}</h2>
        <h2 class="reset-margin prim-color">{{price}}</h2>
      </div>
    </div>
    <div class="center-horizontal">
      <div class="info-layout">
        <p class="decent-color">{{sub}}</p>
      </div>
    </div>
  </div>

</template>


<script>

export default {
  name: "ProductCard",
  components: {},
  data() {
    return {
    };
  },

  props: {
    title: String,
    img: String,
    price: String,
    sub: String
  },

  created() {
  },

  mounted() {


  },


  methods: {


  }
}
</script>