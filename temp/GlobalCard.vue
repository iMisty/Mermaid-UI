<!--
 * @Author: Miya
 * @Date: 2020-08-14 17:08:06
 * @LastEditTime: 2021-04-09 17:24:47
 * @LastEditors: Please set LastEditors
 * @Description: Card component in Mermaid UI
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\src\components\card\card.tsx
 * @Version: 0.2
-->
<template>
  <div class="mmui__card">
    <div class="mmui__card--header">
      <div class="mmui__card--title" v-if="getNeedTitleStatus === 1">
        {{ $props.title }}
      </div>
      <div class="mmui__card--close" v-if="needClose"></div>
      <slot name="extra"></slot>
    </div>
    <div class="container">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    needClose: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getNeedTitleStatus() {
      return this.$props.title ? 1 : 0;
    },
  },
};
</script>

<style lang="less" scoped>
@import '../style/variable.less';
.mmui {
  &__card {
    margin-bottom: 1rem;
    background-color: #fff;
    box-shadow: @card-shadow;
    border-radius: @border-radius;
    transition-duration: @transition-duration;
    overflow: hidden;

    &--header {
      .layout(flex, row, space-between, center, nowrap);
    }

    &--title {
      font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
      margin: 0;
      padding: 1rem;
      font-weight: 700;
      color: @header-text;
    }

    &--close {
      position: relative;
      right: 0.5rem;
      padding: 1rem;
      &::before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        width: 0.125rem;
        height: 1.25rem;
        background-color: @description-text;
        border-radius: @border-radius;
      }
      &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        width: 0.125rem;
        height: 1.25rem;
        background-color: @description-text;
        border-radius: @border-radius;
      }
    }

    &--puzzle {
      display: grid;
      grid-template-rows: 1.5rem auto 1.5rem;
      grid-template-columns: auto 3rem;
      grid-template-areas:
        'a b'
        'c d'
        'e f';
      padding: 1rem;
      background-color: #fff;
      // 标题
      & > .admin-title {
        font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
        grid-area: a;
        color: @description-text;
        font-size: @fontsize-p * 0.875;
        font-weight: 700;
        margin-bottom: 0;
        line-height: 1.5rem;
      }
      // 数字
      & > .sum {
        font-weight: 600;
        font-size: 1.2em;
      }
      // 图标
      & > .icon {
        grid-row-start: b;
        grid-row-end: d;
        .layout(flex, row, center, center);
        width: 3rem;
        height: 3rem;
        color: #fff;
        border-radius: 64%;
      }
    }
  }
}
.container {
  padding: 1rem;
}
</style>
