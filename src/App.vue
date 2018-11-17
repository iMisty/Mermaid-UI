<template>
    <div id="app">
        <div 
            id="nav" 
            :class="navBarFixed == true ? 'isFixed' : ''">
            <logo
                :class="navBarColorFixed == true ? 'colorFixed' : ''"/>
            <navigation
                :class="navBarColorFixed == true ? 'colorFixed' : ''"/>
        </div>
        <section-header/>
        <section-wrap/>
        <section-footer/>
    </div>
</template>

<script>
import logo from './components/logo';
import navigation from './components/navigation';
import Header from './components/header';
import wrap from './components/wrap';
import Footer from './components/footer';

export default {
    name: 'App',
    components: {
        logo,
        navigation,
        'section-header': Header,
        'section-wrap': wrap,
        'section-footer': Footer
    },
    data(){
        return{
            navBarFixed: false,
            navBarColorFixed: false
        }
    },
    mounted() {
        window.addEventListener('scroll', this.handleScroll);
    },
    methods: {
        handleScroll() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

            const offsetTop = document.querySelector('#app').offsetTop;

            if (scrollTop > offsetTop) {
                this.navBarFixed = true;
                this.navBarColorFixed = true;
            } else {
                this.navBarFixed = false;
                this.navBarColorFixed = false;
            }
        }
    },
    destroyed() {
        window.removeEventListener('scroll', this.handleScroll);  
    },
}
</script>

<style lang="less">
#app{
    margin: 0;
    padding: 0;
    background-color: #e6e6e6;
    font-size: 1rem;
    letter-spacing: 1px;
    overflow-x: hidden;
    #nav{
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        position: fixed;
        width: 100%;
        transition: .4s;
    }
}

</style>
