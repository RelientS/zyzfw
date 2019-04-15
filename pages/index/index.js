//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
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
  lang_switch:()=>{
    //切换语言
  }
})
