/*
 * @Author: Miya
 * @Date: 2021-01-15 10:50:53
 * @LastEditTime: 2021-01-25 14:58:46
 * @LastEditors: Miya
 * @Description: Carousel
 * @FilePath: \Mermaid-UI\src\components\carousel\Carousel.tsx
 * @Version: 1.0
 */
import { Component, Vue, Watch } from 'vue-property-decorator';
import CarouselItem from './CarouselItem';
import './Carousel.less';

@Component({
  components: {
    'carousel-item': CarouselItem
  }
})
export default class MermaidCarousel extends Vue {
  private imgitem = [
    require('../../assets/1.png'),
    require('../../assets/2.png'),
    require('../../assets/3.png'),
    require('../../assets/4.png'),
    require('../../assets/5.png'),
    require('../../assets/6.png')
  ];

  private count = 1;


  private created() {
    // console.log(this.imgitem);
    // const a = this.imgitem.map(item => {
    //   console.log(item)
    // })

  }

  @Watch('count')
  onCountChange(oldVal: number, newVal: number) {
    console.log('+++++++++++++++' + oldVal);
    console.log('---------------' + newVal);
    if (newVal > this.imgitem.length - 1) {
      return false;
    }
    if (newVal < 1) {
      return false;
    }
  }

  private handlePrev() {
    if (this.count === 0) {
      return false;
    } else {
      return this.count--;
    }
  }

  private handleNext() {
    if (this.count === this.imgitem.length -1) {
      return false;
    } else {
      this.count++;
    }
  }

  private render() {
    return (
      <section
        class="mmui__carousel"
        style="position: relative;width: 720px;height: 320px;overflow: hidden;"
      >
        <section
          class="mmui__carousel--list"
          style="width: 100%;height: 100%;overflow:hidden;"
        >
          <keep-alive>
            <CarouselItem data={this.imgitem[this.count]}></CarouselItem>
          </keep-alive>
        </section>
        <section
          class="mmui__carousel--options"
          style="position: absolute;top: 3rem;"
        >
          <i
            class="fa fa-angle-left"
            style="width: 4rem;height: 4rem;"
            onClick={() => this.handlePrev()}
          ></i>
          <i
            class="fa fa-angle-right"
            style="width: 4rem;height: 4rem;"
            onClick={() => this.handleNext()}
          ></i>
        </section>
      </section>
    );
  }
}
