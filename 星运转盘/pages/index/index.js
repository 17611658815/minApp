//index.js
//获取应用实例
const app = getApp()

Page({

    /**
     * 页面的初始数据
     */
    data: {
        service: [{
            text: "惊喜转盘",
            pic: "../../images/card/homepage_icon_01.png",
            path: 'turnTable/turnTable',
        },
        {
            text: "礼赠亲友",
            pic: "../../images/card/homepage_icon_02.png",
            path: 'invitation/invitation',
        },
        {
            text: "拼团更省",
            pic: "../../images/card/homepage_icon_03.png",
            path: 'activity/activity',
        }
        ],
        showFreshRec: [], // 限时尝鲜
        showMealRec: [], // 超值套餐
        showPreferentialRec: [] // 时段优惠
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        // this.freshBoxData();
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
        this.freshBoxData();
    },
    
    /**
     * 限时尝鲜
     */

    freshBoxData() {
        let showFreshRec = [];
        let showMealRec = [];
        let showPreferentialRec = [];
        let freshData = [
            {
                cardId: 'wx001',
                couponType: '01',
                img: '../../images/card/food_01.png',
                name: '圆筒冰激凌',
                price: '7',
                oldPrice: '14.0',
            }, {
                cardId: 'wx002',
                couponType: '02',
                img: '../../images/card/food_04.png',
                price: '8',
                title: '满30-12',
                oldPrice: '12.0',
                name: '奶油爆米花',
            },
            {
                cardId: 'wx003',
                couponType: '03',
                img: '../../images/card/food_03.png',
                name: '超级巨无霸',
                price: '20',
                oldPrice: '32.0'
            },
            {
                cardId: 'wx004',
                couponType: '01',
                img: '../../images/card/food_04.png',
                name: '奶油爆米花',
                price: '12',
                oldPrice: '18.0'
            },
            {
                cardId: 'wx005',
                couponType: '02',
                img: '../../images/card/food_02.png',
                name: '超级汉堡宝',
                price: '15',
                oldPrice: '30.0',
                title: '满20-10'
            }
        ];

        let mealData = [
            {
                cardId: 'wx006',
                couponType: '01',
                img: '../../images/card/food_04.png',
                name: '奶油爆米花',
                price: '6',
                oldPrice: '12.0'

            }, {
                cardId: 'wx007',
                couponType: '02',
                img: '../../images/card/food_02.png',
                price: '8',
                title: '满30-12',
                oldPrice: '12.0',
                name: '超级汉堡宝',
            },
            {
                cardId: 'wx008',
                couponType: '03',
                img: '../../images/card/food_03.png',
                name: '超级巨无霸',
                price: '28',
                oldPrice: '52.0'
            }
        ];

        let preferentialData = [
            {
                cardId: 'wx009',
                couponType: '01',
                img: '../../images/card/food_01.png',
                name: '圆筒冰激凌',
                price: '5',
                oldPrice: '12.0'

            }, {
                cardId: 'wx0010',
                couponType: '02',
                img: '../../images/card/food_02.png',
                price: '26',
                title: '满30-12',
                oldPrice: '65.0',
                name: '超级汉堡宝',
            },
            {
                cardId: 'wx0011',
                couponType: '03',
                img: '../../images/card/food_03.png',
                name: '超级巨无霸',
                price: '18',
                oldPrice: '36.0'
            }
        ];

        for (let i = 0; i < 2; i++) {
            let ranNumOne = Math.floor(Math.random() * (freshData.length));
            let ranNumTwo = Math.floor(Math.random() * (mealData.length));
            let ranNumThree = Math.floor(Math.random() * (preferentialData.length));
            showFreshRec.push(freshData[ranNumOne]);
            showMealRec.push(mealData[ranNumTwo]);
            showPreferentialRec.push(preferentialData[ranNumThree]);
            // 获取数据内的指定元素
            freshData.splice(ranNumOne, 1);
            mealData.splice(ranNumTwo, 1);
            preferentialData.splice(ranNumThree, 1);
        }

        this.setData({
            showFreshRec: showFreshRec,
            showMealRec: showMealRec,
            showPreferentialRec: showPreferentialRec
        })
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () { },

    servicePage(e) {
        wx.navigateTo({
            url: '../../pages/' + e.currentTarget.dataset.path,
        })
    },

    lookMore(e) {
        var title = e.currentTarget.dataset.title;
        wx.navigateTo({
            url: '/pages/receiveCoupon/receiveCoupon?title=' + title,
        })
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        wx.redirectTo({
            url: '/pages/index/index',
        })
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh() {
        var that = this;
        setTimeout(() => {
            this.freshBoxData();
            that.setData({
                showFreshRec: this.data.showFreshRec,
                showMealRec: this.data.showMealRec,
                showPreferentialRec: this.data.showPreferentialRec,
            })

            wx.hideNavigationBarLoading() //完成停止加载
            wx.stopPullDownRefresh() //停止下拉刷新
        }, 300)
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    }

})