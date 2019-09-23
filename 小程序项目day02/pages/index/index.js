



/* 
1 给输入了绑定 input输入事件
2 在input事件中 给data中的变量赋值 inpValue
3 点击  “确定” 按钮 时候 
  1 获取 data中的 inpValue
  2 把inpValue 加入到 数组中（data 中 list）
  3 把 list 重新 设置到 data中即可 
4 数组-去重 
  1 插入新值之前 先判断 这个值 是否已经存在  
    1 是 跳过  不再往下 执行
    2 不是  再 执行 插入 
5 点击 项  删除 
  1 给list 每一个循环项 绑定 点击事件
  2 点击事件触发了 获取到 被点击的元素的索引 （事件传参）
  3 数组删除元素 [].splice(被删除的元素的索引，删除几个(1));
 */


Page({


    data: {

        inpValue: "",

        list: [{
            id: 1, name: "boy"

        },
        {
            id: 2, name: "gril"

        },
        {
            id: 3, name: "gay"

        }]


    },


    handleInput(e) {

        // console.log(e);

        //   给data中的变量赋值固定写法   
        this.setData({
            inpValue: e.detail.value
        })

    },


    // setData(){} setData(e){}  setData({})!!



    // 非空判断
    handleTap() {

        let { inpValue, list } = this.data;

        const index = list.findIndex((v) => v.name === inpValue);

        // console.log(this);

        if (index === -1) {
            list.push({
                id: Date.now(),
                name: inpValue
            })


            this.setData({
                list
            })
        }

    },


    handleItemDelete(e) {

//   console.log(132);

  console.log(e)

      const {index} =   e.target.dataset;

      const {list} = this.data;
 


        //  splice(第一个数就是从哪开始，第二个删除几个)
     list.splice(index,1);

     this.setData({

        list
     })


    }


})
