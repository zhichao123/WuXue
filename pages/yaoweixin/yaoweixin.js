// pages/yaoweixin/yaoweixin.js
Page({
onLoad : function(){
  wx.loadFontFace({
    family: 'ZiTi',
    source: 'url("https://raw.githubusercontent.com/geekgogo/huawenkaiti/master/HuaWenKaiTi.ttf")',
    success: console.log
  })
},
details:function(){
 wx.navigateTo({
   url: '/pages/yaoweixin/item/item'
 })
},
videos:function(){
  wx.navigateTo({
    url: '/pages/yaoweixin/video/video'
  })
},
getData: function(){
}
})