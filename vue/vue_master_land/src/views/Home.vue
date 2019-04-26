<template>
    <div class="home">
        <!--<img alt="Vue logo" src="../assets/logo.png">-->
        <HelloWorld msg="Home页"/>
        <button @click="btn_request">点击</button>
        <p v-if="'a'=='v'">bbb</p>
        <p v-else>
            aaa
        </p>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import {Vue} from "vue";

    export default {
        name: 'home',
        components: {
            HelloWorld
        },
        data() {
            return {
                data: {
                    // code: 1,
                    // message: "登录成功！",
                    // results: {
                    //     LoginName: "test",
                    //     RoleID: "04a50a0e-cc4c-47cf-bf1c-87a9b7b28dd8",
                    //     TokenID: "0a6f4892-e78b-41f2-9b0e-d28c7e4e9858",
                    // }
                },
            }
        },
        methods: {
            btn_request() {
                //json请求
                var loginParams = new Object();
                loginParams.userName = "test";
                loginParams.password = "123456";

                //表单
                // let paramObj = {
                //     userName: 'test',
                //     password: '123456'
                // }
                this.LoadingUtils.showLoading();

                this.$Api.login(loginParams).then(data => {
                    // this.$server.login(loginParams).then(data => {
                    this.data = data;
                    this.LogUtils.jsonLog(data)
                    this.LogUtils.log(eval(data))

                    this.StorageUtils.setJsonData("JsonData", data);

                    this.LoadingUtils.hideLoading();
                    if (this.data.code === 1) {
                        this.startPage()
                    }
                })
            },
            startPage() {
                this.ToastUtils.showToast("11");

                this.DialogUtils.showDialog()

                // this.LogUtils.log("打开页面" + this.$string.appName);
                // this.$router.push("/");
            },
        }
    }
</script>
