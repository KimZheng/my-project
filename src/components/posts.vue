<template lang="html">
    <div>
        <ul class="posts">
            <li >
                <h3>Vue.js、Node.js打造个人博客</h3>
                <p>发表于：Thursday,December 28,2016</p>
                <router-link class="click" to="/post">点击阅读>></router-link>
            </li>
        </ul>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                posts : []
            }
        },
        created () {

        },
        computed: {},
        mounted () {},
        methods: {

        },
        components: {}
    }
</script>

<style lang="css" scoped>
    ul.posts {
        width: 7.5rem;
        margin: 0 auto;
        padding: 0.4rem 0.8rem;
        list-style: none;
    }
    ul.posts h3 {
        color: #555;
    }
    ul.posts > li {
        position: relative;
        /*padding: 0.4rem 0;*/
        border-bottom: 1px dashed #ccc;
    }
    ul.posts > li > p {
        font-size: 12px;
        color: #666;
        /*margin-top: 6px;*/
    }
    ul.posts > li > .click {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 14px;
        cursor: pointer;
        text-decoration: underline;
    }
</style>
