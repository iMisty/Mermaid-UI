/*
 * @Author: Miya
 * @Date: 2021-06-24 00:12:42
 * @LastEditTime: 2021-06-24 00:41:22
 * @LastEditors: Miya
 * @Description: Input Props
 * @FilePath: \Mermaid-UI\package\components\Input\prop.ts
 */
export const props = {
  // 输入框标题
  title: {
    type: String,
    default: '示例标题',
  },
  // 文本框类型
  type: {
    type: String,
    default: 'text',
  },
  // 文本框大小
  size: {
    type: String,
    default: 'normal',
  },
  // 是否并排
  grid: {
    type: String,
    default: 'single',
  },
  // 底部提示文字
  placeholder: {
    type: String,
    default: 'placeholder',
  },
  // 文本框文本
  modelValue: {
    type: String,
    value: '',
  },
  // 文字数目限制
  maxlength: {
    type: Number,
    default: 140,
  },
  // 提示文字
  tips: {
    type: String,
    default: '111',
  },
};
