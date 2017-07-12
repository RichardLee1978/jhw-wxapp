// cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    issubtotal: false,
    totalQuantity: 2,
    totalPrice: 1000.01,
    totalPrice1: "￥1000.01元",
    curReceiver: {
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
  },
  page: function (e) {
    wx.navigateTo({
      url: e.currentTarget.dataset.url
    })
  },
  pageIndex: function (e) {
    wx.switchTab({
      url: '../index/index'
    })
  },
  get: function () {
    var data = [
      {
        belongId: null,
        product: {
          adduserId: "User_000000000000000000000050555",
          attachList: null,
          productId: "Product_000000000000000000389071",
          attList: null,
          enterpriseId: "Enterp_0000000000000000000049341",
          price: 1000,
          weight: 0,
          attrState: "00",
          attrItems: null,
          store: 1000,
          productAttributeMapStore: [],
          customAttr: null,
          formula: null,
          publishTime: null,
          unpublishTime: null,
          memberPriceList: null,
          memberLimitList: null,
          addTime: 1445047431504,
          sell: 3,
          folder: null,
          point: 0,
          picPath: "upload/j/j2/jihui/picture/2015/12/04/460b2032-fbc8-4b60-90be-9e9742c0142c.jpg",
          productSn: "SN_D51B3B9418ED",
          activity: null,
          lanId: 1,
          pModel: null,
          prodtype: "11",
          pkey: null,
          unit: "件",
          brand: null,
          auditTime: null,
          entType: null,
          seoDescription: null,
          contactId: null,
          publish: "01",
          viewsum: "369",
          isdisplay: "0",
          loginView: "0",
          broadcast: null,
          detailTitle1: "产品描述",
          detailTitle2: "产品功能",
          detailTitle3: "产品参数",
          detail1: null,
          detail2: null,
          detail3: "{}",
          seoTitle: null,
          adminBroadcast: null,
          ads: null,
          marketPrice: 1000,
          weightUnit: "kg",
          freezeStore: 0,
          isMarketable: "01",
          isBest: "00",
          isNew: "00",
          isHot: "00",
          mainPic: null,
          customAttrMapStore: null,
          productCustomAttributeMapStore: null,
          productStaticAttributeMapStore: null,
          jsonDetail3: {},
          certificateList: null,
          tagMapStore: [],
          picUrl5: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/460b2032-fbc8-4b60-90be-9e9742c0142c_5.jpg",
          picUrl: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/460b2032-fbc8-4b60-90be-9e9742c0142c.jpg",
          picUrl8: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/460b2032-fbc8-4b60-90be-9e9742c0142c_8.jpg",
          picUrl6: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/460b2032-fbc8-4b60-90be-9e9742c0142c_6.jpg",
          picUrl7: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/460b2032-fbc8-4b60-90be-9e9742c0142c_7.jpg",
          picUrl3: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/460b2032-fbc8-4b60-90be-9e9742c0142c_3.jpg",
          picUrl4: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/460b2032-fbc8-4b60-90be-9e9742c0142c_4.jpg",
          albumList: null,
          c_url: null,
          mobiledesc: null,
          isAgent: null,
          attributeList: null,
          purchaseNum: 0,
          subTotalPrice: 1000,
          priceState: null,
          limitState: null,
          category: "Category_00000000000000000259943",
          domain: null,
          endTime: null,
          sort: 38,
          name: "微传单完整版",
          state: "01",
          type: "NM",
          username: null
        },
        skuCode: "",
        itemId: "8a9e457e5ce747d3015ce83e436a083e",
        productAttr: "",
        quantity: 1,
        addTime: 1498545013610,
        updateTime: 1498545013610,
        proUrl: "http://m.jihui88.com/product-detail-389071.html",
        entName: "机汇网",
        attPrice: 0,
        formulaResult: 1,
        subtotalPrice: "1000.00",
        formulaStr: "[]"
      },
      {
        belongId: null,
        product: {
          adduserId: "User_000000000000000000000050555",
          attachList: null,
          productId: "Product_000000000000000000389072",
          attList: null,
          enterpriseId: "Enterp_0000000000000000000049341",
          price: 0.01,
          weight: 0,
          attrState: "00",
          attrItems: null,
          store: 886,
          productAttributeMapStore: [],
          customAttr: "[]",
          formula: null,
          publishTime: null,
          unpublishTime: null,
          memberPriceList: null,
          memberLimitList: null,
          addTime: 1444375945140,
          sell: 49,
          folder: null,
          point: 0,
          picPath: "upload/j/j2/jihui/picture/2015/12/04/0e9481cf-3599-4bc0-a42f-f710b101c91f.jpg",
          productSn: "SN_B40A06A36779",
          activity: null,
          lanId: 1,
          pModel: null,
          prodtype: "11",
          pkey: null,
          unit: "件",
          brand: null,
          auditTime: null,
          entType: null,
          seoDescription: null,
          contactId: null,
          publish: "01",
          viewsum: "990",
          isdisplay: "0",
          loginView: "0",
          broadcast: null,
          detailTitle1: "产品描述",
          detailTitle2: "产品功能",
          detailTitle3: "产品参数",
          detail1: null,
          detail2: null,
          detail3: "{}",
          seoTitle: null,
          adminBroadcast: null,
          ads: null,
          marketPrice: 0.01,
          weightUnit: "kg",
          freezeStore: 0,
          isMarketable: "01",
          isBest: "00",
          isNew: "00",
          isHot: "00",
          mainPic: null,
          customAttrMapStore: [],
          productCustomAttributeMapStore: null,
          productStaticAttributeMapStore: null,
          jsonDetail3: {},
          certificateList: null,
          tagMapStore: [],
          picUrl5: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/0e9481cf-3599-4bc0-a42f-f710b101c91f_5.jpg",
          picUrl: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/0e9481cf-3599-4bc0-a42f-f710b101c91f.jpg",
          picUrl8: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/0e9481cf-3599-4bc0-a42f-f710b101c91f_8.jpg",
          picUrl6: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/0e9481cf-3599-4bc0-a42f-f710b101c91f_6.jpg",
          picUrl7: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/0e9481cf-3599-4bc0-a42f-f710b101c91f_7.jpg",
          picUrl3: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/0e9481cf-3599-4bc0-a42f-f710b101c91f_3.jpg",
          picUrl4: "http://img.jihui88.com/upload/j/j2/jihui/picture/2015/12/04/0e9481cf-3599-4bc0-a42f-f710b101c91f_4.jpg",
          albumList: null,
          c_url: null,
          mobiledesc: null,
          isAgent: null,
          attributeList: null,
          purchaseNum: 0,
          subTotalPrice: 0.01,
          priceState: null,
          limitState: null,
          category: "Category_00000000000000000259943",
          domain: null,
          endTime: null,
          sort: 39,
          name: "微传单免费版",
          state: "01",
          type: "NM",
          username: null
        },
        skuCode: "",
        itemId: "8a9e457e5ce747d3015ce839d1580839",
        productAttr: "",
        quantity: 1,
        addTime: 1498544722263,
        updateTime: 1498544722263,
        proUrl: "http://m.jihui88.com/product-detail-389072.html",
        entName: "机汇网",
        attPrice: 0,
        formulaResult: 1,
        subtotalPrice: "0.01",
        formulaStr: "[]"
      }
    ]
    this.setData({
      data: data
    })
  },
  del: function (e) {
    var that = this;
    var id = e.currentTarget.dataset.id
    var skuCode = e.currentTarget.dataset.skuCode
    var index = e.currentTarget.dataset.index
    wx.request({
      type: 'get',
      url: 'http://www.jihui88.com/rest/api/shop/cartItem/delete',
      data: {
        id: id,
        skuCode: skuCode || ''
      },
      success: function (res) {
        that.data.data.shift(index)
        that.setData({
          data: that.data.data
        })
      }
    })
  },
  pay: function () {
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.get()
    this.setData({
      empty: true
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '购物车'
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

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})