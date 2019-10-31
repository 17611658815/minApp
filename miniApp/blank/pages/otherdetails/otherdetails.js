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
});
