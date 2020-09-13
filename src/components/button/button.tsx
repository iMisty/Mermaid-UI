/*
 * @Author: Miya
 * @Date: 2020-09-03 17:08:06
 * @LastEditTime: 2020-09-13 22:11:25
 * @LastEditors: Miya
 * @Description: Button component in Mermaid UI
 * @FilePath: /Mermaid-UI/src/components/button/button.tsx
 * @Version: 0.2
 */
import { Component, Vue, Prop, Emit } from 'vue-property-decorator';
@Component({})
export default class MermaidButton extends Vue {
  // Extra class name
  // 额外类名
  @Prop({ default: '' })
  private className?: string;

  // Button Color
  // 按钮颜色
  @Prop({ default: 'primary' })
  private color!: string;

  // Click Event
  // 点击事件
  @Emit('clickevent')
  public handleClick() {
    console.log('click button');
  }

  private render() {
    return (
      <button
        class={`mermaid__btn mermaid__btn--${this.color} ${this.className}`}
        onClick={this.handleClick}
      >
        {this.$slots.default}
      </button>
    );
  }
}
