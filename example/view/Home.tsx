import { defineComponent, reactive } from 'vue';
import TestComponent from '../../package/input/input';

const data = reactive({
  t: '333',
});

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
        <TestComponent
          v-model={this.data.t}
          value={this.data.t}
        ></TestComponent>
        {this.data.t}
      </div>
    );
  },
});
export default Home;
