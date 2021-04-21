/*
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2021-04-21 10:16:54
 * @LastEditors: Miya
 * @Description: Button Component
 * @FilePath: \Mermaid-UI\package\button\button.tsx
 * @Version: 0.5
 */
import { defineComponent, reactive, renderSlot } from 'vue';

const data = reactive({});

const MMUI_Button = defineComponent({
  setup(prop, ctx) {
    data;
    return { data };
  },

  render() {
    return (
      <button
        class="mmui__button"
        // :class="[
        //   getColor,
        //   getType,
        //   `mmui__button--size-${size} ${disabled === true ? 'disabled' : ''}`,
        // ]"
        // onClick="handleClick"
      >
        {renderSlot(this.$slot, 'default')}
      </button>
    );
  },
});

export default MMUI_Button;
