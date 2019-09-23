// components/MyTabs/index.js
Component({

 

  data: {
  titleList:[

    { id: 0, text: "新闻" },
    { id: 0, text: "新闻" },
    { id: 0, text: "新闻" },
  ],
  // 被选中的元素的索引
  currentIndex:0
  },

   methods:{
     handleTap(e){
      //  console.log(e)
      const {index} = e.target.dataset;
      this.setData({
        currentIndex:index
      })
     }
   }

  
})
