/*
 * @Author: Miya
 * @Date: 2021-07-19 00:07:37
 * @LastEditTime: 2021-07-19 00:07:51
 * @LastEditors: Miya
 * @Description: Divider Component
 * @FilePath: \Mermaid-UI\package\divider\index.tsx
 */
import { defineComponent, reactive } from 'vue';
const data = reactive({});

const MermaidUIDivider = defineComponent({
  setup(props, ctx) {
    return { data };
  },
  render() {
    return <div class=""></div>;
  },
});
export default MermaidUIDivider;
