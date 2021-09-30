<!--
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2021-10-01 02:46:08
 * @LastEditors: Miya
 * @Description: Button Component
 * @FilePath: \MermaidUI\src\components\mi-button\index.vue
 * @Version: 0.5
-->
<template>
  <button
    type="button"
    class="mmui__button"
    :class="computedStyleClass"
    :disabled="getProps.disabled"
    @click="handleEmitClickEvent"
  >
    <slot>Button</slot>
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, reactive } from 'vue';

const propsData = {
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
};

interface ButtonProps {
  color: string;
  type: string;
  size: string;
  disabled: boolean;
}

const MermaidUIButton = defineComponent({
  name: 'mi-button',
  emits: ['click'],
  props: propsData,
  setup(props: ButtonProps, { emit }) {
    // Data
    const getProps = reactive(props);
    // Computed: Comupted Color and Type
    const computedStyleClass = computed(() => {
      const { color, type } = getProps;
      return `mmui__button--${color} mmui__button--type-${type}-${color}`;
    });
    // Emit: Click Event
    const handleEmitClickEvent = (): void => {
      emit('click', getProps);
    };
    return { computedStyleClass, getProps, handleEmitClickEvent };
  },
});

export default MermaidUIButton;
</script>

<style lang="less" scoped>
@import url('../../style/variable.less');
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
    border: none;
    box-shadow: @box-shadow;
    border-radius: @border-radius;
    // Color
    &--primary {
      color: #fff;
      background-color: #3d55df;
      border-color: #324cdd;
      &:active {
        background-color: darken(#3d55df, 8%);
      }
      &:disabled {
        background-color: @primary;
        border-color: @primary;
      }
    }
    &--info {
      color: #fff;
      background-color: #11cdef;
      border-color: #11cdef;
      &:active {
        background-color: darken(#11cdef, 8%);
      }
      &:disabled {
        background-color: @info;
        border-color: @info;
      }
    }
    &--success {
      color: #fff;
      background-color: #2dce89;
      border-color: #2dce89;
      &:active {
        background-color: darken(#2dce89, 8%);
      }
    }
    &--danger {
      color: #fff;
      background-color: #ec0c38;
      border-color: #ec0c38;
      &:active {
        background-color: darken(#ec0c38, 8%);
      }
    }
    &--warning {
      color: #fff;
      background-color: #fb6340;
      border-color: #fb6340;
      &:active {
        background-color: darken(#fb6340, 8%);
      }
    }
    &--default {
      color: #fff;
      background-color: #172b4d;
      border-color: #172b4d;
      &:active {
        background-color: darken(#172b4d, 8%);
      }
    }
    &--secondary {
      color: #212529;
      background-color: #f4f5f7;
      border-color: #f4f5f7;
      &:active {
        background-color: darken(#f4f5f7, 8%);
      }
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
          &:disabled {
            color: #888;
            background-color: transparent;
          }
          &:active {
            background-color: transparent;
            color: #555;
          }
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

    &:hover {
      transform: translateY(-2px);
      transition-duration: @transition-duration;
    }
    &:active {
      box-shadow: none;
    }
    &:disabled {
      transform: none;
      box-shadow: none;
    }
  }
}
</style>
