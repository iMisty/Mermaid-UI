/*
 * @Author: Miya
 * @Version: 1.0
 * @Date: 2020-09-12 17:57:06
 * @LastEditors: Miya
 * @LastEditTime: 2021-01-14 11:36:05
 * @Description: file content
 * @FilePath: \Kagura-Landing-Backendc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\src\App.tsx
 */
import { Component, Vue } from 'vue-property-decorator';
import Home from './views/Home';
@Component({
  components: {
    home: Home
  }
})
export default class App extends Vue {
  private render() {
    return (
      <div id="app">
        <router-view></router-view>
      </div>
    );
  }
}
