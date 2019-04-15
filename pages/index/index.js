//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    lang:app.globalData.zh_lang
  },
  onLoad:  () =>{
  },
  bindUserVol:  ()=> {
    wx.navigateTo({
      url: '../volunteer/index'
    })
  },
  bindUserPat:  ()=> {
    wx.navigateTo({
      url: '../patient/index'
    })
  },
  langSwitch:function(){
    //切换语言
    var _this = this;
    if (_this.data.lang == app.globalData.zh_lang){
      _this.setData({ lang: app.globalData.zy_lang }) //一定要用setData方法才会触发重新渲染
    }else{
      _this.setData({ lang: app.globalData.zh_lang })  
    }

  }
})
