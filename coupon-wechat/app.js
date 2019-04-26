//app.js

//请求方法
import {
    postRequest,
    getRequest
} from './utils/request.js'

App({
    onLaunch: function () {
      // wx.setStorageSync('churchFoodOne', this.globalData.churchFoodOne)
        // 获取用户信息
        wx.getSetting({
            success: res => {
                if (res.authSetting['scope.userInfo']) {
                    // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
                    if (wx.getStorageSync('userInfo')) {
                        this.globalData.userInfo = wx.getStorageSync('userInfo')
                    } else {
                        wx.getUserInfo({
                            success: res => {
                                console.log(this.globalData.userInfo)
                                // 可以将 res 发送给后台解码出 unionId
                                this.globalData.userInfo = res.userInfo
                                wx.setStorageSync('userInfo', res.userInfo)
                            }
                        })
                    }
                }
            }
        })
    },

    globalData: {
        userInfo: null,
        openid: '',
        unionId: '',
        churchFoodOne: [{
            cardId: 'pr63fvhrUCqomJ6WvRVEFKk5KcPw',
            // cardId: 'pr63fvtNxwSoO4eXUA5FeGI2IR-k', // 会员卡cardIds
            couponType: '01',
            img: '../../images/card/food_01.png',
            couponTitle: '甜筒冰激凌',
            startTime: '2018-11-12 00:12:23',
            endTime: '2018-11-22 00:12:23',
            couponPrice: '20',
            subTitle: '啊哈哈',
            originalPrice: "66",
            status: false

        }, {
            cardId: 'pr63fvpLe6Z1XNo8-OA-uMryrIHw',
            couponType: '03',
            img: '../../images/card/food_04.png',
            couponTitle: '奶油爆米花66',
            startTime: '2018-11-12 00:12:23',
            endTime: '2018-11-22 00:12:23',
            couponPrice: '19',
            subTitle: '啦啦哈',
            originalPrice: "35",
            status:false
        }],

    }
})