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
  keyin1(e) {
    this.setData({
      ti: e.detail.value
    })
  },
  keyin2(e) {
    this.setData({
      con: e.detail.value
    })
  },
  copyurl(e) {
    var $id = e.currentTarget.dataset.id; //打印可以看到，此处已获取到了对应的id  
    console.log(this.data.jiangzuo[$id])

    wx.setClipboardData({
      data: this.data.jiangzuo[$id].F1,
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
            wx.showToast({
              title: '网址已复制',
            })
          }
        })
      }
    })
  },
  search() {
    var that = this;
    that.setData({ haveUsed: true })
    wx.request({
      url: 'https://biaodan100.com/web/pubdata/query',
      method: 'POST',
      data: {
        F2: that.data.ti,
        F3: that.data.con,
        FRMID: '5bf3c8c575a03c13e454296c'
      },
      success: function (res) {
        console.log(res)
        console.log(res.data.rows.length)
        if (0 == res.data.rows.length) {
          wx.showToast({
            title: '你的搜索没有结果~',
            icon: 'none',
            duration: 2000

          })
        }

        for (var i = 0; i < res.data.rows.length; i++) {
          var tmp = res.data.rows[i].F3.toString()
          var posi = tmp.indexOf(that.data.con)
          console.log(tmp.substring(posi-30,posi+30))
          res.data.rows[i].F3 = tmp.substring(posi - 30, posi + 30)
        }

        that.setData({
          jiangzuo: res.data.rows
        })
      },
      complete: function (res) { //请求完成的回调函数
      },
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