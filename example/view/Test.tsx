/*
 * @Author: Miya
 * @Date: 2021-06-16 05:09:49
 * @LastEditTime: 2021-06-16 05:10:17
 * @LastEditors: Miya
 * @Description: 测试页
 * @FilePath: \Mermaid-UI\example\view\Test.tsx
 */
import { defineComponent, ref } from 'vue';
import TestComponent from '../../package/input/input';

const data = ref({
  t: '333',
});

const Test = defineComponent({
  components: {
    TestComponent,
  },
  setup(props, ctx) {
    return { data };
  },
  render() {
    return (
      <div class="home">
        <TestComponent v-model={this.data.t}></TestComponent>
        <TestComponent v-model={this.data.t}></TestComponent>
        <TestComponent v-model={this.data.t}></TestComponent>
        <TestComponent v-model={this.data.t}></TestComponent>
        <TestComponent v-model={this.data.t}></TestComponent>
        <TestComponent v-model={this.data.t}></TestComponent>

        {this.data.t}
      </div>
    );
  },
});
export default Test;
