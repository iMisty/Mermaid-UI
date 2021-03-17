/*
 * @Author: Miya
 * @Date: 2021-02-19 17:26:41
 * @LastEditTime: 2021-03-17 14:47:24
 * @LastEditors: Miya
 * @Description: 
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\example\views\Home.tsx
 * @Version: 
 */
import { Component, Vue } from 'vue-property-decorator';
import 'font-awesome/css/font-awesome.min.css';
import LeftListItem from '../../package/leftlist/leftlistitem';
// import Card from '../components/card/card';
// import Model from '../components/model/model';
// import mButton from '../components/button/button';
// import mSwitch from '../components/switch/switch';
// import mAlert from '../components/alerts/alerts';
import mLoading from '../../package/loading/loading';
import mList from '../../package/leftlist/leftlist';
import mInput from '../../package/input/input';
import mCarousel from '../../package/carousel/Carousel';

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
