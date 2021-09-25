/*
 * @Author: Miya
 * @Date: 2021-07-19 00:06:07
 * @LastEditTime: 2021-07-19 00:06:18
 * @LastEditors: Miya
 * @Description: Icon Components
 * @FilePath: \Mermaid-UI\package\icon\index.tsx
 */
import { defineComponent, reactive } from 'vue';
const data = reactive({});

const MermaidUIIcon = defineComponent({
  setup(props, ctx) {
    return { data };
  },
  render() {
    return <div class=""></div>;
  },
});
export default MermaidUIIcon;
