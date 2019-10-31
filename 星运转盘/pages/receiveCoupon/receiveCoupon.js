// pages/receiveCoupon/receiveCoupon.js
var app = getApp();
Page({

    /**
     * 页面的初始数据
     */
    data: {
      churchFoodTwo:[],
       /* churchFoodTwo: [{
            cardId: 'wx003',
            couponType: '02',
            img: '../../images/card/food_03.png',
            couponTitle: '双人套餐',
            startTime: '2018-11-12 00:12:23',
            endTime: '2018-11-22 00:12:23',
            couponPrice: '20',
            subTitle: '啊哈哈',
            originalPrice: "66",

        }, {
            cardId: 'wx004',
            couponType: '01',
            img: '../../images/card/food_04.png',
            couponTitle: '超级巨无霸',
            startTime: '2018-11-12 00:12:23',
            endTime: '2018-11-22 00:12:23',
            couponPrice: '19',
            subTitle: '啦啦哈',
            originalPrice: "35",
        }],
        churchFoodThree: [{
            cardId: 'wx005',
            couponType: '03',
            img: '../../images/card/food_03.png',
            couponTitle: '双人套餐',
            startTime: '2018-11-12 00:12:23',
            endTime: '2018-11-22 00:12:23',
            couponPrice: '20',
            subTitle: '啊哈哈',
            originalPrice: "66",

        }, {
            cardId: 'wx006',
            couponType: '02',
            img: '../../images/card/food_04.png',
            couponTitle: '超级巨无霸',
            startTime: '2018-11-12 00:12:23',
            endTime: '2018-11-22 00:12:23',
            couponPrice: '19',
            subTitle: '啦啦哈',
            originalPrice: "35",
        }],*/

        title: '',
        cardId:''
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        let that = this;
        var getCode = wx.getStorageSync('getCode');
        // var cardId = wx.getStorageSync('cardId')
        that.setData({
            cardId: that.data.cardId,
            title: options.title,
            getCode: getCode,
        })
        // var timer = setInterval(function(){
          // var churchFoodTwo = wx.getStorageSync('churchFoodOne')
          // console.log(that.data.churchFoodTwo, 88)
          // that.setData({ churchFood: churchFoodTwo})
            // if(that.data.cardId!=''){
            //     console.log('00')
            //     clearInterval(timer)
            //     that.setData({
            //         cardId: that.data.cardId,
            //         title: options.title,
            //         getCode: getCode,
            //     })
            // }
            
        // },1000)
    },
  getcardId(){
    var that = this
    var churchFoodOne =  app.globalData.churchFoodOne,
        cardIdList = []
    for (var i = 0; i < churchFoodOne.length ;i++){
      cardIdList.push(churchFoodOne[i].cardId)
      console.log(cardIdList)
    }
  },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        this.setData({
            churchFood: app.globalData.churchFoodOne
        })
    },
})