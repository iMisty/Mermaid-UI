import { Component, Vue, Emit } from 'vue-property-decorator';
import './alerts.less';

@Component({})
export default class Alert extends Vue {
  private text = {
    title: 'This is a Alert'
  };

  private style = 'primary';

  private isShow = true;

  @Emit('close')
  private close() {
    console.log('close');
    return (this.isShow = false);
  }

  private render() {
    return (
      <transition name="fade" appear appear-class="fade-enter-active">
        {this.isShow ? (
          <div class={`mmui__alert ${this.style}`}>
            <section class="mmui__alert--text">{this.text.title}</section>
            <section
              class="mmui__alert--close"
              onClick={() => this.close()}
            >×</section>
          </div>
        ) : (
          ''
        )}
      </transition>
    );
  }
}
