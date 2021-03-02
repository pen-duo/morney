<template>
  <div class="tags">
    <div class="news">
      <button @click="createTag">新增标签</button>
    </div>
    <div class="current">
      <ul>
        <li
          v-for="item in tagList"
          :key="item.id"
          @click="toggle(item)"
          :class="{ selected: selectedTags.indexOf(item) >= 0 }"
        >
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import TagHelper from "@/mixins/TagHelper";
import Vue from "vue";
import { mixins } from "vue-class-component";
import { Component } from "vue-property-decorator";
@Component({
  computed: {
    tagList() {
      return this.$store.state.tagList;
    },
  },
})
export default class Tags extends mixins(TagHelper) {
  selectedTags: string[] = [];
  created() {
    this.$store.commit("fetchTags");
  }
  toggle(tag: string) {
    const index = this.selectedTags.indexOf(tag);
    if (index >= 0) {
      this.selectedTags.splice(index, 1);
    } else {
      this.selectedTags.push(tag);
    }
    this.$emit("update:selected", this.selectedTags);
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
  > .current {
    > ul {
      display: flex;
      flex-wrap: wrap;
      > li {
        $bg: #d9d9d9;
        height: 24px;
        line-height: 24px;
        background: #d9d9d9;
        border-radius: 12px;
        padding: 0 16px;
        margin-right: 12px;
        margin-bottom: 5px;
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