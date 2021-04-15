<!--
 * @Author: Misty
 * @Date: 2021-04-13 17:04:51
 * @LastEditTime: 2021-04-13 17:41:35
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \biz1\src\components\GlobalPage.vue
-->
<template>
  <div class="mmui__pages">
    <!-- TODO: 待优化交互 -->
    <section class="mmui__pages--button prev item" @click="handlePrev">
      上一页
    </section>
    <section class="mmui__pages--button next item" @click="handleNext">
      下一页
    </section>
    <section class="mmui__pages--count">
      <p class="item">第{{ nowPage }}页</p>
      <p class="item">共{{ maxPage }}页</p>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    nowPage: {
      type: Number,
      default: 1,
    },
    maxPage: {
      type: Number,
      default: 1,
    },
  },
  data() {
    return {};
  },
  methods: {
    handlePrev() {
      return this.$emit('prev');
    },
    handleNext() {
      return this.$emit('next');
    },
  },
};
</script>

<style lang="less" scoped>
@import '../style/variable.less';
.mmui {
  &__pages {
    .layout(flex, row, center, center, nowrap);
    margin: 1rem 0;
    color: @paragraph-text;
    &--button {
      cursor: pointer;
    }
    &--count {
      .layout(flex, row, center, center, nowrap);
      & > .item {
        cursor: default;
      }
    }
  }
}
.item {
  padding: 0.25rem 0.5rem;
}
</style>
