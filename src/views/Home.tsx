import { Component, Vue } from 'vue-property-decorator';
import 'font-awesome/css/font-awesome.min.css';
import LeftListItem from '../components/leftlist/leftlistitem';

@Component({
  components: {
    leftlistitem: LeftListItem
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
          <section class="mermaid__leftlist">
            <header class="mermaid__leftlist--title mermaid__leftlist--list--item">
              <i class="fa fa-plane"></i>
              <p class="text">111111111111</p>
            </header>
            <article class="mermaid__leftlist--list">
              <leftlistitem></leftlistitem>
              <leftlistitem></leftlistitem>
              <leftlistitem></leftlistitem>
              <leftlistitem></leftlistitem>
              <leftlistitem></leftlistitem>
            </article>
          </section>
        </div>
      </div>
    );
  }
}
