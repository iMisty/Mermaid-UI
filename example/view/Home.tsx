/*
 * @Author: Miya
 * @Date: 2021-04-20 21:11:41
 * @LastEditTime: 2021-06-23 23:44:13
 * @LastEditors: Miya
 * @Description:
 * @FilePath: \Mermaid-UI\example\view\Home.tsx
 */
import { defineComponent } from 'vue';
import TestComponent from '../../package/components/Input/input';
import '../style/home.less';

const Home = defineComponent({
  components: {
    TestComponent,
  },
  setup(props, ctx) {
    return {};
  },
  render() {
    return (
      <div class="home">
        <section class="home__container"></section>
      </div>
    );
  },
});
export default Home;
