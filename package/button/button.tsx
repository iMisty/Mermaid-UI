/*
 * @Author: Miya
 * @Date: 2021-04-20 17:32:39
 * @LastEditTime: 2021-04-20 18:11:54
 * @LastEditors: Miya
 * @Description: Button Component
 * @FilePath: \Mermaid-UI\package\button\button.tsx
 * @Version: 0.1
 */
import { defineComponent, reactive, renderSlot } from 'vue';

const data = reactive({});

const MUI_Button = defineComponent({
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

export default MUI_Button;
