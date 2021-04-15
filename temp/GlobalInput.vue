<!--
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2021-04-08 15:47:29
 * @LastEditors: Please set LastEditors
 * @Description: Input component in Mermaid UI
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\src\components\input\input.tsx
 * @Version: 0.2
-->

<template>
  <!-- <div class="{`mmui__input" ${this.grid}-grid`}>
    <p class="mmui__input--title">{this.title}</p>
    <label for="{this.value}">
      <input class={`mmui__input--form form-${this.size}`} 
      type={this.type}
      placeholder={this.placeholder} 
      value={this.a} 
      v-model={this.a}
      maxlength={this.maxlength} 
      onInput={(e: { target: { value: string } }) =>
      this.changeEvent(e)} />
    </label>
  </div> -->
  <div class="mmui__input" :class="[getGrid]">
    <section class="mmui__input--header">
      <p class="mmui__input--title">{{ title }}</p>
      <slot name="tips"></slot>
    </section>
    <label :for="value">
      <input
        class="mmui__input--form"
        :class="[getSize]"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @input="changeEvent($event)"
        :disabled="disabled"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      default: '示例标题',
    },
    type: {
      type: String,
      default: 'text',
    },
    grid: {
      type: String,
      default: 'single',
    },
    placeholder: {
      type: String,
    },
    value: {},
    maxlength: {
      type: Number,
      default: 140,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    changeEvent($event) {
      this.$emit('input', $event.target.value);
    },
  },
  computed: {
    getGrid() {
      return `${this.$props.grid}-grid`;
    },
    getSize() {
      return `form-${this.$props.size}`;
    },
  },
};
</script>

<style lang="less" scoped>
@import '../style/variable.less';
.mmui {
  &__input {
    margin: 1rem 0;
    &--header {
      .layout(flex, row,flex-start,center);
      margin-bottom: 0.5rem;
    }
    &--title {
      margin-right: 1rem;
      color: @header-text;
      font-weight: 700;
      letter-spacing: 0.54px;
    }
    &--form {
      padding: 0.6rem 0.5rem;
      width: 100%;
      font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: @fontsize-p;
      color: @paragraph-text;
      background-color: #fff;
      border: 1px solid @description-text;
      border-radius: @border-radius;
      letter-spacing: 0.54px;
      &::placeholder {
        color: @description-text;
      }
      &:disabled {
        background-color: #e9ecef;
        color: #8898aa;
        border: 1px solid #dee2e6;
      }
    }
  }
}
</style>

<!-- 
import { Component, Emit, Prop, Vue } from 'vue-property-decorator';
import './input.less';

enum Type {
  text,
  email,
  password
}

enum Size {
  large,
  normal,
  small
}

enum Grid {
  single,
  multi
}

@Component({})
export default class MermaidInput extends Vue {
  private a = '';

  @Prop({ default: '示例标题' })
  private title?: string;

  @Prop({ default: 'text' })
  private type?: Type;

  @Prop({ default: 'normal' })
  private size?: Size;

  @Prop({ default: 'single' })
  private grid?: Grid;

  @Prop({ default: 'placeholder' })
  private placeholder?: string;

  @Prop()
  private value?: string;

  @Prop({ default: 140 })
  private maxlength?: number;

  @Emit('ChangeEvent')
  private changeEvent(e: { target: { value: string } }) {
    console.log(e.target.value);
    console.log('Change');
    // this.value = e.target.value;
  }

  private render() {
    return (
      <div class={`mmui__input ${this.grid}-grid`}>
        <p class="mmui__input--title">{this.title}</p>
        <label for={this.value}>
          <input
            class={`mmui__input--form form-${this.size}`}
            type={this.type}
            placeholder={this.placeholder}
            value={this.a}
            v-model={this.a}
            maxlength={this.maxlength}
            onInput={(e: { target: { value: string } }) => this.changeEvent(e)}
          />
        </label>
      </div>
    );
  }
}

-->
