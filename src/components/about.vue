<template lang="html">
    <div>
        <div class="about">
            <h1>About Me</h1>
            <h3>基本信息</h3>
            <p class="text">
                大家好，我是郑镇根，英文名 Kim Zheng，目前坐标广州，立志全栈的页面仔。
            </p>
            <h3>技术栈</h3>
            <ul class="list">
                <li>前端三板斧HTML，CSS,JS</li>
                <li>各主流CSS、JS库</li>
                <li>Git、Ajax</li>
                <li>Vue.js</li>
                <li>Angular.js</li>
            </ul>
            <p  class="text">
                目前专注Vue.js、Angular.js、Ajax等技术的学习。(反正吹牛逼又不用成本)
            </p>
            <h3>联系我</h3>
            <ul class="list">
                <li><a href="https://weibo.com/p/1005052153498670" target="_blank">新浪微博</a></li>
                <li><a href="https://github.com/KimZheng" target="_blank">Gitbub</a></li>
                <li>QQ:1070963419</li>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        data () {
            return {}
        },
        computed: {},
        mounted () {},
        methods: {},
        components: {}
    }
</script>

<style lang="css" scoped>
    div.about {
        width: 7.5rem;
        margin: 0 auto;
        padding: 0.4rem 0.8rem;
    }
    div.about > h1 {
        margin-bottom: 0.4rem;
    }
    div.about > h2 {
        margin-bottom: 0.3rem;
    }
    div.about > h3 {
        margin: 0.1rem;
    }
    div.about > p.text {
        margin-bottom: 0.4rem;
        line-height: 200%;
        text-indent: 40px;
        color: #555;
        text-align: justify;
    }
    div.about > ul.list {
        padding-left: 0.4rem;
        list-style-position: inside;
        list-style-type: disc;
        line-height: 200%;
    }
</style>
