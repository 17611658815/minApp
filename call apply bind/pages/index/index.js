// //index.js
// //获取应用实例
// const app = getApp()

// Page({
//     data: {
//         flag: false
//     },
//     onLoad() {
//         var cat = {
//                 name: "喵喵",
//                 eatFish: function(param1, param2) {
//                     console.log("吃鱼");
//                     console.log("this的指向=>");
//                     console.log(this);
//                     console.log(param1, param2);
//                 }
//             };
//         var dog = {
//             name: "汪汪",
//             eatBone: function(param1, param2) {
//                 console.log("啃骨头");
//                 console.log("this的指向=>");
//                 console.log(this);
//                 console.log(param1, param2)
//             }
//         }
//         // call apply 改变this指向 
//         cat.eatFish.call(dog, "旺财-13岁", "call");
//         cat.eatFish.apply(dog, ["旺财-13岁", "apply"]);
//         // bind方法 改变this指向
//         var eatFishFun = cat.eatFish.bind(dog, "旺财-13岁", "bind"); //返回的是方法

//         eatFishFun();
//     }
// })

Page({
    data: {
        flag: false
    },
    onLoad() {
        let strArray = ['1','2','3','4']  //我们要的效果是转成 [1,2,3,4]
        let numArray = strArray.map(Number);
        console.log('strArray=>', strArray)
        console.log('numArray=>', numArray)
        // while (true) {
        //     console.log('Hello, world');
        // }
    }

})

