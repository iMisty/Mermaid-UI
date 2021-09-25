/*
 * @Author: Miya
 * @Date: 2021-05-06 07:55:34
 * @LastEditTime: 2021-06-24 00:42:22
 * @LastEditors: Miya
 * @Description: Input Component
 * @FilePath: \Mermaid-UI\package\components\Input\input.tsx
 */
import { defineComponent, SetupContext } from 'vue';
import { props } from './prop';
import './input.less';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

enum Type {
  text,
  email,
  password,
}

enum Size {
  large,
  normal,
  small,
}

enum Grid {
  single,
  multi,
}

const MermaidUIInput = defineComponent({
  emits: ['update:modelValue'],
  props,
  setup(props, ctx: SetupContext) {
    // Emit: 修改操作
    const handleChange = ($event?: HTMLElementEvent<HTMLTextAreaElement>) => {
      console.log($event);
      console.log(ctx);
      return ctx.emit('update:modelValue', $event?.target?.value);
    };
    return { handleChange };
  },

  render() {
    return (
      <div class={`mmui__input ${this.grid}-grid`}>
        <div class="mmui__input--header">
          <p class="mmui__input--title">{this.title}</p>
          {this.$props.tips !== '' ? (
            <p class="mmui__input--tips">{this.$props.tips}</p>
          ) : (
            ''
          )}
        </div>
        <label for={this.modelValue}>
          <input
            class={`mmui__input--form form-${this.size}`}
            type={this.$props.type}
            placeholder={this.$props.placeholder}
            value={this.modelValue}
            maxlength={this.$props.maxlength}
            onInput={($event: any) => this.handleChange($event)}
          />
        </label>
      </div>
    );
  },
});

export default MermaidUIInput;
