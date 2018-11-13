<template>
    <div class="prop">
        <i class="fa fa-github fa-large"></i>
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
        <section class="button">
            <big-button
                :href="bigButton.links"
                :message="bigButton.message"/>
            <!--<normal-button/>
            <normal-button/> -->
        </section>
    </div>
</template>

<script>
import bigButton from './ty-big-button'
export default {
  components: { 
      'big-button': bigButton
    },
  props: ['title','text'],
  data () {
    return {
        bigButton: {
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
