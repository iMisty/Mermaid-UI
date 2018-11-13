<template>
    <div id="wrap">
        <simple-text 
            class="wrap-title"
            :message="wrapTitle"/>
        <div class="advantage">
            <advantage
                v-for="item of advantageList" 
                :key="item.index"
                :icon="item.icon"
                :title="item.title"
                :text="item.text"/>
        </div>
        <div class="project">
            <simple-title
                class="content-title"
                :message="projectTitle"/>
            <section class="project-items">
                <project
                    v-for="item of projectList"
                    :key="item.index"
                    :href="item.link"
                    :src="item.src"
                    :title="item.title"
                    :text="item.text"/>
            </section>
        </div>
        <div class="github">
            <simple-title
                class="content-title"
                :message="githubPrimanyTitle"/>
            <section class="github-items">
                <section class="github-propagate prop">
                    <propagate
                        :title="githubSecondTitle"
                        :text="githubText"/>
                </section>
                <section class="promise">
                    <promise/>                    
                </section>
            </section>
        </div>
        
    </div>
</template>

<script>
import simpleText from './ty-simple-text'
import simpleTitle from './ty-simple-title'
import advantage from './ty-3-svg-text'
import project from './ty-3-img-text'

import propagate from './propagate'
import promise from './promise'

export default {
    components: { 
        'simple-text': simpleText,
        'simple-title': simpleTitle, 
        advantage, 
        project,
        propagate,
        promise,
    },
    props: [],
    data () {
        return {
            wrapTitle: 'Miya Carnival 是一套基于 Vue 的模板,只为内容渲染',
            advantageList: [
                {icon: 'fa-flag', title: '可选的组件化工程', text: '组件化的配置使得部署一个站点变得非常简单,只需要选择想要的组件,再设置喜欢的颜色样式即可完成'},
                {icon: 'fa-home', title: '多用途页面配置', text: '简单配置一个页面,无论企业网站还是博客网站,亦或是定价展示等,在这里都可以实现'},
                {icon: 'fa-map', title: '示例页面和站点', text: '如果只是为了产品或内容的展示或寻找合适的idea,您完全可以根据我们提供的示例页面来设置操作'}
            ],
            projectTitle: '近期作品',
            projectList: [
                {
                    link: 'https://Miya-Yukarin.github.io/Nekomimi/',
                    src: require('../assets/project1.png'),
                    title: 'Nekomimi-多功能导航页',
                    text: 'Nekomimi是一个简洁的导航页,可用于博客起始页面或固定内容落地页'
                },
                {
                    link: 'https://Miya-Yukarin.github.io/LandingPage/',
                    src: require('../assets/project2.png'),
                    title: 'LandingPage-简洁起始页',
                    text: 'LandingPage是一个导航单页,仅输出标题与导航,无任何其他功能,回归简洁'
                },
                {
                    link: 'https://Miya-Yukarin.github.io/HTML-MinResume/',
                    src: require('../assets/project3.png'),
                    title: 'Resume-个人简历项目',
                    text: 'Resume是基于Bootstrap的个人简历项目,纯粹为展示内容而生'
                }
            ],
            githubPrimanyTitle: '关于本项目',
            githubSecondTitle: '免费且开源的模板',
            githubText: '本页面为开源模板,您可以随意修改并发布为您自己的网站页面',
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
    .project-items{
        flex-direction: row;
    }
    .github-items{
        flex-direction: row;
        width: 100%;
        justify-content: space-around;
        padding: 4vh 0;
    }
    div{
        display: flex;
        flex-direction: column;
        width: 80%;
        margin: 0 auto;
    }
    section{
        display: flex;
        flex-direction: column;
        margin: 0 auto;
    }
}
</style>
