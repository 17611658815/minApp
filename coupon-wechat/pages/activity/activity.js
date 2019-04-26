// pages/activity/activity.js
import { postRequest, getRequest } from '../../utils/request.js';

var app = getApp();

Page({
    /**
     * 页面的初始数据
     */
    data: {
        showMask: false,
        desc: "",
        activity: {
            bg: "",
            during: "",
            name: "",
            users: []
        },
        goodsList: [],
        groupNum: "",//拼团记录编号
        item: {
            transparent: true
        },
        queryGroupNum: 1
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (query) {
        // console.log(query.groupNum)
        if (query.groupNum) {
            this.setData({
                "item.shareBack": true,
                queryGroupNum: query.groupNum
            })

        }
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        // console.log("onShow")
        this.getList(this.data.queryGroupNum);
    },

    /**
     * 分享
     */
    onShareAppMessage: function (obj) {
        if (obj.from === 'button') {  // 来自页面内转发按钮
        }
        return {
            title: this.data.activity.name,
            path: '/pages/activity/activity?groupNum=' + this.data.groupNum
        }
    },

    // 获取信息列表
    getList(groupNum) {
        getRequest("activity/group/" + groupNum).then((res) => {
            if (res.data.code == -320) {
                wx.showToast({
                    title: res.data.message,
                    icon: 'none'
                })
            } else {
                let data = res.data.data;
                let during = this.formdate(data.startTime) + " - " + this.formdate(data.entTime)
                this.setData({
                    desc: data.arule,
                    'activity.bg': data.img,
                    'activity.name': data.aname,
                    'activity.during': during,
                    'activity.users': data.user,
                    'activity.join': data.join,
                    'activity.isNew': data.isNew,
                    'activity.finish': data.finish,
                    goodsList: data.vos,
                    groupNum: data.recordNo
                })
            }

        })
    },

    // 参加拼团活动
    joinGroup(e) {

        let avatarUrl = wx.getStorageSync('userInfo').avatarUrl;

        if (!avatarUrl) {
            if (!e.detail.userInfo) {
                return;
            } else {
                app.globalData.userInfo = e.detail.userInfo
                wx.setStorageSync('userInfo', e.detail.userInfo)
                avatarUrl = e.detail.userInfo.avatarUrl
            }
        }

        if (this.data.activity.join) return;

        postRequest("activity/group/join", {
            "recordNum": this.data.groupNum,
            "img": avatarUrl
        }).then((res) => {
            console.log(res.data)
            if (!res.data.code) {
                wx.showToast({
                    title: '参团成功',
                    icon: "success"
                })
                setTimeout(() => {
                    this.getList(res.data.data.groupNum)
                }, 1000)
            }
        })
    },

    formdate(val) {
        let newVal = val.split("-");
        return newVal[1] + "." + newVal[2].split(" ")[0]
    },
    // 开启弹窗规则
    openMask() {
        this.setData({
            showMask: true
        })
    },
    // 关闭弹窗规则
    closeMask() {
        this.setData({
            showMask: false
        })
    }
})