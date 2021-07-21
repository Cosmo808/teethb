// pages/more/more.js

var app=getApp()
Page({
  data: {
    birth: '2001-07-25', // 用户生日 "YYYY-MM-DD"
    hand:'0', // 惯用手，0右手，1左手
    handOption:["右手","左手"],
    prsnl_1: false, // 个性化
    prsnl_2: false,
    prsnl_3: false,
    prsnl_4: false,
    yagao: 0,
    yagaoList:["美白","清新","防蛀","固齿","抗敏感","护龈","竹盐","药用","多效"], // 和more_paste的同名列表是相同的，后续可删减
    today:'', // 当前日期
    yashuaHardList:["软毛","硬毛"],
    yashuaSizeList:["小刷头","大刷头"],
    yashuaHard: 0,
    yashuaSize: 0,
    zjType:0,
    zhengjiList:["无","唇侧金属托槽","唇侧陶瓷托槽","舌侧托槽","隐形矫正牙套"],
    multiIndex:[0,0],
    multiArray:[[0,1,2,3,4],[0,1,2,3,4,5,6]]
  },
  bindBirthChange(e){
    this.setData({
      birth: e.detail.value
    })
  },
  bindHandChange(e){
    this.setData({
      hand: e.detail.value      
    })
  },
  bindPrsnlChange1(e){
    this.setData({
      prsnl_1: e.detail.value
    })
  },
  bindPrsnlChange2(e){
    this.setData({
      prsnl_2: e.detail.value
    })
  },
  bindPrsnlChange3(e){
    this.setData({
      prsnl_3: e.detail.value
    })
  },
  bindPrsnlChange4(e){
    this.setData({
      prsnl_4: e.detail.value
    })
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    if (e.detail.column==0&&e.detail.value==0){
      this.setData({
        multiArray:[[0,1,2,3,4],[1,2,3,4,5,6]]
      })
    }
    else{
      this.setData({
        multiArray:[[0,1,2,3,4],[0,1,2,3,4,5,6]]
      })
    }
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({ title:'个人中心'})
    var d = new Date()
    var tempString=d.toLocaleDateString().replace(/\//g,"-")
    this.setData({
      today: tempString
    })
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
    this.getTabBar().init();
    this.setData({
      yagao:app.globalData.paste,
      yashuaHard:app.globalData.brushHard,
      yashuaSize:app.globalData.brushSize,
      zjType:app.globalData.yatao
    })
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