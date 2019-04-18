//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: ['男', '女'],
    region: ['西藏自治区', '', ''],
    lang: null, //不可以在这里直接取本地储存的值
    identity:null,
    ph:'',
    phone:'',
    area:'',
    name:'',
    gender:'',
    confirm:'',
    cancel:'',
    success:''
  },
  //事件处理函数
  onShow:function(){
    var _this = this;
    _this.setData({ 
      lang: wx.getStorageSync('user_lang'), 
      identity: wx.getStorageSync('user_identity')
      }); //在这里读取本地储存
      _this.setDat();
  },
  setDat:function(){ //引入语言集
    var _this = this;
    this.setData({
      ph: _this.data.lang.userVol,
      name: _this.data.lang.userPat,
      phone: _this.data.lang.user_phone,
      gender: _this.data.lang.user_gender,
      area: _this.data.lang.user_area,
      confirm: _this.data.lang.confirm,
      cancel: _this.data.lang.cancel,
      success: _this.data.lang.success,
    });
  },
  confirm: function () {
    var _this = this;
    wx.request({
      url: 'http://148.70.238.220:8080/WechatApp/Register',
      data: 'role=volunteer&user_id=352202199801111111&user_name=张三&gender=0&user_phone=13010101010', //'role=patient&user_area=地区&user_name=张三&gender=性别,0是男,1是女&user_phone=手机号'
      method: 'GET',
      success: () => {
        if(_this.data.identity=="vol"){
          wx.navigateTo({
            url: '../training/index',
          })
        } else if (_this.data.identity == "pat"){
          wx.showToast({
            title: _this.data.success,
            icon: 'success',
            duration: 2000,
            success:function(){
              setTimeout(function(){
                wx.reLaunch({
                  url: '../login/index',
                })
              },2000)
            }
          });
          
        }
      },
      fail: (e) => {
        console.log(e)
      }
    })
  },
  bindRegionChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
})
