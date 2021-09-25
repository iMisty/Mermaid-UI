/*
 * @Author: Miya
 * @Date: 2021-06-29 23:33:48
 * @LastEditTime: 2021-06-29 23:36:48
 * @LastEditors: Miya
 * @Description: entrance
 * @FilePath: \Mermaid-UI\package\components\Button\index.ts
 */
import {
  DefineComponent,
  ComponentOptionsMixin,
  VNodeProps,
  AllowedComponentProps,
  ComponentCustomProps,
} from '@vue/runtime-core';
import Button from './button';

Button.install = (Vue: {
  components: (
    arg0: string,
    arg1: DefineComponent<
      {
        color: { type: StringConstructor; require: boolean; default: string };
        type: { type: StringConstructor; require: boolean; default: string };
        size: { type: StringConstructor; require: boolean; default: string };
        disabled: { type: BooleanConstructor; default: boolean };
      },
      unknown,
      unknown,
      {},
      {},
      ComponentOptionsMixin,
      ComponentOptionsMixin,
      'clickevent'[],
      'clickevent',
      VNodeProps & AllowedComponentProps & ComponentCustomProps,
      Readonly<
        { color: string; type: string; size: string; disabled: boolean } & {}
      >,
      { color: string; type: string; size: string; disabled: boolean }
    >
  ) => void;
}) => {
  Vue.components(Button.name, Button);
};

export default Button;
