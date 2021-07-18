/*
 * @Author: Miya
 * @Date: 2021-07-19 00:05:14
 * @LastEditTime: 2021-07-19 00:05:28
 * @LastEditors: Miya
 * @Description: Avatar Component
 * @FilePath: \Mermaid-UI\package\avatar\index.tsx
 */
import { defineComponent, reactive } from 'vue';
const data = reactive({});

const MermaidUIAvatar = defineComponent({
  setup(props, ctx) {
    return { data };
  },
  render() {
    return <div class=""></div>;
  },
});
export default MermaidUIAvatar;
