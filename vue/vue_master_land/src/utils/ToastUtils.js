import {Toast} from 'mint-ui';

export default class ToastUtils {

    static toastA;

    // 'top','bottom', 'middle'
    static showToast(text, position = 'bottom', duration = 1500) {
        this.toastA = Toast({
            message: text,
            position: position,
            duration: duration
        });
    }

    static closeToast() {
        this.toastA.close();
    }

}