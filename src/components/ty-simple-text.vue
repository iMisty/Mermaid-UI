<template>
<div>
    <p>{{ message }}</p>
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
    p{
        width: 80%;
        margin: 0 auto;
        font-size: 1.2rem;
        letter-spacing: 1px;
        white-space: pre-line;
    }
}
</style>
