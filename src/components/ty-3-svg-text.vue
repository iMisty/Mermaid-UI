<template>
    <article class="advantage-item">
        <i class="fa fa-4x" :class="icon"></i>
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
    </article>
</template>

<script>
export default {
  components: {},
  props: ['icon','title','text'],
  data () {
    return {}
  },
  watch: {},
  computed: {},
  methods: {},
  created () {},
  mounted () {}
}
</script>
<style lang="less" scoped>

article{
    flex-direction: row;
    justify-content: space-around;
    text-align: center;
    padding: 0 12px;
    letter-spacing: 1px;
    word-break: break-all;
    @media screen and (max-width: 770px) {
        flex-direction: column;
    }
}

</style>
