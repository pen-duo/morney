<template>
  <Layout>
    <div class="navBar">
      <Icon class="lefticon" name="icon-leftarrow" @click.native="goBack" />
      <span class="title">编辑标签</span>
      <span class="righticon"></span>
    </div>
    <div class="form-wrapper">
      <Notes
        :value="tag.name"
        filed-name="标签名"
        placeholder="请输入标签名"
        @update:value="updateTag"
      ></Notes>
    </div>
    <div class="button-wrapper">
      <Button @click.native="remove">删除标签</Button>
    </div>
  </Layout>
</template>

<script lang="ts">
import Notes from "@/components/Notes.vue";
import Button from "@/components/Button.vue";

import Vue from "vue";
import { Component } from "vue-property-decorator";

@Component({
  components: { Notes, Button },
})
export default class EditLabel extends Vue {
  tag?: { id: string; name: string } = undefined;
  created() {
    const id = this.$route.params.id;
    const tag = window.findTag(id);
    if (tag) {
      this.tag = window.findTag(id);
    } else {
      this.$router.replace("/404");
    }
  }
  updateTag(name: string) {
    if (this.tag) {
      window.updateTag(this.tag.id, name);
    }
  }
  remove() {
    if (this.tag) {
      if (window.removeTag(this.tag.id)) {
        this.$router.back();
      } else {
        window.alert("删除失败");
      }
    }
  }
  goBack() {
    this.$router.go(-1);
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