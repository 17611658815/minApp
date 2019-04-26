/*
 * 
 * 项目配置
 */

//当前环境 DEV:开发环境 PRD:线上环境
const HOST = "DEV"
//请求地址
const HOST_URI = {
  DEV: "http://webapp.hoperun.com:7070/xc/crmBOSS/minapp/",
//   PRD: "https://ssl.yoodex.net/xc/crmBOSS/minapp/"
    PRD: "http://10.20.12.237:8080/crmBOSS/minapp/",
}
//图片资源路径
const IMGURL = "../../images/";

//自定义底部tabBar列表
const TABBAR = [{
  id: 0,
  name: '首页',
  iconPath: IMGURL + 'tab-home.png',
  selectedIconPath: IMGURL + 'tab-home-on.png',
  url: ''
},
{
  id: 1,
  name: '',
  iconPath: IMGURL + 'home/btn.png',
  selectedIconPath: IMGURL + 'home/btn.png',
  url: ''
},
{
  id: 2,
  name: '我的',
  iconPath: IMGURL + 'tab-user.png',
  selectedIconPath: IMGURL + 'tab-user-on.png',
  url: ''
},
]

//根据当前环境获取请求域名
function getUrl() {
  return HOST_URI[HOST]
}

export {
  IMGURL,
  TABBAR,
  getUrl
}