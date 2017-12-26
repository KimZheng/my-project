<template lang="html">
    <div>
        <div class="post scroll">
            <h3 class="post-title">Vue初体验</h3>
            <p class="datetime">发表于：Wednesday,December 20,2016</p>
            <div class="content"></div>
            <h3>Vue安装</h3>
            <p>使用npm安装，构建大型项目时推荐使用NPM安装。</p>
            <p>$ npm install vue</p>
            <p>或者直接下载并用< script >标签引入，Vue会倍注册为一个全局变量，由于我们这是只是一个DEMO，推荐使用这种方式。</p>
            <h3>功能介绍</h3>
            　　<p>简单介绍一下功能，有Dashboard和Heroes两个选项卡，Dashboard选项卡显示排名前四位英雄，下面一个英雄搜索框；Heroes选项卡像是当前所有英雄及排名，可添加、删除。</p>
            　　<p>
            传统上是使用JQuery操作DOM来实现上述功能。都2016了啊哥，还在使用JQ？Vue是一套构建用户界面的--先进框架--，和angular类似的，属于MVVM框架，核心是数据驱动模型，即通过数据改变视图模型，不直接操作DOM。</p>
            <h3>写在最后</h3>
            <p>上面只是我自己对VUE初次体验的一些小总结，对于之前没接触过MVVM的同学可能属于雾里看花，如果你对VUE也感兴趣，以下的资料推荐给大家。

                Vue.js官网，这里有最官方，最权威的第一手资料。
                Vue V2.0中文，这是Vuejs2.0的中文文档翻译。
                Vuejs2.0 文档攻略，这是LaraBase上总结的一个快速入门专辑。</p>
        </div>
    </div>
</template>
<script>

    export default {
        data () {
            return {
                header: '',
                content: ''
            }
        },
        created (){

        },
        computed: {},
        mounted () {
        },
        methods: {},
        components: {}
    }
</script>

<style lang="css">
    div.post {
        width: 7.5rem;
        margin: 0 auto;
        padding: 0.4rem 0.8rem;
        color: #666;
        line-height: 200%;
        text-align: justify;
    }

    div.post > h3.post-title {
        text-align: center;
        line-height: 160%;
        margin-bottom: 0.2rem;
        color: #444;
    }

    div.post > p.datetime {
        text-align: center;
        color: #888;
        font-size: 14px;
    }

    div.post div.content pre {
        background-color: #eee;
        overflow-x: scroll;
        padding: 0.2rem 0.3rem;
    }

    div.post div.content blockquote > p {
        position: relative;
        overflow: visible;
    }

    div.post div.content blockquote > p::after {
        content: '';
        position: absolute;
        left: -20px;
        top: 0;
        width: 6px;
        height: 100%;
        background-color: #ddd;
    }
</style>
