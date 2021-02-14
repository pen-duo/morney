<template>
  <div class="nav">
    <router-link to="/money">
      <Icon name="icon-money"/>
    </router-link>
    <router-link to="/labels">
      <Icon name="icon-label"/>
    </router-link>
    <router-link to="/statistics">
      <Icon name="icon-tongji6"/>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

</style>