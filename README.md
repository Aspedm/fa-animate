# fa-animate

VueJS directive for animate font awesome icons.

<p align="center">
  <img width="725" height="500" src="https://raw.githubusercontent.com/Aspedm/fa-animate/master/fa-animate.gif">
</p>

## Installation
```
yarn fa-animate
```

or

```
npm install fa-animate
```

### Install in components
```javascript
import faAnimate from 'fa-animate';

<script>
export default {
  ...
  directives: {
    faAnimate,
  },
  ...
}
</script>
```

### Global installation
```javascript
import Vue from 'vue'
import App from './App.vue'
import faAnimate from 'fa-animate/dist/fa-animate.common.js';

Vue.use(faAnimate);

new Vue({
  el: '#app',
  render: h => h(App)
})

</script>
```

### Using directives if set globally

```vue
<template>
    <div>
        <font-awesome-icon icon="bomb" id="test-icon" v-fa-animate="animateOptions" />
    </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import { faBomb } from "@fortawesome/free-solid-svg-icons/faBomb";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faBomb);

export default {
  components: {
    FontAwesomeIcon
  },

  data() {
    return {
      animateOptions: {
        type: "delayed",
        duration: 200
      }
    };
  }
};
</script>
```

## Options
You can passed options for directive:
* Fa Animate options

### Fa animate options
| Name          | Type     | Description | Default |
|---------------|----------|-------------|---------|
|`stroke`       | string   | Stroke color| 'currentColor'|
|`fill`         | string   | Fill color  | 'transparent' |
|`strokeWidth`  | integer  | Stroke width| 1             |

### Vivus options
All [Vivus](https://github.com/maxwellito/vivus) options are available.
***Version 0.1 not suported callback function***

## Credits
A big thanks to:
- [Vivus](https://github.com/maxwellito/vivus) for the SVG animation library!
- [Font Awesome](https://github.com/FortAwesome/Font-Awesome) for the awesome SVG icons!
- [innovato](https://github.com/innovato/fontanimate) for good idea!