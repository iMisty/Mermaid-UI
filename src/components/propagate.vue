<template>
    <div class="prop">
        <i class="fa fa-github fa-large"></i>
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
        <section class="button">
            <view-button
                :links="bigButton.links"
                :message="bigButton.message"/>
            <star-button/>
        </section>
    </div>
</template>

<script>
import bigButton from './ty-big-button'
import starButton from './star-button'
export default {
  components: { 
      'view-button': bigButton, 
      'star-button': starButton, 
      },
  props: {},
  data () {
    return {
      title: '免费且开源的模板',
      text: '本页面为开源模板,您可以随意修改并发布为您自己的网站页面',
      bigButton:{
        links: 'https://github.com/Miya-Yukarin',
        message: 'View Demo On GitHub'
      }
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
.prop{
    padding: 4vh 0;
    flex: 0.4;
    padding: 2vh 0;
    @media screen and (max-width: 960px) {
        text-align: center;
    }
    p{
        width: 80%;
        @media screen and (max-width: 960px) {
            width: 100%;
        }
    }
    .button{
        display: inline-flex;
        padding: 2vh 4px 0 4px;
        line-height: 46px;
    }
}

</style>
