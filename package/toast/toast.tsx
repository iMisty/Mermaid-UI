/*
 * @Author: Miya
 * @Date: 2021-05-31 17:32:44
 * @LastEditTime: 2021-06-01 22:04:14
 * @LastEditors: Miya
 * @Description: Mermaid UI Toast Component
 * @FilePath: \Mermaid-UI\package\toast\toast.tsx
 */
import { defineComponent, reactive, watch, Transition } from 'vue';
import './toast.less';
const data = reactive({
  showToast: false,
  message: '',
});

const MermaidUIToast = defineComponent({
  name: 'toast',
  props: {
    // 表述文字
    message: {
      default: 'default',
    },
    // 模态框类型
    type: {
      type: String,
      default: 'success',
    },
  },
  setup(props) {
    // 关闭事件
    const close = () => {
      data.message = '';
      data.showToast = false;
    };
    // 开启事件
    const start = () => {
      return setTimeout(() => {
        close();
      }, 3200);
    };

    // 检测文字
    watch(
      () => props.message,
      (newVal) => {
        data.showToast = true;
        data.message = newVal;
        start();
      }
    );

    return { data, close, start };
  },
  render() {
    const { showToast } = this.data;
    if (showToast) {
      return (
        <Transition name="fade">
          <div class={`mmui__toast mmui__toast--${this.$props.type}`}>
            {data.message}
          </div>
        </Transition>
      );
    } else {
      return <Transition name="fade"></Transition>;
    }
  },
});
export default MermaidUIToast;

// // export default {
// //   props: ['message'],
// // };

// // export const useToastEffect = () => {
// //   const toastData = reactive({
// //     showToast: false,
// //     toastMessage: '',
// //   });
// //   const showToast = (message: string) => {
// //     toastData.showToast = true;
// //     toastData.toastMessage = message;
// //     setTimeout(() => {
// //       toastData.showToast = false;
// //       toastData.toastMessage = '';
// //     }, 2000);
// //   };
// //   return { toastData, showToast };
// // };
// export const useToastEffect = () => {
//   const toastData = reactive({
//     showToast: false,
//     toastMessage: '',
//   });
//   const showToast = (message: string) => {
//     toastData.showToast = true;
//     toastData.toastMessage = message;
//     setTimeout(() => {
//       toastData.showToast = false;
//       toastData.toastMessage = '';
//     }, 2000);
//   };
//   return { toastData, showToast };
// };

// const MermaidUIToast = defineComponent({
//   name: 'toast',
//   props: ['message'],
//   setup(props) {},
//   render() {
//     return <div class="mmui__toast">{this.$props.message}</div>;
//   },
// });

// export { MermaidUIToast };
