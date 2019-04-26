//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        rpx: '',
        updateBackground: 'https://image.liidon.com/Fnz5i0vTKBklnavdgqzzRcjREhzQ',//背景图片
        avatar_url: '',//头像海报
        sign: '好咖啡要和朋友一起品尝，好机会也要和朋友一起分享。',
        name: 'amy',
        position: '前端',
        company_name: '礼品圈@焱桓信息科技（上海）有限公司',
        qrcode: '../../images/qrcode.png'
    },
    onLoad() {
        this.setData({
            rpx: wx.getSystemInfoSync().windowWidth / 750,
        })
    },
    bindSave() {//保存图片
        const ctx = wx.createCanvasContext('canvas'),
            w = this.rpx(600),
            h = this.rpx(1000);
        let txt = this.data.sign,
            start = 0,//换行索引
            line = 0,//行数
            content = w - this.rpx(30) * 2;//单行宽度
        this.uploadImg().then(res => {
            console.log(res.url)
            ctx.drawImage(res.url, 0, 0, w, res.height * w / res.width)
            ctx.restore()
            ctx.setFontSize(this.rpx(30))
            for (let i = 0; i < txt.length; i++) {
                if (ctx.measureText(txt.substring(start, i)).width > content) {
                    ctx.fillText(txt.substring(start, i - 1), this.rpx(30), this.rpx(480 + line * 40))
                    ctx.restore()
                    line++;
                    start = i;
                    ctx.restore()
                }
                if (i == txt.length - 1) {//不换行情况
                    var temp = line ? start - 1 : start
                    ctx.fillText(txt.substring(temp, txt.length), this.rpx(30), this.rpx(500 + line * 40))
                    ctx.restore()
                }
            }

            ctx.save()
            ctx.beginPath()
            ctx.arc(this.rpx(90), h * 0.30 + this.rpx(80), this.rpx(50), 0, 2 * Math.PI)
            ctx.clip()
            var toux = this.data.avatar_url ? this.data.avatar_url : '../../images/tou.png';
            ctx.drawImage(toux, this.rpx(80) / 2, (h * 0.30 + this.rpx(80)) - this.rpx(50), this.rpx(100), this.rpx(100))
            ctx.restore()

            const nickNameWidth = ctx.measureText(this.data.name).width;
            const positionWidth = ctx.measureText(this.data.position).width;
            if (this.data.name && !this.data.position) {
                ctx.setFillStyle('#E4393C')
                ctx.setFontSize(this.rpx(26))
                ctx.fillText(this.data.name, (w - nickNameWidth) / 2, h * 0.30 + this.rpx(280))
                ctx.restore()
            }

            if (this.data.name && this.data.position) {
                ctx.setFillStyle('#E4393C')
                ctx.setFontSize(this.rpx(28))
                ctx.fillText(this.data.name, ((w - nickNameWidth - positionWidth) / 2) - (nickNameWidth), h * 0.30 + this.rpx(280))
                ctx.restore()
            }

            if (this.data.position && this.data.position != 'null') {//职位
                ctx.setFillStyle('#566a8b')
                ctx.setFontSize(this.rpx(28))
                ctx.fillText(this.data.position, ((w - positionWidth) / 2), h * 0.30 + this.rpx(280))
                ctx.restore()
            }

            var company_nameWidth = ctx.measureText(this.data.company_name).width;
            if (this.data.company_name) {
                ctx.setFillStyle('#666666')
                ctx.setFontSize(this.rpx(23))
                ctx.fillText(this.data.company_name, (w - company_nameWidth) / 2, h * 0.30 + this.rpx(330))
                ctx.restore()
            }

            this.drawRoundedRect(ctx, this.rpx(20), (h * 0.55) + this.rpx(250) + this.rpx(20), parseInt(w - this.rpx(40)), this.rpx(130), 8, true, false)

            ctx.drawImage(this.data.qrcode, parseInt(w - this.rpx(40)) - this.rpx(80), ((h * 0.55) + this.rpx(250) + this.rpx(20)) + this.rpx(25), this.rpx(80), this.rpx(80))
            this.drawRoundedRect(ctx, this.rpx(40), (h * 0.55) + this.rpx(265) + this.rpx(35), this.rpx(70), this.rpx(70), 8, true, false, '../../images/logo.png')
            ctx.setFontSize(this.rpx(32))
            ctx.setFillStyle('#E4393C')
            ctx.fillText('礼品圈', this.rpx(140), (h * 0.55) + this.rpx(330))
            ctx.restore()
            ctx.setFontSize(this.rpx(22))
            ctx.setFillStyle('#c2c2c2')
            ctx.fillText('礼品行业社交圈', this.rpx(140), (h * 0.55) + this.rpx(370))
            var that = this;
            ctx.draw(false, setTimeout(() => {
                wx.canvasToTempFilePath({
                    canvasId: 'canvas',
                    x: 0,
                    y: 0,
                    fileType: 'jpg',
                    success(res) {
                        wx.previewImage({
                            current: res.tempFilePath, // 当前显示图片的http链接
                            urls: [res.tempFilePath] // 需要预览的图片http链接列表
                        })
                        // wx.saveImageToPhotosAlbum({
                        //   filePath: res.tempFilePath,
                        //   success(res) {
                        //     //金币
                        //     wx.showToast({
                        //       icon: 'none',
                        //       title: '保存成功',
                        //       duration: 2000
                        //     })

                        //     that.setData({
                        //       canvas_show: false
                        //     })
                        //     console.log(res)
                        //   }
                        // })
                    }
                }, this)
            }, 500)
            )
        })
    },
    //海报
    drawRoundedRect(ctx, x, y, width, height, r, fill, stroke, img) {//圆形
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + width, y, x + width, y + r, r);
        ctx.arcTo(x + width, y + height, x + width - r, y + height, r);
        ctx.arcTo(x, y + height, x, y + height - r, r);
        ctx.arcTo(x, y, x + r, y, r);
        if (fill) {
            //ctx.fill();
            ctx.setFillStyle('#dedede');
            ctx.fill();
            if (img) {
                ctx.drawImage(img, x, y, width, height)
            }
        }
        if (stroke) { ctx.stroke(); }
        ctx.restore();
    },
    rpx(px) {
        return px * this.data.rpx
    },
    uploadImg(src = this.data.updateBackground) {//下载图片
        let that = this;
        return new Promise((resolve, reject) => {
            wx.getImageInfo({
                src,
                success(res) {
                    resolve({
                        url: res.path,
                        width: that.rpx(res.width),
                        height: that.rpx(res.height)
                    })
                }, fail() {
                    reject('下载图片失败，请稍后重试')
                }
            })
        })
    },
})
