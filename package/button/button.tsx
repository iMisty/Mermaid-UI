/*
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2021-06-16 05:21:37
 * @LastEditors: Miya
 * @Description: Button Component
 * @FilePath: \Mermaid-UI\package\button\button.tsx
 * @Version: 0.5
 */
import { defineComponent, reactive, renderSlot } from 'vue';
import './button.less';

const data = reactive({});

const handleClick = () => {
  console.log('click button');
};

const MermaidUIButton = defineComponent({
  name: 'MermaidUIButton',
  props: {
    color: {
      type: String,
      require: true,
      default: 'primary',
    },
    type: {
      type: String,
      require: true,
      default: 'round',
    },
    size: {
      type: String,
      require: true,
      default: 'regular',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  emits: ['clickevent'],
  setup(props, ctx) {
    data;
    return { data };
  },
  render() {
    return (
      <button
        type="button"
        class={`mmui__button mmui__button--${this.color} mmui__button--type-${this.type}-${this.color}`}
        disabled={this.disabled}
        onClick={handleClick}
      >
        {renderSlot(this.$slots, 'default')}
      </button>
    );
  },
});

export default MermaidUIButton;
