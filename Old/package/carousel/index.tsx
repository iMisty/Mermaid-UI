/*
 * @Author: Miya
 * @Date: 2021-07-19 00:04:54
 * @LastEditTime: 2021-07-19 00:05:09
 * @LastEditors: Miya
 * @Description: Carousel Component
 * @FilePath: \Mermaid-UI\package\carousel\index.tsx
 */
import { defineComponent, reactive } from 'vue';
const data = reactive({});

const MermaidUICarousel = defineComponent({
  setup(props, ctx) {
    return { data };
  },
  render() {
    return <div class=""></div>;
  },
});
export default MermaidUICarousel;
