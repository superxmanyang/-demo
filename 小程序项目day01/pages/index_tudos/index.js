// pages/index_tudos/index.js
Page({
 
//  先给一个初始空值用来储蓄
  data:{
     inpValue:"",



   list:[

     { id: 0, text: "🍎" },
     { id: 1, text: "🍌" },
     { id: 2, text: "🍉" },
     { id: 3, text: "🍇" }

   ]


  },

// 输入框的绑定
  handleInput(event){
    // console.log(event.detail.value)

    this.setData({
      inpValue: event.detail.value
    })
  },


  handleTap(){
    

    let {list,inpValue} = this.data

    // console.log(list,inpValue)
    // console.log(this.data.inpValue)

    // 4.给list数组push
    list.push({
      id:Date.now(),
      text:inpValue
    }),


    this.setData({
      list:list
    })
  }







})