import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class MermaidCarouselItem extends Vue {
  private render() {
    return <div class="mmui__carousel--item">{this.$slots.default}</div>;
  }
}
