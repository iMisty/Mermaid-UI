import { Component, Vue } from 'vue-property-decorator';
import 'font-awesome/css/font-awesome.min.css';

@Component({})
export default class Home extends Vue {
  private render() {
    return (
      <div class="home" style="background-color: #f3f4f5;">
        <div
          class="home__left"
          style="width: 16rem;height: 100vh;background-color: #fff;padding: 0.5rem;"
        >
          <section class="mermaid__leftlist">
            <header class="mermaid__leftlist--title mermaid__leftlist--list--item">
              <i class="fa fa-plane"></i>
              <p class="text">111111111111</p>
            </header>
            <article class="mermaid__leftlist--list">
              <section class="mermaid__leftlist--list--item">
                <i class="fa fa-plane"></i>
                <p class="text">111111111111</p>
              </section>
              <section class="mermaid__leftlist--list--item">
                <i class="fa fa-plane"></i>
                <p class="text">2222222222222</p>
              </section>
              <section class="mermaid__leftlist--list--item">
                <i class="fa fa-plane"></i>
                <p class="text">3333333333333</p>
              </section>
              <section class="mermaid__leftlist--list--item">
                <i class="fa fa-plane"></i>
                <p class="text">44444444444</p>
              </section>
              <section class="mermaid__leftlist--list--item">
                <i class="fa fa-plane"></i>
                <p class="text">5555555555555</p>
              </section>
              <section class="mermaid__leftlist--list--item">
                <i class="fa fa-plane"></i>
                <p class="text">66666666666666s</p>
              </section>
            </article>
          </section>
        </div>
      </div>
    );
  }
}
