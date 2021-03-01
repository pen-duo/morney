<template>
  <div>
    <Layout class-prefix="layout">
      {{ record }}
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />
      <Types :value.sync="record.type" />
      <div class="note">
        <Notes
          filed-name="备注"
          placeholder="在这里输入备注"
          @update:value="onUpdateNotes"
        />
      </div>
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
import recordListModel from "@/models/recordListModel.ts";
import tagListModel from "@/models/tagListModel";

const recordList = recordListModel.fetch();

@Component({
  components: {
    Tags,
    Notes,
    Types,
    NumberPad,
  },
})
export default class Money extends Vue {
  tags = window.tagList;
  recordList = window.recordList;
  record: RecordItem = {
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

  saveRecord() {
    recordListModel.create(this.record);
  }
  @Watch("recordList")
  onRecordListChange() {
    recordListModel.save();
  }
}
</script>
<style lang="scss">
.layout-content {
  display: flex;
  flex-direction: column-reverse;
}
.note {
  padding: 12px 0;
}
</style>
<style lang="scss" scoped>
</style>