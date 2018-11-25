import faAnimate from "../src/directives/fa-animate";

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.directive("fa-animate", faAnimate);
}

export default faAnimate;
