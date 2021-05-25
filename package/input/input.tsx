import { defineComponent, reactive, renderSlot } from 'vue';
import './input.less';

type HTMLElementEvent<T extends HTMLElement> = Event & {
  target: T;
};

// const data = reactive({
//   // 提示信息错误
//   error: false,
//   inputing: '',
// });

// const MMUIInput = defineComponent({
//   props: {
//     // 布局：是否禁止修改
//     disabled: {
//       type: Boolean,
//       default: false,
//     },
//     // 布局：是否显示必填
//     required: {
//       type: Boolean,
//       default: false,
//     },
//     // 布局：标题与输入框
//     grid: {
//       type: String,
//       default: 'single',
//     },
//     type: {
//       type: String,
//       default: 'text',
//     },
//     // 文字：输入框标题
//     title: {
//       type: String,
//       default: 'Example Title',
//     },
//     value: {
//       type: String,
//     },
//     placeholder: {
//       type: String,
//     },
//     maxlength: {
//       type: Number,
//       default: 140,
//     },
//   },
//   emits: {
//     inputChange: null,
//   },
//   setup(props, ctx) {
//     const changeEvent = ($event: HTMLElementEvent<HTMLTextAreaElement>) => {
//       console.log($event.target.value);
//       ctx.emit('inputChange', $event.target?.value);
//     };
//     return { data, changeEvent };
//   },
//   render() {
//     return (
//       <div class="mmui__input">
//         <section class="mmui__input--header">
//           <p class="mmui__input--header-title">{this.$props.title}</p>
//           <p class="mmui__input--header-require"></p>
//           {renderSlot(this.$slots, 'tips')}
//         </section>
//         <label class="mmui__input--input" for="">
//           <input
//             type={this.$props.type}
//             value={this.data.inputing}
//             placeholder={this.$props.placeholder}
//             maxlength={this.$props.maxlength}
//             disabled={this.$props.disabled}
//             onInput={(e: any) => this.changeEvent(e)}
//           />
//         </label>
//       </div>
//     );
//   },
// });
// export default MMUIInput;
// import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
// import './input.less';

// enum Type {
//   text,
//   email,
//   password
// }

// enum Size {
//   large,
//   normal,
//   small
// }

// enum Grid {
//   single,
//   multi
// }

// @Component({})
// export default class MermaidInput extends Vue {
//   private a = '';

//   @Prop({ default: '示例标题' })
//   private title?: string;

//   @Prop({ default: 'text' })
//   private type?: Type;

//   @Prop({ default: 'normal' })
//   private size?: Size;

//   @Prop({ default: 'single' })
//   private grid?: Grid;

//   @Prop({ default: 'placeholder' })
//   private placeholder?: string;

//   @Prop()
//   private value?: string;

//   @Prop({ default: 140 })
//   private maxlength?: number;

//   @Emit('ChangeEvent')
//   private changeEvent(e: { target: { value: string } }) {
//     console.log(e.target.value);
//     console.log('Change');
//     // this.value = e.target.value;
//   }

// private render() {
//   return (
//     <div class={`mmui__input ${this.grid}-grid`}>
//       <p class="mmui__input--title">{this.title}</p>
//       <label for={this.value}>
//         <input
//           class={`mmui__input--form form-${this.size}`}
//           type={this.type}
//           placeholder={this.placeholder}
//           value={this.a}
//           v-model={this.a}
//           maxlength={this.maxlength}
//           onInput={(e: { target: { value: string } }) => this.changeEvent(e)}
//         />
//       </label>
//     </div>
//   );
//   }
// }

// import { defineComponent } from 'vue';
// import './input.less';

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
  },
  emits: ['update:modelValue'],
  setup(props, ctx) {
    // let values = props.value;
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
        <p class="mmui__input--title">{this.title}</p>
        <label for={this.modelValue}>
          <input
            class={`mmui__input--form form-${this.size}`}
            type={this.$props.type}
            placeholder={this.$props.placeholder}
            value={this.modelValue}
            // v-model={this.value}
            maxlength={this.$props.maxlength}
            onInput={($event: any) => this.handleChange($event)}
          />
        </label>
      </div>
    );
  },
});

export default MermaidUIInput;
