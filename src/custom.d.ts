type RecordItem = {
  tags: Tag[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: string;
};
type RootState = {
  recordList: RecordItem[];
  tagList: Tag[];
  currentTag?: Tag;
}
interface Window {
  store: {
    tagList: Tag[];
    createTag: (name: string) => void;
    removeTag: (id: string) => boolean;
    updateTag: TagListModel["update"];
    findTag: (id: string) => Tag | undefined;
    recordList: RecordItem[];
    createRecord: (record: RecordItem) => void;
  };
}
type Tag = {
  id: string;
  name: string;
}
type TagListModel = {
  data: Tag[];
  fetch: () => Tag[];
  create: (name: string) => "success" | "duplicated";
  save: () => void;
  update: (id: string, name: string) => "success" | "not found" | "duplicated";
  remove: (id: string) => "success" | "not found";

}