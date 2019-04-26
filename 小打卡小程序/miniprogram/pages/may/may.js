// // miniprogram/pages/may/may.js
// Page({

//   /**
//    * 页面的初始数据
//    */
//   data: {

//   },
//   // 点击加_压缩
//   takePhoto: function () {
//     var that = this;
//     let imgViewList = that.data.imgViewList; //这个是用来承载页面循环展示图片的
//     //拍照、从相册选择上传
//     wx.chooseImage({
//       count: 4,    //这个是上传的最大数量，默认为9
//       sizeType: ['compressed'],    //这个可以理解为上传的图片质量类型（官方给的），虽然没什么卵用，要不然还要我们自己写压缩做什么
//       sourceType: ['album', 'camera'],    //这个是图片来源，相册或者相机
//       success: function (res) {
//         console.log(res)
//         var tempFilePaths = res.tempFilePaths    //这个是选择后返回的图片列表
//         that.getCanvasImg(0, 0, tempFilePaths);    //进行压缩
//       }
//     });
//   },
//   //压缩并获取图片，这里用了递归的方法来解决canvas的draw方法延时的问题
//   getCanvasImg: function (index, failNum, tempFilePaths) {
//     var that = this;
//     if (index < tempFilePaths.length) {
//       const ctx = wx.createCanvasContext('attendCanvasId');
//       ctx.drawImage(tempFilePaths[index], 0, 0, 300, 150);
//       ctx.draw(true, function () {
//         index = index + 1;//上传成功的数量，上传成功则加1
//         wx.canvasToTempFilePath({
//           canvasId: 'attendCanvasId',
//           success: function success(res) {
//             console.log(res)
//             that.uploadCanvasImg(res.tempFilePath);
//             that.getCanvasImg(index, failNum, tempFilePaths);
//           }, fail: function (e) {
//             failNum += 1;//失败数量，可以用来提示用户
//             that.getCanvasImg(inedx, failNum, tempFilePaths);
//           }
//         });
//       });
//     }
//   },
//     //上传图片
//   uploadCanvasImg: function (canvasImg) {
//     var that = this;
//     let imgViewList = that.data.imgViewList;
//     var tempImg = canvasImg;
//     wx.uploadFile({
//       url: 'https://mfkapi.39yst.com/app/api/record_app.php?type=uppic&uid=' +1,//文件服务器的地址
//       filePath: tempImg,
//       formData: {
//         paramPath: "gift"
//       },
//       name: 'file',
//       success: function (res) {
//         var json2map = JSON.parse(res.data);
//         console.log(json2map)
//         // imgViewList.push(app.d.imageUrlFix + json2map[0].fileUrl);
//         that.setData({
//           imgViewList: imgViewList,
//         })
//       }
//     })
//   },

// })


Page({

  /**
  * 页面的初始数据
  */
  data: {
    imgUrl:'',
    canvasWidth:"",
    canvasHeight:''
  },

  /**
  * 生命周期函数--监听页面加载
  */
  onLoad: function (options) {
    imgUrl:''
  },
  aa() {
    var _this = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['compressed'],
      success: function (photo) {
        _this.setData({
          imgUrl:photo.tempFilePaths[0]
        })
        wx.getImageInfo({
          src: photo.tempFilePaths[0],
          success: function (res) {
            var ctx = wx.createCanvasContext('photo_canvas');

            var ratio = 2;
            var canvasWidth = res.width
            var canvasHeight = res.height;
            // 保证宽高均在200以内
            while (canvasWidth > 200 || canvasHeight > 200) {
              //比例取整
              canvasWidth = Math.trunc(res.width / ratio)
              canvasHeight = Math.trunc(res.height / ratio)
              ratio++;
            }
            _this.setData({
              canvasWidth: canvasWidth,
              canvasHeight: canvasHeight
            })//设置canvas尺寸
            ctx.drawImage(photo.tempFilePaths[0], 0, 0, canvasWidth, canvasHeight)
            ctx.draw()
            //下载canvas图片
            setTimeout(function () {
              wx.canvasToTempFilePath({
                canvasId: 'photo_canvas',
                success: function (res) {
                  console.log(res)
                  _this.setData({
                    imgUrl: res.tempFilePath
                  })
                  _this.upImgs(res.tempFilePath)
                  console.log(res.tempFilePath)
                },
                fail: function (error) {
                  console.log(error)
                }
              })
            }, 100)
          },
          fail: function (error) {
            console.log(error)
          }
        })

      },
      error: function (res) {
        console.log(res);
      }
    })
  },
  getImg(e){
   console.log(e)
  },
  upImgs: function (imgurl) {
    var that = this;
    wx.uploadFile({
      url: 'https://mfkapi.39yst.com/app/api/record_app.php?type=uppic&uid=' + 450,
      filePath: imgurl,
      name: 'file',
      header: {
        'content-type': 'multipart/form-data'
      }, // 设置请求的 header
      formData: null, // HTTP 请求中其他额外的 form data
      success: function (res) {
        var data = JSON.parse(res.data)
        console.log(data)
      },
      fail: function (res) {
      },
    })
  },
  checkMessage: function (message) {
    var that = this;
    if (message.length == 0) {
      that.alert("您还没有输入内容哦！");
      that.setData({
        submitTime: 1,
      });
      return false;
    }
    return true;
  },
  bb() {
    wx.chooseVideo({
      compressed: true,
      success(e) {
        console.log(e)
      }
    })
  },

})

