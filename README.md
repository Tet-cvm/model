1. swiper 引起打包文件chunk-vendors文件没有转码
   方法1: 引入min.js import Swiper from 'swiper/dist/js/swiper.min.js'
   方法2:    // transpileDependencies: [
            //     'swiper'
            // ],