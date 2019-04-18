//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    lang: null, //不可以在这里直接取本地储存的值
    identity:null,
    ph:'',
    login:'',
    signin:''
  },
  //事件处理函数
  onShow:function(){
    var _this = this;
    _this.setData({ 
      lang: wx.getStorageSync('user_lang'), 
      identity: wx.getStorageSync('user_identity')
      }); //在这里读取本地储存
    if(_this.data.identity == "vol"){
      this.setData({ 
        ph: _this.data.lang.userVol,
        login: _this.data.lang.login,
        signin: _this.data.lang.signin
        });
    } 
    else if (_this.data.identity == "pat"){
      _this.setData({
        ph: _this.data.lang.userPat,
        login: _this.data.lang.login,
        signin: _this.data.lang.signin 
        })
    }
  },
  login: function() {
    wx.request({
      url: 'http://148.70.238.220:8080/WechatApp/Register',
      data: "role=volunteer&user_id=352202199801111111&user_name=张三&gender=0&user_phone=13010101010", //'role=patient&user_area=地区&user_name=张三&gender=性别,0是男,1是女&user_phone=手机号'
      method:'POST',
      success:()=>{
        console.log("success")
      },
      fail:(e)=>{
        console.log(e)
      }
    })
  },
  signin:()=>{
    wx.navigateTo({
      url: '../signin/index'
    })
  }
})
