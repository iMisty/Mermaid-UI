/*
 * @Author: Miya
 * @Date: 2021-09-25 21:45:04
 * @LastEditTime: 2021-10-01 04:11:41
 * @LastEditors: Miya
 * @Description: Components Export
 * @FilePath: \MermaidUI\src\components\index.ts
 */
/* eslint-disable */
import miButton from '@/components/mi-button/index.vue';
import miCard from '@/components/mi-card/index.vue';

const components = {
  miButton,
  miCard,
};
function install(vue: any): void {
  const keys = Object.keys(components);
  keys.forEach((name: string) => {
    // @ts-ignore
    const component = components[name];
    vue.component(component.name || name, component);
  });
}

export default {
  install,
  ...components,
};
