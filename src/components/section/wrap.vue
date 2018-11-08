<template>
    <div id="wrap">
        <simple-text 
            class="wrap-title"
            :message="title"/>
        <div class="advantage">
            <advantage
                v-for="item of list" 
                :key="item.index"
                :icon="item.icon"
                :title="item.title"
                :text="item.text"
            />
        </div>
        <project />
        <github />
    </div>
</template>

<script>
import simpleText from '../ty-simple-text'
import advantage from '../ty-3-img-text'
import project from '../project'
import github from '../github'
export default {
    components: { 
        'simple-text': simpleText, 
        advantage, project, github },
    props: [],
    data () {
        return {
            title: 'Miya Carnival 是一套基于 Vue 的模板,只为内容渲染',
            list: [
                {icon: 'fa-flag', title: '可选的组件化工程', text: '组件化的配置使得部署一个站点变得非常简单,只需要选择想要的组件,再设置喜欢的颜色样式即可完成'},
                {icon: 'fa-home', title: '多用途页面配置', text: '简单配置一个页面,无论企业网站还是博客网站,亦或是定价展示等,在这里都可以实现'},
                {icon: 'fa-map', title: '示例页面和站点', text: '如果只是为了产品或内容的展示或寻找合适的idea,您完全可以根据我们提供的示例页面来设置操作'}
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
#wrap{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 92%;
    margin: -16vh auto auto auto;
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 24px;
    box-shadow: 0 8px 40px rgba(0,0,0,.4);
    .advantage{
        flex-direction: row;
    }
    div{
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
    }
}
</style>
