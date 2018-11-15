<template>
    <div>
        <a :href="links" target="_blank">
            <button>{{ message }}</button>
        </a>
    </div>
</template>

<script>
export default {
  components: {},
  props: ['links','message'],
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
button{
    padding: 16px;
    border: transparent;
    border-radius: 20px;
    background-color: #00B4DB;
    color: #fff;
    transition: .6s;
    &:hover{
        transition: .6s;
        box-shadow: 0 4px 8px rgba(0,180,219,.5);
    }
    &:active{
        transition: .6s;
        box-shadow: none;
    }
}

</style>
