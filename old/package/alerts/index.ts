/*
 * @Author: Miya
 * @Date: 2021-01-11 18:06:23
 * @LastEditTime: 2021-01-12 10:26:39
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
    const alertDom = new confirmConstructor({
      el: document.createElement('div')
    });
    document.body.appendChild(alertDom.$el);

    alertDom.text = Object.assign({}, alertDom.text, text);

    alertDom.close = () => {
      console.log('close');
      alertDom.isShow = false;
      res('confirm');
    };
  });
};

(MermaidAlerts as any).install = (Vue: any) => {
  Vue.component(MermaidAlerts.name, MermaidAlerts);
};

export default MermaidAlerts;
