import Vue from 'vue'
import Vuex from 'vuex'
import clone from "@/lib/clone"

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    // 保存数据
    recordList: [] as RecordItem[]
  },
  mutations: {
    // 在这里修改数据
    createRecord(state,record){
      const record2: RecordItem = clone(record)
      record2.createdAt = new Date()
      state.recordList.push(record2)
    }
  },
})
export default store
