//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hiddenLoading: true,
    isHidden: true,
    hidden : true,
    lastY: 0,
    img_src : '../../images/familyCard.jpg',
    infoList : [
      { image : '../../images/notice.jpg' , info : "97份已被领取" , activity : '丽日（湖畔生活店）1元抵400，快来参加吧'},
      { image: '../../images/notice.jpg', info: "14人已报名", activity: '月亮弯亲子陶艺DIY'},
      { image: '../../images/notice.jpg', info: "27人已报名", activity: '我是小小咖啡师' },
      { image: '../../images/notice.jpg', info: "109人已报名", activity: '全息剧场（一人一票）' },
      { image: '../../images/notice.jpg', info: "87人已报名", activity: '亲子观影活动' }
    ],
    rich_arr_content: [
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "font-size: 14px; line-height: 25.6px;"
            }
          },
          {
            "name": "span",
            "attrs": {
              "style": "color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; background-color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "type": "text",
                "text": "有你，惠更幸福"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; background-color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "type": "text",
                "text": "2018年4月22日"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; background-color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "type": "text",
                "text": "第二届仲恺"
              }
            ]
          },
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(61, 170, 214);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "color: rgb(61, 170, 214); margin: 0px; padding: 0px; max-width: 100%; font-size: 14px; box-sizing: border-box !important; word-wrap: break-word !important;"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "惠环·环跑节"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "span",
            "attrs": {
              "style": "color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; background-color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "type": "text",
                "text": "强势回归"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; background-color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "type": "text",
                "text": "还记得2017年仲恺惠环这场盛事吗？"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "img",
            "attrs": {
              "src": "https://act-img.xizi.com/ueditor/image/20180321/FoTOQ8_jSx7uAHGfAjRPWxKWGvME.gif",
              "alt": "7928a1e2caafc7906419402c604794fc.gif"
            }
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "img",
            "attrs": {
              "src": "https://act-img.xizi.com/ueditor/image/20180321/Fmu7dsQJYR0nLp3GDoeKl9d7o672.gif",
              "alt": "365710ae1cdc83c7ea3baf3f64f62fae.gif"
            }
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "img",
            "attrs": {
              "src": "https://act-img.xizi.com/ueditor/image/20180321/FkHamK5HXjVAmsXdoJj_q01WdBFC.gif",
              "alt": "ad82c52a20f8a2e49cdcba41e43625c0.gif"
            }
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "img",
            "attrs": {
              "src": "https://act-img.xizi.com/ueditor/image/20180321/Fi3Kf8fPd7smGVAIy6-CAkNF3ejP.gif",
              "alt": "73821bfdceee9f9a1d20ded39fc5b74f.gif"
            }
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "br"
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "本届"
              },
              {
                "name": "span",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "type": "text",
                    "text": "仲恺惠环·"
                  }
                ]
              },
              {
                "type": "text",
                "text": "环跑节分为三个赛事组别"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(61, 170, 214);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "包括个人竞速组"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(61, 170, 214);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "幸福跑组"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(61, 170, 214);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "亲子家庭组"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "其中幸福跑环节是本次环跑节中的一大亮点"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "br"
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "2017年"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "幸福跑走过了"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "深圳、惠州、海安、鞍山、丹东"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "沈阳、大连、北京、营口、上海"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "br"
          }
        ]
      },
      {
        "name": "p",
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "name": "br"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "img",
            "attrs": {
              "src": "https://act-img.xizi.com/ueditor/image/20180321/FlkwsuRjcoOzZVnxuFgIkDL6sZrG.gif",
              "alt": "微信图片_20180321095208.gif"
            }
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "2018幸福跑以惠州为首站"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "这也是幸福跑惠州站"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "以"
              }
            ]
          },
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(61, 170, 214);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "“幸福始于惠环”"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "为"
              }
            ]
          },
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "主题的原因"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "&nbsp;"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; white-space: normal; line-height: 22px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "2018，幸福跑再次归来"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; white-space: normal; line-height: 22px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "联手"
              },
              {
                "name": "span",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "type": "text",
                    "text": "仲恺惠环·"
                  }
                ]
              },
              {
                "type": "text",
                "text": "环跑节"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; white-space: normal; line-height: 22px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "开启幸福接力之旅。"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; white-space: normal; line-height: 22px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "br"
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(61, 170, 214);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "2018第二届仲恺惠环·环跑节"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(61, 170, 214);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "暨"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(171, 25, 66);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "“鑫月广场”"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(61, 170, 214);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "幸福迷你马拉松"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(61, 170, 214);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "（惠州站）报名正式启动！"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; color: rgb(61, 170, 214);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "一旦报名成功、不接受退款"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "img",
            "attrs": {
              "src": "https://act-img.xizi.com/ueditor/image/20180321/FhecKmIotdYjag49Aw0y1ltRBk5m.jpg",
              "alt": "微信图片_20180321095333.jpg"
            }
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "img",
            "attrs": {
              "src": "https://act-img.xizi.com/ueditor/image/20180321/FgNGviwB5oMHJxdLTm0ypV8PfGtd.jpg",
              "alt": "微信图片_20180321095445.jpg"
            }
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "text-align: center;"
        },
        "children": [
          {
            "name": "br"
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "text-align: center;"
        },
        "children": [
          {
            "name": "img",
            "attrs": {
              "src": "https://act-img.xizi.com/ueditor/image/20180321/FtUASrnVpRtu8AWHbMqpQu8vafRz.png",
              "alt": "{4BF57ABA-80F2-4D3E-B271-0CF8E6F6C6FA}.png"
            }
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "text-align: center;"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "type": "text",
                "text": "偷偷告诉大家"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "text-align: center;"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "type": "text",
                "text": "前方高能"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "text-align: center;"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "type": "text",
                "text": "据说本届环跑节现场还设置了"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "text-align: center;"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "name": "span",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 0, 0);"
                },
                "children": [
                  {
                    "type": "text",
                    "text": "有情怀"
                  }
                ]
              },
              {
                "name": "span",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(0, 112, 192);"
                },
                "children": [
                  {
                    "type": "text",
                    "text": "有温度"
                  }
                ]
              }
            ]
          },
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; color: rgb(255, 255, 255); box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(0, 176, 80);"
            },
            "children": [
              {
                "type": "text",
                "text": "有创意"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "text-align: center;"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; color: rgb(0, 176, 80); box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "name": "span",
                "attrs": {
                  "style": "color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; background-color: rgb(255, 255, 255);"
                },
                "children": [
                  {
                    "type": "text",
                    "text": "的嘉年华活动"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "text-align: center;"
        },
        "children": [
          {
            "name": "img",
            "attrs": {
              "src": "https://act-img.xizi.com/ueditor/image/20180321/FhTRSUFIyP8K3SAAgwKDhVISo00L.gif",
              "alt": "1_副本11.gif"
            }
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "text-align: center;"
        },
        "children": [
          {
            "name": "br"
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "text-align: center;"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "type": "text",
                "text": "更多精彩，等你来"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "text-align: center;"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; font-size: 14px; line-height: 25.6px; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
            },
            "children": [
              {
                "type": "text",
                "text": "抓紧时间报名吧"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin: 0px 8px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; white-space: normal; line-height: 22px; box-sizing: border-box !important; word-wrap: break-word !important; text-align: center; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            }
          },
          {
            "name": "br"
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "img",
            "attrs": {
              "src": "https://act-img.xizi.com/ueditor/image/20180321/Fo8NRVyKe8j4VOfFXWYow8wEJhWQ.jpg",
              "alt": "微信图片_20180321095557.jpg"
            }
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin: 0px 8px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 104, 39);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px; color: rgb(255, 255, 255);"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "&nbsp;鑫月广场&nbsp;"
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "作为惠州首个全新的城市三栖新商业"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin: 0px 8px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "旗下囊括三条产品线"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin: 0px 8px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 104, 39);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px; color: rgb(255, 255, 255);"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "&nbsp;欢乐海湾购物中心&nbsp;"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin: 0px 8px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 104, 39);"
            },
            "children": [
              {
                "name": "strong",
                "attrs": {
                  "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important;"
                },
                "children": [
                  {
                    "name": "span",
                    "attrs": {
                      "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px; color: rgb(255, 255, 255);"
                    },
                    "children": [
                      {
                        "type": "text",
                        "text": "&nbsp;星艺佳家居生活MALL、仲恺金街&nbsp;"
                      }
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin: 0px 8px; padding: 0px; max-width: 100%; clear: both; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "span",
            "attrs": {
              "style": "margin: 0px; padding: 0px; max-width: 100%; box-sizing: border-box !important; word-wrap: break-word !important; font-size: 14px;"
            },
            "children": [
              {
                "type": "text",
                "text": "2018即将绚美启幕，敬请期待。"
              }
            ]
          }
        ]
      },
      {
        "name": "p",
        "attrs": {
          "style": "margin-top: 0px; margin-bottom: 0px; padding: 0px; max-width: 100%; min-height: 1em; color: rgb(62, 62, 62); font-family: &#39;Helvetica Neue&#39;, Helvetica, &#39;Hiragino Sans GB&#39;, &#39;Microsoft YaHei&#39;, Arial, sans-serif; line-height: 25.6px; white-space: normal; text-align: center; box-sizing: border-box !important; word-wrap: break-word !important; background-color: rgb(255, 255, 255);"
        },
        "children": [
          {
            "name": "img",
            "attrs": {
              "src": "https://act-img.xizi.com/ueditor/image/20180321/FkN65Xszz3YZbY7_nuObltpKtH70.jpg",
              "alt": "微信图片_20180321095623.jpg"
            }
          }
        ]
      }
    ],
  },
  onLoad: function () {
    this.setData({
        hiddenLoading: !this.data.hiddenLoading
    })
    var _this = this
    setTimeout(function(){
      _this.setData({
        hiddenLoading: false
      })
    },1000)

  },
  onShow : function(){
    this.setData({
      hiddenLoading: !this.data.hiddenLoading
    })
    var _this = this
    setTimeout(function () {
      _this.setData({
        hiddenLoading: false
      })
    }, 1000)
  },
  handletouchmove: function (event) {
    let currentY = event.touches[0].pageY
    if ((currentY - this.data.lastY) < 0) {
      this.setData({
        isHidden : false,
        hidden : false
      })
    }
    else if ((currentY - this.data.lastY) > 0) {
      this.setData({
        isHidden : true,
        hidden: true
      })
    }
    //将当前坐标进行保存以进行下一次计算
    this.data.lastY = currentY
  },
  handletouchtart: function (event) {
    this.data.lastY = event.touches[0].pageY
  },
  toTopArea: function () {
    wx.pageScrollTo({
      scrollTop: 0
    })
    this.setData({
      isHidden: true,
      hidden : true
    })

  },
  number : function(){
    wx.switchTab({
      url: '../coupon/coupon'
    })
  }
  
})
