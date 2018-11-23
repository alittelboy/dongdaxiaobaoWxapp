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
      data: this.data.jiangzuo[$id].F12,
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
  getQQGroup(){
    wx.setClipboardData({
      data: "663067536",
      success(res) {
        wx.getClipboardData({
          success(res) {
            console.log(res.data) // data
            wx.showToast({
              title: '群号已复制',
            })
          }
        })
      }
    })

  },
  searchAboutNow() {
    var that = this;

    wx.setClipboardData({
      data: 'https://www.jsform.com/r/5b309a6275a03c07fe693e8c',
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
    that.setData({ haveUsed: true,ab : true,to :false,da:false })
    wx.request({
      url: 'https://biaodan100.com/web/reportview/getgriddata',
      method: 'POST',
      data: { "PRTID": "5b309a6275a03c07fe693e8c", "WGTKEY": "0_3", "SORTBY": [{ "CTIME": "-1" }], "PAGESIZE": 10, "PAGEINFO": { "FIRST": {}, "LAST": {} }, "PREORNEXT": "FIRST" },
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

        that.setData({
          jiangzuo: res.data.rows
        })
      },
      complete: function (res) { //请求完成的回调函数
      },
    })
  },
  searchTomorrow() {
    var that = this;
    wx.setClipboardData({
      data: 'https://www.jsform.com/r/5b34beaa75a03c44d45ed7d6',
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
    that.setData({ haveUsed: true, ab: false, to: true, da: false })
    wx.request({
      url: 'https://biaodan100.com/web/reportview/getgriddata',
      method: 'POST',
      data: { "PRTID": "5b34beaa75a03c44d45ed7d6", "WGTKEY": "0_3", "SORTBY": [{ "CTIME": "-1" }], "PAGESIZE": 10, "PAGEINFO": { "FIRST": {}, "LAST": {} }, "PREORNEXT": "FIRST" },
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

        that.setData({
          jiangzuo: res.data.rows
        })
      },
      complete: function (res) { //请求完成的回调函数
      },
    })
  },
  searchToday() {
    var that = this;
    wx.setClipboardData({
      data: 'https://www.jsform.com/r/5b2f8d0775a03c07fe67fce4',
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
    that.setData({ haveUsed: true, ab: false, to: false, da: true  })
    wx.request({
      url: 'https://biaodan100.com/web/reportview/getgriddata',
      method: 'POST',
      data: { "PRTID": "5b2f8d0775a03c07fe67fce4", "WGTKEY": "0_3", "SORTBY": [{ "CTIME": "-1" }], "PAGESIZE": 10, "PAGEINFO": { "FIRST": {}, "LAST": {} }, "PREORNEXT": "FIRST" },
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
    this.searchToday()
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