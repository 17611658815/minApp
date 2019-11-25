//index.js
//获取应用实例
const app = getApp()
Page({
    data: {
        hello:''
    },
    onLoad: async function () {
        await this.getLove()
        wx.getSystemInfo({
            success: (res) => {
                console.log(res)
                console.log('say hello done')
            }
        })
    },
    
    getLove:async function (){　
        await this.sleep()
        console.log('say hello 100ms')
        this.setData({
            hello:'hello'
        })
        console.log(this.data.hello)
    },
    sleep(){
        return new Promise((resolve)=>{
            setTimeout(()=>{
                console.log('11111')
                resolve()
            },1000)
        })
    }
})