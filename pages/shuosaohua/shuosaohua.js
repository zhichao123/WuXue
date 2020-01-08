// pages/shuosaohua/shuosaohua.js
Page({
  getData: function (fuck) {
    var saohua
    wx.request({
      url: 'https://api.lovelive.tools/api/SweetNothings',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res)
        saohua = res.data
        fuck(saohua)
        console.log('1'+saohua)
      }
    })
    console.log('2'+saohua)
  },
  /**
   * 页面的初始数据
   */

  data: {
    saohuaa:'老哥你这网可能不大行'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    var a;
    var fuck = function(saohua){
       a = saohua
       console.log('this'+a)
       that.setData({
         saohuaa:a
       })
    }
    this.getData(fuck)
        // console.log("zhelizghelizgheli"+this.getData())
        // this.setData({
        //   saohuaa: this.getData()
        // })
  },

  nextsaohua:function(){
    var that = this
    console.log("下一条")
    wx.request({
      url: 'https://api.lovelive.tools/api/SweetNothings',
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        that.setData({
          saohuaa:res.data
        })
        console.log(res)
      }
    })
  },

  copysaohua:function(){
    var that = this
    wx.setClipboardData({
      //准备复制的数据
      data: that.data.saohuaa,
      success: function (res) {
        wx.showToast({
          title: '复制成功',
        });
        console.log('复制成功')
      }
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

  }


})