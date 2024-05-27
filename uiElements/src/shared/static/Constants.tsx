export const MESSAGES = {
   header: "UI Elements"
};
export interface ConversionItem {
   label: string,
   value: string,
}
export interface ISelectedLanguage {
   language: string,
   languageHeader: string,
   header: string,
   content: string,
   subContent: string
}
export interface ILanguage {
   label: string,
   value: string,
};
export interface Children {
   label: string,
   value: string,
}
export interface TreeData {
   title: string;
   key: string;
   isLeaf?: boolean;
   children?: Children
}
export interface TreeComponentState {
   treeData: TreeData[];
   checkedKeys: string[]
}