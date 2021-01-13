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

@Component({
  components: {
    leftlistitem: LeftListItem,
    // Card
    // Model,
    // 'm-button': mButton,
    // 'm-switch': mSwitch
    // 'm-alert': mAlert
    'm-loading': mLoading,
    leftlist: mList
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

  private render() {
    return (
      <div class="home" style="background-color: #f3f4f5;">
        <div
          class="home__left"
          style="width: 16rem;height: 100vh;background-color: #fff;padding: 0.5rem;"
        >
          <leftlist list={this.list1}></leftlist>
          <leftlist list={this.list2}></leftlist>
          <leftlist list={this.list1}></leftlist>
        </div>
        <div class="home__wrap">
          <m-loading></m-loading>
        </div>
      </div>
    );
  }
}
