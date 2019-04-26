//index.js
//获取应用实例
const utils = require('../../utils/util.js')
const app = getApp()
Page({
    data: {
        page: 1,
        // list: [{ id: 1, name: '张三' }, { id: 2,name: '李四'}],
        //滚动部分变量
        act_addList: [],
        orientationList: [],
        toView: ''

    },
    delitem(e) {
        let id = e.currentTarget.dataset.id,
            list = this.data.list;
        list.forEach((val, index, array) => {
            console.log(val)
            if (id == val.id) {
                list.splice(index, 1)
            }
        })
        this.setData({
            list: list
        })
    },
    onLoad: function () {
        var arr = [1, 2, 3, 4, 5, 6, 7, 8]
        arr.map(function (res, i, a) {
            console.log(res, i, a)
        })
        var createTime = new Date();
        var createDate = utils.formatTime(new Date);
        utils.Log(createDate)
        this.loadList()
    },
    //初始化数据
    loadList() {
        let param = new Object()
        let act_addList = this.data.act_addList,
            orientationList = this.data.orientationList
        param.organid = 14
        utils.showLonding('加载中', true)
        app.net.$Api.getdiseaselistList(param).then((res) => {
            console.log(res)
            for (let i in res.data.data) {
                //这里要处理一下数据
                act_addList.push({
                    region: i,
                    keys: res.data.data[i],
                })
            }
            this.setData({
                act_addList: act_addList,
            }, () => {
                utils.hideLonding();
            })
            console.log(this.data.act_addList)
        })

    },
    //锚链接点击事件
    scrollToViewFn: function (e) {
        let id = e.target.dataset.id;
        this.setData({
            toView: 'toView' + id, //toViewG
        });
        console.log(this.data.toView)
    },
})