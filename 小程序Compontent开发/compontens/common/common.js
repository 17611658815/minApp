// compontens/common/common.js

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    msg: {
      type: Array
    },
    fn: {
      type: Function
    }
  },
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持\
    addGlobalClass: true,
  },
  /**
   * 组件的初始数据
   */
  data: {
    from: 'component'
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onTap(e) {
      // console.log(e)
      const myEventDetail = e.currentTarget.dataset.msg // detail对象，提供给事件监听函数
      const myEventOption = e.currentTarget.dataset.index // 触发事件的选项

      var detail = {
        value: myEventDetail,
        index: myEventOption
      };
      /*
          
        onTap:方法名;
        detail:数据
      
      */
      this.triggerEvent('onTap', detail)
    }
  },
  behaviors: [require('behavior.js')],
  ready() {
    console.log(this.data.from) // 此处会发现输出 behavior 而不是 component
  }
})