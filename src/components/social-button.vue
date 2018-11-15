<template>
    <div class="social-icon">
        <a :href="links">
            <span class="fa" :class="icons"></span>
        </a>
    </div>
</template>

<script>
export default {
    components: {},
    props: ['links','icons'],
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
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0 8px;
    a{
        font-size: 1.2rem;
    }
}
</style>
