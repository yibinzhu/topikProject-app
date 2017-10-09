// pages/plan/plan.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    total: '--',
    reading: '--',
    listening: '--',
    speaking: '--',
    writing: '--',
    date:'--'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  changePlan:function(){
    wx.navigateTo({
      url: '../../pages/planEdit/planEdit',
    })
  },
  onLoad: function (options) {
    this.setData({
      total: options.total,
      reading: options.reading,
      listening: options.listening,
      speaking: options.speaking,
      writing: options.writing,
      date: options.date
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    var that = this
    wx.getStorage({
      key: 'myPlan',
      success: function (res) {
        console.log(res.data)
        that.setData({
          total: res.data.total,
          reading: res.data.reading,
          listening: res.data.listening,
          speaking: res.data.speaking,
          writing: res.data.writing,
          date: res.data.date
        })
      }
    })
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