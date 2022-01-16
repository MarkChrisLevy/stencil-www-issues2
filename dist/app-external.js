import { HTMLElement, h, proxyCustomElement } from '@stencil/core/internal/client';

let ExternalComponent = class extends HTMLElement {
  constructor() {
    super();
    this.__registerHost();
  }
  componentDidLoad() {
    console.log("Yee, app-external did load!");
  }
  render() {
    return h("div", null, "Hi there! I was made by \"dist-custom-elements\" output.");
  }
};
ExternalComponent = /*@__PURE__*/ proxyCustomElement(ExternalComponent, [0, "app-external"]);
function defineCustomElement$1() {
  if (typeof customElements === "undefined") {
    return;
  }
  const components = ["app-external"];
  components.forEach(tagName => { switch (tagName) {
    case "app-external":
      if (!customElements.get(tagName)) {
        customElements.define(tagName, ExternalComponent);
      }
      break;
  } });
}
defineCustomElement$1();

const AppExternal = ExternalComponent;
const defineCustomElement = defineCustomElement$1;

export { AppExternal, defineCustomElement };
