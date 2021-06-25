/*
 * @Author: Miya
 * @Date: 2021-06-24 00:49:15
 * @LastEditTime: 2021-06-24 00:49:34
 * @LastEditors: Miya
 * @Description: Button Props
 * @FilePath: \Mermaid-UI\package\components\Button\props.ts
 */
export const props = {
  color: {
    type: String,
    require: true,
    default: 'primary',
  },
  type: {
    type: String,
    require: true,
    default: 'round',
  },
  size: {
    type: String,
    require: true,
    default: 'regular',
  },
  disabled: {
    type: Boolean,
    default: false,
  },
};
