// pages/more_paste/index.js

const AV = require('../../../libs/av-core-min.js');
const adapters = require('../../../libs/leancloud-adapters-weapp.js');

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
    selected:0
  },
  bindtapYatao: function (e) {
    this.setData({
      selected: e.currentTarget.dataset.id
    })    
  },
  bindclickNull: function(e){
    this.setData({
      selected:0,
    })
  },
  bindclickOK: function(e){
    const currentUser = AV.User.current();
    currentUser.set('zhengji',this.data.selected)
    currentUser.save()
    console.log(currentUser.attributes.zhengji)
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
    this.setData({
      selected:currentUser.attributes.zhengji
    })
    wx.setNavigationBarTitle ({title:''})
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