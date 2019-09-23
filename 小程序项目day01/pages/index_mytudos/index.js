// pages/index_mytudos/index.js
Page({
data:{
  inpValue:"",



  list:[

    // 记得要用字符串大哥
    { name: "sb" },
    { name: "b" },
    { name: "baa" },
  ]
},

handleInput(e){
    console.log(e.detail.value);

    this.setData({
        inpValue:e.detail.value
    })
},

handleTap(){
    // console.log(this.data);

    let {list,inpValue} = this.data


    list.push({
    name:inpValue
    })


    this.setData({
        list
    })
}




})