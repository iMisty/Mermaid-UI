import { defineComponent, reactive } from 'vue';
import MMUISwitch from '../../package/switch/switch';

const data = reactive({});

const Home = defineComponent({
  components: {
    'mmui-switch': MMUISwitch,
  },
  setup(props, ctx) {
    return { data };
  },
  render() {
    return (
      <div class="home">
        <mmui-switch></mmui-switch>
      </div>
    );
  },
});
export default Home;
