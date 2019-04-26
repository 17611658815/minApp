import {Indicator} from 'mint-ui';

export default class LoadingUtils {

    // 'snake','fading-circle','double-bounce','triple-bounce'
    static showLoading(text = "", spinnerType = 'fading-circle') {
        Indicator.open({
            text: text,
            spinnerType: spinnerType
        });
    }

    static hideLoading() {
        // setTimeout(() => {
            Indicator.close();
        // }, 1500);
    }
}