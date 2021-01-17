import { Component, Vue } from 'vue-property-decorator';
import CarouselItem from './CarouselItem';

@Component({
  components: {
    'carousel-item': CarouselItem
  }
})
export default class MermaidCarousel extends Vue {
  private render() {
    return (
      <section class="mmui__carousel">
        <section class="mmui__carousel--list">
          <keep-alive>
            <carousel-item>
              <img src={require('../../assets/1.png')} alt="" />
            </carousel-item>
            <carousel-item>
              <img src={require('../../assets/2.png')} alt="" />
            </carousel-item>
            <carousel-item>
              <img src={require('../../assets/3.png')} alt="" />
            </carousel-item>
            <carousel-item>
              <img src={require('../../assets/4.png')} alt="" />
            </carousel-item>
            <carousel-item>
              <img src={require('../../assets/5.png')} alt="" />
            </carousel-item>
            <carousel-item>
              <img src={require('../../assets/6.png')} alt="" />
            </carousel-item>
          </keep-alive>
        </section>
        <section class="mmui__carousel--options">
          <i class="fa fa-angle-left"></i>
          <i class="fa fa-angle-right"></i>
        </section>
      </section>
    );
  }
}
