// pages/planEdit/planEdit.js
let app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '2016-09-01',
    reading:'',
    listening:'',
    speaking:'',
    writing:''
  },
  inputSubmit:function(){
    let reading = this.data.reading
    let listening = this.data.listening
    let speaking = this.data.speaking
    let writing = this.data.writing
    let date = this.data.date
    let reg = new RegExp("^[0-9]*$");
    if (reading === ''){
      wx.showToast({
        title: '请填写阅读分数',
      })
      return
    } else if (listening === '') {
      wx.showToast({
        title: '请填写听力分数',
      })
      return
    } else if (speaking === '') {
      wx.showToast({
        title: '请填写口语分数',
      })
      return
    } else if (writing === '') {
      wx.showToast({
        title: '请填写写作分数',
      })
      return
    }else{
      let total = parseInt(reading) + parseInt(listening) + parseInt(writing) + parseInt(speaking)
      let myPlan = {
        total: total,
        reading:reading,
        listening:listening,
        writing:writing,
        speaking:speaking,
        date:date
      }
      // 将数据存入缓存
      try {
      wx.setStorageSync('myPlan', myPlan)
      } catch (e) {
        console.log('缓存数据出错')
      }      
      wx.redirectTo({
        url: '../plan/plan?total='+total+'&reading='+reading+'&listening='+listening+'&writing='+writing+'&speaking='+speaking+'&date='+date
      })
    }
  },
  bindTotalInput: function (e) {
    this.setData({
      total: e.detail.value
    })
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindReadingInput: function (e) {
    let reg = new RegExp("^[0-9]*$");
    if (!reg.test(e.detail.value)) {
      wx.showToast({
        title: '请填写数字',
      })
    } else {
    this.setData({
      reading: e.detail.value
    })
    }
  },
  bindListeningInput: function (e) {
    let reg = new RegExp("^[0-9]*$");
    if (!reg.test(e.detail.value)) {
      wx.showToast({
        title: '请填写数字',
      })
    } else {
    this.setData({
      listening: e.detail.value
    })
    }
  },
  bindSpeakingInput: function (e) {
    let reg = new RegExp("^[0-9]*$");
    if (!reg.test(e.detail.value)) {
      wx.showToast({
        title: '请填写数字',
      })
    } else {
    this.setData({
      speaking: e.detail.value
    })
    }
  },
  bindWritingInput: function (e) {
    let reg = new RegExp("^[0-9]*$");
    if (!reg.test(e.detail.value)) {
      wx.showToast({
        title: '请填写数字',
      })
    } else {
    this.setData({
      writing: e.detail.value
    })
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