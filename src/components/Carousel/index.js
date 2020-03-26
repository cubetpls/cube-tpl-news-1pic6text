import './index.css'

const TPL = [
  '<div class="carousel" c-style=\'{"width": width+"px", "height": height+"px"}\'>',
    '<ul class="carousel-list clearfix">',
      '{{#list list as item by item_index}}',
        '<li class="carousel-item" c-class="{active: item_index === index}">',
          '{{#include slot}}',
        '</li>',
      '{{/list}}',
    '</ul>',
    '<div class="carousel-arrows">',
      '<a class="prev" on-click="{{this.prev()}}"><span></span><i></i></a>',
      '<a class="next" on-click="{{this.next()}}"><span></span><i></i></a>',
    '</div>',
  '</div>'
].join('')

export default {
  name: 'cube-carousel',
  template: TPL,
  data: {
    width: 100,
    height: 100,
    index: 0,
    timer: null,
    delay: 700, // 切换时css3动画时间
    duration: 3000, // 轮播间隔时间
    len: 0, // list列表的长度
    direction: 'right', // 当前翻页方向
  },
  onLoad() {
    //组件编译前
  },
  onReady() {
    //组件渲染后
    this.start()
  },
  start() {
    this.data.timer = setInterval(() => {
      this.setLength()
      this.setDirection()
      this.setIndex()
    }, this.data.delay + this.data.duration)
  },
  stop () {
    clearInterval(this.data.timer)
    this.data.timer = null
  },
  setLength () {
    if (this.data.len) return
    this.data.len = this.data.list ? this.data.list.length : 0
  },
  setIndex () {
    let idx = this.data.direction === 'left' ?
                  this.data.index - 1 :
                  this.data.index + 1

    if (!this.data.len) {
      return
    }

    if (idx >= this.data.len) {
      idx = 0
    }

    if (idx < 0) {
      idx = this.data.len - 1
    }
    this.setData({
      index: idx
    })
  },
  setDirection (dir = 'right') {
    this.data.direction = dir
  },
  prev () {
    this.setLength()
    this.setDirection('left')
    this.setIndex()
    this.stop()
    this.start()
  },
  next () {
    this.setLength()
    this.setDirection()
    this.setIndex()
    this.stop()
    this.start()
  }
}