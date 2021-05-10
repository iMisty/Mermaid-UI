import { defineComponent, reactive, renderSlot } from 'vue';
import './input.less';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

const data = reactive({
  // 提示信息错误
  error: false,
});

const MMUIInput = defineComponent({
  props: {
    // 布局：是否禁止修改
    disabled: {
      type: Boolean,
      default: false,
    },
    // 布局：是否显示必填
    required: {
      type: Boolean,
      default: false,
    },
    // 布局：标题与输入框
    grid: {
      type: String,
      default: 'single',
    },
    type: {
      type: String,
      default: 'text',
    },
    // 文字：输入框标题
    title: {
      type: String,
      default: 'Example Title',
    },
    value: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    maxlength: {
      type: Number,
      default: 140,
    },
  },
  emits: {
    change: null,
  },
  setup(props, ctx) {
    const onChange = ($event: HTMLElementEvent<HTMLTextAreaElement>) => {
      ctx.emit('change', $event.target?.value);
    };
    return { data, onChange };
  },
  render() {
    return (
      <div class="mmui__input">
        <section class="mmui__input--header">
          <p class="mmui__input--header-title">{this.$props.title}</p>
          <p class="mmui__input--header-require"></p>
          {renderSlot(this.$slots, 'tips')}
        </section>
        <label class="mmui__input--input" for="">
          <input
            type={this.$props.type}
            value={this.$props.value}
            placeholder={this.$props.placeholder}
            maxlength={this.$props.maxlength}
            disabled={this.$props.disabled}
          />
        </label>
      </div>
    );
  },
});
export default MMUIInput;
