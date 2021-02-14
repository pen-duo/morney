<template>
  <nav class="nav">
    <router-link to="/money" class="item">
      <Icon name="icon-money" />
      记账
    </router-link>
    <router-link to="/labels" class="item">
      <Icon name="icon-label" />
      标签
    </router-link>
    <router-link to="/statistics" class="item">
      <Icon name="icon-tongji6" />
      统计
    </router-link>
    <router-view></router-view>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  display: flex;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  > .item {
    width: 33.333%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2px 0;
  }
}
</style>