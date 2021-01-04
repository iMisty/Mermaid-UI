import { Component, Vue } from 'vue-property-decorator';
import 'font-awesome/css/font-awesome.min.css';
import LeftListItem from '../components/leftlist/leftlistitem';
// import Card from '../components/card/card';
// import Model from '../components/model/model';
// import mButton from '../components/button/button';
import mSwitch from '../components/switch/switch';

@Component({
  components: {
    leftlistitem: LeftListItem,
    // Card
    // Model,
    // 'm-button': mButton,
    'm-switch': mSwitch
  }
})
export default class Home extends Vue {
  private render() {
    return (
      <div class="home" style="background-color: #f3f4f5;">
        <div
          class="home__left"
          style="width: 16rem;height: 100vh;background-color: #fff;padding: 0.5rem;"
        >
          <section class="mmui__leftlist">
            <header class="mmui__leftlist--title mmui__leftlist--list--item">
              <i class="fa fa-plane"></i>
              <p class="text">111111111111</p>
            </header>
            <article class="mmui__leftlist--list">
              <leftlistitem></leftlistitem>
              <leftlistitem></leftlistitem>
              <leftlistitem></leftlistitem>
              <leftlistitem></leftlistitem>
              <leftlistitem></leftlistitem>
            </article>
          </section>
        </div>
        <div class="home__wrap">
          <m-switch status={false}></m-switch>
        </div>
      </div>
    );
  }
}
