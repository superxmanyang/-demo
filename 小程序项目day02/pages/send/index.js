// pages/send/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:""
    
  },

  handleSendMsg(e){
    console.log(e)
    console.log(this)
   this.setData({
     msg: e.detail.msg
   })
  }
  
})