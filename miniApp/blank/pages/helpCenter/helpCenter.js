Page({
  data: {
    textArr: [
      {
      title: '关于产品',
      textArr: [{ name: '商品使用什么快递发货？', checked: false }, { name: '二手机器质量如何', checked: false }, { name: '使用过程中出现轻微划痕怎么办', checked: false }]
      },
      {
      title: '关于租赁',
      textArr: [{ name: '商品使用什么快递发货？', checked: false }, { name: '二手机器质量如何', checked: false }, { name: '使用过程中出现轻微划痕怎么办', checked: false }]
      }
    
    ]
  },
  onLoad() { },
  checked(e) {
    let index = e.currentTarget.dataset.index;
    let idx = e.currentTarget.dataset.idx;
    this.data.textArr.forEach((item, i) => {
      item.textArr.forEach((v, k) => {
        if(index == i &&  idx == k && v.checked == false){
          v.checked = true
          console.log(1)
        } else {
          v.checked = false
          console.log(2)
        }
      })
    })
    this.setData({
      textArr: this.data.textArr
    })
  },
});
