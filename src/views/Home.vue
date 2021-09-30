<!--
 * @Author: Miya
 * @Date: 2021-09-25 20:54:39
 * @LastEditTime: 2021-10-01 04:34:31
 * @LastEditors: Miya
 * @Description: d
 * @FilePath: \MermaidUI\src\views\Home.vue
-->
<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const a = (b: any) => {
      console.log(b);
    };
    return { a };
  },
});
</script>
