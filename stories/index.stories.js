import { storiesOf } from "@storybook/vue";

import Demo from "./components/demo";

storiesOf("Font awesome animate icon", module).add("Demo", () => ({
  components: { Demo },
  template: `
            <Demo />
        `
}));
