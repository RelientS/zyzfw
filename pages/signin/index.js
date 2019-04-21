//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    array: ['男', '女'],
    region: ['卫藏', '安多', '康巴'],
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
      ph: _this.data.lang.user_id,
      name: _this.data.lang.user_name,
      phone: _this.data.lang.user_phone,
      gender: _this.data.lang.user_gender,
      area: _this.data.lang.user_area,
      confirm: _this.data.lang.confirm,
      cancel: _this.data.lang.cancel,
      success: _this.data.lang.success,
      //储存用户变量
      user_id:"",
      user_name:"",
      user_phone:""
    });
  },
  confirm: function () {
    var _this = this;
    console.log('role=' + _this.data.identity + '&user_area=' + _this.data.index1 + '&user_id='
      + _this.data.user_id + '&user_name=' + _this.data.user_name + '&gender=' + _this.data.index2 + '&user_phone=' + _this.data.user_phone);
    console.log('role=pat/vol&user_area=地区,0是卫藏，1是安多，2是康巴&user_name=张三&gender=性别,0是男,1是女&user_phone=手机号')
    wx.request({
      url: 'http://148.70.238.220:8080/WechatApp/Register',
      data: 'role=' + _this.data.identity + '&user_area=' + _this.data.area + '&user_id='
        + _this.data.user_id + '&user_name=' + _this.data.user_name + '&gender=' + _this.data.index2 + '&user_phone=' + _this.data.user_phone, 
      //'role=pat/vol&user_area=地区,0是卫藏，1是安多，2是康巴&user_name=张三&gender=性别,0是男,1是女&user_phone=手机号'
      method: 'POST',
      header: {
        "Content-Type": "application/x-www-form-urlencoded" //post请求设置
      },
      success: (res) => {
        if (res.statusCode == 200) {
          var a = res.data;
          if (a.code == "500-SQLExption ") {
            wx.showToast({
              title: '请勿重复注册',
              icon: 'none'
            })
          } else if (a.code == 200) {
            wx.showToast({
              title: '注册成功',
              icon: 'success'
            })
            if (_this.data.identity == "vol") {
              wx.navigateTo({
                url: '../training/index',
              })
            } else if (_this.data.identity == "pat") {
              wx.showToast({
                title: _this.data.success,
                icon: 'success',
                duration: 2000,
                success: function () {
                  setTimeout(function () {
                    wx.reLaunch({
                      url: '../login/index',
                    })
                  }, 2000)
                }
              });
            }
          }
        } else if (res.statusCode != 200) {
          wx.showToast({
            title: '网络连接失败',
            icon: 'loading'
          })
        }

      },
      fail: (e) => {
        console.log(e)
      }
    })
  },
  back:()=>{
    wx.navigateBack()
  },
  bindRegionChange(e) {
    this.setData({
      index1: e.detail.value
    })
  },
  bindPickerChange: function (e) {
    this.setData({
      index2: e.detail.value
    })
  },
  userInput1: function (e) {
    this.setData({
      user_id: e.detail.value
    })
  },
  userInput2: function (e) {
    this.setData({
      user_phone: e.detail.value
    })
  },
  userInput3: function (e) {
    this.setData({
      user_name: e.detail.value
    })
  },
})
