if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX.getAppContext
  ? self.AFAppX.getAppContext().AFAppX
  : self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;
self.requirePlugin = AFAppX.requirePlugin;
        


function success() {
require('../../app');
require('../../page/common/components/block-list/block-list?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/list/list-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/search-bar/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/badge/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/tabs/index?hash=b998354db5b64281090d8969355b2b3db41cda49');
require('../../node_modules/mini-antui/es/tabs/tab-content/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/card/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/vtabs/index?hash=b998354db5b64281090d8969355b2b3db41cda49');
require('../../node_modules/mini-antui/es/vtabs/vtab-content/index?hash=a11fdcdff8ea970c65f185a8731cafe48f67047c');
require('../../node_modules/mini-antui/es/grid/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/steps/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/footer/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/popover/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/popover/popover-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/modal/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/popup/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/filter/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/filter/filter-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/page-result/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/message/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/tips/tips-dialog/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/tips/tips-plain/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/notice/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/swipe-action/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/amount-input/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/calendar/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/stepper/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/input-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/picker-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/am-checkbox/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/am-icon/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/flex/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../node_modules/mini-antui/es/flex/flex-item/index?hash=05d2a9730dd6009bf9446182f9c985f40f8c0f43');
require('../../page/tabBar/component/index?hash=29962edf8fc534845c0b8fe4c01bc2b108d05b7c');
require('../../page/tabBar/API/index?hash=29962edf8fc534845c0b8fe4c01bc2b108d05b7c');
require('../../page/common/search/search?hash=36422fba2bca8383579c05039cf9230634285f6a');
require('../../page/API/events/events?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/share/share?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/action-sheet/action-sheet?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/alert/alert?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/animation/animation?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/canvas/canvas?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/card-pack/card-pack?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/choose-city/choose-city?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/choose-location/choose-location?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/confirm/confirm?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/contact/contact?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/date-picker/date-picker?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/option-menu/option-menu?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/download-file/download-file?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/file/file?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr/ocr?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr-idcard-face/ocr-idcard-face?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr-business-card/ocr-business-card?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr-vehicle/ocr-vehicle?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr-driver-license/ocr-driver-license?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr-business-license/ocr-business-license?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr-bank-card/ocr-bank-card?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr-train-ticket/ocr-train-ticket?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr-passport/ocr-passport?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr-general/ocr-general?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr-vehicle-plate/ocr-vehicle-plate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/ocr-vin/ocr-vin?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-auth-code/get-auth-code?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-location/get-location?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-network-type/get-network-type?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-system-info/get-system-info?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-server-time/get-server-time?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/get-user-info/get-user-info?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-image-info/get-image-info?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/image/image?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/keyboard/keyboard?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/loading/loading?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/make-phone-call/make-phone-call?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/memory-warning/memory-warning?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/multi-level-select/multi-level-select?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/options-select/options-select?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/navigation-bar-loading/navigation-bar-loading?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/navigator/navigator?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/open-location/open-location?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/pull-down-refresh/pull-down-refresh?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/pay-sign-center/pay-sign-center?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/request/request?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/request-payment/request-payment?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/scan-code/scan-code?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/set-navigation-bar/set-navigation-bar?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/show-auth-guide/show-auth-guide?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/storage/storage?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/toast/toast?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/upload-file/upload-file?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/vibrate/vibrate?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/watch-shake/watch-shake?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/clipboard/clipboard?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/bluetooth/bluetooth?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/rsa/rsa?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/page-scroll-to/page-scroll-to?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/websocket/websocket?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/zm-credit-borrow/zm-credit-borrow?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/create-selector-query/create-selector-query?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/sdk-version/sdk-version?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/user-capture-screen/user-capture-screen?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/screen/screen?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/compress-image/compress-image?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/report-analytics/report-analytics?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/text-risk-identification/text-risk-identification?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/API/create-inner-audiocontext/create-inner-audiocontext?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/get-background-audio-manager/get-background-audio-manager?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/API/generate-image-from-code/generate-image-from-code?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/button/button?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/canvas/canvas?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/checkbox/checkbox?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/form/form?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/icon/icon?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/image/image?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/input/input?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/label/label?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/map/map?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/navigator/navigate?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/navigator/redirect?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/navigator/reLaunch?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/navigator/navigator?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/picker/picker?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/picker-view/picker-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/progress/progress?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/radio/radio?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/scroll-view/scroll-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/slider/slider?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/swiper/swiper?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/switch/switch?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/text/text?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/textarea/textarea?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/view/view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/lifestyle/lifestyle?hash=5158fa18297db3fbaac119609b168d20fcdf1eea');
require('../../page/component/contact-button/contact-button?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/webview/webview?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/cover-view/cover-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/movable-view/movable-view?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/list/list?hash=3e2e5e2d473d03821badb5452a72c12422f436f6');
require('../../page/component/tabs/tabs?hash=1d800f769ac3605e27dea9ba505bf4f320e2fd4e');
require('../../page/component/card/card?hash=881d5863354839860ca51a86452c7ed695b70632');
require('../../page/component/vtabs/vtabs?hash=1a48c74a955d006039f2acb59435db37577f2ddc');
require('../../page/component/grid/grid?hash=b449417de28a88425372e8a40318501ce3757174');
require('../../page/component/steps/steps?hash=064a1400ed166b5e02670dfb160456d8b5d027e9');
require('../../page/component/footer/footer?hash=fd8a10d006fe66375ca6a6122898a84862c32f5d');
require('../../page/component/favorite/favorite?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/popover/popover?hash=19e097880d99b667bb1fa901eb0e15f9d3a5ddb1');
require('../../page/component/modal/modal?hash=dc097e95bee5cd7c6aad4989963d6d8251d4abfd');
require('../../page/component/popup/popup?hash=01525438685c87440e7641caaa629d71119f5949');
require('../../page/component/filter/filter?hash=6c28ef62e82812bc17c59748bb05ad700983c605');
require('../../page/component/page-result/page-result?hash=10432093b8c21c939cca480ff51a1af30f7e1ec0');
require('../../page/component/message/message?hash=25916fd7e161397f5d39fda47c31ecb2c60aa80b');
require('../../page/component/tips/tips?hash=c0f8eaffbbe8c9a873972846c2cfa1374742edc3');
require('../../page/component/notice/notice?hash=6afc9e3acf608f8175486e0e0dded1a9953383cb');
require('../../page/component/swipe-action/swipe-action?hash=d92d58de0a9a77b5c03c7a16d522462149a7f373');
require('../../page/component/amount-input/amount-input?hash=a507a6d2c201d4078e8fe795b411e22ed3a34e8f');
require('../../page/component/badge/badge?hash=92992846f2a18ba5f1f5aca643554d2a27f772d7');
require('../../page/component/search-bar/search-bar?hash=c8bb201eecc8e16d00b6ee8469ccde5158d099ef');
require('../../page/component/calendar/calendar?hash=c9ae612a5f03cfe3c623fcf6a3541eba3319ef7c');
require('../../page/component/stepper/stepper?hash=2bde19dc91a4c39d3738a48f7e54f5b8bf6774a6');
require('../../page/component/input-item/input-item?hash=c4a114c7f15a571913603457f1378642aa463cec');
require('../../page/component/am-checkbox/am-checkbox?hash=5a6ca6b78363aee66f894eb9e4e0b014c85e76c8');
require('../../page/component/video/video?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
require('../../page/component/am-icon/am-icon?hash=5f7ac69c6e1e0961cf7988f4a3ff29b1e04e0ec6');
require('../../page/component/flex/flex?hash=aa59e73cb514600bea86b0bf3f022818049e9730');
require('../../page/component/rich-text/rich-text?hash=32d7d2807ed4e666ef03b4b3fe8c38ecf2e34e68');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}