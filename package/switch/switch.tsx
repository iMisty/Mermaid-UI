import { defineComponent, reactive, computed, watch } from 'vue';
import './switch.less';

const MMSwitch = defineComponent({
  setup(props, ctx) {
    const data = reactive({
      a: false,
    });
    const handleClick = (e: any) => {
      console.log(e.target.checked);
      const status = e.target?.checked;
      data.a = status;
    };
    return { data, handleClick };
  },
  render() {
    return (
      <div class="mmui__switch">
        <input
          type="checkbox"
          name="switch"
          checked={this.data.a}
          onClick={(e) => {
            this.handleClick(e);
          }}
        />
        <div class={`${this.data.a}`}>{this.data.a}</div>
      </div>
    );
  },
});
export default MMSwitch;
