
export default {
    name: "Main",
    data() {
        return {

        };
    },
    created() {

    },
    methods: {
        //打开用户设置
        open_UserInfo() {
            this.$router.push({name: 'userPage', params: {}})//A~B 跳转传递参数
            console.log(this.$route.params.id) // B接收参数
        },
        //打开房屋市场
        house_Market_OnClick() {
            // this.$router.push({name: 'page', params: {id: 123}})//A~B 跳转传递参数
            this.$router.push({name: 'home', params: {}})//A~B 跳转传递参数
            console.log(this.$route.params.id) // B接收参数
        },
        //打开保障房市场
        house_security_onClick() {
            this.$router.push("/SecurityMain");
            // this.$router.push({name: 'home', params: {}})//A~B 跳转传递参数
            // console.log(this.$route.params.id) // B接收参数
        },
    },
    components: {

    }
};
