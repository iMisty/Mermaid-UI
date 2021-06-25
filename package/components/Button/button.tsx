/*
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2021-06-24 00:50:05
 * @LastEditors: Miya
 * @Description: Button Component
 * @FilePath: \Mermaid-UI\package\components\Button\button.tsx
 * @Version: 0.5
 */
import { defineComponent, renderSlot } from 'vue';
import { props } from './props';
import './button.less';

const handleClick = () => {
  console.log('click button');
};

const MermaidUIButton = defineComponent({
  name: 'MermaidUIButton',
  props,
  emits: ['clickevent'],
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
