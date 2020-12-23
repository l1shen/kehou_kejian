var __reflect=this&&this.__reflect||function(e,t,n){e.__class__=t,n?n.push(t):n=[t],e.__types__=e.__types__?n.concat(e.__types__):n},__extends=this&&this.__extends||function(e,t){function n(){this.constructor=e}for(var o in t)t.hasOwnProperty(o)&&(e[o]=t[o]);n.prototype=t.prototype,e.prototype=new n},__awaiter=this&&this.__awaiter||function(e,t,n,o){return new(n||(n=Promise))(function(i,r){function a(e){try{u(o.next(e))}catch(t){r(t)}}function s(e){try{u(o["throw"](e))}catch(t){r(t)}}function u(e){e.done?i(e.value):new n(function(t){t(e.value)}).then(a,s)}u((o=o.apply(e,t||[])).next())})},__generator=this&&this.__generator||function(e,t){function n(e){return function(t){return o([e,t])}}function o(n){if(i)throw new TypeError("Generator is already executing.");for(;u;)try{if(i=1,r&&(a=r[2&n[0]?"return":n[0]?"throw":"next"])&&!(a=a.call(r,n[1])).done)return a;switch(r=0,a&&(n=[0,a.value]),n[0]){case 0:case 1:a=n;break;case 4:return u.label++,{value:n[1],done:!1};case 5:u.label++,r=n[1],n=[0];continue;case 7:n=u.ops.pop(),u.trys.pop();continue;default:if(a=u.trys,!(a=a.length>0&&a[a.length-1])&&(6===n[0]||2===n[0])){u=0;continue}if(3===n[0]&&(!a||n[1]>a[0]&&n[1]<a[3])){u.label=n[1];break}if(6===n[0]&&u.label<a[1]){u.label=a[1],a=n;break}if(a&&u.label<a[2]){u.label=a[2],u.ops.push(n);break}a[2]&&u.ops.pop(),u.trys.pop();continue}n=t.call(e,u)}catch(o){n=[6,o],r=0}finally{i=a=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}var i,r,a,s,u={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return s={next:n(0),"throw":n(1),"return":n(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s},Main=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this);var t=new AssetAdapter;egret.registerImplementation("eui.IAssetAdapter",t),egret.registerImplementation("eui.IThemeAdapter",new ThemeAdapter),this.runGame()["catch"](function(e){console.log(e)})},t.prototype.checkorientation=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n=this;return __generator(this,function(o){switch(o.label){case 0:return[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return o.sent(),[4,RES.loadGroup("fast")];case 2:return o.sent(),e=!1,t=new eui.Component,t.skinName='\n        <e:Skin class="tips" width="1024" height="576" xmlns:e="http://ns.egret.com/eui">\n            <e:Group left="0" top="0" right="0" bottom="0">\n                <e:Rect left="0" top="0" right="0" bottom="0"/>\n                <e:Image source="index_png" horizontalCenter="0" verticalCenter="0"/>\n                <e:Group width="300" height="150" horizontalCenter="0" verticalCenter="0" visible="false">\n                    <e:Rect left="0" top="0" right="0" bottom="0" fillColor="0xffffff" strokeColor="0x1ab24d" strokeWeight="2" ellipseWidth="20"/>\n                    <e:Label text="温馨提示" textColor="0x000000" fontFamily="pfzt" horizontalCenter="0" top="15" size="24"/>\n                    <e:Label text="横屏体验更佳哦~" x="28" y="60" textColor="0x000000" size="20" fontFamily="pfzt"/>\n                    <e:Group width="80" height="30" horizontalCenter="0" bottom="20">\n                        <e:Rect left="0" top="0" right="0" bottom="0" fillColor="0x0097ff" ellipseWidth="10"/>\n                        <e:Label text="确定" x="21" size="20" verticalCenter="0" fontFamily="pfzt"/>\n                    </e:Group>\n                </e:Group>\n            </e:Group>\n        </e:Skin>',e=!0,t.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){t.parent.removeChild(t),n.runGame()["catch"](function(e){console.log(e)})},this),this.addChild(t),[2]}})})},t.prototype.runGame=function(){return __awaiter(this,void 0,void 0,function(){var e,t,n,o=this;return __generator(this,function(i){switch(i.label){case 0:return console.log("runGame"),[4,this.loadResource()];case 1:return i.sent(),this.createGameScene(),e=new SdkManager,[4,e.initSdk()];case 2:return t=i.sent(),n=t.attributes().pageIndex,this.mainView.setPageIndex(n||1),t.addMagixEventListener("nextPage",function(e){var t=e.pageIndex;o.mainView.setPageIndex(t)}),t.addMagixEventListener("prevPage",function(e){var t=e.pageIndex;o.mainView.setPageIndex(t)}),t.addMagixEventListener("resetPage",function(){o.mainView.resetPageHandler()}),[2]}})})},t.prototype.loadResource=function(){return __awaiter(this,void 0,void 0,function(){var e,t;return __generator(this,function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),[4,RES.loadConfig("resource/default.res.json","resource/")];case 1:return n.sent(),[4,RES.loadGroup("preload")];case 2:return n.sent(),[4,this.loadTheme()];case 3:return n.sent(),e=new LoadingView,this.stage.addChild(e),[4,RES.loadGroup("load",0,e)];case 4:return n.sent(),this.stage.removeChild(e),this.mainView=new MainView,this.addChild(this.mainView),[3,6];case 5:return t=n.sent(),console.error(t),[3,6];case 6:return[2]}})})},t.prototype.loadTheme=function(){var e=this;return new Promise(function(t,n){var o=new eui.Theme("resource/default.thm.json",e.stage);o.addEventListener(eui.UIEvent.COMPLETE,function(){t(!0)},e)})},t.prototype.createGameScene=function(){document.body.style.backgroundImage="";var e={type:"courseWare",body:{load:!0}};window.parent.postMessage(JSON.stringify(e),"*")},t}(eui.UILayer);__reflect(Main.prototype,"Main");var PageBaseView=function(e){function t(t){var n=e.call(this)||this;return n.pageIdx=0,n.pageIdx=t,n.skinName="resource/eui_skins/kejian/pageView/pageView"+n.pageIdx+".exml",n}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),this.switchView()},t.prototype.switchView=function(){switch(this.pageIdx){case 1:this.pageView1();break;case 2:this.pageView3();break;case 4:this.pageView6()}},t.prototype.pageView6=function(){var e=this,t="PageView6_ButtonTap";this.zhenbang.visible=!1;for(var n=0;3>n;n++)this["btn"+n].idx=n,this["btn"+n].addEventListener(egret.TouchEvent.TOUCH_TAP,function(n){Tools.playSound("resource/assets/kejian/sound/touch.mp3");var i=n.target;o({eventIdx:i.idx}),e.sentEvent(t,i.idx)},this);var o=function(t){var n=t.eventIdx;2==n?(e["btn"+n].touchEnabled=!1,e.zhenbang.visible=!0,egret.Tween.get(e.zhenbang).wait(300).to({alpha:100},500).wait(2e3).to({alpha:0},500),Tools.playSound("resource/assets/kejian/sound/chenggong.mp3",function(){})):Tools.playSound("resource/assets/kejian/sound/cuowu.mp3")};window.netlessIframeSDK.addMagixEventListener(t,function(e){var t=e.id;Tools.playSound("resource/assets/kejian/sound/touch.mp3"),0==t||1==t||2==t?o({eventIdx:t}):Tools.playSound("resource/assets/kejian/sound/cuowu.mp3")})},t.prototype.pageView3=function(){var e=this,t=0;this.zhenbang.visible=!1;for(var n="PageView3_ButtonTap",o=0;10>o;o++)this["btn"+o].idx=o,this["btn"+o].addEventListener(egret.TouchEvent.TOUCH_TAP,function(t){Tools.playSound("resource/assets/kejian/sound/touch.mp3");var o=t.target;e.sentEvent(n,o.idx),0==o.idx||1==o.idx||2==o.idx?i({eventIdx:o.idx}):Tools.playSound("resource/assets/kejian/sound/cuowu.mp3")},this);var i=function(n){var o=n.eventIdx;t++,e["btn"+o].touchEnabled=!1,e["btn"+o+"Select"].visible=!0,Tools.playSound("resource/assets/kejian/sound/zhengque.mp3",function(){}),t>=3&&(Tools.playSound("resource/assets/kejian/sound/chenggong.mp3"),e.zhenbang.visible=!0,egret.Tween.get(e.zhenbang).wait(300).to({alpha:100},500).wait(2e3).to({alpha:0},500))};window.netlessIframeSDK.addMagixEventListener(n,function(e){var t=e.id;Tools.playSound("resource/assets/kejian/sound/touch.mp3"),0==t||1==t||2==t?i({eventIdx:t}):Tools.playSound("resource/assets/kejian/sound/cuowu.mp3")})},t.prototype.pageView1=function(){var e=Tools.playVideo("resource/assets/kejian/video/page_0.mp4");this.videoGroup.addChild(e)},t.prototype.pageView2=function(){var e=this,t=0,n=0;Tools.playSound("resource/assets/kejian/sound/kehouxiti1.mp3");for(var o=0;10>o;o++)this["btn"+o].idx=o,this["btn"+o].addEventListener(egret.TouchEvent.TOUCH_TAP,function(o){Tools.playSound("resource/assets/kejian/sound/touch.mp3");var i=o.target;0==t?0==i.idx?(t++,i.touchEnabled=!1,e["btn"+i.idx+"Select"].visible=!0,Tools.playSound("resource/assets/kejian/sound/zhengque.mp3",function(){Tools.playSound("resource/assets/kejian/sound/kehouxiti2.mp3")})):Tools.playSound("resource/assets/kejian/sound/cuowu.mp3"):2==i.idx||3==i.idx?(n++,i.touchEnabled=!1,e["btn"+i.idx+"Select"].visible=!0,Tools.playSound("resource/assets/kejian/sound/zhengque.mp3"),2==n&&(egret.Tween.get(e.gongxi).wait(300).to({alpha:1},500).wait(2e3).to({alpha:0},500),Tools.playSound("resource/assets/kejian/sound/chenggong.mp3"))):Tools.playSound("resource/assets/kejian/sound/cuowu.mp3")},this)},t.prototype.sentEvent=function(e,t){var n=SdkManager.getSDK();n.dispatchMagixEvent(e,{id:t})},t}(eui.Component);__reflect(PageBaseView.prototype,"PageBaseView");var AssetAdapter=function(){function e(){}return e.prototype.getAsset=function(e,t,n){function o(o){t.call(n,o,e)}if(RES.hasRes(e)){var i=RES.getRes(e);i?o(i):RES.getResAsync(e,o,this)}else RES.getResByUrl(e,o,this,RES.ResourceItem.TYPE_IMAGE)},e}();__reflect(AssetAdapter.prototype,"AssetAdapter",["eui.IAssetAdapter"]);var EventCenter=function(e){function t(){var n=e.call(this)||this;if(t.instance)throw new Error("EventCenter为单例模式，请使用 EventCenter.getInstance()获取实例！");return n}return __extends(t,e),t.getInstance=function(){return null==t.instance&&(t.instance=new t),t.instance},t.prototype.sendMessage=function(e,t){var n=new egret.Event(e);n.data=t,this.dispatchEvent(n)},t.instance=null,t}(egret.EventDispatcher);__reflect(EventCenter.prototype,"EventCenter");var LoadingView=function(e){function t(){var t=e.call(this)||this;return t.skinName='\n            <e:Skin class="LoadingViewSkin" width="1024" height="576" xmlns:e="http://ns.egret.com/eui" xmlns:w="http://ns.egret.com/wing">\n    <e:Group left="0" top="0" right="0" bottom="0">\n			<e:Image left="0" top="0" right="0" bottom="0" source="launcher_png"/>\n			<e:Group id="aniGroup" horizontalCenter="0" top="150"/>\n			<e:Image source="title_png" horizontalCenter="13.8" bottom="74" visible="false"/>\n			<e:Group y="379" horizontalCenter="0.5">\n				<e:Label id="progress" text="0%" textColor="0x000000" bold="true" fontFamily="pfzt" verticalCenter="0" horizontalCenter="0" size="40"/>\n			</e:Group>\n			<e:Label text="Loading…" y="434.02" textColor="0x000000" fontFamily="pfzt" horizontalCenter="6" alpha="0.6"/>\n    </e:Group>\n</e:Skin>\n        ',t}return __extends(t,e),t.prototype.createChildren=function(){e.prototype.createChildren.call(this),this.addAni()},t.prototype.addAni=function(){var e=RES.getRes("icon_json"),t=RES.getRes("icon_png"),n=new egret.MovieClipDataFactory(e,t),o=new egret.MovieClip(n.generateMovieClipData("icon"));this.aniGroup.addChild(o),o.gotoAndPlay(1),o.addEventListener(egret.Event.COMPLETE,function(e){o.gotoAndPlay(1)},this),o.anchorOffsetX=o.width/2,o.anchorOffsetY=o.height/2,o.x=-100},t.prototype.onProgress=function(e,t){this.progress.text=Math.ceil(e/t*100)+"%",e==t&&(this.progress.text="100%")},t}(eui.Component);__reflect(LoadingView.prototype,"LoadingView",["RES.PromiseTaskReporter"]);var MainView=function(e){function t(t){void 0===t&&(t=1);var n=e.call(this)||this;return n.pageIndex=1,n.pageTotal=6,n.pageIndex=t,n.skinName="resource/eui_skins/kejian/pageView/mainView.exml",n}return __extends(t,e),t.prototype.setPageIndex=function(e){this.pageIndex=e,this.switchTypeView()},t.prototype.resetPageHandler=function(){this.switchTypeView(),Tools.playSound("resource/assets/kejian/sound/touch.mp3")},t.prototype.createChildren=function(){var t=this;if(e.prototype.createChildren.call(this),this.eventMonitor(),this.pageNumber.text=this.pageIndex,/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent)){var n=new eui.Component;n.skinName='\n            <e:Skin class="tips" width="1024" height="576" xmlns:e="http://ns.egret.com/eui">\n                <e:Group left="0" top="0" right="0" bottom="0">\n                    <e:Rect left="0" top="0" right="0" bottom="0"/>\n                    <e:Image source="index_png" horizontalCenter="0" verticalCenter="0"/>\n                    <e:Group width="300" height="150" horizontalCenter="0" verticalCenter="0" visible="false">\n                        <e:Rect left="0" top="0" right="0" bottom="0" fillColor="0xffffff" strokeColor="0x1ab24d" strokeWeight="2" ellipseWidth="20"/>\n                        <e:Label text="温馨提示" textColor="0x000000" fontFamily="pfzt" horizontalCenter="0" top="15" size="24"/>\n                        <e:Label text="横屏体验更佳哦~" x="28" y="60" textColor="0x000000" size="20" fontFamily="pfzt"/>\n                        <e:Group width="80" height="30" horizontalCenter="0" bottom="20">\n                            <e:Rect left="0" top="0" right="0" bottom="0" fillColor="0x0097ff" ellipseWidth="10"/>\n                            <e:Label text="确定" x="21" size="20" verticalCenter="0" fontFamily="pfzt"/>\n                        </e:Group>\n                    </e:Group>\n                </e:Group>\n            </e:Skin>',n.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){n.parent.removeChild(n),t.switchTypeView()},this),this.addChild(n)}else this.switchTypeView()},t.prototype.switchTypeView=function(){switch(this.pageNumber.text=this.pageIndex,window.stopVideoAudio(),this.pageIndex){case 1:this.playVideo("resource/assets/kejian/video/page_0.mp4",this.videoPlayEndCallFun);break;case 2:this.playVideo("resource/assets/kejian/video/page_1.mp4",this.videoPlayEndCallFun);break;case 3:this.playVideo("resource/assets/kejian/video/page_2.mp4",this.videoPlayEndCallFun);break;case 4:this.playVideo("resource/assets/kejian/video/page_3.mp4",this.videoPlayEndCallFun);break;case 5:this.playVideo("resource/assets/kejian/video/page_4.mp4",this.videoPlayEndCallFun);break;case 6:this.playVideo("resource/assets/kejian/video/page_5.mp4",this.videoPlayEndCallFun)}},t.prototype.eventMonitor=function(){var e=this;EventCenter.getInstance().addEventListener("VIDEO_CAN_PLAY",this.viewReset,this),this.fastPage.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.pageIndex--,e.pageIndex<1&&(e.pageIndex=e.pageTotal),e.switchTypeView(),Tools.playSound("resource/assets/kejian/sound/touch.mp3"),e.changePage("prevPage",e.pageIndex)},this),this.lastPage.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.pageIndex++,e.pageIndex>e.pageTotal&&(e.pageIndex=1),e.switchTypeView(),Tools.playSound("resource/assets/kejian/sound/touch.mp3"),e.changePage("nextPage",e.pageIndex)},this),this.resetPage.addEventListener(egret.TouchEvent.TOUCH_TAP,function(){e.resetPageHandler()},this)},t.prototype.playVideo=function(e,t){void 0===e&&(e=null),void 0===t&&(t=null),window.playVideo(e,t,this)},t.prototype.viewReset=function(){this.viewGroup.removeChildren()},t.prototype.videoPlayEndCallFun=function(e){void 0===e&&(e=null),2==e.pageIndex?e.enterView():4==e.pageIndex&&e.enterView()},t.prototype.enterView=function(){var e=new PageBaseView(this.pageIndex);this.viewGroup.addChild(e)},t.prototype.changePage=function(e,t){var n=SdkManager.getSDK();n.setAttributes({pageIndex:t}),n.dispatchMagixEvent(e,{pageIndex:t})},t}(eui.Component);__reflect(MainView.prototype,"MainView");var DebugPlatform=function(){function e(){}return e.prototype.getUserInfo=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2,{nickName:"username"}]})})},e.prototype.login=function(){return __awaiter(this,void 0,void 0,function(){return __generator(this,function(e){return[2]})})},e}();__reflect(DebugPlatform.prototype,"DebugPlatform",["Platform"]),window.platform||(window.platform=new DebugPlatform);var SdkManager=function(){function e(){}return e.prototype.initSdk=function(){return __awaiter(this,void 0,void 0,function(){var t,n,o;return __generator(this,function(i){switch(i.label){case 0:t=window.NetlessIframeSDK,i.label=1;case 1:return i.trys.push([1,3,,4]),[4,t.createNetlessIframeSDK("http://localhost:8000")];case 2:return n=i.sent(),e.sdk=n,console.log("NetlessIframeSDK create success"),[2,n];case 3:return o=i.sent(),console.log("NetlessIframeSDK create faild",o),[3,4];case 4:return[2]}})})},e.getSDK=function(){return e.sdk},e.sdk=null,e}();__reflect(SdkManager.prototype,"SdkManager");var ThemeAdapter=function(){function e(){}return e.prototype.getTheme=function(e,t,n,o){function i(e){t.call(o,e)}function r(t){t.resItem.url==e&&(RES.removeEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),n.call(o))}var a=this;if("undefined"!=typeof generateEUI)egret.callLater(function(){t.call(o,generateEUI)},this);else if("undefined"!=typeof generateEUI2)RES.getResByUrl("resource/gameEui.json",function(e,n){window.JSONParseClass.setData(e),egret.callLater(function(){t.call(o,generateEUI2)},a)},this,RES.ResourceItem.TYPE_JSON);else if("undefined"!=typeof generateJSON)if(e.indexOf(".exml")>-1){var s=e.split("/");s.pop();var u=s.join("/")+"_EUI.json";generateJSON.paths[e]?egret.callLater(function(){t.call(o,generateJSON.paths[e])},this):RES.getResByUrl(u,function(n){window.JSONParseClass.setData(n),egret.callLater(function(){t.call(o,generateJSON.paths[e])},a)},this,RES.ResourceItem.TYPE_JSON)}else egret.callLater(function(){t.call(o,generateJSON)},this);else RES.addEventListener(RES.ResourceEvent.ITEM_LOAD_ERROR,r,null),RES.getResByUrl(e,i,this,RES.ResourceItem.TYPE_TEXT)},e}();__reflect(ThemeAdapter.prototype,"ThemeAdapter",["eui.IThemeAdapter"]);var Tools=function(){function e(){}return e.playSound=function(e,t,n){void 0===e&&(e=""),void 0===t&&(t=null),void 0===n&&(n=null),window.playAudio(e,t,n)},e.playVideo=function(e,t,n){var o=this;return void 0===e&&(e=""),void 0===t&&(t=null),void 0===n&&(n=null),t&&t.bind(n),this.video=new egret.Video,this.video.addEventListener(egret.Event.COMPLETE,function(){o.video.play(0,!1)},this),this.video.addEventListener(egret.Event.ENDED,function(){t&&t()},this),this.video.load(e),this.video.fullscreen=!1,this.video.touchEnabled=!1,this.video},e.soundList=[],e}();__reflect(Tools.prototype,"Tools");