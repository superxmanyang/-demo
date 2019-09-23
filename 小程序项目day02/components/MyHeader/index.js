// components/index.js
Component({
  properties:{
    col:{
      type:String,
      value:"black"
    }
  },


  methods:{
    handleTap(){
      // console.log(e)
      let msg ="什么水果最可爱?" ;
      this.triggerEvent("sendMsg",{msg})
    }
  }
})
