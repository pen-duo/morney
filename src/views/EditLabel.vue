<template>
  <Layout>
    <div class="navBar">
      <Icon class="lefticon" name="icon-leftarrow" />
      <span class="title">编辑标签</span>
      <span class="righticon"></span>
    </div>
    <div class="form-wrapper">
      <Notes filed-name="标签名" placeholder="请输入标签名"></Notes>
    </div>
    <div class="button-wrapper">
      <Button>删除标签</Button>
    </div>
  </Layout>
</template>

<script>
import tagListModel from "@/models/tagListModel";
import Notes from "@/components/Notes.vue";

import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Notes },
})
export default class EditLabel extends Vue {
  created() {
    const id = this.$route.params.id;
    tagListModel.fetch();
    const tags = tagListModel.data;
    console.log(tags);
    const tag = tags.filter((item) => item.id === id)[0];
    if (tag) {
      console.log(tag);
    } else {
      this.$router.replace("/404");
    }
  }
}
</script>

<style lang="scss" scoped>
.navBar {
  text-align: center;
  font-size: 16px;
  padding: 12px 16px;
  background: white;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;

  > title {
    border: 1px solid red;
  }
  > .lefticon {
    height: 24px;
    width: 24px;
  }
  > .righticon {
    height: 24px;
    width: 24px;
  }
}
.form-wrapper {
  background: white;
  margin-top: 8px;
}
.button-wrapper {
  text-align: center;
  padding: 16px;
  margin-top: 44 - 16px;
}
</style>