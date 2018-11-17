<template>
    <footer>
        <logo class="footer colorFixed"/>
        <navigation class="footer colorFixed"/>
        <section class="social-items">
            <social-button
                v-for="item of list"
                :key="item.index"
                :links="item.links"
                :icons="item.icons"/>
        </section>
    </footer>
</template>

<script>
import logo from './logo'
import navigation from './navigation'
import socialButton from './social-button'
export default {
  components: { 
      logo,
      navigation,
      'social-button': socialButton
    },
  props: [],
  data () {
    return {
        list:[
            {links:'#',icons:'fa-twitter'},
            {links:'#',icons:'fa-telegram'},
            {links:'#',icons:'fa-facebook'},
            {links:'#',icons:'fa-gitlab'},
            {links:'#',icons:'fa-linode'}
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
footer{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding: 2vh 0;
    .social-items{
        display: flex;
        flex-direction: row;
    }
}
</style>
