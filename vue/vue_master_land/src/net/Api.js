import {postRequest} from "@/net/HttpRequest";
import Url from "@/net/Url";

/**
 * 接口请求
 */
export const Api = {
    /**
     * 登录接口
     * @param paramObj
     * @returns {Promise}
     */
    login: function (paramObj) {
        return postRequest(Url.loginUrl, paramObj);
    }

}