//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        tapTime: '', // 防止两次点击操作间隔太快
        sizeCurrentTab:0,
        colorCurrentTab:0,
        goodsSpecs: [{
                name: '尺码',
                columns: [{
                    spec_value: 'xs'
                }, {
                    spec_value: 's'
                }, {
                    spec_value: 'm'
                }]
            },
            {
                name: '颜色',
                columns: [{
                    spec_value: '黄'
                }, {
                    spec_value: '绿'
                }, {
                    spec_value: '蓝'
                }]
            }
        ]

    },
    onLoad(){
        console.log(this.data.goodsSpecs[0].name)
        let goodsSpecs = this.data.goodsSpecs;
        goodsSpecs.forEach((val)=>{
            val.columns.forEach((e)=>{
                e.flag = false
            })
        })
        this.setData({
            goodsSpecs
        })
    },
    onclick() {
        var nowTime = new Date();
        if (nowTime - this.data.tapTime < 1000) {
            console.log('阻断')
            return;
        }
        console.log('执行')
        this.setData({
            tapTime: nowTime
        });
    },
    onchange(e){
        let that = this,
            index1 = e.currentTarget.dataset.index,
            index2 = e.currentTarget.dataset.key,
            goodsSpecs = that.data.goodsSpecs;
        console.log(e)
        goodsSpecs[index1].columns.forEach((val,index)=>{
            val.flag = false
            if (index2 == index){
                val.flag = true

                // this.data.spec_value_id[res.index] = item.spec_value_id
            }
        })
        that.setData({
            goodsSpecs: goodsSpecs
        })
    }
})