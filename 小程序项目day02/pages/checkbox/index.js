// pages/checkbox/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   choose:"",
  //  checkvalue:[]
    checkvalue: ""
  },
  handleChange(e){
 console.log(e)

 this.setData({
   choose:e.detail.value
 })
  },


handleChange2(e){
  console.log(e)
this.setData({
  checkvalue: e.detail.value.join('|')
})

}


  
})