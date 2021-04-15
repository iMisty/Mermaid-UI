<!--
 * @Author: Miya
 * @Date: 2021-04-06 17:08:32
 * @LastEditTime: 2021-04-12 10:36:52
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \biz1\src\components\GlobalAlert.vue
-->
<template>
  <transition name="slide">
    <div class="mmui__alert" :class="getType" v-if="visible">
      <div class="mmui__alert--content">{{ text }}</div>
    </div>
  </transition>
</template>

<script>
export default {
  // props: {
  //   type: {
  //     type: String,
  //     default: 'info',
  //   },
  // },
  data() {
    return {
      text: '222',
      type: 'success',
      visible: true,
    };
  },
  computed: {
    getType() {
      return `mmui__alert--${this.$data.type}`;
    },
  },
  methods: {
    startTimer() {
      return setTimeout(() => {
        this.$data.visible = false;
      }, 2400);
    },
  },
  mounted() {
    this.startTimer();
  },
};
</script>

<style lang="less" scoped>
@import '../style/variable.less';
.mmui {
  &__alert {
    position: fixed;
    top: 1rem;
    left: 50%;
    text-align: center;
    transform: translateX(-50%);
    padding: 0.75rem 1.5rem;
    min-width: 16rem;
    max-width: 20rem;
    z-index: 114514;
    border-radius: @border-radius;
    &--info {
      color: #fff;
      background-color: lighten(@info, 8%);
      border: 1px solid;
      border-color: lighten(@info, 8%);
    }
    &--error {
      color: #fff;
      background-color: lighten(@danger, 8%);
      border: 1px solid;
      border-color: lighten(@danger, 8%);
    }
    &--success {
      color: #fff;
      background-color: lighten(@success, 8%);
      border: 1px solid;
      border-color: lighten(@success, 8%);
    }
  }
}
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
  transition: all 0.2s ease;
}
.slide-enter,
.slide-leave-to {
  transform: translate(-50%,-20px);
  opacity: 0;
}
</style>
