// pages/test/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    idx:'',
    option1:{
      id:'1'
    },
    option2: {
      id: '2'
    },
    option3: {
      id: '3'
    },
    option4: {
      id: '4'
    },
    windowH:'',
    total:'',
    queIdx:0,
    playing:false,
    playIcon:'',
    pauseIcon:'',
    checked:false,
    myAnswerList:[],
    myAnswerDataNum:'',
    myAnswerDataCheckedId:'',
    myAnswerDataScore:'',
    myAnswerDataCorrect:'',
    questionData: [
      {
        num: '1',
        dataType: 'txt',
        score: 4,
        example: {
          ex:'0',
        	section: '다음을 듣고<보기>와 같이 물음에 맞는 대답을 고르십시오',
          answers: ['네,공책이에요.', '네,공책이 없어요.', '아니요,공책이 싸요.', '아니요,공책이 커요.'],
        },
        question: '',
        answers: ['네,영호를 해요.', '네,영화가 아니에요.', '아니요,영화를 안 봐요.', '아니요,영화가 재미있어요'],
        correct:4,
        src: 't1/52/002.mp3'
      },
      {
        num: '2',
        dataType: 'txt',
        score: 4,
        example: {
          ex: '1',
        	section: '',
          answers: [],
        },
        question: '',
        answers: ['네,사람이 없어요', '네,사람이 많아요', '아니요,사람이에요', '아니요,사람이 좋아요'],
        correct:4,
        src: 't1/52/003.mp3'
      },
      {
        num: '3',
        dataType: 'txt',
        score: 3,
        example: {
          ex: '1',
        	section: '',
          answers: [],
        },
        question: '',
        answers: ['모자를 샀어요', '동생이 샀어요.', '주말에 샀어요.', '백화점에서 샀어요.'],
        correct:4,
        src: 't1/52/004.mp3'
      },
      {
        num: '4',
        dataType: 'txt',
        score: 3,
        example: {
          ex: '1',
        	section: '',
          answers: [],
        },
        question: '',
        answers: ['매일 일해요.', '정말 멋있어요.', '일이 어려워요.', '학생을 가르쳐요.'],
        correct:4,
        src: 't1/52/005.mp3'
      }
    ]
  },
  playToggle:function(){
    if (this.data.playing) {
      console.log("暂停播放");
      this.setData({ playing: false });
      this.audioCtx.pause()
    } else {
      console.log("继续播放")
      this.audioCtx.play()
      this.setData({
        playing: true
      });
    }
  },
  chooseAnswer:function(e){
    let checkedId = e.currentTarget.dataset.t;
    let score = e.currentTarget.dataset.score;
    let num = e.currentTarget.dataset.num;
    let correct = e.currentTarget.dataset.correct;
    this.setData({
      idx: checkedId,
      myAnswerDataNum:num,
      myAnswerDataScore:score,
      myAnswerDataCheckedId:checkedId,
      myAnswerDataCorrect: correct,
      checked:true
    })
  },
  nextTap:function(){
    let currentIdx = this.data.queIdx
    let total = this.data.questionData.length
    if (currentIdx > total-1){
      wx.showToast({
        title: '没有题了',
        icon: 'success',
        duration: 2000
      })
    }else if(this.data.checked!=true){
      wx.showToast({
        title: '请选择答案',
        icon: 'success',
        duration: 2000
      })
    }else{
      let nowIdx = currentIdx + 1
      this.setData({
        queIdx: nowIdx,
        checked: false,
        idx:'',
        playing:false,
      })
      this.audioPlay()
      this.checkMyAnswer(this.data.myAnswerDataNum, this.data.myAnswerDataCheckedId, this.data.myAnswerDataScore, this.data.myAnswerDataCorrect)
    }
  },
  reviewTap: function () {
    let currentIdx = this.data.queIdx
    let total = this.data.questionData.length
    if (currentIdx > 0) {
      let nowIdx = currentIdx - 1
      this.setData({
        queIdx: nowIdx
      })
      this.audioPlay()
      this.data.myAnswerList.pop()
    } else {
      wx.showToast({
        title: '到头了',
        icon: 'success',
        duration: 2000
      })
    }
  },
  checkMyAnswer: function (num, checkedId, score, correct){
    let myAnswer = {
      num:num,
      checkedId: checkedId,
      score: score,
      correct:correct
    }
    this.data.myAnswerList.push(myAnswer)
    console.log(this.data.myAnswerList)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowH: res.windowHeight - 62
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    // 使用 wx.createAudioContext 获取 audio 上下文 context
    this.audioCtx = wx.createAudioContext('myAudio')
  },
  audioPlay: function () {
    this.audioCtx.play()
    this.setData({
      playIcon:'cntloading',
      pauseIcon:''
    })
  },
  audioPause: function () {
    this.audioCtx.pause()
    this.setData({
      playIcon: '',
      pauseIcon:'pauseIcon'
    })
  },
  audio14: function () {
    this.audioCtx.seek(14)
  },
  audioStart: function () {
    this.audioCtx.seek(0)
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
