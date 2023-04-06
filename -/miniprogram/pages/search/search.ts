// pages/searchPage/searchpage.ts
let jsonData = require('../../data/event.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    search_ans:"", //要输出的结果
    // searchID:"",//要搜索的内容
    // ans:"",//搜索结果
    // eventsArray:[],//事件总信息列表
    // searchResult:[],//搜索的结果列表
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //装入Json事件数据
    // var that = this;
    

    // console.log("输入框输入的内容是 " + options.ans_1);
    this.setData({
      eventsArray: jsonData.eventsList[0].eventsArray ,   
      search_ans: options.ans_1  
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})