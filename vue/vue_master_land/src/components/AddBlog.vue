<template>
    <div class="addBlog">
        <h2>写博客</h2>
        <form action="#">
            <label>主题：</label>
            <input type="text" v-model="blog.blogTitle">
            <label>内容：</label>
            <textarea v-model="blog.blogContent"></textarea>
            <label>分类：</label>
            <div class="selectType">
                <label>vue.js</label>
                <input type="checkbox" value="vue.js" v-model="blog.selectType">
                <label>Angular4</label>
                <input type="checkbox" value="Angular4" v-model="blog.selectType">
                <label>Node.js</label>
                <input type="checkbox" value="Node.js" v-model="blog.selectType">
                <label>React.js</label>
                <input type="checkbox" value="React.js" v-model="blog.selectType">
            </div>
            <label>分类：</label>
            <select v-model="blog.author">
                <option v-for="author in authors">{{author}}</option>
            </select>
            <button @click.prevent="btnAddBlog">添加内容</button><!--click.prevent 点击时页面不会闪动刷新-->
        </form>

        <div>
            <div>标题：{{blog.blogTitle}}</div>
            <div>内容：{{blog.blogContent}}</div>
            <div>分类：
                <ul>
                    <li v-for="itemType in blog.selectType">{{itemType}}</li>
                </ul>
            </div>
            <div>作者：{{blog.author}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'addBlog',
        data() {
            return {
                blog: {
                    blogTitle: "",
                    blogContent: "",
                    selectType: [],
                    author: ""
                },
                authors: ["UchihaMadara", "UchihaObtio", "UchihaItachi", "Pein"],
            }
        },
        methods: {
            btnAddBlog() {
                console.log("添加内容")

                this.$router.push("/home")
            }
        }
    }
</script>

<style scoped>

</style>