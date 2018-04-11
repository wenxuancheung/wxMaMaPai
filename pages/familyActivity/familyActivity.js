Page({

  /**
   * 页面的初始数据
   */
  data : {
    nav_list : [
      { title: '亲子游', image: '../../images/familyTravel.jpg', url: '../familyTravel/familyTravel'},
      { title: '职业体验', image: '../../images/profession.jpg', url: '../profession/profession' },
      { title: '创意手工', image: '../../images/handWork.jpg', url: '../handWork/handWork'},
      { title: '亲子观影', image: '../../images/familyMovie.jpg', url: '../familyMovie/familyMovie' }
    ],
    activity_list : [
      { image: '../../images/activityRecommend.jpg', name: '彩绘DIY多肉盆栽', money: '68', discount: '48', date: '03-31', last: '21', url: "../activityDetail/activityDetail"},
      { image: '../../images/activityRecommend3.jpg', name: '“遇见民俗扎染”亲子户外艺术创作', money: '39.9', discount: '19.9', date: '04-01', last: '10', url: "../activityDetail/activityDetail"},
      { image: '../../images/activityRecommend2.jpg', name: '小小消防员职业体验', money: '0', discount: '0', date: '04-01', last: '0', url: "../activityDetail/activityDetail" },
      { image: '../../images/activityRecommend4.jpg', name: '小小交警体验活动', money: '19.9', discount: '9.9', date: '03-31', last: '0', url: "../activityDetail/activityDetail"},
      { image: '../../images/activity1.jpg', name: '能力风暴小小发明家DIY机械小车，科技感十足的亲子体验', money: '59.9', discount: '19.9', date: '03-25', last: '16', url: "../activityDetail/activityDetail"},
      { image: '../../images/activity2.jpg', name: '开心小镇DIY蛋糕+棉花糖，感受甜蜜亲子时光', money: '89.9', discount: '49.9', date: '03-25', last: '12', url: "../activityDetail/activityDetail"},
      { image: '../../images/activity.jpg', name: '小小中医师体验活动', money: '49.9', discount: '29.9', date: '03-24', last: '1', url: "../activityDetail/activityDetail" },
      { image: '../../images/activity3.jpg', name: '亲子寿司DIY', money: '59.9', discount: '39.9', date: '03-24', last: '10', url: "../activityDetail/activityDetail"},
      { image: '../../images/activity4.jpg', name: '一起去看法国高分动画片', money: '35', discount: '25', date: '03-17', last: '0', url: "../activityDetail/activityDetail"},
      { image: '../../images/activity5.jpg', name: '那里花开亲子踏青', money: '95', discount: '75', date: '03-18', last: '224', url: "../activityDetail/activityDetail"},
      { image: '../../images/activity6.jpg', name: '寿司DIY，幸福卷起来!', money: ' ', discount: '39.9', date: '03-18', last: '0', url: "../activityDetail/activityDetail"},
      { image: '../../images/activity7.jpg', name: '《小鸟总动员》儿童剧', money: '50', discount: '38', date: '03-24', last: '314', url: "../activityDetail/activityDetail"},
    ],
  }
})