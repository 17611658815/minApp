//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    record_txt: '开始录音开始录音开始录音开始录开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音开始录音',
    motto: 'Hello World',
    arr:[1,2,3,4,2,3,4,5,6,4,5,7,8]
  },
  onLoad: function () {
   /*
     ES6 去重
   */
    let arr = new Set(this.data.arr)
    console.log(arr,'去重')  //[1,2,3,4,5,6,7,8]
    /*
      ES6 字符串遍历
      includes()：返回布尔值，表示是否找到了参数字符串。
      startsWith()：返回布尔值，表示参数字符串是否在原字符串的头部。
      endsWith()：返回布尔值，表示参数字符串是否在原字符串的尾部。
      repeat方法返回一个新字符串，表示将原字符串重复n次
      padStart()用于头部补全，padEnd()用于尾部补全。
      padStart()和padEnd()一共接受两个参数，第一个参数是字符串补全生效的最大长度，第二个参数是用来补全的字符串
    */
    for(let i = 0 ; i < this.data.motto.length;i++){
      // console.log(this.data.motto[i])
    }
    console.log(this.data.motto.includes('Hello')) //检索字符串 true
    console.log(this.data.motto.startsWith('H'))  //true
    console.log(this.data.motto.endsWith('d'))    //true
    console.log(this.data.motto.repeat(2))    //Hello WorldHello World
    /*
      ES6 取整
    */
    console.log(Number.parseInt('12.34'),'取整') // 12
    console.log(Number.parseFloat('123.45#'),'取整')// 123.45
    /*
      ES6 判断整数
    */ 
    console.log(Number.isInteger(25), '判断整数') // true
    console.log(Number.isInteger(25.1), '判断整数')// false
    /*
      ES6 Math 取整 转化 Number
    */
    console.log(Math.trunc(4.1),'取整') // 4
    console.log(Math.trunc(-4.1),'-取整') // -4
    console.log(Math.trunc('123.456'),'字符串转化取整') // 123
    /*
      ES6 判断是不是正数
      
      参数为正数，返回+1；
      参数为负数，返回-1；
      参数为 0，返回0；
      参数为-0，返回-0;
      其他值，返回NaN。

    */
    console.log(Math.sign(-5),'-1 负数')
    console.log(Math.sign(5), '1 正数')

    /*
      Object.assign 对象合并
    */ 
    const  target = { a: 1 };
    const source1 = { b: 2 };
    const source2 = { c: 3 };
    console.log(Object.assign(target, source1, source2)); // {a:1, b:2, c:3}
  
    /*
       ES6 对象克隆   
    */
    let origin = {
       a:'111',
       b:'2222'
    }
    console.log(this.clone(origin))
    const promise = new Promise(function (resolve, reject) {
      let a = true

      if (a) {
        console.log('成功')
      } else {
        console.log('失败')
      }
    }); 
  },
  // 对象克隆
  clone(origin) {
    let originProto = Object.getPrototypeOf(origin);
    return Object.assign(Object.create(originProto), origin);
  } 
  /*
    
  */
  
})
