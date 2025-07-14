<style scoped>
.ui-button {
  display: flex;
  width: fit-content;
  padding-left: 15px;
  padding-right: 15px;
  height: 40px;
  margin: 2px;
  min-width: 220px;

  border: 1px solid transparent;

  border-radius: 5px;

  cursor: pointer;
}

.text-color{
  color: white;
}

.ui-button-text {
  font-size: 20px;
}

.ui-button-sec{
  background: transparent;
  border: 1px solid #ff432a;
}
</style>

<template>

  <button class="ui-button shadow pixel-border-orange center-horizontal center prim-color-background" :class="sec ? 'ui-button-sec' : ''" @click="click">
    <span v-if="!right" class="center-vertical">
      <slot></slot>
      <span style="width: 10px"></span>
    </span>
    <span class="ui-button-text default-font" :class="sec ? 'prim-color' : 'text-color'">{{ title }}</span>
    <span v-if="right" class="center-vertical">
      <span style="width: 10px"></span>
      <slot></slot>
    </span>
  </button>


</template>


<script>

export default {
  name: "UIButton",
  data() {
    return {
    };
  },

  props: {
    title: String,
    right: Boolean,
    sec: Boolean
  },

  created() {
  },
  mounted() {
    if(this.css === ""){
      this.customCss = "button-background"
    }else{
      this.customCss = this.css;
    }
  },



  methods: {

    click() {
      this.$emit("clicked")
    },
  },
}
</script>