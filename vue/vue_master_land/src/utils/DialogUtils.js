import {MessageBox} from 'mint-ui';

export default class DialogUtils {

    static showDialog(message = "确定执行此操作?", title = " ", showCancelButton = false) {
        MessageBox({
            title: title,
            message: "<p style='color:#333333;'>" + message + "</p>",
            showCancelButton: showCancelButton
        });
    }

}