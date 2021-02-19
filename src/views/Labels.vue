<template>
  <div>
    <Layout>
      <ol class="tags">
        <li>
          <span>衣</span>
          <Icon name="icon-rightarrow" class="svg" />
        </li>
        <li>
          <span>食</span>
          <Icon name="icon-rightarrow" class="svg" />
        </li>
        <li>
          <span>住</span>
          <Icon name="icon-rightarrow" class="svg" />
        </li>
        <li>
          <span>行</span>
          <Icon name="icon-rightarrow" class="svg" />
        </li>
      </ol>
      <div class="createTag-wrapper">
        <button class="createTag">新建标签</button>
      </div>
    </Layout>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 16px;
  > li {
    min-height: 44px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid #e6e6e6;
    .svg {
      width: 24px;
      height: 24px;
      color: #666;
      margin-right: 16px;
    }
  }
}
.createTag {
  background: #767676;
  color: #fff;
  border-radius: 4px ;
  border: none;
  height: 40px;
  padding: 0 16px;
  &-wrapper {
    text-align: center;
    padding: 16px;
    margin-top: 44-16px;
  }
}
</style>