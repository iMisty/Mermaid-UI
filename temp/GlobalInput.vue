<!--
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2021-04-20 18:03:04
 * @LastEditors: Miya
 * @Description: Input component in Mermaid UI
 * @FilePath: \Mermaid-UI\temp\GlobalInput.vue
 * @Version: 0.4
-->

<template>
  <div class="mmui__input" :class="[getGrid]">
    <section class="mmui__input--header">
      <p class="mmui__input--title">{{ title }}</p>
      <p class="mmui__input--require" v-if="error === true">该字段为必填</p>
      <slot name="tips"></slot>
    </section>
    <label :for="value">
      <input
        class="mmui__input--form"
        :class="[getSize, error ? 'require' : '']"
        :type="type"
        :value="value"
        :placeholder="placeholder"
        :maxlength="maxlength"
        @input="changeEvent($event)"
        :disabled="disabled"
        @blur="blurEvent"
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
    required: {
      type: Boolean,
      dafault: true,
    },
  },
  data() {
    return {
      error: false,
    };
  },
  methods: {
    changeEvent($event) {
      this.$emit('input', $event.target.value);
    },
    blurEvent(e) {
      if (e.target.value.length === 0 && this.$props.required) {
        
        this.$data.error = true;
        return false;
      }
      this.$data.error = false;
      return true;
    },
  },
  computed: {
    getGrid() {
      return `${this.$props.grid}-grid`;
    },
    getSize() {
      return `form-${this.$props.grid}`;
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
      .layout(flex, row, flex-start, center);
      margin-bottom: 0.5rem;
    }
    &--title {
      margin-right: 1rem;
      color: @header-text;
      font-weight: 700;
      letter-spacing: 0.54px;
    }
    &--require {
      font-size: @fontsize-p * 0.875;
      color: @danger;
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

.require {
  border: 1px solid @danger;
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
