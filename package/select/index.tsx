/*
 * @Author: Miya
 * @Date: 2021-07-19 00:07:12
 * @LastEditTime: 2021-07-19 00:07:23
 * @LastEditors: Miya
 * @Description: Select Component
 * @FilePath: \Mermaid-UI\package\select\index.tsx
 */
import { defineComponent, reactive } from 'vue';
const data = reactive({});

const MermaidUISelect = defineComponent({
  setup(props, ctx) {
    return { data };
  },
  render() {
    return <div class=""></div>;
  },
});
export default MermaidUISelect;
