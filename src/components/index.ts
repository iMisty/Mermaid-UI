/*
 * @Author: Miya
 * @Date: 2021-09-25 21:45:04
 * @LastEditTime: 2021-09-25 23:15:00
 * @LastEditors: Miya
 * @Description: Components Export
 * @FilePath: \mermaidui2\src\components\index.ts
 */
/* eslint-disable */
import miButton from './mi-button/index.vue';

const components = {
  miButton,
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
