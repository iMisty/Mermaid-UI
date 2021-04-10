<!--
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2021-04-13 15:23:39
 * @LastEditors: Please set LastEditors
 * @Description: Button component in Mermaid UI
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\src\components\button\button.tsx
 * @Version: 0.2
-->

<template>
  <button
    class="mmui__button"
    :class="[
      getColor,
      getType,
      `mmui__button--size-${size} ${disabled === true ? 'disabled' : ''}`,
    ]"
    @click="handleClick"
  >
    <slot name="default"></slot>
    <!-- <div
      class="mmui__button--tips"
      v-if="tips_text"
    >
      {{ tips_text }}
    </div> -->
  </button>
</template>

<script>
export default {
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
    // tips_text: {
    //   type: String,
    // },
    // tips_position: {
    //   type: String,
    //   default: 'right',
    // },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
  computed: {
    getColor() {
      return `mmui__button--${this.$props.color}`;
    },
    getType() {
      return `mmui__button--${this.$props.type}-${this.$props.color}`;
    },
    // getTipsPosition() {
    //   return `mmui__button--tips--${this.$props.tips_position}`;
    // },
  },
};
</script>

<style lang="less" scoped>
@import '../style/variable.less';
.mmui {
  &__button {
    position: relative;
    margin: 0.5rem 0.5rem 0.5rem 0;
    padding: 0.5rem 1.25rem;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    line-height: 1.75;
    font-size: 0.875rem;
    font-weight: 600;
    letter-spacing: 0.025em;
    color: #fff;
    text-transform: uppercase;
    transition: all 0.15s ease;
    will-change: transform;
    box-shadow: @box-shadow;
    border-radius: @border-radius;
    // Color
    &--primary {
      color: #fff;
      background-color: #3d55df;
      border-color: #324cdd;
    }
    &--info {
      color: #fff;
      background-color: #11cdef;
      border-color: #11cdef;
    }
    &--success {
      color: #fff;
      background-color: #2dce89;
      border-color: #2dce89;
    }
    &--danger {
      color: #fff;
      background-color: #ec0c38;
      border-color: #ec0c38;
    }
    &--warning {
      color: #fff;
      background-color: #fb6340;
      border-color: #fb6340;
    }
    &--default {
      color: #fff;
      background-color: #172b4d;
      border-color: #172b4d;
    }
    &--secondary {
      color: #212529;
      background-color: #f4f5f7;
      border-color: #f4f5f7;
    }

    &--size {
      // Width
      &-small {
        padding: 0.25rem 0.5rem;
        min-width: auto;
        font-size: 0.875rem;
      }
      &-regular {
        padding: 0.625rem 1.25rem;
        font-size: 0.875rem;
      }
      &-large {
        padding: 0.875rem 1rem;
      }
      &-block {
        width: 100%;
      }
    }

    // Type
    &--type {
      // Style
      // Default style => have background
      &-round {
        &-primary {
          color: #fff;
          background-color: #3d55df;
          border-color: #324cdd;
        }
        &-info {
          color: #fff;
          background-color: #11cdef;
          border-color: #11cdef;
        }
        &-success {
          color: #fff;
          background-color: #2dce89;
          border-color: #2dce89;
        }
        &-danger {
          color: #fff;
          background-color: #ec0c38;
          border-color: #ec0c38;
        }
        &-warning {
          color: #fff;
          background-color: #fb6340;
          border-color: #fb6340;
        }
        &-default {
          color: #fff;
          background-color: #172b4d;
          border-color: #172b4d;
        }
        &-secondary {
          color: #212529;
          background-color: #f4f5f7;
          border-color: #f4f5f7;
        }
      }

      // Outline style => only border
      &-outline {
        &-primary {
          color: #3d55df;
          border-color: #324cdd;
        }
        &-info {
          color: #11cdef;
          border-color: #11cdef;
        }
        &-success {
          color: #2dce89;
          border-color: #2dce89;
        }
        &-danger {
          color: #ec0c38;
          border-color: #ec0c38;
        }
        &-warning {
          color: #fb6340;
          border-color: #fb6340;
        }
        &-default {
          color: #172b4d;
          border-color: #172b4d;
        }
        &-secondary {
          color: #f4f5f7;
          border-color: #f4f5f7;
        }
      }

      // Link style => only text
      &-link {
        .mixin {
          border: none;
          background-color: transparent;
          box-shadow: none;
        }
        &-primary {
          .mixin;
          color: #3d55df;
        }
        &-info {
          .mixin;
          color: #11cdef;
        }
        &-success {
          .mixin;
          color: #2dce89;
        }
        &-danger {
          .mixin;
          color: #ec0c38;
        }
        &-warning {
          .mixin;
          color: #fb6340;
        }
        &-default {
          .mixin;
          color: #172b4d;
        }
        &-secondary {
          .mixin;
          color: #f4f5f7;
        }
      }
    }

    // &--tips {
    //   position: absolute;
    //   top: 50%;
    //   right: -4rem;
    //   transform: translateY(-50%);
    //   color: @description-text;
    //   padding: 0.25rem 0.75rem;
    //   border: 1px solid lighten(@description-text, 4%);
    //   opacity: 0;
    //   border-radius: @border-radius;
    //   box-shadow: @card-shadow;
    //   transition-duration: @transition-duration;
    //   &::before {
    //     content: '';
    //     position: absolute;
    //     top: 50%;
    //     left: -5px;
    //     transform: translateY(-50%) rotate(-45deg);
    //     width: 0.5rem;
    //     height: 0.5rem;
    //     background-color: #fff;
    //     border-top: 1px solid lighten(@description-text, 4%);
    //     border-left: 1px solid lighten(@description-text, 4%);
    //   }
    // }

    &:hover {
      transform: translateY(-2px);
      transition-duration: @transition-duration;
      .mmui__button--tips {
        opacity: 1;
      }
    }
    &:active {
      box-shadow: none;
    }
  }
}
.disabled {
  opacity: 0.4;
  box-shadow: none;
  &:hover {
    transform: none;
  }
}
</style>

<!-- 
import { Component, Vue, Prop, Emit } from "vue-property-decorator";
import './button.less';
@Component({})
export default class MermaidButton extends Vue {
  // Button Color
  // 按钮颜色
  @Prop({ default: "primary" })
  private color!: string;

  // Button Type
  @Prop({ default: "round" })
  private type!: string;

  // Button Size
  @Prop({ default: "regular" })
  private size!: string;

  // Click Event
  // 点击事件
  @Emit("clickevent")
  public handleClick() {
    console.log("click button");
  }

  private render() {
    return (
      <button
        class={`mmui__button mmui__button--${this.color} mmui__button--type-${this.type}-${this.color}`}
        onClick={this.handleClick}
      >
        {this.$slots.default}
      </button>
    );
  }
}

-->
