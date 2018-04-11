//index.js
//获取应用实例
const app = getApp()

Page({
	data : {
		loading : false,
    imgUrls: [
        '../../images/轮播图1.jpg',
        '../../images/轮播图2.jpg'
    ],
    navLists : [
      { title : '找吃喝',image :'../../images/find.jpg',url : "../activity/activity?index=0" },
      { title : '享玩乐', image : '../../images/enjoy.jpg', url : "../activity/activity?index=1" },
      { title : '亲子活动', image : '../../images/family.jpg', url : "../familyActivity/familyActivity"}
    ],
    famliyCoupon : [
      { image: '../../images/亲子卡1.jpg', mainText: " 开心小镇蛋糕DIY五折券+DIY棉花糖", feeText: "9.9", iconText: "开心小镇", url: '../goods/goods?id=1'},
      { image : '../../images/亲子卡2.jpg', mainText : " 睿童科学体验课", feeText : "9.9",iconText : "睿童科学",url:'../goods/goods?id=2'}
    ],
    shop_list : [
      { image: '../../images/shop.jpg', name: '苹果发艺' , discount: '9' , info: '亲子卡用户尊享:洗剪吹9折'}
    ],
    play_fun_list : [
      { image: '../../images/playFun.jpg', name: '3月17日《大坏狐狸的故事》亲子观影门票', money: '25', old_price: '28', sales: '122', url: "../goods/goods?id=1"},
      { image: '../../images/playFun2.jpg', name: '考拉大冒险乐园畅玩券', money: '20', old_price: '50', sales: '25', url: "../goods/goods?id=1"},
      { image: '../../images/playFun4.jpg', name: '《小鸟总动员》儿童剧', money: '38', old_price: '45', sales: '859', url: "../goods/goods?id=1"},
      { image: '../../images/playFun3.jpg', name: '悠贝亲子图书馆月卡', money: '29.9', old_price: '280', sales: '12', url: "../goods/goods?id=1"}
    ],
    activity_list : [
      { image : '../../images/activityRecommend.jpg', name : '彩绘DIY多肉盆栽',money:'68',discount : '48',date : '03-31',last :'21',url : "../activityDetail/activityDetail"},
      { image: '../../images/activityRecommend3.jpg', name: '“遇见民俗扎染”亲子户外艺术创作', money: '39.9', discount: '19.9', date: '04-01', last: '10',url:"../activityDetail/activityDetail"},
      { image: '../../images/activityRecommend2.jpg', name: '小小消防员职业体验', money: '0', discount: '0', date: '04-01', last: '0', url: "../activityDetail/activityDetail"},
      { image: '../../images/activityRecommend4.jpg', name: '小小交警体验活动', money: '19.9', discount: '9.9', date: '03-31', last: '0', url: "../activityDetail/activityDetail"}
    ],
    hidden : true,
    isHidden : true,
    lastY: 0,

	},
  handletouchmove: function (event) {
    let currentY = event.touches[0].pageY

    if ((currentY - this.data.lastY) < 0){
      this.setData({
        hidden : true,
        isHidden : false
      })
    }
    else if (((currentY - this.data.lastY) > 0)){
      this.setData({
        hidden: false,
        isHidden : true
      })
    }
    //将当前坐标进行保存以进行下一次计算
    this.data.lastY = currentY
  },
  handletouchtart: function (event) {
    this.data.lastY = event.touches[0].pageY
  },
  toVip : function(){
    wx.reLaunch({
      url: '../vip/vip',
    })
  },
  toTopArea : function(){
    wx.pageScrollTo({
      scrollTop: 0
    })
    this.setData({
      isHidden: true
    })

  },
  onLoad : function(){
    this.setData({
      loading: !this.data.loading
    })
    var _this = this
    setTimeout(function () {
      _this.setData({
        loading: false
      })
    }, 1000)
  },
	onShow : function(){
		this.setData({
			loading : !this.data.loading,
      hidden : true
		})
		var _this = this
		setTimeout(function(){
			_this.setData({
				loading : false
			})
		},1000)
	}
})