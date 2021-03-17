/*
 * @Author: Miya
 * @Date: 2021-03-17 14:28:47
 * @LastEditTime: 2021-03-17 14:44:53
 * @LastEditors: Miya
 * @Description: install
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\package\index.ts
 * @Version: 1.0
 */

import Button from './button/button';
import Alerts from './alerts/alerts';
import Card from './card/card';
import Input from './input/input';
import Switch from './switch/switch';
import Model from './model/model';
import Loading from './loading/loading';

const components = [Button, Alerts, Card, Input, Switch, Model, Loading];

const install = (Vue: any) => {
  components.forEach(component => {
    Vue.component(component.name, component);
  });
};

// 判断是否直接引入文件，如果是，就不用调用Vue.use()
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
// 导出install方法
export default {
  install
};
