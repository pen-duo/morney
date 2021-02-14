<template>
  <div>
    <svg class="icon" aria-hidden="true">
      <use :xlink:href='"#" + name'></use>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
.icon {
  width: 1.5em;
  height: 1.5em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>