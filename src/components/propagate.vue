<template>
    <div class="prop">
        <i class="fa fa-github fa-large"></i>
        <h3>{{ title }}</h3>
        <p>{{ text }}</p>
        <section class="button">
            <Big-button
                :links="bigButton.links"
                :message="bigButton.message"/>
            <Normal-button
                v-for="item of list"
                :key="item.index"
                :icon="item.icon"
                :links="item.links"
                :message="item.message"/>
        </section>
    </div>
</template>

<script>
import bigButton from './ty-big-button'
import normalButton from './ty-normal-button'
export default {
  components: { 
      'Big-button': bigButton,
      'Normal-button': normalButton
    },
  props: ['title','text'],
  data () {
    return {
        bigButton: {
            links: 'https://github.com/Miya-Yukarin',
            message: 'View Demo On GitHub'
        },
        list: [
            {links: 'https://github.com/Miya-Yukarin/Miya-Carnival', icon: 'fa-star', message: 'Star'},
            {links: 'https://github.com/Miya-Yukarin/Miya-Carnival', icon: 'fa-code-fork', message: 'Fork'}
        ]
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
        padding: 2vh 4px 4px 4px;
        line-height: 46px;
        @media screen and (max-width: 770px) {
            justify-content: center;
        }
    }
}

</style>
