/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","1eda6dae2e1828dea3fd00134a66797f"],["/archives/2017/12/index.html","06e554faf6870c7c16c36b4159db8fc4"],["/archives/2017/index.html","a9f365a36ffa3922b9042a1a5b42182e"],["/archives/2018/01/index.html","ee6dee20858cdbd1e0621b60a1550c11"],["/archives/2018/01/page/2/index.html","82c8856e34f14554f9f667f6d22793d6"],["/archives/2018/02/index.html","8e2974b3488d9b5aa5fd8784f3dd29ce"],["/archives/2018/03/index.html","9b6154b012d724a01beea98a279c1288"],["/archives/2018/04/index.html","e15b06ff246380fd8c054d955f774d92"],["/archives/2018/05/index.html","11507fa6b8d29b4b7341ece02173793d"],["/archives/2018/07/index.html","830f827e3a37997997f0c84db9cdf78d"],["/archives/2018/08/index.html","87e279d1ed9257b8e49eb3d5d360e5a5"],["/archives/2018/08/page/2/index.html","d2481de51a6204bdb28ba6a9215061eb"],["/archives/2018/09/index.html","eda8500945e2d6185d9f3c235fa65ef1"],["/archives/2018/10/index.html","d5a8eb120191b4db530aef7eec3713e0"],["/archives/2018/11/index.html","f3db301c1624f927b0a3606b6d3bef37"],["/archives/2018/12/index.html","885c239edea1edfeb5f9fc63ed175889"],["/archives/2018/index.html","aab81bd993b62cb5b855a9f34805bb47"],["/archives/2018/page/2/index.html","86993bb60531d024a1e2f126cd7ac8f4"],["/archives/2018/page/3/index.html","4b26bc1265600a7dce99a47a310cdcc0"],["/archives/2018/page/4/index.html","845e2f299185e081d342cf28d01f8945"],["/archives/2018/page/5/index.html","02c2369412c98975f331884fe7e444e7"],["/archives/2018/page/6/index.html","bb300df84252701278ed738c9ad3d473"],["/archives/2018/page/7/index.html","05581d76c34acdf398d0d7f1ff0aba5e"],["/archives/2019/01/index.html","aa34f756d1b172c59d9def75a8dc523a"],["/archives/2019/02/index.html","f2cfcab8ca3fb1a2f290cfd7ad61a2da"],["/archives/2019/03/index.html","1b01435f7940e83d2885dedb6ec51631"],["/archives/2019/04/index.html","f9c9f913cdccf04979b2f2269e986aea"],["/archives/2019/05/index.html","6b1239b0e673519b413a2047c259f394"],["/archives/2019/06/index.html","e122eec57f09bdb8cdd39888989ecc10"],["/archives/2019/07/index.html","dbc3c4d9ddddd5d47e94e89d33f138cd"],["/archives/2019/08/index.html","51b556609340f98330bf12855bbd9292"],["/archives/2019/09/index.html","9be1f8022383c0afb542f2de98a4a462"],["/archives/2019/10/index.html","e06d643a893e58b612a9360df5991d58"],["/archives/2019/11/index.html","5b7793c2f2869b2cbfd39304a2b5c058"],["/archives/2019/index.html","152921be597821a9f9e76778ebca872d"],["/archives/2019/page/2/index.html","644ccdc44420a695aa23e579e96443b4"],["/archives/2019/page/3/index.html","6291cb31f2e8a598052a0468a4f2deab"],["/archives/2019/page/4/index.html","59c220a8eaa9df1c006ca9de1bb0a422"],["/archives/index.html","e8a0863af928472e9afeb3a1bc87e1da"],["/archives/page/10/index.html","f62c25756d6c41921a850e7e3f58ec0a"],["/archives/page/11/index.html","cfc0d008311aef0ca139a371c83a8b39"],["/archives/page/2/index.html","a9d70abb8f618e7253419cc43cbd7e62"],["/archives/page/3/index.html","f683352d9f28c3074c9576e97def8b6d"],["/archives/page/4/index.html","5d35c536474b389b1ebbbd11425c01f0"],["/archives/page/5/index.html","b6c375fdcdb058a4c28890694e3d14a3"],["/archives/page/6/index.html","d413f363d491c0462a91c3c4e07aa91c"],["/archives/page/7/index.html","67eb3f09c6e1d91719c6bca48cda4540"],["/archives/page/8/index.html","5cf29204d2c72f0fa07e69f5ba52c9c2"],["/archives/page/9/index.html","80dfb9458c5b2ca05c668e3587d569ce"],["/categories/autodrive/index.html","4e50f2d4a91e07fbc9f584496750fdfd"],["/categories/book/deep-learning/index.html","7aea28cf401d6f4656696e99a982d46f"],["/categories/book/index.html","72615980f3940cb24f1e3a77df0d8e1f"],["/categories/book/machine-learning/index.html","04fb0699d221011e21d320f9f2dcfe6b"],["/categories/caffe/index.html","86635c68ab64c1e76dfdda2fa9a3beba"],["/categories/caffe/page/2/index.html","a0d0af048ce06f14ae1d73e6f387c1d9"],["/categories/caffe/tutorials/index.html","80e51c378ba3c9ecc09d432859769141"],["/categories/cpp/boost/index.html","2fad6b3e0c13d2df3c3c305e6b6f8390"],["/categories/cpp/cuda/index.html","801e0c0c4cdda598d464ae6192874067"],["/categories/cpp/index.html","16ee09c7ed770ea616cb565d75be629e"],["/categories/cpp/page/2/index.html","58127c79d43a4c87b0441d30013ef49d"],["/categories/cpp/page/3/index.html","65f40f2181efa552f884c06b0618dded"],["/categories/cpp/page/4/index.html","f5bf69c23aa33489e4273ed368c9f3f9"],["/categories/cpp/page/5/index.html","9e3bb0e886019c3979b21b3e3258f990"],["/categories/cpp/page/6/index.html","32ba8aa2e91eb5c3cd6f84028a5943d9"],["/categories/cpp/page/7/index.html","2d08b35b088f59e114e2edcc5a9d776d"],["/categories/cpp/python/index.html","d9f6543d6b75e537fc69e7438251d180"],["/categories/cpp/tools/index.html","1e3e6ce2b95cda242cd8f6e80bd4b59e"],["/categories/csharp/index.html","53090749ad4c3df980648b761cdf920a"],["/categories/db/index.html","dc0183c9f829ae2d21c7dc2f29c916c4"],["/categories/deep-learning/index.html","f27947bb02439db0b5890c5a57ee50cc"],["/categories/deep-learning/inference-framework/index.html","f6a905500f77ca0508ae4f09bb15173c"],["/categories/deep-learning/neural-networks-and-deep-learning/index.html","a8ca028e01d7916da1a14ac2e361280e"],["/categories/deep-learning/page/2/index.html","cac48eef295f8a8d67931eef57753673"],["/categories/docker/index.html","56493850e6095eef56fb7650489cb297"],["/categories/gis/index.html","1171d4594e6e980a41bb6a0c64418f4a"],["/categories/git/index.html","146bcffe3ceb3daec7fa22e0c8598721"],["/categories/golang/index.html","5ee6274e88bc1f25c0cccf7feac9a088"],["/categories/hexo/index.html","38e8ab7e5508976e93f9ca1b55aef94e"],["/categories/index.html","2ab12a02faaedf4233b58de8006732c7"],["/categories/keras/index.html","787aa8d907ceb8654c566211a90a550d"],["/categories/linux/index.html","83f15b46c266f5101f9dc11f8e91b4ae"],["/categories/linux/page/2/index.html","874669e735d1dc154ff702f708edafe5"],["/categories/mysql/index.html","1989e61f13c559daaa734efd1ed1cb1e"],["/categories/nvidia/index.html","3d9bb85552082a33ba944a9081820af4"],["/categories/object-detect/index.html","7daf3f59c8ac8ca8b43d1414bbf17ed3"],["/categories/object-detect/yolo/index.html","d0c0154a26b1aec68e39503df4e6dbab"],["/categories/opencv/index.html","90e30534899f87044989a99225b1bfec"],["/categories/pcl/index.html","176ed2fe4c7ca9303b8fab1920709b52"],["/categories/python/gui/index.html","03a20e5cc6a71cec1e55a1ae0e6f20d3"],["/categories/python/index.html","a280cfb386834ef32c882646f68622d1"],["/categories/python/numpy/index.html","60390148aac1532144a6c68d13b92234"],["/categories/python/opencv/index.html","0040bda0b71562105c5626a920e6239f"],["/categories/python/page/2/index.html","9e939b4633a054d7ef7c4fe37fbf3712"],["/categories/python/page/3/index.html","b678f90858c6401cdbafa2573ce72290"],["/categories/python/theano/index.html","f95907247f373000cd38523cca4dea94"],["/categories/python/web/index.html","2f4c2c9406abf584387be104d0e142e7"],["/categories/pytorch/index.html","bb59a136f0e732267febcfd1338619d1"],["/categories/ref/index.html","8e256c44023bc22729f0f6cb459d1305"],["/categories/ros/index.html","4a111e5c80eacf6c2fc9c2c7751f16e5"],["/categories/tensorflow/index.html","05442779083a421aa578e151cf2d9b77"],["/categories/ubuntu/index.html","10ca5c86b75aa30473e572bfba7f1105"],["/categories/web/index.html","44ad70abef3a4d356cb71be6774f8292"],["/categories/windows/index.html","75cf05bd7df8b2653bf06470b8259126"],["/css/main.css","3c4ba269531d6a85106eb48d7be86679"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/kezunlin_avatar.jpg","f0ee2c3bc4ff6e3197dfae29762eb490"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","4f6c74ddcbabb644e4e6cc56e9199818"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/md5.min.js","677f893f6f521d7fe9bfcbe171394db4"],["/js/src/motion.js","3234c3c5bb08da2af78a188cb5784f9e"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","d1ee25b7823708d89469b27b6232257c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7e33723f6b8a9f55a1ce3979e3d505ed"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/gitmint/dist/gitmint.browser.js","36b9f7b70e385691c3cfeaeb5af9d044"],["/lib/gitmint/style/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","cffa5707f0d54c9f561715e0809487bd"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","fc800453a14fdf3d3cdfb7433511d5d6"],["/page/10/index.html","d0f54cab1dd7af9eb0037f82a119a9cf"],["/page/11/index.html","b1fdcbeff19087e71827eabeb821c502"],["/page/12/index.html","f08a9469712b051924d00a16790208d1"],["/page/13/index.html","53a5b8d978f49bfe29cee34c42429d8f"],["/page/14/index.html","ce7ffbc88a74c93c0b1f9417e47dbded"],["/page/15/index.html","7ba06eb370d15dcf9d58507a168b0a41"],["/page/16/index.html","b7e9ab9287edfc1c7697bbaa2a382030"],["/page/17/index.html","2d88983f669e450429caf3aae04e69b5"],["/page/18/index.html","a55ea6ec46d7e713695fd711bc048886"],["/page/19/index.html","7c51eeb44bd988cc040ea8254fea0977"],["/page/2/index.html","6808877bcdeee66ac97308d7a986dad9"],["/page/20/index.html","87f5315728b82fecdf94c5e890ba3cf4"],["/page/21/index.html","ef9973d501b4f136ddf2eb0ca089c58b"],["/page/3/index.html","d0655b65539b4ab2182e5b33c8723959"],["/page/4/index.html","4a9f4c87329cd1ac3e3b0cf129ea0d92"],["/page/5/index.html","d12c1329abe7acb3309bb5885c31538d"],["/page/6/index.html","45be233642fc62855507e8d75eea6b1d"],["/page/7/index.html","d620a2e6a1b96a2a1d45b87d9e0b78c5"],["/page/8/index.html","c8170b71fd506057c626bf35c7993103"],["/page/9/index.html","ca21562b7af942f8cd760c72dc513119"],["/post/107cbcbb/index.html","b120ddddc003730c0a59ad63c74b8dd7"],["/post/12766fe4/index.html","11aabf415d4033b70e80fb493d06c826"],["/post/12ab5707/index.html","3521b70e28f6cefbad8368b562a189f7"],["/post/137aa5fc/index.html","c3a85a7fd4d4c8f7bb971526804e45d4"],["/post/13f1a6ca/index.html","8a3a5e5c10eb2bbe2c3a74ad6d9a8409"],["/post/15f5c3e8/index.html","cd41e5a80b8ae6dc113b96d9365d34d9"],["/post/168bc2b4/index.html","3db383a95a1efae988cbb49fd9b8a39e"],["/post/1739694c/index.html","15f1b0eccc67a30d957bd9530617605e"],["/post/18a77a36/index.html","eaad44bbdb9c163027de395ea1af31bd"],["/post/18a8ed49/index.html","2c5d737dbfb1c5c473043a9005942898"],["/post/1cd6a04d/index.html","1dcb7727d34552bee71ee55215d7ceae"],["/post/1e37a6/index.html","afe9e653d564239c64c3e310ecb5ace1"],["/post/1e5d14ee/index.html","95bff14db152fc66ab721509f7d976ed"],["/post/2059dc88/index.html","29f30b48f6e495566eac01b3cbaeb3d1"],["/post/22391aa3/index.html","1e580533f4e4341f2e07e56df95d8c33"],["/post/2273a34f/index.html","44afb94d3570ab9d30ac6af6cc9af87b"],["/post/22f1214e/index.html","0c2d08e4e875857821ca4ae557a0d288"],["/post/23014ca5/index.html","5617187c089bfd5709ebaf4b17ecf57c"],["/post/23b14b43/index.html","de289b0124295f4a9ffe32668cc94f2f"],["/post/24d22b46/index.html","1cd1074ddc6404dbf64b62e4eee00699"],["/post/24e94603/index.html","bef0451d9d001b1ee276eefdfe9989ab"],["/post/24fbab5/index.html","c8c4025b4d93e7f096f092cb5e23706c"],["/post/2613961a/index.html","86934225a3b80b51b9a7d18d4ee2a607"],["/post/281dd8cd/index.html","ffdc732f82094f1d021b923c9369fb70"],["/post/28dec829/index.html","56276dbe391d45b589bb11bb8befc37c"],["/post/2d809f92/index.html","475772dd83499e66968a5d55ab449f02"],["/post/30e0cb19/index.html","194e67a2753a8d2b68d3192b8dae9ccd"],["/post/32533b9f/index.html","19546c09d347fcbda32c917b7531e846"],["/post/32d1b25/index.html","faa59ccf1e971cd29c1f0cf2957d7711"],["/post/34e2a097/index.html","e11acedd2c39cfad1586f0f0cc19e7ee"],["/post/3620a857/index.html","6e1dec93ccc4d205160b3609720c72cc"],["/post/3670803a/index.html","3ac210cd05e7fccb4e5d41107c958362"],["/post/36e618e7/index.html","b6a0d144048f8d4b0ee8910265a3af36"],["/post/39ab7ed9/index.html","dd1843fd557c71a9c35c3e238187e98b"],["/post/3a558aa4/index.html","8d4a77e029a4dba83c71ef0d6531d069"],["/post/3ae35270/index.html","6d62086d94d2f5f9f4bdec92e531b88e"],["/post/3bee8fac/index.html","da9b8dfc5be46ec0f337a7c8ec6a34b8"],["/post/3f33896b/index.html","8586f8509b27a5d0d5656f0182aff001"],["/post/40e625a8/index.html","7007dc20d9f6e08d4ee2ae3db7ba2aba"],["/post/41448ed1/index.html","575ce469591ba743017513b44f2571be"],["/post/41fe963e/index.html","a31b13905bb8fa0c0c46b2f8113c6e22"],["/post/431550df/index.html","573a27319098a93586d7f0456551b443"],["/post/4509c582/index.html","f5b01a932d25a0819fea72164e9e233f"],["/post/48d0ac2/index.html","c5194bf15a4248ad448453d5504a6afc"],["/post/4a1427cf/index.html","271afcaf3d12f4c0409e2543453d3959"],["/post/4a17b156/index.html","8b0089ec19834d53680e01d5fa8b6331"],["/post/4bc343c9/index.html","0ff9c4296995556ed80a6b2be4f0e1a5"],["/post/4ec4ae49/index.html","587d5f80f1659c7229076ed3b1fe2362"],["/post/5076bc45/index.html","fbf67c950838bcb70163bada8377c92c"],["/post/514b8abd/index.html","93c2b06878f5f69ee4d4d2bde209fbe5"],["/post/51cd9fa0/index.html","5f5afd808b1799b23df200b68cd7dc1c"],["/post/52a71f5d/index.html","7340cf2c97e2d119696a64ada9c6859c"],["/post/54e7a3d8/index.html","f23611e309f424d07178f326555efc24"],["/post/54ef4797/index.html","9374a63daf061800c35ec2792a02eabd"],["/post/566c93e7/index.html","e864c75ae72fafbde7133f84d7374de5"],["/post/5898412/index.html","fa4c0a64657fae857e595b1e9e9ac2ae"],["/post/593a3fb4/index.html","1f1f4a7b7e21d9a7cf23c270b3f094f8"],["/post/59afd8b3/index.html","2fcc81cde73532f26ea00f001bf99dde"],["/post/60df7e87/index.html","f7fe01a5969d37fc81bc12d627214c8a"],["/post/61d55ab4/index.html","92e98aacd9a47a4d6b1c38c1030ba895"],["/post/62433a8c/index.html","2e7ec58407385c97e338d86dd57811d6"],["/post/62811272/index.html","7f142f40808a90fee3d3bfdff12c51e0"],["/post/6293dd25/index.html","088a03d0e62a04dc8a3d9acf69759d2b"],["/post/63392b1e/index.html","6946bf4b27791686966ef69690efddbb"],["/post/63b5dbef/index.html","f3ff31bd167c50fe31f858cc207b4f81"],["/post/654a6d04/index.html","021c61d7e3ad38ecc7492c7f552f5274"],["/post/6580691f/index.html","d80f6f140fbef65ea1c6cdec08fb1253"],["/post/65dc693d/index.html","8c8993f541f922281d6a2e653d51e108"],["/post/66241a6b/index.html","914154fe8b72a4931aa23522dc429103"],["/post/66242a23/index.html","f1118137bc841bb922fed2984fee2b6b"],["/post/67b8e780/index.html","9fd47a2ac10b93b1713976846e716d5c"],["/post/6887a6ee/index.html","61efda3a48a6ae567529b84fe1bd59ee"],["/post/6b505d27/index.html","e467983f2efdd901bdb367a21ede84e8"],["/post/6dcf96c5/index.html","1bcba7e498b30de21f44c56446813a95"],["/post/722778b1/index.html","d6997d2fa69fa7ded22fb7f95c98c195"],["/post/74399d1c/index.html","8b76735a0759fab5ce10f79435d2af59"],["/post/76d1a936/index.html","fa918fb42de95441724a390987a46012"],["/post/7734e0f4/index.html","79653c8a7e3062fd468f193fa391abeb"],["/post/779b45d6/index.html","81ee61cc1a6c06979b536719c929deeb"],["/post/7813e5f8/index.html","cd8d3c9dc38362ca38896313385b4514"],["/post/79b257c8/index.html","d963a80a26c1ed1ca65685e347c25ee7"],["/post/7a6ba82e/index.html","4f44d88d9ccd1ba3f1ed2196f5a69ac6"],["/post/7d02ce04/index.html","d8459fae74a8584c3bae77081f11b916"],["/post/7d7131f4/index.html","4816c6858be0d2c7bef03f191d41946d"],["/post/7f53edb9/index.html","dd04dc15ed702a0f5b3187666fdd0275"],["/post/82f14f26/index.html","cd86df6952ba47400da08e30e99b8dde"],["/post/83828674/index.html","773fdd7bb316f0ba71583534c8b07bf4"],["/post/84daa1ca/index.html","685d34c887765ba8a3e512ef46bc4d83"],["/post/85230b59/index.html","1233174daa571406bc3a7b03b17d901c"],["/post/854071ac/index.html","952d42ca09469c35e6eda5b38a9abb85"],["/post/876d75f2/index.html","b676ba810198ae06f87adf45cb97d7b0"],["/post/88fbc049/index.html","65304cd08b694c1c37a77af6f5676bef"],["/post/8932eaec/index.html","a235cdc20f018d43e0415ec28747e070"],["/post/898963b1/index.html","e8515d05649ecee8918af48005e09b65"],["/post/8a012fb9/index.html","a81045474e3a65fa0eb5e537d75abf94"],["/post/8b2d002b/index.html","0153a8195ee5cead999ebcb40755db3b"],["/post/8b45c159/index.html","e143003149ecfd2e1b4662281b43560a"],["/post/8b6f15b4/index.html","381b4df220d5c2d2d22ab57f7e91dd44"],["/post/8b9c051d/index.html","070ceaa569df64f573ae947543500093"],["/post/8bdc1938/index.html","f52fe7123f945994b096ae959fa281c2"],["/post/8ce3f979/index.html","09f16a6a84eea45a01e2f36bfce2913c"],["/post/8d4707b6/index.html","33a22a4006b17cb90956daedb58307dc"],["/post/8d877e63/index.html","77a98a032caad41d95f221186e9b7eb1"],["/post/8db507ff/index.html","b6d9c6a3693156ea7a26bdfb15066ed6"],["/post/8e6eb7bb/index.html","7cba7b8da4156ddbbd28b96307145847"],["/post/9054e84f/index.html","e490e87d0e2b07d7da7d787c09dc4d90"],["/post/917a155d/index.html","55cce3e438a575b06eed51f91b88e22b"],["/post/91842b71/index.html","6dd74cc6d734d9a145f89a5baca10d1c"],["/post/91b7cf13/index.html","f49bf7f2ff17cd882cea81d5b78df0a1"],["/post/924c1a5a/index.html","4c26811defd83646de01304fb42ebb49"],["/post/9282a9ab/index.html","07a8e35b9fb3bfbd7a0fb381ef5a480d"],["/post/95370db7/index.html","981c4858d3c8f8c42158ce70fa782033"],["/post/9587bb47/index.html","3290ca8a9084c68e20f9b7c96165ef5f"],["/post/959269de/index.html","3742a208ce3d0015f6fd83210492b32a"],["/post/977f5125/index.html","5098a01c5ef507121acbe2273e8f2681"],["/post/97ff1ee9/index.html","7b80d81f918139a2f84a0a1a4f7e2843"],["/post/98df88a8/index.html","0cc201c3b126038dfd5b2f230ae93672"],["/post/9ab374d4/index.html","71f0850cc0f8a2c75343bc226b17ad67"],["/post/9b6567b2/index.html","4fa4cbae6b37148d810f95d4f2f9a3f5"],["/post/9cffdbe3/index.html","9cb9e37921bedaa9b1bc736d0b8a871d"],["/post/9eb841ce/index.html","51ad4ec242fdb386d9602b3ee6f8c05f"],["/post/9ede2c87/index.html","f4c7e56ae51f259e71c1c01aff2f5bd4"],["/post/9f24ebb5/index.html","75b89a0627a8d66766190677e90a4859"],["/post/9f5552a3/index.html","f8e3c6b6cb5dd10ca1b1bcd393cc5d70"],["/post/9f626e7a/index.html","23b55f902eac89f33fc8f8c095a5db48"],["/post/a0bd766b/index.html","1fdb0e4567311f1ffb60f1938a469243"],["/post/a0fb7f06/index.html","2e2b0fe838484c32fdc9f5390ee7102b"],["/post/a123bf9e/index.html","fa8675c740c4c3848a399b25fc8e4a7d"],["/post/a201e11b/index.html","fac33fded6a954c0066a31d29c3488cb"],["/post/a2962194/index.html","10e5ec05fc4d2049953f278b9278ecfc"],["/post/a41adc1/index.html","01995b736048c0ea7a8712732c0fc89d"],["/post/a5c428f1/index.html","24b06c00f14724f1a1afa09853a84d8f"],["/post/a64926e8/index.html","3b19199fcb68b723f1cfa1eee5116c06"],["/post/a9ff6f3d/index.html","bff978be9fa0306f42e5553e32b9f7e5"],["/post/aa0bed86/index.html","4db3659d00861acc2e1bb4b537063353"],["/post/aca50ff8/index.html","3d2d19bdf601b3cd60edee0b67dfedd0"],["/post/ad5c5bd9/index.html","0d0f1509bad062079cff6e8a9e8c9d96"],["/post/af038717/index.html","7bc37556ba86dd43170c32741356aa50"],["/post/b58ee955/index.html","3bf2eec2a7657b7a78daa7f2336fd8db"],["/post/b6d18d6c/index.html","06310ef9b63be00a79ddacb1730ff548"],["/post/b6e8d46e/index.html","210aa36cf132dae984896c17be837172"],["/post/b82753fc/index.html","c5183e9b7515d6c851661e8ce01edf5b"],["/post/b83bc460/index.html","9cc59a558ad3991fa02788bc23c63744"],["/post/b8792f9f/index.html","455862ffc92516d76f8285dadc9bfebd"],["/post/b8847d9f/index.html","54f9df87edcf2993b9eedd5f218b45a5"],["/post/b90033a9/index.html","ef443e0ace004a3ae9986651a13e94a8"],["/post/b901735e/index.html","b8ab5eb643323b48bb4e0326ca34b311"],["/post/ba8b6dea/index.html","6e50acb56d10205b7d65b40663cc1a48"],["/post/bb64e398/index.html","823bffd2a83847b5c5613dd11dd384da"],["/post/bcdfb73c/index.html","a1754bef0186f91f5045da2658fd7e22"],["/post/bf6232fa/index.html","cfcf51bc6f8bdc8445a1838e81933568"],["/post/c04efbf/index.html","bde8a70b1ede4936bec57aa355b6c7ca"],["/post/c10d5f0/index.html","1437a4128d46048e2dac296a7b9fd06c"],["/post/c385fcf5/index.html","206957924260e5823834481c248cf8b8"],["/post/c50b0018/index.html","8b46c9d2bf88b6381089112fb0f40c23"],["/post/c5e67530/index.html","7c65f0c8a4392017bfcf74a56be61041"],["/post/c691f02b/index.html","c2a628a2d1f51a4aad83c92cbb5ae185"],["/post/c6ead512/index.html","4300ccbeb701c6dd284c1db99985b61d"],["/post/c93b6ba6/index.html","35de276bcd82d630429fb73c462c41c1"],["/post/cabccf5c/index.html","2468177b7e2b26c22b55ac7b5f8948d6"],["/post/caef83a3/index.html","fb2d8cca44b6376de2ec80ef5da8b99b"],["/post/cb7c0126/index.html","eb736e463def632fd8812c9f7355b718"],["/post/ccc7d1db/index.html","e8b1a5daf91582120b822f67edcc4f52"],["/post/cf496af3/index.html","33014b604fd69baa0866fa6e26e0b5cc"],["/post/cf628dd8/index.html","c16ee48c260f6e98d160ee58600bfc8f"],["/post/cfeb28a4/index.html","aefc23699a12abcac771a09bc320a5f8"],["/post/d0fb133a/index.html","ec8ed999dcf18d1c9a7fdd79cb77f6b3"],["/post/d18f7712/index.html","9fb84674964b92492af8a4721deb35ac"],["/post/d29c6c94/index.html","46773c2c6c12a534c897dcfd9b724c9a"],["/post/d3079d23/index.html","eddf4118e47b704464b91cfe7a6fee26"],["/post/d5c57f56/index.html","752fc38c48b7098d3dd9ca724bfd72a7"],["/post/d5d4a460/index.html","1735a701d3e73cce64de1244fed49399"],["/post/d60ff6fe/index.html","35d7b724f73a4f715ca5ecd67e273f76"],["/post/d63ad249/index.html","4e9cbda7aa505a94212f3d7d64263afc"],["/post/d6cb0655/index.html","49b0593d3747e17b876d0bf0c9201cc5"],["/post/d97b21ee/index.html","ff05ec1040c6f09d98ea97632661ed12"],["/post/d98c80b7/index.html","3ec9feee701c6d579198a802f549db42"],["/post/da4e5d62/index.html","d9561d719d956b80085e942477cf07ec"],["/post/da9d93d6/index.html","90c58333ebbb3c40b20310d1526556ca"],["/post/dacc4196/index.html","f53bc2f6e2b57a40200af055fc211cd1"],["/post/dcffb1c7/index.html","02d55d9fddea45a697f79abb6e4b7b3d"],["/post/ddec790c/index.html","32cd5c35a6f60cbe3ea1bb1946089917"],["/post/deab4886/index.html","1b7c3138a1770dc820d87695d2361758"],["/post/dfd1ebf4/index.html","bad6c8620409b652d97ed3bb05c478c9"],["/post/e1d9f990/index.html","8a17602cda5cd061c34030f7ad514e25"],["/post/e2780b93/index.html","ddc2cf3bb87d516501e62ad510945e46"],["/post/e2c16468/index.html","a36e2fb6052c0b995c8b4634624756d4"],["/post/e88f04e5/index.html","7209a36b5300ad4e6f9f240879e4e4fd"],["/post/e8f8aadd/index.html","8a81a2e699e981c2de7a27a94c71f1b1"],["/post/e94764ea/index.html","c54453bfbb60e80e066e351ba7268fb8"],["/post/eab0dfbb/index.html","f90f9fb1d4da451213754700dcee1382"],["/post/eb97b6e9/index.html","85c9ca9c28d5b2b0c179f580fd7a5019"],["/post/ed043da/index.html","d52ac3901a40f90b0a2362c46fb13314"],["/post/ee123cac/index.html","ab7a965b49a6cefd350b3ebde47b3119"],["/post/eed0f482/index.html","a8c0eeb20ce051a2f83cbab4699a4cd5"],["/post/f0474806/index.html","08c25a6667b7358734a975841705f358"],["/post/f07cae6a/index.html","e5e017f318092808a8452a4c31c4d15f"],["/post/f241bd30/index.html","507e86787bfc618a153b450171d0115c"],["/post/f2522e33/index.html","0d87721417d6fbfb97e9f5e1d0110396"],["/post/f294cd50/index.html","4f9e4fb160c7c3a7b5711c5643bef76b"],["/post/f33ba73e/index.html","189cb52aec3e7a3c9ac99bbb7cf687f5"],["/post/f3c3eb8/index.html","31bce4233a152895752257b1f0f3f074"],["/post/f58b86f8/index.html","0c6ebe9a95939e63359bdcc55c88aaa1"],["/post/f7eab850/index.html","a5c5d074348f074f55f2ad7b77456e32"],["/post/fc655b6c/index.html","202232f6d040de5817661f4901662c2b"],["/sw-register.js","acfd63c60a788f189d1cc459024e3c0a"],["/tags/DependencyWalker/index.html","0c905d8b861b0124676a491c60089f71"],["/tags/GeForce/index.html","99644acd239f04eec14cf1d7a095ebd7"],["/tags/Jetson/index.html","142f2a2b5a035abba07e568400776829"],["/tags/JsonConvert/index.html","051366a18bee4cd2b3d26985e02375ec"],["/tags/LeNet/index.html","d33fbe91b8b176654706890b1b0b3e63"],["/tags/OpenDRIVE/index.html","1eb952deffe949e4a8646d45fd3ff3bc"],["/tags/Tesla/index.html","dd2d255a58f8cd17568d8fa7e05ee5b7"],["/tags/VeloView/index.html","5b3729bd58ede661627413b93f583fc9"],["/tags/address-space/index.html","b5020e5cf3fdfc3e93b51f0c6be1ca10"],["/tags/anaconda/index.html","4f9529e6a3fb05ef407382bc4fb16f94"],["/tags/anakin/index.html","8732238d69c5ec3b4e2cc7e0ad62516a"],["/tags/apache/index.html","9b1ca261a2756226bd2d52afc9f93af8"],["/tags/apollo/index.html","c20c448b6c3e8a7a3a465c766acef076"],["/tags/app-config/index.html","74500f47342eb8d626fa9270bb6ee44c"],["/tags/argmax/index.html","b3dfe91243176fd70d9ec1960a1bf9a1"],["/tags/arm/index.html","6a35e4fbd2e324f9b306061264edd2a2"],["/tags/artipub/index.html","d51ef97d9ad189d164e9743e77bdbf82"],["/tags/babun/index.html","261fca4e91808ec6c8cf6f4794d66672"],["/tags/base64/index.html","4a09605401d1607e61df7aeb55d309b9"],["/tags/bash/index.html","89c83f856a9a7abb3069d8746bd020ed"],["/tags/bazel/index.html","d03304fa2c97eb5ac4171ede29181632"],["/tags/blocking-queue/index.html","e5933a773f81bc791a485d19db794fa9"],["/tags/boost/index.html","a7cf0f408d8656c74277adc318dc050d"],["/tags/cache/index.html","a277817f91ba6e667c49cffe0b439b2b"],["/tags/caffe/index.html","1cf1828e602e9041533be5607a825ee7"],["/tags/cgal/index.html","44ae9ddb4f98c9a57898cae1a6f1544a"],["/tags/chrome/index.html","13ea0e8804f200803bc2791b621f85ff"],["/tags/clang/index.html","3ddae81f3f21d1da4de39d0ca4fd456c"],["/tags/cmake/index.html","bb3d040956d0a1a32e82e6cebc20c18b"],["/tags/cmder/index.html","8efdc6869610949291bf12fda8dcedff"],["/tags/colorwheel/index.html","8ac891d36eae5613225678b094318a7d"],["/tags/concurrent-queue/index.html","69639948282d1fed37902179ef597a31"],["/tags/const/index.html","6c4d0cfbaef0c07a060ee0843405271a"],["/tags/cpp/index.html","8e68b33a4b3f8eed5f2073679e9f0a90"],["/tags/cryptopp/index.html","99b4f746042eca3c334920ff427dd130"],["/tags/ctypes/index.html","375bb3917dfed2dd6987e2a094130585"],["/tags/cuda/index.html","ecfad7277493724eb2c48c0a5e3d115b"],["/tags/cudnn/index.html","50a58c7047462c7fc8400eb44b31b21d"],["/tags/cupy/index.html","821253d30e65a38fdb1d2f69f38713d4"],["/tags/curl/index.html","f2d0a15270fbd31934677ce41281240e"],["/tags/darknet/index.html","c6d563ebbc906fdeaccf4b1755f29668"],["/tags/datetime/index.html","6a9ceec307593bfcb2889a1ecbea45ca"],["/tags/deserialize/index.html","c3e5dfda9c2f59e6ac5b41d8ef2a26fc"],["/tags/dl4cv/index.html","900650d8cef3e7254a8bc92d4cbe8eb1"],["/tags/dlib/index.html","afbd2b5624c0e0bc050264e30102c5e7"],["/tags/dnn/index.html","5e90b5eace12ad53f0b95c766825e238"],["/tags/docker/index.html","4ba0d26c9b50fce4ee88a16c29e85c99"],["/tags/doxygen/index.html","a3cb3aa1b7fe7de47627778b53aeb712"],["/tags/efficientnet/index.html","b19bb720934b2cac83f609b76f95f76d"],["/tags/eigen3/index.html","8dfe5086e13d4b499d9874b72140c7c6"],["/tags/extern/index.html","488b57a383250a4ae8ec77ac4e2636c5"],["/tags/faq/index.html","54f1cb47b62af4149fd8582e363576ad"],["/tags/faster-rcnn/index.html","a58fdc9908e0ecd004d15e48efaf584f"],["/tags/fine-tuning/index.html","e6acc86fea5b267e8edaac90eeba4a6e"],["/tags/flask/index.html","52f520fd03e9ff5b5d55b0d3ae3fc731"],["/tags/gemm/index.html","7d5e48f5991abea9c90a3a5b0bf0c912"],["/tags/generator/index.html","6648bd7cebf8f5407c0815751847e910"],["/tags/gflags/index.html","557d7443921ee934421ec159b9472396"],["/tags/git/index.html","165ffa8deb29f6ae0066a7efc671ebd5"],["/tags/glog/index.html","f037af2f2be3c2d90454b312eff3fa9e"],["/tags/go/index.html","49d5cab3841d0bc8b9801653be04735d"],["/tags/grep/index.html","6c56bc6c5f4a33956660a374de2cef00"],["/tags/gtest/index.html","4aa708690b62c4adccb613d07fd0609d"],["/tags/hexo-next/index.html","3234178592e580c98a5da488ff50c09a"],["/tags/hexo/index.html","87c9543a26797e617e188042b9c42394"],["/tags/httpd/index.html","6a3159e18327afa1b5d89deaecc19740"],["/tags/image-classification/index.html","e35bbb1fabcd873606354679a6571004"],["/tags/imagezmq/index.html","4ebbbbcfc7b15ac146ffc298756ccdf6"],["/tags/index.html","faafb95a3615ac1dcdec332d0d913841"],["/tags/iterator/index.html","be264a2991f115e4cf4d4edb2263376f"],["/tags/json-net/index.html","42085d186be55f5ecf0673601ac0018e"],["/tags/json/index.html","af5f468bb061f167f4fb6997b07ec4bd"],["/tags/kalman/index.html","a3fb41d766258d2506bcdc851708c91d"],["/tags/karas/index.html","9db31df5dceff5165912b9121517109d"],["/tags/keras/index.html","fd3f55696d92196eb54c8165285ba476"],["/tags/kernel/index.html","2f21bfbd12218e896629384301275575"],["/tags/key-press-event/index.html","9e8111bc4a36f2a1cfa282001aec8703"],["/tags/kml/index.html","167a21f71afdd385adaad9c936e0a1dc"],["/tags/lambda/index.html","3835f7d80aeafed8ba9dc770cab3ee69"],["/tags/ldconfig/index.html","cc54085d5f5f06b70e33a370da2524c4"],["/tags/ldd/index.html","1e89217d319894106485dfbbf2647737"],["/tags/lfs/index.html","d76299471a2b124a6d0bbe2f7a64fe3e"],["/tags/libjpeg-turbo/index.html","dfc12dbc3cc813a2fc6bbcd9d8f93fa6"],["/tags/libjpeg/index.html","0a5b2d054f6f87e111c0f4b5a74af94d"],["/tags/lightdm/index.html","47df8464acea52b6845a0108468a1739"],["/tags/linuxdeployqt/index.html","ba96b0878203ce11b1f494cf7330200f"],["/tags/llvm/index.html","9b09899f3da0588427ebed9316d000f0"],["/tags/longblob/index.html","261d0b94ff0d228c5f79cd9887e6980d"],["/tags/macro/index.html","a688fc474b7feb2e73e1d5458e32443f"],["/tags/mago3d/index.html","d4af9dc0b49e0dbda716e5bd1a59e85b"],["/tags/matlab/index.html","c755dda8c15c6f993b67629db4f1c698"],["/tags/meanshift/index.html","021503cb8e20073f294f1ebce3cf5342"],["/tags/ml/index.html","89a0a2909f8158c2909550862cbd4a01"],["/tags/mlp/index.html","89093ea11ade638a40b0b4a5f38dcc2f"],["/tags/mlpack/index.html","0eb198835a680f718092580de088fcb6"],["/tags/mongo/index.html","3dbbcb3da1786e299a4256cf613764be"],["/tags/mongodb/index.html","9782eed507850831527f67551f42cd75"],["/tags/mot/index.html","2ec19038772df82b43802df6d1cf8187"],["/tags/multi-gpu/index.html","01fc16d9951bb697973397a0b0b0095e"],["/tags/mysql/index.html","20781e50bd90b88cec3657bcb5a88922"],["/tags/mysqlcppconn/index.html","e0ca8512b6d106aeea5b73ac1ceeb3a4"],["/tags/ncnn/index.html","aaf6c9b2a1f9b9ce5c7332c0d7091eef"],["/tags/network/index.html","4a10c83a8c88d8e821ed489cb106cb2a"],["/tags/node/index.html","c12db3ba7178e6fe320fbadff7f0aae1"],["/tags/nodejs/index.html","13f8eecbf5b1cfc2c86dc8a771a09438"],["/tags/nohup/index.html","47512e8d2777f739f35da69da4294bb5"],["/tags/npm/index.html","403f83f3247ef782b0760787155d5902"],["/tags/numpy/index.html","83760ef092d603f172f49186e3f22399"],["/tags/nvidia-docker2/index.html","98bb770335da9a96530c7432a317e4f8"],["/tags/nvidia/index.html","1b9ba284ade74f91ac62e0b76d1741e1"],["/tags/nvml/index.html","d666b833cc13b4f2a46447ba29f529cf"],["/tags/ocr/index.html","16d2a6622c809d1aa02776f75815548a"],["/tags/oop/index.html","8ade0e7f4218bd4aa46ee75d06585a14"],["/tags/opencl/index.html","7d88bdbdc6e9beb513fae1e326dbf904"],["/tags/opencv/index.html","42cacb41fc8bac3ff5d01a369484fb92"],["/tags/opengv/index.html","8e9679f45766e1a306ef168e4ffd3924"],["/tags/openmp/index.html","90567383b49227b95e92371090ca7efe"],["/tags/pandas/index.html","83738cb02945ac57ffc26a4ba7eec7c9"],["/tags/pcap/index.html","c7012b114e6bc03e67826356d5a3bc7c"],["/tags/pcl/index.html","1a4d9b69d2e2502ff32f7b13500798cf"],["/tags/pip/index.html","980c9eeb6e244449759c2551063e42d1"],["/tags/poco/index.html","e8fdd4105c67837256f8272385951e7a"],["/tags/profiler/index.html","6082d717f6926e0c03b9813da788aee7"],["/tags/protobuf/index.html","14f3c657adc7bec9c6e16a576b16ffe8"],["/tags/pybind11/index.html","5ed992146d475ea38e034b019ab6149d"],["/tags/pycharm/index.html","354415e8b42742a08c957ba903611b3d"],["/tags/pyinstaller/index.html","12d440e9f836c5fbad5990a5ef405371"],["/tags/python/index.html","3105b425ce2996225977440d44ba4429"],["/tags/pytorch/index.html","479cf89c7276366ff331d30563bdeddb"],["/tags/qt/index.html","a39552ace4fa50b7599d83a8f493d0ac"],["/tags/qtcreator/index.html","fb309e7c44969fc506769ddf7ac49fbf"],["/tags/quantile/index.html","4444792f515584aa5c38d530ece48893"],["/tags/radam/index.html","60c6c03bf8f3f585cc0078334c52fe88"],["/tags/random/index.html","8b669eec8456d1bae628f8b912f0043e"],["/tags/rcnn/index.html","96c38bc0250981f3762443adfc1e09bb"],["/tags/refinedet/index.html","40c92d012e0a3dc872a7231ab720d370"],["/tags/requests/index.html","90ae26eb2dd11c5af7903e8e133299bc"],["/tags/ros/index.html","79be1c2e40854b6aac74178848ed26ef"],["/tags/sed/index.html","d4ace359ba45b67eeba7dc3af2469862"],["/tags/seed/index.html","ab703ed2c39745da9fe5a063378fc2f9"],["/tags/selenium/index.html","1898fe1068a1ca711d4654be5140ab75"],["/tags/serialize/index.html","41c653b7bd5857b334a3454d5da7ef5b"],["/tags/sgd/index.html","ba9926fcd519f0126a21d34231189911"],["/tags/shared-ptr/index.html","19c61b1a66927102f4eb0ca1c9f6e9ee"],["/tags/shell/index.html","92bb9224e28527edd84c03c715fe41ad"],["/tags/shuffle/index.html","89f09348f521145caa0e82adfdfcc2e6"],["/tags/simplekml/index.html","d1cc4d5c906714cdd492f6a24a3276ec"],["/tags/singleton/index.html","2ad593f9fb2475d9c4d9683626f99229"],["/tags/sklearn/index.html","98e4f9f9de9e513544ff340babc0acda"],["/tags/smote/index.html","61d5022df806195af04f5b4acf4ecb3c"],["/tags/sql/index.html","b52cd6379ee01527193aeb546bd2f029"],["/tags/sqlite/index.html","4d163b31e5ad8789c44a92b2f17563ca"],["/tags/ssh/index.html","a430992ee04318c899f762691a14447e"],["/tags/stackoverflow/index.html","54cb69413325bfe0749bb0c29e117f5b"],["/tags/superdog/index.html","4bd422ccc0f09f2c95fb1c0348c0ea86"],["/tags/template/index.html","69788555763b02343ac71040627c8c02"],["/tags/tensorflow-gpu/index.html","240245559a3466062417fbcec0fc451b"],["/tags/tensorflow/index.html","0328269593b8bcc8b443d9d9ce52cb3b"],["/tags/tensorrt/index.html","142f3969898dc8661b8105bc0071713c"],["/tags/terminal/index.html","9b24f720c9ac0c8516961fe8fd77d463"],["/tags/tesseract/index.html","2428afd6ec7ececb9da5ea8ff42e4933"],["/tags/theano/index.html","f4045e89f3fc265338b2ea3288b1c531"],["/tags/thread/index.html","376701648bf5e93af3b122d9f42fba47"],["/tags/threadpool/index.html","32f5bf0f5c9492eb6e16b5e714f77fb3"],["/tags/tkinter/index.html","97c40783c4843e6691cd95a19a455150"],["/tags/tmux/index.html","3c5c19d00427a09b644fd59b107e0a3d"],["/tags/tools/index.html","870e82c312f99be57bd9bd419812775c"],["/tags/tracker/index.html","95ee5813ea60f2451394b32b30702d7e"],["/tags/ubuntu/index.html","39f4d944d02b406577902f64764f8a1f"],["/tags/vector/index.html","f362a18b38ba359be8cb924cb527600d"],["/tags/velodyne/index.html","e00aa97f4f6e18f5a77edece8cf1e5ec"],["/tags/veloview/index.html","64402df9a349d1dd634ca98210d33f65"],["/tags/vim/index.html","e778b523d7b12b4a4514eb74a2264218"],["/tags/virtualenv/index.html","e2f7ff38654a20a338e1171e5af87e67"],["/tags/vlp16/index.html","cc7bff85e570d8f956ee252c2fa185e2"],["/tags/vscode/index.html","e17bf11f7f079fb741516517831fc33a"],["/tags/vtk/index.html","6da0d503e5b79d017da9caa1c21e5d2e"],["/tags/xaiver/index.html","8b2459f3520b72c53775bb9da8b36835"],["/tags/xargs/index.html","0a73d08677371695df0e790ac125f592"],["/tags/yaml/index.html","eb6ae56878995d4bdc507a7fee195bb1"],["/tags/yolov1/index.html","f591ae76554d10396e1c0a3ea59a828d"],["/tags/yolov3/index.html","c1cdee401ec276384fc842460cf2c145"],["/tags/zsh/index.html","0e65609825fb8d6692eb9c162d35b730"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
