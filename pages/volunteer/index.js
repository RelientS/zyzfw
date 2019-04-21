//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
  },
  onShow: function () {
    var _this = this;
    _this.setData({
      lang: wx.getStorageSync('user_lang'),
      identity: wx.getStorageSync('user_identity'),
      name: wx.getStorageSync('user_name'),
      phone: wx.getStorageSync('user_phone'),      
      gender: wx.getStorageSync('user_gender'),      
      area: wx.getStorageSync('user_area'),      
      user_id: wx.getStorageSync('user_id'),      

    }); //在这里读取本地储存
    _this.setData({
      login: _this.data.lang.login,
      signin: _this.data.lang.signin
    });
  },
  info:function(){
    console.log(this.data)
  },
  apply:function(){
    console.log(123)
  },
  status:function(){
    console.log(123)
  },
  complete:function(){
    console.log(123)
  }
})
