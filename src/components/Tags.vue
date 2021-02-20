<template>
    <div class="tags">
      <div class="news">
        <button @click="create">新增标签</button>
      </div>
      <div class="current">
        <ul>
          <li
            v-for="item in dataSource"
            :key="item"
            @click="toggle(item)"
            :class="{ selected: selectedTags.indexOf(item) >= 0 }"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  @Prop(Array) readonly dataSource: string[] | undefined;
  selectedTags: string[] = [];
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    } 
    this.$emit("update:selected",this.selectedTags)
  }
  create() {
    const name = window.prompt("请输入标签名");
    if (name === "") {
      window.alert("标签名不能为空");
    } else if (this.dataSource) {
      this.$emit("update:dataSource", [...this.dataSource, name]);
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  padding: 16px;
  font-size: 14px;
  flex-grow: 1;
  display: flex;
  flex-direction: column-reverse;
  background: white;
  min-height: calc(100% - 64px);
  > .current {
    > ul {
      display: flex;
      > li {
        $bg: #d9d9d9;
        height: 24px;
        line-height: 24px;
        background: #d9d9d9;
        border-radius: 12px;
        padding: 0 16px;
        margin-right: 12px;
        &.selected {
          background: darken($bg, 50%);
          color: #fff;
        }
      }
    }
  }
  > .news {
    padding-top: 16px;
    > button {
      background: transparent;
      border: none;
      color: #999;
      border-bottom: 1px solid;
      padding: 0 3px;
    }
  }
}
</style>