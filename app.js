//app.js
App({
  globalData:{
    lang_zh: { //中文语言集
    vol: "志愿者入口",
    pat: "患者入口",
    swit: "切换语言",
    userLogin:"请输入手机号",
    login:"登录",
    signin:"注册",
    user_name:"姓名",
    user_gender:"请选择性别",
    user_id:"身份证号",
    user_phone:"手机号码",
    user_area:"请选择地区",
    confirm:"确认",
    cancel:"取消",
    train_submit:"申请培训",
    train_text: "由于您是第一次注册的志愿者，需要进行志愿者培训，请点击下方的按钮申请培训",
    success:"注册成功",
    right: '对',
    wrong: '错',
    prev: '上一题',
    next: '下一题',
    submit:'提交答案',
    passed:'恭喜通过考试',
    failed: '未通过测试',
    failtip: '请抽取新试卷重新作答',
    notFin: '尚未完成作答',
    first: '已经是第一题了',
    last: '已经是最后一题了'
    },
    lang_zy:{ //藏语语言集
      vol: "དང་བླངས་པའི་འཇུག་སྒོ།",
      pat: "ནད་པའི་འཇུག་སྒོ།",
      swit: "བསྒྱུར་སྐད།",
      userVol: "ཁྱེད་ཀྱི་ཚད་ཐོབ་ཐང་ལག་ཁྱེར།",
      userPat: "ཁྱེད་ཀྱི་ཚད་རུས་མིང།",
      login: "ར་འཛེག།",
      signin: "ར་འཛེག།",
      user_name: "རུས་མིང།",
      user_gender: "ཁྱེད་ཀྱི་བསལ་འདེམས་ཀྱི་ཕོ་མོ།",
      user_id: "ཐོབ་ཐང་ལག་ཁྱེར་ཨང།",
      user_phone: "ཁ་པར་ཨང་གྲངས།",
      user_area: "ཁྱེད་ཀྱི་བསལ་འདེམས་ཀྱི་ས་ཁུལ།",
      confirm: "ངོས་འཛིན།",
      cancel: "མེད་པར་བཟོ་བ།",
      train_submit: "རེ་ཞུ་འི་གསོ་སྦྱོང།", train_text:"རྐྱེན་གྱིས་ཁྱེད་ནི་ཐེངས་དང་པོར་ཐོ་འགོད་བྱས་པའི་དང་བླངས་པའི་དགོས་མཁོ་ལ་དང་བླངས་པ་གསོ་སྦྱོང་རོགས་དེ་མཚུངས་ཀྱི་ཞབས་གཅུས་སྒོ་རེ་ཞུ་གསོ་སྦྱོང།",
      success: "ཐོ་འགོད་ལེགས་གྲུབ།",
      right: 'ཀྱིས།',
      wrong: 'ནོར།',
      prev: 'སྟེང་གི་གནད་དོན་ལ།',
      next: 'འོག་གི་གནད་དོན་ལ།',
      submit: 'tjda',
      passed: 'gxtgks',
      failed: 'wtgcs',
      failtip: 'qcqxsjcxzd',
      notFin: 'swwczd'

    },
    //lang:null, 判断使用的语言集，也创建了一个变量，如果有更好的方法保存该全局变量也可修改
    //更好的办法是应用本地储存能力 wx.setStorageSync
  },
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
})