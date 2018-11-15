<template>
<div class="navigation">
    <ul>
        <li v-for="list of list"
            :key="list.index">
            <a :href="list.link" class="nav-items">{{ list.value }}</a>
        </li>
    </ul>
</div>
</template>

<script>
export default {
  components: {},
  data () {
    return {
      list: [
        {link: '#wrap', value: '简介'},
        {link: '#project', value: '作品'},
        {link: '#about', value: '关于'},
        {link: '#', value: '施工中'}
      ]
    }
  }
}
</script>
<style lang="css" scoped>
div{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    transition: .4s;
}
ul{
    display: inline-flex;
}
li{
    padding: 20px 8px;
}
li a{
    color: #fff;
    font-size: 0.94rem;
}

</style>
