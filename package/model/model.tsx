/*
 * @Author: Miya
 * @Date: 2021-02-18 17:24:23
 * @LastEditTime: 2021-03-17 14:45:20
 * @LastEditors: Miya
 * @Description: Model Components
 * @FilePath: \maid-chanc:\Users\Platinum Prism\Documents\GitHub\Mermaid-UI\package\model\model.tsx
 * @Version: 1.0
 */
import { Component, Emit, Vue } from 'vue-property-decorator';
import MermaidButton from '../button/button';
import './model.less';

@Component({
  components: {
    'm-button': MermaidButton
  }
})
export default class MermaidModel extends Vue {
  private text = {
    title: 'This is a title',
    msg: 'This is Model Text',
    btn: {
      confirm: 'Confirm',
      cancel: 'Cancel'
    },
    cancel: true,
    confirm: true
  };

  private isShow = true;

  @Emit('confirm')
  private confirm() {
    console.log('confirm');
  }

  @Emit('cancel')
  private cancel() {
    console.log('cancel');
  }

  @Emit('close')
  private close() {
    console.log('close');
    return (this.isShow = false);
  }

  // private mounted() {
  //   setTimeout(() => {
  //     console.log('mounted');
  //   }, 1000);
  // }

  private render() {
    return (
      <transition name="fade" appear appear-class="fade-enter-active">
        {this.isShow ? (
          <div class="mmui__model">
            <section class="mmui__model--wrap">
              <header class="mmui__model--wrap--title">
                <h6 class="model--title">{this.text.title}</h6>
                <i class="fa fa-close" onClick={() => this.close()}></i>
              </header>
              <article class="mmui__model--wrap--content">
                <p>{this.text.msg}</p>
              </article>
              <footer class="mmui__model--wrap--button">
                {this.text.confirm ? (
                  <m-button onClickevent={() => this.confirm()}>
                    {this.text.btn.confirm}
                  </m-button>
                ) : (
                  ''
                )}
                {this.text.cancel ? (
                  <m-button type="link" onClickevent={() => this.cancel()}>
                    {this.text.btn.cancel}
                  </m-button>
                ) : (
                  ''
                )}
              </footer>
            </section>
            <section
              class="mmui__model--mask"
              onClick={() => this.close()}
            ></section>
          </div>
        ) : (
          ''
        )}
      </transition>
    );
  }
}
