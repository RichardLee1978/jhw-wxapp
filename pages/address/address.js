// address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  page: function (e) {
    var url = e.currentTarget.dataset.url
    // 修改默认收货地址
    if(url === '../cart/cart'){
      wx.request({
        url: 'http://www.jihui88.com/rest/api/shop/receiver/detail/'+ e.currentTarget.dataset.id,
        data: {
          isDefault: '1'
        },
        success: function (res) {
          wx.navigateBack({
            url: e.currentTarget.dataset.url + '?receiverId=' + e.currentTarget.dataset.id
          })
        }
      })
    }else{
      wx.navigateTo({
        url: url
      })
    }
  },
  get: function () {
    wx.showNavigationBarLoading()
    var list = [
      {
        enterpriseId: "Enterp_0000000000000000000049341",
        isDefault: "1",
        addTime: 1498555820109,
        updateTime: null,
        mobile: "1513461568",
        receiverId: "8a9e457e5ce8d95c015ce8e3284d0003",
        areaPath: "402881882ba8753a012ba8cb1bbf005a,402881882ba8753a012ba8cc62870061,402881e44da29af5014da33bafbe0177",
        phone: "",
        zipCode: "322000",
        address: "详细地址",
        name: "名称"
      },
      {
        enterpriseId: "Enterp_0000000000000000000049341",
        isDefault: "0",
        addTime: 1498555820109,
        updateTime: null,
        mobile: "1513461569",
        receiverId: "8a9e457e5ce8d95c015ce8e3284d0003",
        areaPath: "402881882ba8753a012ba8cb1bbf005a,402881882ba8753a012ba8cc62870061,402881e44da29af5014da33bafbe0177",
        phone: "",
        zipCode: "322000",
        address: "详细地址2",
        name: "名称2"
      }
    ]
    this.setData({
      list: list
    })
    wx.setStorage({
      key: 'address',
      data: list
    })
    wx.hideNavigationBarLoading()
  },
  wxAddress: function(){
    this.data.list.push({
      enterpriseId: "Enterp_0000000000000000000049341",
      isDefault: "0",
      addTime: 1498555820109,
      updateTime: null,
      mobile: "1513461569",
      receiverId: "8a9e457e5ce8d95c015ce8e3284d0003",
      areaPath: "402881882ba8753a012ba8cb1bbf005a,402881882ba8753a012ba8cc62870061,402881e44da29af5014da33bafbe0177",
      phone: "",
      zipCode: "322000",
      address: "详细地址3",
      name: "名称3"
    })

    this.setData({
      list: this.data.list
    })

    wx.chooseAddress({
      success: function (res) {
        console.log(res.userName)
        console.log(res.postalCode)
        console.log(res.provinceName)
        console.log(res.cityName)
        console.log(res.countyName)
        console.log(res.detailInfo)
        console.log(res.nationalCode)
        console.log(res.telNumber)
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var key = wx.getStorageSync('address')
    if (!key) {
      this.get()
    } else {
      this.setData({
        list: key
      })
    }
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '选择收货地址'
    })
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.get()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    wx.showLoading({
      title: '加载中',
    })
    this.data.list.push({
      enterpriseId: "Enterp_0000000000000000000049341",
      isDefault: "1",
      addTime: 1498555820109,
      updateTime: null,
      mobile: "1513461568",
      receiverId: "8a9e457e5ce8d95c015ce8e3284d0003",
      areaPath: "402881882ba8753a012ba8cb1bbf005a,402881882ba8753a012ba8cc62870061,402881e44da29af5014da33bafbe0177",
      phone: "",
      zipCode: "322000",
      address: "详细地址",
      name: "名称"
    }
    )
    this.setData({
      list: this.data.list
    })
    wx.hideLoading()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})