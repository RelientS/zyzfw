//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    lang: null, //不可以在这里直接取本地储存的值
    identity:null,
    ph:'',
    login:'',
    signin:'',
    user_input:''
  },
  //事件处理函数
  onShow:function(){
    var _this = this;
    _this.setData({ 
      lang: wx.getStorageSync('user_lang'), 
      identity: wx.getStorageSync('user_identity')
      }); //在这里读取本地储存
      this.setData({ 
        ph: _this.data.lang.userLogin,
        login: _this.data.lang.login,
        signin: _this.data.lang.signin
        });
  },
  login: function() {
    var _this = this, input = _this.data.user_input;
    if(_this.data.user_input==''){
      wx.showToast({
        title: '手机号不能为空',
        icon: 'none'
      })
    } else if (input.length != 11 || !/^[0-9]+$/.test(input)){
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
    }else{
      wx.request({
        url: 'http://148.70.238.220:8080/WechatApp/Login',
        data: "role=" + _this.data.identity + "&user_phone=" + input,
        //'role=pat/vol & user_phone=手机号'
        method: 'POST',
        header: {
          "Content-Type": "application/x-www-form-urlencoded" //post请求头设置
        },
        success: (res) => {
          if (res.statusCode == 200) {
            var a = res.data;
            if (a.code == 500) {
              wx.showToast({
                title: '请先进行注册',
                icon: 'none'
              })
            } else if (a.code == 200) {
              wx.showToast({
                title: '登录成功',
                icon: 'success'
              })
              console.log(res.data.user); //身份证+名字+性别+手机+地区 应该存到本地
              wx.setStorageSync('user_id', res.data.user[0]);
              wx.setStorageSync('user_name', res.data.user[1]);
              wx.setStorageSync('user_gender', res.data.user[2]);
              wx.setStorageSync('user_phone', res.data.user[3]);
              wx.setStorageSync('user_area', res.data.user[4]);
              setTimeout(
                () => {
                  wx.navigateTo({
                    url: '../volunteer/index',
                  })
                }, 2000
              )
            }
          } else if (res.statusCode != 200) {
            wx.showToast({
              title: '网络连接失败，请稍后再试',
              icon: 'loading'
            })
          }

        },
        fail: (e) => {
          console.log(e)
        }
      })
    }
  },
  signin:()=>{
    wx.navigateTo({
      url: '../signin/index'
    })
  },
  userInput:function(e){
    this.setData({
      user_input: e.detail.value
    })
  }
})
