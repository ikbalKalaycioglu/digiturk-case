declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
interface Element {
  scrollIntoViewVertically: () => void;
  scrollIntoViewHorizontally: (parent: HTMLElement) => void;
}
