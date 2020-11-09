/*
 * @Author: Miya
 * @Date: 2020-11-09 15:14:05
 * @LastEditTime: 2020-11-09 18:07:29
 * @LastEditors: Miya
 * @Description: Mermaid-UI Model
 * @FilePath: \LandingPagec:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\src\components\model\model.ts
 * @Version: 1.0
 */
import Vue from 'vue';
import Model from './model';
// import MermaidModel from '@/components/MermaidModel';


const confirmConstructor: any = Vue.extend(Model);

const MermaidModel = (text: any) => {
  return new Promise((res, rej) => {
    // 挂载到节点
    const modelDom = new confirmConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(modelDom.$el);

    // 合并参数，将data内参数合并到组件中
    modelDom.text = Object.assign({}, modelDom.text, text);

    // 点击确定返回
    modelDom.confirm = () => {
      console.log('confirm');
      modelDom.isShow = false;
      res('Confirm');
    };

    // 点击取消返回
    modelDom.cancel = () => {
      console.log('cancel');
      modelDom.isShow = false;
      rej('cancel');
    };
  });
};

(MermaidModel as any).install = (Vue: any) => {
  Vue.component(MermaidModel.name, MermaidModel);
};

export default MermaidModel;
