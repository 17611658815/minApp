// components/list/list.js
const app = getApp() 
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        // 接受列表数据
        listContent:{
            type: Array,
            value:"",
            observer: function (newVal, oldVal, changedPath) {
                console.log(newVal, oldVal,13)
            }
        },
        getCode:{
            type:String,
            value: "",
            observer: function (newVal, oldVal, changedPath) {
                console.log(newVal, oldVal, 14)
                this.data.code = newVal;
            }
        },
        cardId: {
            type: String,
            value: "",
            observer: function (newVal, oldVal, changedPath) {
                console.log(newVal, oldVal, 15)
                this.setData({
                    cardId: newVal
                })
            }
        },
        status: {
            type: Boolean,
            value: "",
            observer: function (newVal, oldVal, changedPath) {
                console.log(newVal, oldVal, 16)
                this.setData({
                    cardId: newVal
                })
            }
        },
    },
    ready(){
        // this.memberCardLists()
    },
    /**
     * 页面的初始数据
     */
    data: {
        listContent: [],
        code: '',
        cardId: '',
    },

    methods: {
        // 领取优惠券到卡包
        cardLists(cardIds){
         
            console.log(cardIds,999999)
            let cardData = {
                "sign": "d4f107647e7da6794648983f985507ca",
                "crmBrand": "crmBoss",
                "secret": "OPHAReZTvK8h",
                "storeNo": "10",
                "clientOrderNo": "abbcc555",
                "deviceNo": "1005154",
                "operator": "operator11asd",
                "source": "01",
                "transCode": "A001",
                "version": "v1.0",
                "cardIds": cardIds
            };

            wx.request({
                url: 'http://10.20.12.193:8080/crm/open/api/wxcoupon/getAddCardList',
                method: 'POST',
                data: cardData,
                success:function(res){
                    console.log(res,49)
                    wx.addCard({
                        cardList: res.data.data,
                        success(res) {
                            if(res.cardList.length > 0){
                                if(res.cardList[0].isSuccess){
                                    wx.removeStorageSync("getCode");
                                    wx.removeStorageSync("cardId");
                                    var getCardId = res.cardList[0].cardId;
                                    var getCode = res.cardList[0].code;

                                    wx.setStorageSync("getCode", getCode);
                                    wx.setStorageSync("cardId", getCardId);
                                    wx.showToast({
                                        title: '已领取至卡包',
                                        duration: 100,
                                    }) 
                                }
                            }
                        }
                    })
                },

                fail:function(res){
                    console.log(res,54)
                }
            })
        },

        // 点击卡券列表中的某条数据跳转到微信卡包
        couponCollectionPage(e) {
            let cardId = e.currentTarget.dataset.cardid;
          let index = e.currentTarget.dataset.index;
          let listContent = this.data.listContent
            console.log(e,29)
          console.log(this.data.listContent, 121)
          this.setData({
            ['listContent.[' + index +'].status']: true
          })
          console.log(['listContent.[' + index + '].status'])



          // wx.setStorageSync('churchFoodOne', listContent)
          console.log(this.data.listContent)
            //["pr63fvhrUCqomJ6WvRVEFKk5KcPw", "pr63fvpLe6Z1XNo8-OA-uMryrIHw"]
            this.cardLists([cardId]); // 领取券
            // this.memberCardLists([cardId]); //领取卡
            
        },

        // 领取后查看卡券
        receiveCardListPage(e){
          
            const { cardid } = e.currentTarget.dataset
            console.log(cardid, this.data.code,158)
            console.log(app)
            let cardData = {
                "sign": "d4f107647e7da6794648983f985507ca",
                "crmBrand": "crmBoss",
                "secret": "OPHAReZTvK8h",
                "storeNo": "10",
                "clientOrderNo": "abbcc555",
                "deviceNo": "1005154",
                "operator": "operator11asd",
                "source": "01",
                "transCode": "A001",
                "version": "v1.0",
                "encryptCode": this.data.code
            };

            wx.request({
                url: 'http://10.20.12.193:8080/crm/open/api/wxcoupon/decryptCardCode',
                method: 'POST',
                data: cardData,
                success: function (res) {
                    wx.openCard({
                        cardList: [
                            {
                                cardId: cardid,
                                code: res.data.data.code
                            }
                        ],
                        success: function(res){
                            console.log(res,129)
                        },
                    })
                }
            })
        },
    }
})