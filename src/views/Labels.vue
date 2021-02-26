<template>
  <div>
    <Layout>
      <div class="tags">
        <router-link
          :to="`/labels/edit/${tag.id}`"
          v-for="tag in tags"
          :key="tag.id"
          class="tag"
        >
          <span>{{ tag.name }}</span>
          <Icon name="icon-rightarrow" />
        </router-link>
      </div>
      <div class="createTag-wrapper">
        <Button class="create" @click="createTag">新建标签</Button>
      </div>
    </Layout>
  </div>
</template>

<script>
import Vue from "vue";
import { Component } from "vue-property-decorator";
import tagListModel from "@/models/tagListModel.ts";
import Button from "@/components/Button.vue";

@Component({
  components: { Button },
})
export default class Labels extends Vue {
  tags = window.tagList;
  createTag() {
    const name = window.prompt("请输入标签名");
    if (name) {
      const message = tagListModel.create(name);
      if (message === "duplicated") {
        window.alert("标签名重复");
      } else if (message === "success") {
        window.alert("添加成功");
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  background: #fff;
  font-size: 16px;
  padding-left: 16px;
  > .tag {
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
.createTag-wrapper {
  text-align: center;
  margin-top: 40px;
}
</style>