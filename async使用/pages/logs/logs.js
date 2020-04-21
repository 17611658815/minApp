Page({
  data: {
    obj:{
        name:"张三",
        age:"26"
    }
  },
  onLoad: function () {
    this.setData({
        [`obj.name`]:'小李' 
    })
      console.log(this.data.obj)
  }
})
