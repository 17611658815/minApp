
// const myaudio = wx.createInnerAudioContext();
const bgMusic = wx.getBackgroundAudioManager()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    picMsg:{},
    list: [],
    windHeight:'',
    isPlay:false,
    isRotate:false,//音乐旋转logo
    off_on: false,//加载开关
    isShow: false,//分享提示
    title:"",//动态标题
    isHide: 'none',//加载中
    scrollTop:0,//距顶部距离
    animationData: {}
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    console.log(bgMusic)
    wx.getSystemInfo({
      success: function(res) {
        console.log(res)
        that.setData({
          windHeight: res.screenHeight
        })
      },
    })
    that.setData({
      id: options.id,
    })
    that.getPicInfo()
 
    
  },
  // 开始播放
  listenerButtonPlay: function (src) {
    var that = this
    console.log(src)
    bgMusic.src = src;
    bgMusic.onTimeUpdate(() => {
      console.log(bgMusic.currentTime)
    })
    bgMusic.onEnded(() => {
      console.log("音乐播放结束");
    })
    bgMusic.play();
    that.setData({
      isPlay: false,
      isRotate:true
    })
  },
  // 监听播放
 
  onPageScroll: function (e) {
    var that = this
    var scrollTop = e.scrollTop
    if (scrollTop > 1500){
      that.setData({
        isShow:true
      })
    } else if (scrollTop < 1500){
      that.setData({
        isShow: false
      })
    }
  },
  getPicInfo() {
    var that = this
    wx.request({
      url: 'https://qqgr.866691.com/1.json?id=' + that.data.id,
      header: {
        'content-type': 'application/json'
      },
      method: 'GET',
      success: function (res) {
      
        res.data.data.content = res.data.data.content.replace(/width\s*:\s*[0-9]+px/g,'width:100%');
        res.data.data.content = res.data.data.content.replace(/<([\/]?)(center)((:?\s*)(:?[^>]*)(:?\s*))>/g, '<$1div$3>');//替换center标签
        res.data.data.content = res.data.data.content.replace(/\<img/gi, '<img class="rich-img" ');//正则给img标签增加class
        res.data.data.content = res.data.data.content.replace(/\<p/gi, '<P class="rich-p" ');//正则给p标签增加class
        console.log(res.data.data.content)
        // 判断有没有音频字段
        if(res.data.data.mp3!=""){
          that.listenerButtonPlay(res.data.data.mp3)
        }
        wx.setNavigationBarTitle({
          title: res.data.data.title
        })    
       that.setData({
         picMsg:res.data.data,
         list: res.data.list,
         title: res.data.data.short_title
       })
        
      }
    })
  },
 
  onUnload(){
   var that = this
    that.listenerButtonStop()//停止播放
    console.log("离开")
  },
  recommendation(e){
    let that = this;
    console.log(e)
    let id = e.currentTarget.dataset.id;
    var title = e.currentTarget.dataset.title;
    wx.redirectTo({
      url: 'content?id=' + id + '&title=' + title,
    })
  },
  //暂停
  audioPause: function () {
    var that = this
    bgMusic.pause(); //停止播放
    console.log('暂停')
    that.setData({
      isPlay: true,
      isRotate:false
    })
  },
  //停止播放
  listenerButtonStop: function () {
    bgMusic.stop()
  },
  goindex(){
    var that = this
    that.listenerButtonStop()
    that.setData({
      picMsg: '',
      
    })
    wx.switchTab({
      url: '../index/index',
    })
  },
  onShareAppMessage: function () {
    var that = this;
    return {
      title: that.data.picMsg.short_title,
      path: '/pages/content/content?id=' + that.data.id+'&title='+that.data.title,
    }
  }
})