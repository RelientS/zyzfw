//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    identity:'zh',
    lang:app.globalData.lang
  },
  onLoad:  function(){
    app.globalData.lang = app.globalData.lang_zh;
    this.setData({ lang: app.globalData.lang });  //首次打开采用中文语言集
    wx.setStorageSync('user_lang', app.globalData.lang_zh);
  },
  bindUserVol:  ()=> {
    wx.setStorageSync('user_identity', 'vol'); //从首页进入的用户身份储存在本地
    wx.navigateTo({
      url: '../login/index' 
    })
  },
  bindUserPat:  ()=> {
    wx.setStorageSync('user_identity', 'pat'); 
    wx.navigateTo({
      url: '../login/index'
    })
  },
  langSwitch:function(){
    //切换语言
    var _this = this;
    if (_this.data.identity == 'zy'){
      wx.setStorageSync('user_lang', app.globalData.lang_zh);
      _this.setData({ identity:'zh' })
    }else{
      wx.setStorageSync('user_lang', app.globalData.lang_zy);
      _this.setData({ identity: 'zy' })
    }
    _this.setData({ lang: wx.getStorageSync('user_lang') }); //一定要用setData方法才会触发重新渲染
  }
})
