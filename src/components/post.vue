<template lang="html">
    <div>
        <div class="post">
            <h3 class="post-title">Vue.js、Node.js打造个人博客</h3>
            <p class="datetime">发表于：Thursday,December 28,2016</p>
            <div class="content">
                <h3>方案</h3>
                <ul>


                    <li> UI风格：主要参考Randy's Blog的风格，并加入自己的一点想法（主要是为了偷懒）。</li>
                    <li> 前端页面：基于Vue2.0的响应式SPA，啊？你问我为什么？就如《关于》中的自我介绍：我自认为擅长Vue的SPA开发。</li>
                    <li> 后台：前端工程师通向全栈的捷径：Node.js。负责写接口及渲染静态页面。（还没）</li>
                    <li> 数据库：索性数据库都不用了，第一版就先这样吧。</li>
                    <li>
                        文章：参考hexo用markdown语法写好文章再转成html的做法。也是在本地编辑好md格式的文章，这也是为什么暂时不需要数据库的原因。
                    </li>
                    <li> 部署：从入门到放弃。</li>
                </ul>
                <h3>扬帆！起航！</h3>
                <ul>
                    <li>页面布局：简单介绍下。第一屏为一张壁纸宽高均为100%铺满整个可视区域，内容有博客名称、小标题及三个关于博主的链接；点击向下箭头滚动进入第二屏正题，分为四个Tab模块：【首页】、【文章】、【作品】、【关于】。默认为【首页】，即最新一篇文章详情，【文章】为文章列表，点击可阅读文章内容，【作品】为作品列表，这部分还没完成，【关于】为关于博主的一些介绍。PS：首屏的壁纸在Google图片里找了一上午才找到这张还算满意的，考虑到手机端壁纸是居中铺满整个可视区域，要找到一张PC端手机端效果都还行且逼格不能太低的图片真的不容易，BTW，博主还是选择困难症患者。
                    </li>

                    <li>前端开发：从Vue脚手架开始

                        <p># 全局安装 vue-cli</p>
                        <p>$ npm install --global vue-cli</p>
                        <p># 创建一个基于 webpack 模板的新项目</p>
                        <p>$ vue init webpack blog</p>
                        <p># 安装依赖，走你</p>
                        <p>$ cd blog</p>
                        <p>$ npm install</p>
                        <p>$ npm run dev</p>
                        <p>然后安装Vue-router用于SPA路由及vue-resource或axios用于Ajax。</p>

                        <p>$ npm install --save vue-router</p>
                        <p>$ npm install --save axios</p>
                        <p># vue官方推荐的ajax库不再是vue-resource,而是axios</p>
                        <p>然后就可以开始码静态页面了，根据第一步页面布局的思路写出静态页面应该不是什么难事，其中需要调用第三步中node.js提供的接口，这里就不再多说了。完成静态页面后编译</p>

                        <p>$ npm run build</p>
                    </li>
                    <h3>目前就到这</h3>

                </ul>
            </div>

        </div>
    </div>
</template>

<script>

    export default {
        data () {
            return {}
        },
        created () {

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
