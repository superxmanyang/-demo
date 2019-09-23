// pages/index5/index.js
Page({
  data:{

  value:"view标签中的文字"
},

handleInput(event){

   // console.log(event);

  console.log(event.detail.value);
       

  const value  = event.detail 
  
   this.setData({
     value
   })
   





  }
})