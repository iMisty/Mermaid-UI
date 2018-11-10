<template>
<div>
    <h2>{{ message }}</h2>
</div>
</template>

<script>
export default {
    components: {},
    props: ['message'],
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
div{
    width: 72%;
    text-align: center;
    flex-wrap: wrap;
    padding: 8vh 0;
    h2{
        width: 80%;
        margin: 0 auto;
        font-size: 1.5rem;
        letter-spacing: 1px;
        color: rgba(0,0,0,.87);
    }
}

</style>
