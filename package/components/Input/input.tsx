/*
 * @Author: Miya
 * @Date: 2021-05-06 07:55:34
 * @LastEditTime: 2021-05-26 10:38:12
 * @LastEditors: Miya
 * @Description: Input Component
 * @FilePath: \Mermaid-UI\package\input\input.tsx
 */
import { defineComponent, SetupContext } from 'vue';
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
  props: {
    // 输入框标题
    title: {
      type: String,
      default: '示例标题',
    },
    // 文本框类型
    type: {
      type: String,
      default: 'text',
    },
    // 文本框大小
    size: {
      type: String,
      default: 'normal',
    },
    // 是否并排
    grid: {
      type: String,
      default: 'single',
    },
    // 底部提示文字
    placeholder: {
      type: String,
      default: 'placeholder',
    },
    // 文本框文本
    modelValue: {
      type: String,
      value: '',
    },
    // 文字数目限制
    maxlength: {
      type: Number,
      default: 140,
    },
    // 提示文字
    tips: {
      type: String,
      default: '111',
    },
  },
  emits: ['update:modelValue'],
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
