/*
 * @Author: Miya
 * @Date: 2020-11-10 10:39:36
 * @LastEditTime: 2020-11-10 12:20:22
 * @LastEditors: Miya
 * @Description:
 * @FilePath: \Mermaid-UI\src\index.ts
 * @Version: 1.0
 */
import mButton from '@/components/button/button';
import mModel from '@/components/model/model';
import mSwitch from '@/components/switch/switch';

// (mButton as any).install = (Vue: any) => {
//   Vue.components(mButton.name, mButton);
// };
// (mModel as any).install = (Vue: any) => {
//   Vue.components(mModel.name, mModel);
// };
// (mSwitch as any).install = (Vue: any) => {
//   Vue.components(mSwitch.name, mSwitch);
// };

// export { mSwitch, mModel, mButton };
const mermaidui = [mSwitch, mButton, mModel];

const install = (Vue: any) => {
  if ((install as any).insatlled) return;
  (install as any).installed = true;
  mermaidui.map((component) => {
    Vue.component(component.name, component);
  });
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default mermaidui;
