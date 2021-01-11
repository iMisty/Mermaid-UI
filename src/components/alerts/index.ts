/*
 * @Author: Miya
 * @Date: 2021-01-11 18:06:23
 * @LastEditTime: 2021-01-11 18:20:14
 * @LastEditors: Miya
 * @Description: Alerts Components Extends
 * @FilePath: \Single-Search-APIc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\src\components\alerts\index.ts
 * @Version: 1.0
 */
import Vue from 'vue';
import Alerts from '.';

const confirmConstructor: any = Vue.extend(Alerts);

const MermaidAlerts = (text: any) => {
  return new Promise((res, rej) => {
    const modelDom = new confirmConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(modelDom.$el);

    modelDom.text = Object.assign({}, modelDom.text, text);

    modelDom.close = () => {
      console.log('close');
      modelDom.isShow = false;
      res('confirm');
    };
  });
};

(MermaidAlerts as any).install = (Vue: any) => {
  Vue.component(MermaidAlerts.name, MermaidAlerts);
};

export default MermaidAlerts;
