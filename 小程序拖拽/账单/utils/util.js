const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}

//获取随机颜色
function getRandomColor() {
  //return "#"+("00000"+((Math.random()*16777215)>>0).toString(16)).slice(-6); 
  //随机生成暖色调颜色
  return "#" + ('0' + ((Math.random() * 136 + 119) >> 0).toString(16)).slice(-2) + ('0' + ((Math.random() * 136 + 119) >> 0).toString(16)).slice(-2) + ('0' + ((Math.random() * 136 + 119) >> 0).toString(16)).slice(-2);
}

/*格式化数字格式
	number	必需。要格式化的数字。如果未设置其他参数，则数字会被格式化为不带小数点且以逗号（,）作为千位分隔符。
	decimals	可选。规定多少个小数。如果设置了该参数，则使用点号（.）作为小数点来格式化数字。
	decimalpoint	可选。规定用作小数点的字符串。
	separator	可选。规定用作千位分隔符的字符串。仅使用该参数的第一个字符。比如 "xxx" 仅输出 "x"。
	注释：如果设置了该参数，那么所有其他参数都是必需的。
	*/
function number_format(number) {
  number = arguments[1] != undefined ? parseFloat(number).toFixed(arguments[1]) + '' : number + '';
  var isFloat = number.indexOf('.'),//是否为浮点数
    numLength = number.length,//数字长度
    intLength = isFloat >= 0 ? isFloat : numLength,//整数部分长度
    intIndex = intLength - 1,//整数部分索引长度
    forLength = Math.ceil(intLength / 3),
    firstThousandsLength = intLength % 3,//千分位最前边的个数
    arr = [], i,
    pointStr = arguments[2] != undefined ? arguments[2] : '.';
  numArr = isFloat >= 0 ? number.split(".") : ['', ''];
  thousandsStr = arguments[3] != undefined ? arguments[3].substr(0, 1) : ',';
  for (i = 0; i < forLength; i++) {
    if (i == 0 && firstThousandsLength <= 0) {
      arr.push(number.substr(0, 3));
    } else if (i == 0 && firstThousandsLength > 0) {
      arr.push(number.substr(0, firstThousandsLength));
    } else if (firstThousandsLength > 0) {
      arr.push(number.substr((firstThousandsLength + 3 * (i - 1)), 3));
    } else {
      arr.push(number.substr(3 * i, 3));
    }
  };
  return isFloat >= 0 ? arr.join(thousandsStr) + pointStr + numArr[1] : arr.join(thousandsStr);
}

/*函数格式化日期和时间，并返回已格式化的日期字符串
	    format:必需。规定输出日期字符串的格式。可使用下列字符：
			d	月份中的第几天，有前导零的 2 位数字	01 到 31
			D	星期几，文本表示，3 个字母	Mon 到 Sun
			j	月份中的第几天，没有前导零	1 到 31
			l   星期几，完整的文本格式	Sunday 到 Saturday
			N	格式数字表示的星期中的第几天1（表示星期一）到 7（表示星期天）
			w	星期中的第几天，数字表示	0（表示星期天）到 6（表示星期六）
			z	年份中的第几天	0 到 365
			星期	---	---
			W	格式年份中的第几周，每周从星期一开始例如：42（当年的第 42 周）
			月	---	---
			F	月份，完整的文本格式，例如 January 或者 March	January 到 December
			m	数字表示的月份，有前导零	01 到 12
			M	三个字母缩写表示的月份	Jan 到 Dec
			n	数字表示的月份，没有前导零	1 到 12
			t	指定的月份有几天	28 到 31
			年	---	---
			L	是否为闰年	如果是闰年为 1，否则为 0
			Y	4 位数字完整表示的年份	例如：1999 或 2003
			y	2 位数字表示的年份	例如：99 或 03
			时间	---	---
			a	小写的上午和下午值	am 或 pm
			A	大写的上午和下午值	AM 或 PM
			g	小时，12 小时格式，没有前导零	1 到 12
			G	小时，24 小时格式，没有前导零	0 到 23
			h	小时，12 小时格式，有前导零	01 到 12
			H	小时，24 小时格式，有前导零	00 到 23
			i	有前导零的分钟数	00 到 59>
			s	秒数，有前导零	00 到 59>
		timestamp	可选。规定整数的 js 时间戳(毫秒级)。默认是当前时间。
    */
function date(format) {
  var kw = { 'd': 1, 'D': 1, 'j': 1, 'l': 1, 'N': 1, 'S': 1, 'w': 1, 'z': 1, 'W': 1, 'F': 1, 'm': 1, 'M': 1, 'n': 1, 't': 1, 'L': 1, 'Y': 1, 'y': 1, 'a': 1, 'A': 1, 'g': 1, 'G': 1, 'h': 1, 'H': 1, 'i': 1, 's': 1 },//日期关键字
    week = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],//星期
    Week = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],//星期
    month = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],//简写月份
    Month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Aguest', 'September', 'October', 'November', 'December'],//全写月份
    timestamp = arguments[1] != undefined ? arguments[1] : Date.parse(new Date()),
    result = '',//返回结果
    selfWord = '',//自定义时间日期
    both = function (num) {
      return num < 10 ? '0' + num : '' + num;
    }
  for (var i = 0; i < format.length; i++) {
    var key = format.substr(i, 1);
    if (!isNaN(key)) {//自定义数字
      result += key;
    } else if (key == '\\') {//转义符
      selfWord += key;
    } else if (kw[key] == undefined) {//非关键字
      selfWord += key;
      result += selfWord;
      selfWord = '';
    } else if (kw[key] != undefined && selfWord == '\\') {//转义关键字
      result += key;
      selfWord = '';
    } else {//关键字
      var newDate = new Date();
      newDate.setTime(timestamp);
      switch (key) {
        case 'd'://月份中的第几天
          result += both(newDate.getDate());
          break;
        case 'D'://星期几
          var w = newDate.getDay();
          result += week[w - 1];
          break;
        case 'j'://月份中的第几天
          result += newDate.getDate();
          break;
        case 'l'://星期几
          var w = newDate.getDay();
          result += Week[w - 1];
          break;
        case 'N'://星期中的第几天1-7
          result += newDate.getDay();
          break;
        case 'w'://星期中的第几天0-6
          result += newDate.getDay() - 1;
          break;
        case 'z'://年份中的第几天0-365
          var Y = newDate.getFullYear(),
            stringTime = Y + "-01-01 00:00:00",
            timestamp2 = Date.parse(new Date(stringTime));
          result += Math.floor((timestamp - timestamp2) / 1000 / 3600 / 24);
          break;
        case 'W'://年份中的第几周 1-
          var Y = newDate.getFullYear(),
            stringTime = Y + "-01-01 00:00:00",
            timestamp2 = Date.parse(new Date(stringTime));
          newDate.setTime(timestamp2);
          var fw = newDate.getDay() - 1,
            days = (timestamp - timestamp2) / 1000 / 3600 / 24,
            reject = fw == 0 ? 0 : 7 - fw;
          result += Math.ceil((days - reject) / 7);
          break;
        case 'F'://月份，完整的文本格式
          var M = newDate.getMonth();
          result += Month[M];
          break;
        case 'm'://数字表示的月份01-12
          var M = newDate.getMonth();
          result += both(M + 1);
          break;
        case 'M'://三个字母缩写表示的月份Jan-Dec
          var M = newDate.getMonth();
          result += month[M];
          break;
        case 'n'://数字表示的月份1-12
          var M = newDate.getMonth();
          result += M + 1;
          break;
        case 't'://指定的月份有几天	28-31
          var Y = newDate.getFullYear(),
            M = both(newDate.getMonth() + 2),
            stringTime = Y + "-" + M + "-01 00:00:00",
            timestamp2 = Date.parse(new Date(stringTime));
          newDate.setTime(timestamp2 - 3600 * 24 * 1000);
          result += newDate.getDate();
          break;
        case 'L'://是否为闰年是闰年为 1，否则为 0
          var Y = newDate.getFullYear(),
            M = both(newDate.getMonth() + 1),
            stringTime = Y + "-03-01 00:00:00",
            timestamp2 = Date.parse(new Date(stringTime));
          newDate.setTime(timestamp2 - 3600 * 24 * 1000);
          result += newDate.getDate() == 28 ? 0 : 1;
          break;
        case 'Y'://4 位数字完整表示的年份
          result += newDate.getFullYear();
          break;
        case 'y'://2 位数字表示的年份
          var Y = newDate.getFullYear();
          result += Y.substr(2, 2);
          break;
        case 'a'://小写的上午和下午值am 或 pm
          var Y = newDate.getFullYear(),
            M = both(newDate.getMonth() + 1),
            D = both(newDate.getDate()),
            stringTime = Y + "-" + M + "-" + D + " 12:00:00",
            timestamp2 = Date.parse(new Date(stringTime));
          result += timestamp2 > timestamp ? 'am' : 'pm';
          break;
        case 'A'://大写的上午和下午值	AM 或 PM
          var Y = newDate.getFullYear(),
            M = both(newDate.getMonth() + 1),
            D = both(newDate.getDate()),
            stringTime = Y + "-" + M + "-" + D + " 12:00:00",
            timestamp2 = Date.parse(new Date(stringTime));
          result += timestamp2 > timestamp ? 'AM' : 'PM';
          break;
        case 'g'://12 小时格式1-12
          var H = newDate.getHours();
          result += H > 12 ? H - 12 : H;
          break;
        case 'G'://24小时格式0-23
          result += newDate.getHours();
          break;
        case 'h'://12小时格式01-12
          var H = newDate.getHours();
          result += both(H > 12 ? H - 12 : H);
          break;
        case 'H'://24 小时格式，00-23
          result += both(newDate.getHours());
          break;
        case 'i'://分钟数00-59
          result += both(newDate.getMinutes());
          break;
        case 's'://秒数00-59
          result += both(newDate.getSeconds());
          break;
      }
    }
  }
  return result;
}

/*
	*	string	必需。规定被检查的字符串。
	*	substring	必需。规定要搜索的字符串。
	*	start	可选。规定在字符串中何处开始搜索。
	*	length	可选。规定搜索的长度。
    */
function substr_count(string, substring) {
  var str = string;
  if (arguments[2] != undefined) {
    str = str.substr(arguments[2]);
  };
  if (arguments[3] != undefined) {
    str = str.substr(0, arguments[2]);
  };
  var res = str.match(eval('/' + substring + '/g'));
  return res && res[0] !== '' ? res.length : 0;
}

module.exports = {
  formatTime: formatTime,
  getRandomColor: getRandomColor,
  date: date,
  substr_count: substr_count
}
