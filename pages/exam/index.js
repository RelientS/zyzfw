//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    lang: null, //不可以在这里直接取本地储存的值
    identity:null,
    right:'',
    wrong:'',
    prev:'',
    next:'',
    examArr:[], //储存五道题
    currentExam:'' //当前显示题
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
    });
  },
  getExam:()=>{ //获取题目数组
    _this = this;
    wx.request({
      url: 'xxx',
      data:'',
      method:'GET',
      header:{},
      success:(res)=>{
        _this.setData({
          examArr: res,
        }); //在这里读取本地储存
      }
    })
  },
  radioChange(e) {
    //进行收集答案 写一个方法
    console.log('radio发生change事件，携带value值为：', e.detail.value)
  }
})
