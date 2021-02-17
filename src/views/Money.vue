<template>
  <div>
    {{ record }}
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" />
      <Types :value.sync="record.type" />
      <Notes @update:value="onUpdateNotes" />
      <Tags :data-source.sync="tags" @update:selected="onUpdateTags" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Watch } from "vue-property-decorator";
import Tags from "@/components/Tags.vue";
import Notes from "@/components/Notes.vue";
import Types from "@/components/Types.vue";
import NumberPad from "@/components/NumberPad.vue";
type Record = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
};
@Component({
  components: {
    Tags,
    Notes,
    Types,
    NumberPad,
  },
})
export default class Money extends Vue {
  tags = ["衣", "食", "住", "行"];
  record: Record = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  onUpdateTags(tags: string[]) {
    this.record.tags = tags;
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }
  onUpdateType(type: string) {
    this.record.type = type;
  }
  onUpdateAmount(amount: string) {
    this.record.amount = parseFloat(amount);
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
</style>
<style lang="scss" scoped>
</style>