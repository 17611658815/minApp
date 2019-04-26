module.exports = {
    // autoOpenBrowser: true, // cli2.0 是否自动打开浏览器
    devServer: {
        open: true, //cli3.0  配置自动启动浏览器
        host:'192.168.1.112',
        port:'8080',
        // 设置代理
//         proxy: {
//             "/API": {
//                 target: "http://120.52.185.84", // 域名
//                 // ws: true, // 是否启用websockets
//                 changOrigin: true, //开启代理：在本地会创建一个虚拟服务端，然后发送请求的数据，并同时接收请求的数据，这样服务端和服务端进行数据的交互就不会有跨域问题
//                 secure: false,
//                 pathRewrite: {
//                     '^/API': ''
//                 }
//             }
//         }
    },
    css: {
        loaderOptions: {
            css: {},
            //屏幕适配
            postcss: {
                plugins: [
                    require('postcss-px2rem')({
                        // 之所以设为37.5，是为了引用像mint-ui这样的第三方UI框架，因为第三方框架没有兼容px2rem ，
                        // 将remUnit的值设置为设计图宽度（这里为750px）75的一半，即可以1:1还原mint-ui的组件，
                        // 否则会样式会有变化，例如按钮会变小。既然设置成了37.5 那么我们必须在写样式时，也将值改为设计图的一半。
                        remUnit: 37.5
                    })
                ]
            },

            // 设置全局样式  给sass-loader 传递选项
            sass: {
                // @/ 是 src/ 的别名
                // 所以这里假设你有 `src/css/varuables.scss` 这个文件
                data: `@import "@/constant/color.scss";`
            }
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
}