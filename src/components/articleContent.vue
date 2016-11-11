<template>
    <div class='container'>
        <Navbar></Navbar>
        <!--<Asides></Asides>-->
        <div class="articleCon"  v-if='articleCon.author'>
            <div class="author-info">
                <div class="avatar">
                    <img v-bind:src='articleCon.author.avatar' alt="">
                </div>
                <span class="label">
                    作者
                </span>
                <span class="author-name blue-link">
                    <span>{{articleCon.author.name}}</span>
                </span>
                <span>{{articleCon.create_at}}</span>
                <div class='text'>个人简介</div>
            </div>

            <h2 class="title">{{articleCon.title}}</h2>
            <div id='test-editormd-view' class="show-content">
            </div>
        </div>
    </div>
</template>
<script>
    import Navbar from './nav'
    import Asides from './aside'
    import Request from '../request.js'   
    import Moment from 'moment'
    export default {
        data(){
            return {
            articleCon:{},
            }
        },
        mounted:function(){
                Request.get(this,'post/'+this.$route.params.articleId).then(res => {
                    this.articleCon = res.body.data;
                    let re = /\//g;
                    this.articleCon.create_at = Moment(new Date(this.articleCon.create_at)).format('L,LT');
                    let testEditormdView;
                    setTimeout(() => {
                        testEditormdView = editormd.markdownToHTML("test-editormd-view", {
                            markdown        : this.articleCon.md ,//+ "\r\n" + $("#append-test").text(),
                            //htmlDecode      : true,       // 开启 HTML 标签解析，为了安全性，默认不开启
                            htmlDecode      : "style,script,iframe",  // you can filter tags decode
                            //toc             : false,
                            tocm            : true,    // Using [TOCM]
                            //tocContainer    : "#custom-toc-container", // 自定义 ToC 容器层
                            //gfm             : false,
                            //tocDropdown     : true,
                            // markdownSourceCode : true, // 是否保留 Markdown 源码，即是否删除保存源码的 Textarea 标签
                            emoji           : true,
                            taskList        : true,
                            tex             : true,  // 默认不解析
                            flowChart       : true,  // 默认不解析
                            sequenceDiagram : true,  // 默认不解析
                        });
                    })

                })

        },

        components: {
            Navbar,
            Asides
        }
    }
</script>

<style lang="scss">
    // @import '../assets/github-markdown.css'; 
    .articleCon{
        width:620px;
        margin:0 auto;
        padding: 80px 40px 20px;
        .author-info {
            padding-bottom: 15px;
            margin-bottom: 30px;
            border-bottom: 1px solid #eeeeee;
            overflow: hidden;
            font-size: 12px;
            color: #999999;
            img {
                width: 100%;
                height: 100%;
                border: 2px solid white;
                border-radius: 50%;
                box-sizing: border-box;
                }
            .avatar {
                float: left;
                width: 40px;
                height: 40px;
                margin-right: 10px;
            }
            .label {
                background: none;
                border: 1px solid #e78170;
                color: #e78170;
                text-shadow: none;
                font-size: 11px;
                font-weight: normal;
                line-height: 1;
                border-radius:3px;
                display: inline-block;
                 padding: 2px 4px;
            }
            .author-name {
                margin: 0 5px;
            }
            .text{margin-top:5px;}

            }
            .title{
                word-break: break-all;
                font-size: 32px;
                font-weight: bold;
                line-height: 1.5;
                font-family: Georgia, "Times New Roman", Times, "Kai", "Kaiti SC", "KaiTi", "BiauKai", "楷体", "楷体_GB2312", serif;
                color:#2a2a2a;
                margin-bottom:15px;
            }
        
    }
    #app.readerNightMode{
        .articleCon .title{color:#e8e8e8;}
    }
</style>