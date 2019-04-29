//logs.js
const utils = require('../../utils/util.js')
Page({
    data: {
        logs: [],
        nvabarData: {
            showCapsule: 1,
            title: 'LOADING',
        },
    },
    onLoad: function() {
        if (utils.isiPhoneX()) {
            this.data.iphonex = utils.isiPhoneX()
        }
        this.setData({
            iphonex: this.data.iphonex
        })
        this.loadList()
    },
})