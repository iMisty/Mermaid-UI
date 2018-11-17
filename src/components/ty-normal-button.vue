<template>
    <div>
        <a :href="links" target="_blank">
            <button>
                <i class="fa" :class="icon"> {{ message }}</i>
            </button>
        </a>
    </div>
</template>

<script>
export default {
  components: {},
  props: ['links','icon','message'],
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
<style lang="less" scoped>
div{
    display: flex;
}
</style>
