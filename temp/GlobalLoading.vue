<!--
 * @Author: Miya
 * @Date: 2020-01-17 16:57:05
 * @LastEditTime: 2021-04-02 16:58:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\src\components\loading\loading.tsx
-->
<template>
  <section class="mmui__loading">
    <div class="mmui__loading--square"></div>
    <div class="mmui__loading--square"></div>
    <div class="mmui__loading--square"></div>
    <div class="mmui__loading--square"></div>
    <div class="mmui__loading--square"></div>
  </section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
@import '../style/variable.less';

@base-time: 0.24s;

@len: 5;

@keyframes loading {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: rotate(90deg) scale(0);
  }
}

.mmui__loading {
  .layout(flex, row, center, center);
  width: 8rem;
  &--square {
    width: 1rem;
    height: 1rem;
    margin: 0.5rem 0.25rem;
    // padding: 1rem;
    background-color: @description-text;
    animation: loading 1s ease alternate infinite;
  }
  .Loop(@count) when (@count < @len + 1) {
    &--square:nth-child(@{count}) {
      animation-delay: @base-time * @count;
    }
    .Loop(@count + 1);
  }
  .Loop(0);
}
</style>
<!--
import { Component, Vue } from 'vue-property-decorator';
import './loading.less';

@Component({})
export default class Loading extends Vue {
  private render() {
    return (
      <section class="mmui__loading">
        <div class="mmui__loading--square"></div>
        <div class="mmui__loading--square"></div>
        <div class="mmui__loading--square"></div>
        <div class="mmui__loading--square"></div>
        <div class="mmui__loading--square"></div>
      </section>
    );
  }
}

-->
