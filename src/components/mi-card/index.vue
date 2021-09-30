<!--
 * @Author: Miya
 * @Date: 2021-10-01 03:07:03
 * @LastEditTime: 2021-10-01 04:20:38
 * @LastEditors: Miya
 * @Description: Card Component
 * @FilePath: \MermaidUI\src\components\mi-card\index.vue
-->
<template>
  <div class="mmui__card">
    <p class="mmui__card--title" v-if="data.needTitle">{{ data.title }}</p>
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive } from 'vue';

interface CardProps {
  title: string;
  needTitle: boolean;
}

const MermaidUICard = defineComponent({
  name: 'mi-card',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    needTitle: {
      type: Boolean,
      default: true,
    },
  },
  setup(prop: CardProps) {
    const data = reactive({
      needTitle: prop.needTitle,
      title: prop.title,
    });
    return { data };
  },
});

export default MermaidUICard;
</script>

<style lang="less" scoped>
@import '../../style/variable.less';
.mmui {
  &__card {
    background-color: #fff;
    box-shadow: @card-shadow;
    border-radius: @border-radius;
    overflow: hidden;

    &--title {
      font-family: 'Open Sans', 'Helvetica Neue', sans-serif;
      margin: 0;
      padding: 1rem;
      font-weight: 700;
      color: @header-text;
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
</style>
