type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: number;
  createdAt?: Date;
};

interface Window {
  tagList: Tag[];
  createTag: (name: string) => void
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