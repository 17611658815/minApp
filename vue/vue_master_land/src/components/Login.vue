<template>
    <div id="login_layout">
        <div class="icon">
            <img src="../image/splash_icon.png">
        </div>
        <div class="icon_text1">
            <img src="../image/splash_icon_txt1.png">
        </div>

        <div class="edit_layout">
            <div>
                <span>用户：</span>
                <input type="text" v-model="userName" placeholder="请输入用户名">
            </div>
            <div>
                <span>密码：</span>
                <input type="password" v-model="password" placeholder="请输入密码">
            </div>
        </div>
        <!--@focus="focusPwd($event)"-->
        <div class="btn_layout" @click="login">
            <button>
                登录
            </button>
        </div>
        <div class="icon_text2">
            <img src="../image/splash_icon_txt2.png">
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                data: {},
                userName: "",
                password: "",
            };
        },
        created() {

        },
        methods: {
            login() {
                //json请求
                var loginParams = new Object();
                loginParams.userName = this.userName;
                loginParams.password = this.password;

                this.LoadingUtils.showLoading();
                this.$Api.login(loginParams).then(data => {
                    this.data = data;
                    this.LogUtils.jsonLog(data);
                    this.LoadingUtils.hideLoading();
                    if (this.data.code === 1) {
                        this.StorageUtils.setJsonData("LoginData", data);
                        this.$router.push("/Main");
                    } else {
                        this.ToastUtils.showToast("" + data.message);
                    }
                })
            },
        }

    }
</script>

<style scoped>

    #login_layout {
        min-height: 100vh;
        background-image: url("../image/splash_banner.png");
        background-repeat: no-repeat;
        background-size: 100% 100%;
        display: flex;
        flex-direction: column; /*属性决定主轴的方向（即项目的排列方向）  column：主轴为垂直方向，起点在上沿。*/
    }

    .icon, .edit_layout {
        text-align: center;
        justify-content: center;
        align-items: center;
    }

    .icon img {
        width: 150px;
        height: 150px;
        margin-top: 45px;
    }

    .icon_text1 {
        text-align: center;
        justify-content: center;
        align-items: center;
        margin: 5px 30px 0;
    }

    .icon_text1 img {
        width: 100%;
        height: 70px;
    }

    .edit_layout {
        margin: 0 50px;
    }

    .edit_layout div {
        width: 100%;
        height: 45px;
        margin-top: 10px;
        background-color: white;
        border-radius: 30px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .edit_layout div span {
        white-space: nowrap;
        margin-left: 15px;
        font-size: 14px;
    }

    .edit_layout div input {
        flex: 1;
        height: 38px;
        margin-right: 20px;
        font-size: 14px;
        border: 0;
    }

    .btn_layout {
        margin: 10px 50px 0;
    }

    button {
        width: 100%;
        height: 40px;
        border-radius: 30px;
        background-color: #007EF6;
        font-size: 17px;
        border: 0;
        color: white;
        text-align: center;
    }

    .icon_text2 {
        width: 100%;
        position: fixed; /*固定在底部*/
        bottom: 12%;
        text-align: center;
    }

    .icon_text2 img {
        width: 200px;
        height: 50px;
    }

</style>