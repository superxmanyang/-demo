// pages/index1/index.js
Page({

  data: {
    titleList:[

      { id: 0, text: "要闻" },
      { id: 1, text: "推荐" },
      { id: 2, text: "原创" },
    ],
    index:0
  },
  handleItemChange(e){
    // console.log(e);
    this.setData({
      index:e.detail.index
    })
  }
})