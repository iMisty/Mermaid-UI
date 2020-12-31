import { Component, Vue, Prop } from 'vue-property-decorator';
import './leftlist.less';
@Component({})
export default class LeftListItem extends Vue {
  @Prop({ default: 'plane' })
  private icon?: string;

  @Prop({ default: 'default link' })
  private text?: string;

  @Prop()
  private router?: string;

  private render() {
    return (
      <div class={`mmui__leftlist--list--item`} to={this.router}>
        <i class={`fa fa-${this.icon}`}></i>
        <p class="text">{this.text}</p>
      </div>
    );
  }
}
