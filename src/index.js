import faAnimate from "../src/directives/fa-animate";

function install(Vue) {
  Vue.directive("fa-animate", faAnimate);
}

module.exports = {
  install: install
};
