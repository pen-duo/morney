<template>
  <div>
    <label class="notes">
      <span class="name">{{ filedName }}</span>
      <input type="text" :placeholder="placeholder" :value="value" @input="onValueChanged($event.target.value)" />
    </label>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop, Watch } from "vue-property-decorator";
@Component
export default class Notes extends Vue {
  @Prop({default:''})  value!: string;
  @Watch("value")
  onValueChanged(value: string) {
    this.$emit("update:value", value);
  }
  @Prop({ required: true }) filedName!: string;
  @Prop() placeholder?: string;
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  display: block;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>