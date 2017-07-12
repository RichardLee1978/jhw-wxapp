//index.js
//获取应用实例
var app = getApp()
Page( {
  data: {
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo( {
      url: '../logs/logs'
    })
  },
  page: function(e) {
    var url = e.currentTarget.dataset.url
    if (url.indexOf('login/login') >-1 ){
      url = url + '?openid=' + this.data.userInfo.openid
    }
    wx.navigateTo({
        url: url
    })
  },
  onLoad: function() {
    var that = this
    //调用应用实例的方法获取全局数据
    this.setData({
      userInfo: app.globalData.userInfo,
      member: app.globalData.member
    })
  },

  onReady: function () {
    wx.setNavigationBarTitle({
      title: '个人中心'
    })
  }
})