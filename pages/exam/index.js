//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    lang: null, //不可以在这里直接取本地储存的值
    identity:null,
    fal:false,
    right:'',
    wrong:'',
    prev:'',
    next:'',
    submit:'',
    passed:'',
    failed:'',
    current:0,
    examArr: ['这是第一道题这是第一道题这是第一道题这是第一道题这是第一道题这是第一道题这是第一道题这是第一道题这是第一道题这是第一道题这是第一道题这是第一道题这是第一道题这是第一道题', '这是第二道题', '这是第三道题', '这是第四道题', '这是第五道题'], //储存五道题 
    correct_answer:[1,1,0,1,1], //储存正确答案状态
    custom_answer: [], //储存用户答案状态
  },
  //事件处理函数
  onShow:function(){
    var _this = this;
    _this.setData({ 
      lang: wx.getStorageSync('user_lang'), 
      identity: wx.getStorageSync('user_identity')
      }); //在这里读取本地储存
      _this.setDat();
      _this.getExam(); //获取题目
  },
  setDat:function(){ //引入语言集
    var _this = this;
    this.setData({
      right: _this.data.lang.right,
      wrong: _this.data.lang.wrong,
      prev: _this.data.lang.prev,
      next: _this.data.lang.next,
      submit: _this.data.lang.submit,
      passed: _this.data.lang.passed,
      failed: _this.data.lang.failed,
      failtip: _this.data.lang.failtip,
      notFin: _this.data.lang.notFin,
      first: _this.data.lang.first,
      last: _this.data.lang.last,
      
    });
  },
  getExam:function(){ //获取题目数组
    var _this = this;
    wx.request({
      url: 'xxx',
      data:'',
      method:'GET',
      header:{},
      success:(res)=>{
        _this.setData({
          examArr: res,
        }); //在这里写入题目
      }
    })
  },
  prev:function(){
    var _this = this, i = _this.data.current;
    if (_this.data.current>0){
      i--;
      _this.setData({
        current: i
      })
    } else if (_this.data.current == 0){
      wx.showToast({
        title: _this.data.first,
        icon:'none'
      })
    }
  },
  next: function () {
    var _this = this, i = _this.data.current;
    i++;
    if (_this.data.current<4){
      _this.setData({
        current: i
      })
    } else if (_this.data.current == 4) {
      wx.showToast({
        title: _this.data.last,
        icon: 'none'
      })
    }
  },
  submit:function(){
    var _this = this;
    if (_this.data.custom_answer.toString() == _this.data.correct_answer.toString()){
      wx.showToast({
        title: _this.data.passed,
        icon: 'success',
        success(){
          setTimeout(function(){
            wx.navigateTo({
              url: '../login/index',
            })
          },2000)
        }
      })
    } else if (_this.data.custom_answer.length!=5){
      wx.showToast({
        title: _this.data.notFin,
        icon: 'none'
      })
    } else if (_this.data.custom_answer.toString() != _this.data.correct_answer.toString()) {
      wx.showModal({
        title: _this.data.failed,
        content: _this.data.failtip,
        showCancel:false,
        confirmText: 'OK',
        success(res) {
          if (res.confirm) {
            wx.navigateTo({
              url: '../exam/index',
            })
          }
        }
      })
    }
  },
  radioChange0(e) {
    this.data.custom_answer[0] = e.detail.value;
    //进行收集答案 写一个方法
  },
  radioChange1(e) {
    this.data.custom_answer[1] = e.detail.value;
  }, 
  radioChange2(e) {
    this.data.custom_answer[2] = e.detail.value;
  }, 
  radioChange3(e) {
    this.data.custom_answer[3] = e.detail.value;
  }, 
  radioChange4(e) {
    this.data.custom_answer[4] = e.detail.value;
  },
  catchTouchMove: function (res) {
    return false
  } //取消滑动事件
})
