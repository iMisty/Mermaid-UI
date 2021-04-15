import { Component, Prop, Vue } from 'vue-property-decorator';
import './card.less';
@Component({})
export default class MermaidCard extends Vue {
  @Prop({ default: 'Title' })
  private title?: string;

  @Prop({ default: true })
  private needTitle?: boolean;

  private render() {
    return (
      <div class="mmui__card">
        {this.needTitle ? <p class="mmui__card--title">{this.title}</p> : ''}
        {this.$slots.default}
      </div>
    );
  }
}
