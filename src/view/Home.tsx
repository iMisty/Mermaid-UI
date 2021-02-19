/*
 * @Author: Miya
 * @Date: 2021-02-18 17:07:28
 * @LastEditTime: 2021-02-19 17:37:26
 * @LastEditors: Miya
 * @Description: Mermaid UI Home Page
 * @FilePath: \Mermaid-UI\src\view\Home.tsx
 * @Version: 2.0
 */



// import { defineComponent } from 'vue';
// import Alerts from '../components/alerts/alerts';

// export const Home = () =>
//   defineComponent({
//     components: {
//       Alerts,
//     },
//     setup() {
//       const a = () => {
//         console.log('a');
//       };
//       return () => (
//         <div class="home">
//           This is HomePage
//           <Alerts></Alerts>
//         </div>
//       );
//     },
//   });

import { Component, Vue } from 'vue-property-decorator';
import 'font-awesome/css/font-awesome.min.css';
import LeftListItem from '../components/leftlist/leftlistitem';
// import Card from '../components/card/card';
// import Model from '../components/model/model';
// import mButton from '../components/button/button';
// import mSwitch from '../components/switch/switch';
// import mAlert from '../components/alerts/alerts';
import mLoading from '../components/loading/loading';
import mList from '../components/leftlist/leftlist';
import mInput from '../components/input/input';
import mCarousel from '../components/carousel/Carousel';

@Component({
  components: {
    leftlistitem: LeftListItem,
    // Card
    // Model,
    // 'm-button': mButton,
    // 'm-switch': mSwitch
    // 'm-alert': mAlert
    'm-loading': mLoading,
    leftlist: mList,
    'm-input': mInput,
    'm-carousel': mCarousel
  }
})
export default class Home extends Vue {
  private list1 = [
    { icon: 'plane', text: '112233', router: '/' },
    { icon: 'plane', text: '112222', router: '/' },
    { icon: 'plane', text: '112211', router: '/' },
    { icon: 'plane', text: '112244', router: '/' },
    { icon: 'plane', text: '112266', router: '/' }
  ];

  private list2 = [
    { icon: 'plane', text: '332233', router: '/' },
    { icon: 'plane', text: '332222', router: '/' },
    { icon: 'plane', text: '332211', router: '/' },
    { icon: 'plane', text: '332244', router: '/' },
    { icon: 'plane', text: '332266', router: '/' }
  ];

  private style = {
    display: 'grid',
    'grid-template-columns': '16rem auto',
    background: '#f3f4f5'
  };

  private render() {
    return (
      <div class="home" style={this.style}>
        <div
          class="home__left"
          style="width: 16rem;height: 100vh;background-color: #fff;padding: 0.5rem;"
        >
          <leftlist list={this.list1}></leftlist>
          <leftlist list={this.list2}></leftlist>
          <leftlist list={this.list1}></leftlist>
        </div>
        <div class="home__wrap">
          {/* <m-input></m-input>
          <m-input></m-input>
          <m-input></m-input>
          <m-input></m-input> */}
          <m-carousel></m-carousel>
        </div>
      </div>
    );
  }
}