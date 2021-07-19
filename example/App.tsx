/*
 * @Author: Miya
 * @Date: 2021-07-20 23:33:30
 * @LastEditTime: 2021-07-20 23:53:14
 * @LastEditors: Miya
 * @Description: App
 * @FilePath: \Mermaid-UI\example\App.tsx
 */
import { defineComponent } from 'vue';
import { mButton } from '../package/index';
import '../package/style/normalize.less';

const App = defineComponent({
  name: 'App',
  components:{
    'm-button':mButton
  },
  render() {
    return (
      <div
        id="app"
        style="display:flex;justify-content: center;align-items: center;width: 100vw;height: 100vh;"
      >
        <m-button>23333</m-button>
      </div>
    );
  },
});
export default App;
