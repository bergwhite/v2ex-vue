export default {
  // 设置评论为空
  setCommToNull (state) {
    state.latestJSON.comm = null
  },
  // 图片懒加载函数
  imgLazyLoad () {
    // 保存定时器的返回值
    var timeScroll = null
    // 把懒加载需要的东西封装在命名空间里
    var image = {
      length: document.images.length,  // 图片的长度
      linkAll: document.images,  // 所有图片的链接
      linkIdCurrent: 0  // 保存下一次准备加载的图片节点ID
    }
    // 滚动事件
    document.onscroll = function () {
      // 此处使用节流函数来避免多次执行
      clearTimeout(timeScroll)  // 触发滚动事件时，清除之前的定时器
      // 然后重新计算定时器，避免多次执行
      timeScroll = setTimeout(function () {
        lazyLoad()  // 满足条件则执行懒加载
      }, 100)
    }
    // 懒加载函数
    function lazyLoad () {
      if (image.linkIdCurrent >= document.images.length) {
        return null
      } else if (image.linkAll[image.linkIdCurrent].className === undefined) {
        image.linkIdCurrent++
        return null
      } else if (image.linkAll[image.linkIdCurrent].className !== 'info-img') {
        image.linkIdCurrent++
        return null
      }
      // 顶部距离
      var bodyScrollTop = document.body.scrollTop || document.documentElement.scrollTop
      // 窗口高度
      var clientHeight = document.documentElement.clientHeight
      if (image.linkIdCurrent < document.images.length) {
        // 如果图片已加载，则处理下一张图片
        if (image.linkAll[image.linkIdCurrent].src !== '') {
          image.linkIdCurrent++
          return lazyLoad()
        }
        // 当前图片距顶部的距离
        var currentScrollTop = image.linkAll[image.linkIdCurrent].offsetTop
        // 当图片距顶部距离小于等于顶部距离加上窗口高度时执行
        if (currentScrollTop <= bodyScrollTop + clientHeight) {
          // 获取data-src的值，并保存在变量里
          var imgSrc = image.linkAll[image.linkIdCurrent].getAttribute('data-src')
          // 把data-src里的值赋给src，促发GET请求，加载图片
          image.linkAll[image.linkIdCurrent].src = imgSrc
          // 移除data-src属性
          image.linkAll[image.linkIdCurrent].removeAttribute('data-src')
          image.linkIdCurrent++  // 更改成下一次准备加载的图片ID
          lazyLoad()  // 如果当前满足条件则尝试再次进行懒加载
        }
      }
    }
    // 执行懒加载函数，下载首屏图片
    lazyLoad()
  }
}
