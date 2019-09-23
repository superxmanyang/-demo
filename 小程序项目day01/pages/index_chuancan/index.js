// pages/index2/index.js
Page({
  // 2 点击事件的回调
  handleClick(event) {
    // console.log("点击事件被触发了");
    //  console.log('%c'+'点击事件被触发了',"color:red;font-size:100px;background-image:linear-gradient(to right,#0094ff,pink)");
    
    
    // console.log(event);
    console.log(event.target.dataset);
   
  }
})