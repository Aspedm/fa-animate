<template>

  <div class="browser-mockup">
    <div class="browser-tab-bar">
      <ul class="window-controls">
        <li class="window-control window-control-red"></li>
        <li class="window-control window-control-orange"></li>
        <li class="window-control window-control-green"></li>
      </ul>
    </div>
    <div class="browser-window">      
      <div class="demos-icon">
        <font-awesome-icon :icon="['fab', 'angrycreative']" v-fa-animate="animateOptions" />
        <font-awesome-icon :icon="['fab', 'critical-role']" v-fa-animate="animateOptionsThin" />
      </div>
    </div>
  </div>
</template>

<script>
import faAnimate from "../../src/directives/fa-animate";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngrycreative } from "@fortawesome/free-brands-svg-icons/faAngrycreative";
import { faCriticalRole } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faAngrycreative, faCriticalRole);

export default {
  directives: {
    faAnimate
  },

  components: {
    FontAwesomeIcon
  },

  data() {
    return {
      animateOptions: {
        type: "delayed",
        duration: 200,
        strokeWidth: 4,
        stroke: 'red',
      },
      animateOptionsThin: {
        type: "oneByOne",
        duration: 400,
      }
    };
  }
};
</script>

<style lang="css">

.demos-icon {
  width: 500px;
  margin: 0 auto;
  padding: 150px 0;
  font-size: 150px;
  text-align: center;
}

.browser-mockup {
  width: 800px;
  margin: 0 auto;
}

.browser-mockup .browser-tab-bar {
  height: 20px;
  line-height: 20px;
  background-color: #EEEEEE;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
}
.browser-mockup .window-controls {
  list-style: none;
  padding: 0;
  margin: 0 0 0 5px;
}
.browser-mockup .window-control {
  height: 10px;
  width: 10px;
  border-radius: 50%;
  display: inline-block;
  margin-right: 3px;
  box-sizing: border-box;
}
.browser-mockup .window-control:last-child {
  margin-right: 0;
}
.browser-mockup .window-control.window-control-red {
  background-color: #EE5C55;
  border: 1px solid #e93027;
}
.browser-mockup .window-control.window-control-orange {
  background-color: #F8BC32;
  border: 1px solid #efa908;
}
.browser-mockup .window-control.window-control-green {
  background-color: #62CB43;
  border: 1px solid #4cac2f;
}
.browser-mockup .browser-window {
  border: 1px solid #D7D7D7;
  line-height: 0;
  overflow: hidden;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  background: #ffffff;
}
.browser-mockup .browser-window img {
  max-width: 100%;
}
body {
  padding: 20px;
  background-color: #f7f5fa;
}

</style>


