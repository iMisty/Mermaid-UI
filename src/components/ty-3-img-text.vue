<template>
    <a :href="href" class="project-item">
        <img :src="src" :alt="title">
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
    </a>
</template>

<script>
export default {
  components: {},
  props: ['href','src','title','text'],
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
a{
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    text-align: center;
    padding: 2vh 12px;
    word-break: break-all;
    transition: .4s;
    &:hover{
        transform:translate(0,-4px);
        box-shadow: 0 4px 8px rgba(0,0,0,.18);
    }
    @media screen and (max-width: 770px) {
            flex-direction: column;
            padding: 2vh 0;
            article{
                padding: 2vh 0;
            }
        }
}
img{
    max-width: 360px;
    max-height: 140px;
}

</style>
