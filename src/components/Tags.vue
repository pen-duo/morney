<template>
  <div>
    <div class="tags">
      <div class="news">
        <button>新增标签</button>
      </div>
      <div class="current">
        <ul>
          <li
            v-for="item in dataSource"
            :key="item"
            @click="selected(item)"
            :class="{ active: activeItem === item }"
          >
            {{ item }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from "vue-property-decorator";
@Component
export default class Tags extends Vue {
  @Prop() dataSource: string[] | undefined;
  selectedTags: string[] = [];
  activeItem = "衣";
  selected(item: string) {
    this.activeItem = item;
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
  > .current {
    > ul {
      display: flex;
      > li {
        height: 24px;
        line-height: 24px;
        background: #d9d9d9;
        border-radius: 12px;
        padding: 0 16px;
        margin-right: 12px;
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
.active {
  color: red;
}
</style>