/*
 * 
 * 工具类
 */

/**
 * 时间日期格式化
 */
import { postRequest, getRequest } from 'request.js';

const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

/**
 * 数字格式化
 */
const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

const toast= tip => {
  wx.showToast({
    title: tip,
    icon: 'none',
    duration: 2000
  })
}

const loadMore = (_this,curPage)=>{
  if (_this.data.isEnd) {
    return
  }
  wx.showLoading({
    title: "加载中...",
    mask: true,
    success() {
      setTimeout(function () {
        let mypage = ++_this.data.curPage;
        _this.setData({
          curPage: mypage
        })
        _this.getList(_this.data.curPage);
      }, 800)
    }
  })
}

/*
  * 6个参数，
  *第一个：传this
  *第二个：urlParame-接口名(如：'http://{{host}}/{{brand}}/minapp/cshop/1/8'、urlParame→cshop)
  *第三个：page当前页
  *第四个：接口返回数据列表的数组名，直接从接口文档看得到
  *第五个：渲染的数据列表
  *第六个：size不传默认6
  */
const loadList = (_this, urlParame, page, parame, lists, size=6)=>{
  getRequest( urlParame + "/" +page +"/"+ size).then((res) => {
    if (res.data.succeed) {
      let curData = res.data.data[parame];
      if (curData.length < 1) {
        return
      } else if (curData.length <size) {
        _this.setData({
          isEnd: true
        })
      }
      
      let newLists = _this.data[lists].concat(curData);
      _this.setData({
        lists: newLists
      })
      wx.hideLoading()
    } else {
      wx.showToast({
        title: res.data.code + "：" + res.data.message,
        icon: 'none',
        duration: 2000
      })
    }
  })
} 

export {
  formatTime,
  formatNumber,
  toast,
  loadMore,
  loadList
}
