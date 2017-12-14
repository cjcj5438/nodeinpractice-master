var LoopImages = function (imgArr, container) {
    this.imagesArray = imgArr;//轮播图片数组
    this.container = container;//轮播图片的容器
    this.createImage = function () {
    };//创建轮播图片
    this.changeImage = function () {
    };//切换下一张图片
}
//上下滑动关切类
var SlideLoopImg = function (imgArr, container) {
    //构造函数继承图片轮播类
    LoopImages.call(this, imgArr, container)
    //重写继承切换下一张图片
    this.changeImage = function () {
        console.log('开始上下')
    }
}
//渐隐切换类
var FadeLoopImg = function (imgArr, container, arrow) {
    LoopImages.call(this, imgArr, container)
    this.arrow = arrow;
    this.changeImage = function () {
        console.log('开始渐隐')
    }
}
//实例化一个渐隐切换图片类
var fadeImg = new FadeLoopImg([
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg'
], 'slide', ['left.jpg', 'right.jpg']);
fadeImg.changeImage();