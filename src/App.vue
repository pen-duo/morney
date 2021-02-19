<template>
  <div>
    <router-view></router-view>
  </div>
</template>
<script lang='ts'>
export default {
}
</script>
<style lang="scss">
@import "~@/assets/style/helper.scss";
@import "~@/assets/style/reset.scss";
body {
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  font-family: $font-hei;
  line-height: 1.5;
  color: #333;
  font-size: 16px;
  background: #f5f5f5;
}

</style>
