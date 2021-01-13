import { Component, Vue, Prop } from 'vue-property-decorator';
import Item from './leftlistitem';
import './leftlist.less';

interface NavItem {
  icon: string;
  text: string;
  router: string;
}

@Component({
  components: {
    'm-item': Item
  }
})
export default class LeftList extends Vue {
  // private item: NavItem[] = [
  //   { icon: 'plane', text: '112233', router: '/' },
  //   { icon: 'plane', text: '112222', router: '/' },
  //   { icon: 'plane', text: '112211', router: '/' },
  //   { icon: 'plane', text: '112244', router: '/' },
  //   { icon: 'plane', text: '112266', router: '/' }
  // ];
  @Prop()
  private list!: NavItem[];

  private isActive = false;

  private a() {
    return (this.isActive = !this.isActive);
  }

  private render() {
    return (
      <section class={`mmui__leftlist ${this.isActive ? 'active' : ''}`}>
        <header class={`mmui__leftlist--title`} onClick={() => this.a()}>
          <i class="fa fa-plane"></i>
          <p class="text">111111111111</p>
          <i class={`fa fa-angle-${this.isActive ? 'up' : 'down'} nav`}></i>
        </header>
        <section class="mmui__leftlist--list">
          {this.list?.map((wdnmd: NavItem) => {
            return (
              <m-item
                icon={wdnmd.icon}
                text={wdnmd.text}
                router={wdnmd.router}
              ></m-item>
            );
          })}
        </section>
      </section>
    );
  }
}
