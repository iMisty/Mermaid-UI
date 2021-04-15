/*
 * @Author: Miya
 * @Date: 2021-01-15 11:15:31
 * @LastEditTime: 2021-01-25 12:18:22
 * @LastEditors: Miya
 * @Description: Carousel Item
 * @FilePath: \Mermaid-UI\src\components\carousel\CarouselItem.tsx
 * @Version: 1.0
 */
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component({})
export default class MermaidCarouselItem extends Vue {
  @Prop()
  private data!: string | object;

  @Prop({ default: -1 })
  private code!: number | string;

  get statusCode() {
    const status = this.code;
    console.log('+++++++++++++++++++'+status)
    switch (status) {
      case -1:
        return 'prev';
      case 0:
        return 'active';
      case 1:
        return 'next';
      default:
        return '';
    }
  }

  private render() {
    return (
      <div class={`mmui__carousel--item ${this.statusCode}`} data-code={this.code}>
        <img src={this.data} alt={this.data} />
      </div>
    );
  }
}
