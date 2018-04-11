var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    hidden : false,
    disabled : false,
    number : '获取验证码'
  },
  cancel : function(){
    this.setData({
      hidden : true
    })
  },
  get : function(){
    var n = 60;
    //点击后禁用button，设置60秒倒计时
    this.setData({
      disabled: true,
      number: n,
    })

    var yzmInterval = setInterval(()=>{

      if (this.data.number <= 0) {
        this.setData({
          number: '获取验证码',
          disabled: false,
        })
        clearInterval(yzmInterval);
      } else {
        n = n - 1;
        this.setData({
          number: n,
        })
      }
    }, 1000)
  },
  onLoad : function(){
    this.setData({
      hidden: false
    })
  },
  //每次唤起页面都显示
  onShow : function(){
    this.setData({
      hidden : false
    })
  }

})