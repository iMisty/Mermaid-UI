<template>
    <footer>
        <logo />
        <navigation />
        <social-button />
    </footer>
</template>

<script>
import logo from './logo'
export default {
  components: { logo },
  props: {},
  data () {
    return {
    }
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style scoped>
footer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2vh 0;
}
social-button a{
    padding: 0 4px;
}
</style>
