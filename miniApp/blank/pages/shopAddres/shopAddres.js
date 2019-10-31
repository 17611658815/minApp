Page({
  data: {
    falge:false
  },
  onLoad() {},
  // 勾选手机保障服务
  selectCheckBox() {
    this.setData({
      falge: !this.data.falge
    })
  },
  changeInfo(){
    my.navigateTo({
      url:'/pages/addres/addres'
    });
  },
    //  去添加信息
  goIndex() {
     my.navigateTo({
      url: '/pages/createOther/createOther'
    })
  }
});
