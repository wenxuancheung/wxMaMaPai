var app = getApp()
Page({
   data: {
     navbar: ['吃喝', '玩乐'],
     currentTab: 0,
     eat_drink :[
       { image: "../../images/EatDrink.jpg", mainText: "开心小镇蛋糕DIY五折券+DIY棉花糖", moneyText: "29.9", saleText: "76", url: '../goods/goods?id=1'}
     ],
     have_fun_list : [
       { image: '../../images/haveFun.jpg', name: '3月17日《大坏狐狸的故事》亲子观影门票', money: '28', sale: '122',url: '../goods/goods?id=1'},
       { image: '../../images/haveFun1.jpg', name: '亲子卡 苹果发艺洗剪吹优惠', money: '60', sale: '10', url: '../goods/goods?id=1'},
       { image: '../../images/haveFun2.jpg', name: '考拉大冒险乐园畅玩券', money: '50', sale: '25', url: '../goods/goods?id=1' },
       { image: '../../images/haveFun3.jpg', name: '悠贝亲子图书馆月卡', money: '280', sale: '12', url: '../goods/goods?id=1'},
       { image: '../../images/haveFun4.jpg', name: '《小鸟总动员》儿童剧', money: '45', sale: '859', url: '../goods/goods?id=1'},
       { image: '../../images/haveFun5.jpg', name: '睿童科学体验课', money: '150', sale: '99', url: '../goods/goods?id=1' },
     ]
   },
  onLoad : function(options){
    this.setData({
      currentTab : options.index
    })
  },
   navbarTap: function (e) {
     this.setData({
        currentTab: e.currentTarget.dataset.index
     })
   }
}) 