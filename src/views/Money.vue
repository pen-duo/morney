<template>
  <div>
    <Layout class-prefix="layout">
      <NumberPad :value.sync="record.amount" @submit="saveRecord" />
      <Tabs :data-source="recordTypeList" :value.sync="record.type" />
      <div class="note">
        <Notes
          filed-name="备注"
          placeholder="在这里输入备注"
          :value.sync="record.notes"
        />
      </div>
      <Tags @update:selected="record.tags = $event" />
    </Layout>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Component } from "vue-property-decorator";
import Tags from "@/components/Tags.vue";
import Notes from "@/components/Notes.vue";
import NumberPad from "@/components/NumberPad.vue";
import recordTypeList from "@/constants/recordTypeList";
import Tabs from "@/components/Tabs.vue";
@Component({
  components: {
    Tags,
    Notes,
    NumberPad,
    Tabs,
  },
})
export default class Money extends Vue {
  get recordList() {
    return this.$store.state.recordList;
  }
  recordTypeList = recordTypeList;
  record: RecordItem = {
    tags: [],
    notes: "",
    type: "-",
    amount: 0,
  };
  created() {
    this.$store.commit("fetchRecords");
  }
  onUpdateNotes(notes: string) {
    this.record.notes = notes;
  }

  saveRecord() {
    if (!this.record.tags || this.record.tags.length === 0) {
      alert("请至少选择一个标签");
      return;
    }
    this.$store.commit("createRecord", this.record);
    if (this.$store.state.createRecordError === null) {
      window.alert("已保存");
      this.record.notes = "";
    }
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