// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabidx:'0',
    categoryData: [{ years: '2017', times: ['55', '54', '53', '52', '51', '50'] }, { years: '2016', times: ['49', '48', '47', '46', '45', '44'] }],
    topik1:{
      idx:'0'
    },
    topik2:{
      idx:'1'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: 'TOPIK听力真题'
    })
  },
  switchtab: function (e) {
    var that = this;
    let t = e.currentTarget.dataset.t
    this.setData({ tabidx: t })
  },
  itemChoose:function(e){
    var that = this;
    let t = e.currentTarget.dataset.t
    let c = e.currentTarget.dataset.c
    console.log(t)
    console.log(c)

  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
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