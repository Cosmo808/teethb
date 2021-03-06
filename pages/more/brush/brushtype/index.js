// pages/more_paste/index.js
const AV = require('../../../../libs/av-core-min.js');
const adapters = require('../../../../libs/leancloud-adapters-weapp.js');

AV.setAdapters(adapters);
// 改为自己的，在leancloud控制台-设置-应用凭证中
AV.init({
  appId: "yelxhl0OPMa8AN0BOU5qndGU-gzGzoHsz",
  appKey: "FEy1FLbtbj4nP9rleSPtHq7j",
  serverURL: "https://yelxhl0o.lc-cn-n1-shared.com"
});
Page({
  /**
   * 页面的初始数据
   */
  data: {
    selectedHard:0,
    selectedSize:0,
  },

  bindtapBrushHard:function(e){
    this.setData({
      selectedHard: e.currentTarget.dataset.id
    })
  },
  bindtapBrushSize:function(e){
    this.setData({
      selectedSize: e.currentTarget.dataset.id
    })    
  },
  bindclickOK: function(e){
    const currentUser = AV.User.current();
    currentUser.set('brushType',[this.data.selectedHard,this.data.selectedSize])
    currentUser.save()
    wx.navigateBack()
  },
  bindclickCancel: function(e){
    wx.navigateBack()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const currentUser = AV.User.current();
    wx.setNavigationBarTitle ({title:""})
    this.setData({
      selectedHard:currentUser.attributes.brushType[0],
      selectedSize:currentUser.attributes.brushType[1]
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

  },
})