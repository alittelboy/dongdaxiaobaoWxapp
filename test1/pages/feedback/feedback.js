// pages/renwen/renwen.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    jiangzuo: {},
    haveUsed: false,
    keyword: ""
  },

  getQQ() {
    wx.setClipboardData({
      data: "1619623811",
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
            wx.showToast({
              title: 'qq已复制',
            })
          }
        })
      }
    })
  },
  getQQbot() {
    wx.setClipboardData({
      data: "2142364173",
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
            wx.showToast({
              title: 'QQ已复制',
            })
          }
        })
      }
    })
  },
  getWx() {
    wx.setClipboardData({
      data: "SEUxiaobao",
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
            wx.showToast({
              title: '公众号已复制',
            })
          }
        })
      }
    })
  },
  getWxapp() {
    wx.setClipboardData({
      data: "dongdaxiaobao",
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
            wx.showToast({
              title: '小程序已复制',
            })
          }
        })
      }
    })
  },
  getGitUrl() {
    wx.setClipboardData({
      data: "https://github.com/alittelboy/dongdaxiaobaoWxapp",
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
            wx.showToast({
              title: '链接已复制',
            })
          }
        })
      }
    })
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