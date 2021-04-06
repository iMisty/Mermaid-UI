import { defineComponent, reactive } from 'vue';
const data = reactive({});

const Home = defineComponent({
  setup(props, ctx) {
    return { data };
  },
  render() {
    return <div class="home">2222</div>;
  },
});
export default Home;
