import { defineComponent, reactive } from 'vue';
import TestComponent from '../../package/input/input';

const data = reactive({});

const Home = defineComponent({
  components: {
    TestComponent,
  },
  setup(props, ctx) {
    return { data };
  },
  render() {
    return (
      <div class="home">
        <TestComponent></TestComponent>
      </div>
    );
  },
});
export default Home;
