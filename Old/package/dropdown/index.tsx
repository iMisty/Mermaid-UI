/*
 * @Author: Miya
 * @Date: 2021-07-19 00:05:41
 * @LastEditTime: 2021-07-19 00:05:58
 * @LastEditors: Miya
 * @Description: Dropdown Component
 * @FilePath: \Mermaid-UI\package\dropdown\index.tsx
 */
import { defineComponent, reactive } from 'vue';
const data = reactive({});

const MermaidUIDropdown = defineComponent({
  setup(props, ctx) {
    return { data };
  },
  render() {
    return <div class=""></div>;
  },
});
export default MermaidUIDropdown;
