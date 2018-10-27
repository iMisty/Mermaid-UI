<template>
  <div id="app">
    <div id="nav">
      <logo />
      <navigation />
    </div>
    <Header />
    <wrap />
    <Footer />
  </div>
</template>

<script>
import logo from './components/logo'
import navigation from './components/navigation'
import Header from './components/header'
import wrap from './components/wrap'
import Footer from './components/footer'
export default {
  name: 'App',
  components: {
    logo,
    navigation,
    Header,
    wrap,
    Footer
  }
}
</script>

<style>
#app{
  margin: 0;
  padding: 0;
  background-color: #e6e6e6;
  font-size: 1rem;
  letter-spacing: 1px;
  overflow-x: hidden;
}
#nav{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    transition: .4s;
}
.isFixed{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    width: 100%;
    transition: .4s;
    background-color: #fff;

}
.isFixed a{
    color: rgba(0,0,0,.87);
}
</style>
