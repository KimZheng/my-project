<template>
    <div>

        <ul class="gallery">
            <li>
                <a href="http://www.lee-cloud.xyz">
                    <h3>暂时还没有</h3>
                    <h4>。。。</h4>
                </a>
            </li>

        </ul>

    </div>
</template>
<style scoped>
    ul.gallery {
        width: 7.5rem;
        margin: 0 auto;
        padding: 0.4rem 0.8rem;
        list-style: none;
    }
    ul.gallery h3 {
        color: #555;
    }
    ul.gallery h4 {
        color: #666;
    }
    ul.gallery > li {
        position: relative;
        border-bottom: 1px dashed #ccc;
    }
    ul.gallery > li > a {
        display: block;
        width: 100%;
        height: 100%;
    }
    ul.gallery > li > p {
        font-size: 12px;
        color: #666;
        /*margin-top: 6px;*/
    }
    ul.gallery > li > p.click {
        position: absolute;
        right: 0;
        bottom: 0;
        font-size: 14px;
        cursor: pointer;
        text-decoration: underline;
    }
</style>
<script>

    export default{
        data(){
            return{

            }
        },
        components:{

        }
    }
</script>
