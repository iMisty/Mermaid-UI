import { Component, Vue } from 'vue-property-decorator';
import './loading.less';

@Component({})
export default class Loading extends Vue {


  private render() {
    return (
      <section class="mmui__loading">
        <div class="mmui__loading--square"></div>
        <div class="mmui__loading--square"></div>
        <div class="mmui__loading--square"></div>
        <div class="mmui__loading--square"></div>
        <div class="mmui__loading--square"></div>
      </section>
    );
  }
}