//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    lang: null, //不可以在这里直接取本地储存的值
    identity:null,
    train_text:'',
    confirm:'',
    cancel:'',
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
      train_text: _this.data.lang.train_text,
      train_submit: _this.data.lang.train_submit,
      cancel: _this.data.lang.cancel,      
      confirm: _this.data.lang.confirm
    });
  },
  confirm: function () {
    var _this = this;
    wx.request({
      url: 'http://148.70.238.220:8080/WechatApp/Register',
      data: 'role=volunteer&user_id=352202199801111111&user_name=张三&gender=0&user_phone=13010101010', //'role=patient&user_area=地区&user_name=张三&gender=性别,0是男,1是女&user_phone=手机号'
      method: 'GET',
      success: () => {
      },
      fail: (e) => {
        console.log(e)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onReady: function (options) {
    var that = this;
    wx.showModal({
      content: that.data.train_text,
      showCancel: false,
      confirmText: "OK",
      success: function (res) {
        if (res.confirm) {
          console.log('弹框后点取消')
        } else {
          console.log('弹框后点取消')
        }
      }
    })
  }
})
