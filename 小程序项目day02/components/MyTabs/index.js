// components/MyTabs/index.js
Component({

 properties:{
   titleList:{
    type:Array,
    value:[]
   },
   currentIndex:{
     type:Number,
     value:0
   },
 },

  data: {
  
  // 被选中的元素的索引
  // currentIndex:0,
  },
  
   methods:{
     handleTap(e){
      //  console.log(e)
      const {index} = e.target.dataset;
      // this.setData({
      //   currentIndex:index
      // })


      this.triggerEvent("itemChange",{index})
     }
   }

  
})
