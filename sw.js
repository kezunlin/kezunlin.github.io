/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/README.html","321847c8c3e2d636952f300b38fdfce2"],["/about/index.html","e3741803b634747677bbbfa8a4e50ee5"],["/archives/2017/12/index.html","de5a027645894fe41232a5ffd2c1df97"],["/archives/2017/index.html","dcadc3b7433c9c85cc628b65900355d6"],["/archives/2018/01/index.html","6822a4e26d8845a7ed849b30dce8ada9"],["/archives/2018/01/page/2/index.html","857d5439446e71d279d8c8713c391e0e"],["/archives/2018/02/index.html","36e290a3e925672a79ec5265a6f9b35f"],["/archives/2018/03/index.html","7b7c9a8bf3132ea537973be3bb3f643e"],["/archives/2018/04/index.html","2b465d4e08c638d45f388dd0ffdb9ba2"],["/archives/2018/05/index.html","6acfbbc3f2c2dac322abd4d471a7e064"],["/archives/2018/07/index.html","1f272809d53cb3fc9e1abe14a4895627"],["/archives/2018/08/index.html","6da0422d5872b1d90b483786ad5b5193"],["/archives/2018/08/page/2/index.html","8fa22671234730511fd4649c0c66c3b3"],["/archives/2018/09/index.html","e73a248b2c8b691ba4ab087b1ca5cdbb"],["/archives/2018/10/index.html","75a21bd840b3475d50399dace811e13c"],["/archives/2018/11/index.html","7431beec5ee27a3bf7005cf5f6455e67"],["/archives/2018/12/index.html","069a19ebd69e6921552b2dda56100bb7"],["/archives/2018/index.html","37288c232e51a03af125a08620cc549c"],["/archives/2018/page/2/index.html","4c0043c4153dce9e40c33cd3fc6a784b"],["/archives/2018/page/3/index.html","0a4f8e3fd3d23052eaa0c16a677d83b8"],["/archives/2018/page/4/index.html","ba6176b1966f85b2a55909dc18b24756"],["/archives/2018/page/5/index.html","945e8af529413a4b34eb6873074ea6ca"],["/archives/2018/page/6/index.html","9b63a7cee7953f89c3a9348c3a287da7"],["/archives/2018/page/7/index.html","df429f08144925addd07a96b0090c4a0"],["/archives/2019/01/index.html","169181243d6d19478efc3bd3b9180396"],["/archives/2019/02/index.html","10c924373015c5bffa485181cd438cbc"],["/archives/2019/03/index.html","1757f8dc48f021cd20ea08b01e485dd1"],["/archives/2019/04/index.html","5d5d4d20b818765a505de4d29e798120"],["/archives/2019/05/index.html","b68bbc504b84accdac6431fe3232f151"],["/archives/2019/06/index.html","a3a58b5de94f0277cea78599cea342c7"],["/archives/2019/07/index.html","e36027861eb577b255fc4c49cf58ead8"],["/archives/2019/08/index.html","f03be274ff35d8a142bb3e8825b79288"],["/archives/2019/09/index.html","8d30c49216e2e3abefb87590dce76044"],["/archives/2019/10/index.html","7f664822fd36360074308272388187eb"],["/archives/2019/11/index.html","adde0f6d4aef07fe1d10c6ee562fc178"],["/archives/2019/index.html","7e68b64cd241b1ef13e9c03f3389defc"],["/archives/2019/page/2/index.html","381176ebafcb54288fd7dea6d9e8d594"],["/archives/2019/page/3/index.html","0346e9156c23fa8c90d08db9a6baa46b"],["/archives/2019/page/4/index.html","6e5511bdae512a30861313d8139bd95e"],["/archives/index.html","628f8e455ec1f27f1f41d698af39d823"],["/archives/page/10/index.html","1208ffaf2d773d5bdadccdc1195b376f"],["/archives/page/11/index.html","6784cd774280c07199d91ec14247b743"],["/archives/page/2/index.html","ff8cc1ff637e0ee3b0a10cce4dc7c71f"],["/archives/page/3/index.html","55a0d40cb3f5a0f151aaa8134d6fc834"],["/archives/page/4/index.html","add7239ccf826df22deadcd67b12a4d6"],["/archives/page/5/index.html","4ca2172227e6e36efa4003b336fc8344"],["/archives/page/6/index.html","59189af098f029a0d83f659f2dd2acde"],["/archives/page/7/index.html","248359866bf48f5589c27880e1fd5002"],["/archives/page/8/index.html","2da055365cec518b878b27b14ba1f1ee"],["/archives/page/9/index.html","cc9ebd19efdc4a99a763f98f73e1b6c3"],["/categories/autodrive/index.html","5556baf78287ab76f36fb502e7acdf39"],["/categories/book/deep-learning/index.html","35c899e7fbdddca02bc047b8f0eb1125"],["/categories/book/index.html","4b67bf880f56ff8f5db55d159fb01f9c"],["/categories/book/machine-learning/index.html","055975e0861629597970486a18d363fb"],["/categories/caffe/index.html","18977e8bde1d6a16082d2ea4fc981b2a"],["/categories/caffe/page/2/index.html","5cfd07a28d20338336d203d6b82c17ce"],["/categories/caffe/tutorials/index.html","a0435b9662554ae7f975a1b8d9bc8525"],["/categories/cmake/index.html","188350003c2e3aa1dcbced89cf0ca28c"],["/categories/cpp/boost/index.html","bb5f58ae891836da12e7e4250db22ea4"],["/categories/cpp/cuda/index.html","11699ae471a67c75881a9e624f689231"],["/categories/cpp/index.html","4279d01e4b33bedb32df1868770870be"],["/categories/cpp/page/2/index.html","0a55b6c18a812c2cd1ec9cc52198ea68"],["/categories/cpp/page/3/index.html","e4f1ae91514b819fb2e87618fb858d6f"],["/categories/cpp/page/4/index.html","87cc123d0533379f813163c39c847a04"],["/categories/cpp/page/5/index.html","c75429c7509bf38a7bc31fd30be6976a"],["/categories/cpp/page/6/index.html","1bdd8b950ebf1bd35a592454f7ebc012"],["/categories/cpp/page/7/index.html","401f2000fa7837cc21abb97e129a194c"],["/categories/cpp/python/index.html","6b20914b7042903ea8eb23af2b7cd592"],["/categories/cpp/tools/index.html","084070296b5172e8a2ed8dc0624215f3"],["/categories/csharp/index.html","9562b9359fc7eb63cd4a1166c29a33d9"],["/categories/db/index.html","9c3d4c5bc50414105cdb050fe7522495"],["/categories/deep-learning/index.html","58e1ef92caf9dc3a7b7769da1816b289"],["/categories/deep-learning/inference-framework/index.html","cfcfa13c52d4030754f44b6e4fba8e83"],["/categories/deep-learning/neural-networks-and-deep-learning/index.html","468ab6f37ffea1735c1a32fe182331b0"],["/categories/deep-learning/page/2/index.html","7e1fb3082773c183f53baf42cb942ba4"],["/categories/docker/index.html","9604c0de44c446a014845f03380e9fdf"],["/categories/gis/index.html","7d4d9f0b33c32df6fb2f0ff5db1d8e15"],["/categories/git/index.html","25c08f55e6dba1ab495263748df1e420"],["/categories/golang/index.html","d644f072985ac119eaeaec133f4a8085"],["/categories/hexo/index.html","ea80b2a8dd42661642eab153de3e878d"],["/categories/index.html","cb42491aa11d20dc5756675ad2b04bc5"],["/categories/kaggle/index.html","9c8c8833f9a1556d0423b3879f34aff7"],["/categories/keras/index.html","195504b6aa59ea693d7036fb1d8adec7"],["/categories/linux/index.html","85122d60dac7ffdb150bd82af9dde190"],["/categories/linux/page/2/index.html","dcf69ac997f5d46a625bea54d9a94fd6"],["/categories/mysql/index.html","5dd3b052c6a31fb99fb3b9f43ece85cf"],["/categories/nvidia/index.html","ab1ea4cea9762d7ce21aad168c84bfb8"],["/categories/object-detect/index.html","7c8b6812e2e36781a0f7f3088634af1c"],["/categories/object-detect/yolo/index.html","2d1689acd7b11520a25ead74b060a074"],["/categories/opencv/index.html","6df920a84afb508f61cc00568112c11a"],["/categories/pcl/index.html","8369ffc2b810191f9e9513c8dfed7eca"],["/categories/python/gui/index.html","cc625b76493d7da47ad3289ac65a0663"],["/categories/python/index.html","ae3b7b218909b7a2048f94b2ef7bb35d"],["/categories/python/numpy/index.html","a5cd22205688657ca7762a91293a0f81"],["/categories/python/opencv/index.html","e4437cc0c14670d8c679980cdfeb8581"],["/categories/python/page/2/index.html","e8773ee6e3c1f55b341902cf1ca8d5dd"],["/categories/python/page/3/index.html","4da014f84ea2a4b78385be847aff68cf"],["/categories/python/theano/index.html","1b7738ef3f045f035b084199aaa03a7b"],["/categories/python/web/index.html","159408ae842fa3447eb04c0f5b0e0519"],["/categories/pytorch/index.html","05792243443e83c52ae938b3dc34c7bd"],["/categories/ref/index.html","c535e0b1057b9ef434f76f2656e10c1e"],["/categories/ros/index.html","c41e7ce2cf6dad5aa79ac102217cfeb0"],["/categories/tensorflow/index.html","87b60ef2c3b4e7a51837ec4a9e251da3"],["/categories/ubuntu/index.html","6a412c947ceaa86caa9484be297e798c"],["/categories/web/index.html","0b4c55f9f1f3dfffcb56382fcd7d0023"],["/categories/windows/index.html","e7c8475f2db17cac55f2278761a4e875"],["/css/main.css","245968afe1b97e0c47eb71046eeef048"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/kezunlin_avatar.jpg","f0ee2c3bc4ff6e3197dfae29762eb490"],["/images/kezunlin_logo.png","0f26fd63ce2f1f424300020adbcd54f6"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","b44e63a2fc3a86715ae44d84bf70a4bb"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/md5.min.js","677f893f6f521d7fe9bfcbe171394db4"],["/js/src/motion.js","3234c3c5bb08da2af78a188cb5784f9e"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","d1ee25b7823708d89469b27b6232257c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7e33723f6b8a9f55a1ce3979e3d505ed"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/gitmint/dist/gitmint.browser.js","36b9f7b70e385691c3cfeaeb5af9d044"],["/lib/gitmint/style/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","cffa5707f0d54c9f561715e0809487bd"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","907c76b94b514cf923a743c371ca85de"],["/page/10/index.html","f27413cc6461fe39f45f3e4addfd3e57"],["/page/11/index.html","c61b6038e9b2aa7a4aec1a2ff09937f0"],["/page/12/index.html","287751b26a443536d387959678ed1e36"],["/page/13/index.html","94ffeff51e6e0607ef2b7de9a0f1dde7"],["/page/14/index.html","36fc69ddc5f44e7ec946e5d2742094f6"],["/page/15/index.html","9e5470255df80f83d41056be3f7d909e"],["/page/16/index.html","50b5063c1c6c779b2091c5727041bd79"],["/page/17/index.html","a80ba92d65a64521dc67f84dedfcefcb"],["/page/18/index.html","cb957841545ad3a0fb051e0020ef0e0c"],["/page/19/index.html","4b61942ceb5aebc91cf9b7346c9ad630"],["/page/2/index.html","e25758230f8ae702012406aca0b95bd3"],["/page/20/index.html","45962faaa1b534bc09792b7ff428a5b8"],["/page/21/index.html","d890e74c3037f20f74e229a60434d4c8"],["/page/22/index.html","427a00fb227e185af577c30215029d4f"],["/page/3/index.html","b75ccdf9b50359ee15c1d7db022e1bcd"],["/page/4/index.html","ef18cc89caa3c2decd9c2f37e173724d"],["/page/5/index.html","efef9f2816fe38ad4d224dccfbbae3ca"],["/page/6/index.html","8b13695b0b5ccfe3e3dd1d5947073f4e"],["/page/7/index.html","8d80e52bb53683b886cc90a4e92e07ca"],["/page/8/index.html","3aceeaf4aba67f2b7e1dd8ca48f006d4"],["/page/9/index.html","d64e930ff0e565e5f2014a4f5fe192fe"],["/post/107cbcbb/index.html","b0dfb8c24f13d2fde1aa2b1b41c72595"],["/post/12766fe4/index.html","b2caf81af7e3719d67d0a7bdd8241381"],["/post/12ab5707/index.html","4e6e30b6d135804e0956d4645bcdc47c"],["/post/137aa5fc/index.html","1777eb74c6066223729d406490c8d461"],["/post/13f1a6ca/index.html","194549a440799ecc70895904edd524b8"],["/post/15f5c3e8/index.html","8f34b220f6d424a7cf34cedf26625672"],["/post/168bc2b4/index.html","092de929cac7cb35fffeab2117a32f66"],["/post/1739694c/index.html","0c266f89bbd8788f306d4b4ff480cfce"],["/post/18a77a36/index.html","e2b8e6ff58c2d86c7feed72a14110d69"],["/post/18a8ed49/index.html","b3887a6e96bd5a5141975f434ddbfcc3"],["/post/1cd6a04d/index.html","5b69a06644815a2fca2a12187e4c79f1"],["/post/1e37a6/index.html","19a524e14a897f7e8fa1ece1e4be5c31"],["/post/1e5d14ee/index.html","e206ef4c87299a9f6abc31eaccf18735"],["/post/2059dc88/index.html","aeda85bace4c31005caa7c3e5f98a3a1"],["/post/22391aa3/index.html","3361ee38cd41e2adac7cc899bd753906"],["/post/2273a34f/index.html","e63f3fe696f9af29863031461c44320f"],["/post/22f1214e/index.html","a27935402f5706ef3141981ef2557d83"],["/post/23014ca5/index.html","7b360564937d80a66b80fa58cf4a5d73"],["/post/23b14b43/index.html","32815eb269dabdfff4eb6dd62ddcad15"],["/post/24d22b46/index.html","5d85e0b2d5435edda10c9b3328b13c3b"],["/post/24e94603/index.html","82a1d072136f1e8e3d6f68b7cf3d3649"],["/post/24fbab5/index.html","71370f4dc4cafc7e6f4fa5501563ab73"],["/post/2613961a/index.html","bcc0924d7265f5a302000e2e36645bd8"],["/post/281dd8cd/index.html","0d18526eac0a90e0a7376fa52ecdf144"],["/post/28dec829/index.html","7da927c5dec1c4e5cc73f4fd03c5f0a3"],["/post/2d809f92/index.html","1a6967fb1c2feca1caea7595dd8fe732"],["/post/30e0cb19/index.html","944b6db43094d09d9821206beaa6490e"],["/post/32533b9f/index.html","539fbaec80bceb4c0650c1e09c6d37ea"],["/post/32d1b25/index.html","0e653ac7949f21225c25013055bf1ebd"],["/post/34e2a097/index.html","b2424a01c91c9764734ec1835aa1beb7"],["/post/3620a857/index.html","3dc6689b870d773fb7ab314dcb22e577"],["/post/3670803a/index.html","83d9933a7de2c579cd913a7622b7d0fb"],["/post/36e618e7/index.html","4689d99d82fc95025e23fb032a99ab40"],["/post/39ab7ed9/index.html","6f158f3d8dbfb6b48634afe517667f3c"],["/post/3a558aa4/index.html","02dc2e854fa3364507e0c07bb9b435d5"],["/post/3ae35270/index.html","3bf789695d4bac5d5512f9ce4901a5cd"],["/post/3bee8fac/index.html","aff8bbc9976dfd487ba9cde2ebccb088"],["/post/3f33896b/index.html","5e9650f99c8ea045b38a6787ee38d409"],["/post/40e625a8/index.html","2cbb432b893c42664210d08c078f0d50"],["/post/41448ed1/index.html","248df63ab2ad9470821c8c19451071a9"],["/post/41fe963e/index.html","c123d699ae384a65832a8986f8e7bad9"],["/post/431550df/index.html","9ce9bdfe6a9aaf33abdd76cfbdde4dbf"],["/post/4509c582/index.html","2e4353c32962e4b6041227274a7fbe7d"],["/post/48d0ac2/index.html","f7a5e08e362af08754a995141ebd08e7"],["/post/4a1427cf/index.html","c2daaf23593fdaf07510301cb4e83447"],["/post/4a17b156/index.html","64d3793669de4103480bd30f74c90e9d"],["/post/4bc343c9/index.html","ba689b1ac81c3d975303ca208fd3e126"],["/post/4ec4ae49/index.html","d6e43f116ddda9c90c8f7d934db00f3d"],["/post/4f5f98b9/index.html","ffa04f35ad2513ae932e7b127c61d10c"],["/post/5076bc45/index.html","e99b3880226eb5c32017afa63563e266"],["/post/514b8abd/index.html","5e92c31a9f1a942f6301191eec5d1395"],["/post/51cd9fa0/index.html","b10b5ce651f4ff2c9e9cf0cea6a2f528"],["/post/52a71f5d/index.html","a24b9ec95efcc3765c8d083e68c4b3fb"],["/post/54e7a3d8/index.html","a447de3dba6509e8de766c3f98e4a897"],["/post/54ef4797/index.html","20255f849b83ca03e3e6a257b0cfe66f"],["/post/566c93e7/index.html","8f7b16ad4f63ee68190801c7a22f184b"],["/post/5898412/index.html","01aa14c1ae142a4f87f5b45751c347a4"],["/post/593a3fb4/index.html","a18dd6f3912852b2985797a856eb5eac"],["/post/59afd8b3/index.html","312e27f25a37ff4c09118007a2e3ca98"],["/post/5ee0feb/index.html","023838883a798d92ac3fd85c6477ea0a"],["/post/60df7e87/index.html","f0704c2bfa968443c760398309da2b3e"],["/post/61d55ab4/index.html","0b9ee67d606b659b4ac359ecbaacbc39"],["/post/62433a8c/index.html","af5d9d60bc23c9bc947983d2217ac753"],["/post/62811272/index.html","486b66fea064f6a63459558004d6c7e6"],["/post/6293dd25/index.html","078a461cecbe760810a5283649364629"],["/post/63392b1e/index.html","04a51ea71fc737e76dd330411845b9ef"],["/post/63b5dbef/index.html","fe4d0fa564bc1cdb51be1ef59519fbe0"],["/post/649fded6/index.html","0af69c3182fa5adaf82f72da9d56187d"],["/post/654a6d04/index.html","684f7429c413c8cb0555316b1bfb458d"],["/post/6580691f/index.html","639bb3d8ffaa9460722e4c730bafd79b"],["/post/65dc693d/index.html","3a3e4f89d48065329a9dd8408740c173"],["/post/66241a6b/index.html","ebaeb381dd66d7dbf01d628651e072b0"],["/post/66242a23/index.html","ef2dca7b55048420cddc80f1d3ddd383"],["/post/67b8e780/index.html","e19d80a5ccad31723099becaf14c54e9"],["/post/6887a6ee/index.html","8b40c3ca56ca8efc7f747338d3ceef45"],["/post/6b505d27/index.html","41e3df9d41d9869d94961496bb767b2f"],["/post/6dcf96c5/index.html","7b90f9d725d367dd1afb5c8f6eb450f5"],["/post/722778b1/index.html","415b093e55fe8cae8ef4571f3185354b"],["/post/74399d1c/index.html","c57c93e2296bb8c7cb19b172560ef9d8"],["/post/76d1a936/index.html","63e6a533d8560764a3adc04975c09031"],["/post/7734e0f4/index.html","b3656480ac662496b34da919ebce0304"],["/post/779b45d6/index.html","2c870503e1c08c9e41f026d3fcb5cf45"],["/post/7813e5f8/index.html","236f34049fcb1e309f250c0732fc2d18"],["/post/79b257c8/index.html","524ac5f136d942dc13287b69b4eec983"],["/post/7a6ba82e/index.html","793ca100d6f0cab9e437ee999b110b14"],["/post/7d02ce04/index.html","a983101d186ce3a5d567a326c13ba87f"],["/post/7d7131f4/index.html","b577592dd9a9eb075b44cd72f49d6c13"],["/post/7f53edb9/index.html","3ee3785a7b4e60065841369d84d74ce0"],["/post/82f14f26/index.html","467a13e5b0608a3432cae2aca35f35e7"],["/post/83828674/index.html","b8dae53f27d3d0a331857abd8aa34653"],["/post/84daa1ca/index.html","19f3a1c6fc43cb3d2be029c9efa08483"],["/post/85230b59/index.html","27aa4bf1b066967fbadf9fc069486297"],["/post/854071ac/index.html","349b640e7c28ec6d07f437991f958857"],["/post/876d75f2/index.html","bf568efb42ef3d53be4ac3fe4e16b0bf"],["/post/88fbc049/index.html","4c2ac747bd0fbd8de622550a985d1166"],["/post/8932eaec/index.html","0c0964aed9b2cb33fca7752e8a3af8dc"],["/post/898963b1/index.html","9d8e7e668acca41eb446352099e27633"],["/post/8a012fb9/index.html","67e3d48958265753260310ac4fe63f12"],["/post/8b2d002b/index.html","1ade4616fa2693df562a601f8bdba553"],["/post/8b45c159/index.html","c2cf258da0edb6db73e85fcc74c275f3"],["/post/8b6f15b4/index.html","84e4f9b65be65925700e4728afe8fdba"],["/post/8b9c051d/index.html","8204cacc06528c96c963e0261a60f50e"],["/post/8bdc1938/index.html","53af0cd2c301f8e79612969da53b446e"],["/post/8ce3f979/index.html","7ee1147cd16b223b4cf5a32c034a750e"],["/post/8d4707b6/index.html","2df4935384fee1eda6c507f652b3a1fd"],["/post/8d877e63/index.html","1593c2f636490ea95901d069a02ef16b"],["/post/8db507ff/index.html","8c7d25ed857f9dff8df668a3d4884d07"],["/post/8e6eb7bb/index.html","8ff867b5c99267acb56de6fb1c941906"],["/post/9054e84f/index.html","bc74a926ab967718cd3179fa7ecd012d"],["/post/917a155d/index.html","4564eed0f5e13cf1e31e6ecb3ea9ca07"],["/post/91842b71/index.html","57fa42b87f6e63a96ce0732e7afe4d05"],["/post/91b7cf13/index.html","461cb1a71aaa93977d05b1aa6871c9d4"],["/post/924c1a5a/index.html","1cb5d16db2e84446c6f163929d9c9cde"],["/post/9282a9ab/index.html","40283dbc1beb6bf5df732f6ffb985444"],["/post/9324eee6/index.html","8da2a7f436aec616f3cedc49aaf167a2"],["/post/95370db7/index.html","7853928f6cbf8a012cd8a7713780ab3d"],["/post/9587bb47/index.html","c6e8107dec344f1a1af4070db6c2ad82"],["/post/959269de/index.html","3475db18c35c8c334b4d3459259f4e0f"],["/post/977f5125/index.html","d29b367c48268dec57c540652675e420"],["/post/97ff1ee9/index.html","c680f962b56806519fe0b2f611527fd3"],["/post/98df88a8/index.html","156e63e6f72885667646ef1a5be38587"],["/post/9ab374d4/index.html","91554294264729dcf3ae19de65ca9147"],["/post/9b6567b2/index.html","7017687532b7cd057411a2effa5b2913"],["/post/9cffdbe3/index.html","63da1e4311267ff6bc372628130014be"],["/post/9eb841ce/index.html","2585e2a1cde5d586b1ae885a5aed0bd7"],["/post/9ede2c87/index.html","a8d4629c144b68c977babc3daba5aafc"],["/post/9f24ebb5/index.html","a03c7cf930f91c37d0fde3e7349c1817"],["/post/9f5552a3/index.html","313793f6fe1f3311a5c23e306da5cab5"],["/post/9f626e7a/index.html","848fb9c07aa4c42a097534b7eeb8b880"],["/post/a0bd766b/index.html","d014a2ff00a75aad2c6a045a3adf990a"],["/post/a0fb7f06/index.html","bbb9909fc5f38ddaf4ee640f97aaa0c1"],["/post/a123bf9e/index.html","61b497ba1280e05096869bdeba8a226e"],["/post/a201e11b/index.html","9731d633c02a669b511cc720c3b3a99b"],["/post/a2962194/index.html","77ded15b477985a3bb6d3b3bda47085a"],["/post/a41adc1/index.html","f2311f75f58cf1dc3bc242f5c277bf78"],["/post/a5c428f1/index.html","80e345caf48a1670ffc1d6b71befb964"],["/post/a64926e8/index.html","bac7929a37342150608c976586e5df08"],["/post/a9ff6f3d/index.html","7fe58ed941306d9fabe7e7a9420480b8"],["/post/aa0bed86/index.html","36587bf54c3e02eb7300f4a142cfecad"],["/post/aca50ff8/index.html","3d3b1e5d660add13c9ea412cf58e0fef"],["/post/ad5c5bd9/index.html","259293fa7840821a192c0e9c8e2b3757"],["/post/af038717/index.html","c688539b814a3ada64b48ea843044457"],["/post/b2310ca0/index.html","4252ad44c5ea409d331f10dfb127339f"],["/post/b58ee955/index.html","4597490105e91ccbd02316928c450241"],["/post/b6d18d6c/index.html","5003c387c7cc283e4740716ed00383be"],["/post/b6e8d46e/index.html","fcd9cf2e7610c6fb373d5f1adbd569af"],["/post/b82753fc/index.html","6af0bc288bb4dc024464f004256d052c"],["/post/b83bc460/index.html","3b5036d8e1b6e5ef92a676e0da321e68"],["/post/b8792f9f/index.html","e466c277a0f5d34899805ea8af05ae28"],["/post/b8847d9f/index.html","25082e45040ff428673afeef958f54df"],["/post/b90033a9/index.html","3d836cadc265763dd15c788319888b87"],["/post/b901735e/index.html","63b198a316566597aaa91aaedae2ebef"],["/post/ba8b6dea/index.html","6b440137741c2a4e945d9783ad3353e6"],["/post/bb64e398/index.html","95c160ceb3c60efbe2209df354c38a7f"],["/post/bcdfb73c/index.html","fc348f4924937f8d067ae477d6008395"],["/post/bd00031e/index.html","cea95e1ab0b56e3162425b88bb8242db"],["/post/bf6232fa/index.html","524285575e2f415181a306488c44ba4c"],["/post/c04efbf/index.html","48575ed5f7854813c708cea0d713a3f5"],["/post/c10d5f0/index.html","c412a3dca96ce3f6dfc4d70200933df8"],["/post/c385fcf5/index.html","d09258395dfc22a8cf9c45ff9e8fdbd5"],["/post/c50b0018/index.html","0e2c9d5ffc3799a6a885901cfa2112f5"],["/post/c5e67530/index.html","24a35cbeb56f2ee88f80db92fe989fcc"],["/post/c691f02b/index.html","4aeb561e9f425df8596d039b97e24219"],["/post/c6ead512/index.html","6333f770e12dc98d2a9a5272bf9d9ac7"],["/post/c93b6ba6/index.html","3b26855864745ff29813b6cddf713b4b"],["/post/cabccf5c/index.html","e96f8b3dce0a787839d771002cdbc278"],["/post/caef83a3/index.html","e408775f3ffeb6e09122252f225ec831"],["/post/cb7c0126/index.html","7bf0a289b1caa9f8650006cd5c3c304b"],["/post/ccc7d1db/index.html","79cf542bd0ebc070ee7dcc3502e5e019"],["/post/cf496af3/index.html","854c4a7368da8739b900f41dcef8a5eb"],["/post/cf628dd8/index.html","9ca69666cd0c3fafd262ff0102e46ae0"],["/post/cfeb28a4/index.html","7feaeaadf3165d176131fdd1beec07d9"],["/post/d0fb133a/index.html","f850e66303402f577c8888480751f60f"],["/post/d18f7712/index.html","1a457522dc7da4fe592636ba01fbeed0"],["/post/d29c6c94/index.html","2075c8ec381f6cc8926fa043c2975fa9"],["/post/d3079d23/index.html","5e384c84db4cdb545da2d5efd21a0827"],["/post/d5c57f56/index.html","77beb5519eb69a302d78da9d442b8be3"],["/post/d5d4a460/index.html","1876e7217413fbf271b10a29d4307a2c"],["/post/d60ff6fe/index.html","11334612486e1e0bdba5b830d54de7a3"],["/post/d63ad249/index.html","7577fb18a12372b5756d3165aceeaea6"],["/post/d6cb0655/index.html","64ad5addc70022fd07d4f2ec68a600e1"],["/post/d97b21ee/index.html","67cd77626c6d824412e5e212c165cfe5"],["/post/d98c80b7/index.html","c6011fc066b25639a9c801d1c609d4bd"],["/post/da4e5d62/index.html","d424b49e80baeeee105aed180f8a7fb4"],["/post/da9d93d6/index.html","dd77edd9db97d68c7a187b601544db65"],["/post/dacc4196/index.html","32a5c6a54fafd2ce1bccd1822d584ed4"],["/post/dcffb1c7/index.html","ed6c48da773068bbd6d54b0656b0b3b0"],["/post/ddec790c/index.html","57bc888e9d718f78053467e1d8fcfb58"],["/post/deab4886/index.html","ad1eeb6a6ef20ef9c0775c01b241fbfd"],["/post/dfd1ebf4/index.html","81f23a01cfc7bbf6018892ee5abff349"],["/post/e1d9f990/index.html","c9078bde53b4423fb636ea2ead8776e6"],["/post/e2780b93/index.html","8371b4934910a92bf5c8633a2e370e7a"],["/post/e2c16468/index.html","100e1063183f702a153dbbc1eebdc131"],["/post/e88f04e5/index.html","95d11d94b204165e87cbc941cb9e70bc"],["/post/e8f8aadd/index.html","f6299c086ed3728fec05b04294582cc4"],["/post/e94764ea/index.html","5fb3cd66799037dd7685b203d0d008a4"],["/post/eab0dfbb/index.html","7818ecbf1741a63220f8ba84894c74c6"],["/post/eb97b6e9/index.html","dd48dd0ee34dd60167e6f230c517cb0b"],["/post/ed043da/index.html","dfb965fcecd81a2ae1a2351d9eb8c66c"],["/post/ee123cac/index.html","5d8ada061b8c2990beb8d15dda3ba927"],["/post/eed0f482/index.html","42c751af509353da7712186e0cba48bb"],["/post/f0474806/index.html","d6b2eabf13a8a633bdec0ad57817e230"],["/post/f07cae6a/index.html","286a954c3d051b32302cdd0510c67e42"],["/post/f241bd30/index.html","9cc3ca0ca3b223e9e274843ca3820df8"],["/post/f2522e33/index.html","0f8df1d06b38a814e0b4e8056a75a743"],["/post/f294cd50/index.html","d96ef9afb64d58aba7e3926713e13cc5"],["/post/f33ba73e/index.html","1b4c0a8c2b2b939511843ff409a00fc5"],["/post/f3c3eb8/index.html","ce4ee4492780298450173c6549c16fdf"],["/post/f58b86f8/index.html","fca04d61cbbea9449ca0dcd3643fcc75"],["/post/f7eab850/index.html","a826f7fac859823d13ef077955d77b8c"],["/post/f941981b/index.html","2e675049703226856a902a5cab324474"],["/post/fc655b6c/index.html","81a2e1910523a869363854077a3ad4fe"],["/sw-register.js","3091ad2b1ee274f7b4e18b02bd16a9d5"],["/tags/DependencyWalker/index.html","d54964d36b7e9202622a759b7a2dab67"],["/tags/GeForce/index.html","c2933a6495eba41ee16469296dbfb26c"],["/tags/Jetson/index.html","ab35d6af3cdba2fda17d7cd06f7101fe"],["/tags/JsonConvert/index.html","8b5411f715dc3d62989dc45808b9481f"],["/tags/LeNet/index.html","3f4b6c926633386e9534a2b677490ffc"],["/tags/OpenDRIVE/index.html","65fc8fdac156ef97daf5032911b19751"],["/tags/Tesla/index.html","e82417a1db27d20b632820e9b1a65173"],["/tags/VeloView/index.html","539a4472a25909de8b8b24ebf3ed93c2"],["/tags/address-space/index.html","7ff6dea59017c7232f6cf648801a4540"],["/tags/anaconda/index.html","12201ecd9f9e78901b7e65260b00ca91"],["/tags/anakin/index.html","c87eb4749b545a59b12f4083eca3d326"],["/tags/apache/index.html","3aa2d0c91db4409718d72b3417b430c2"],["/tags/apollo/index.html","360aac922ec7fd4d577930c2766d893e"],["/tags/app-config/index.html","9050e174158788d1b1225be83802a64f"],["/tags/argmax/index.html","061feaac4201fa1c205a62d12fa8733c"],["/tags/arm/index.html","a8a6f90c06664f41850e6caa2cf4b4ca"],["/tags/artipub/index.html","4ccb21c1fdb404bc7ab830f9a03b6ff9"],["/tags/babun/index.html","72848d403c92d497977f8024f0efdf3b"],["/tags/base64/index.html","66bfac609ca549abe194dc6c39c5e085"],["/tags/bash/index.html","d1ea4aa53fe6fb8d3b2fb417ed155f74"],["/tags/bazel/index.html","6cd2697fc95aa0c31715f06815f4ae9c"],["/tags/blocking-queue/index.html","5f8ccb174b6fd8ac0374d7bf01baef95"],["/tags/boost/index.html","489fb7d14898fff0a8202f2a55363e9e"],["/tags/cache/index.html","46e6e2f7b82c5f0a1a057f6c21780426"],["/tags/caffe/index.html","f8bb7ed9f94beaab05c5b74aa92df8ff"],["/tags/cgal/index.html","cd64cbe63d66e5ec1d248248158c5153"],["/tags/chrome/index.html","496212fcdaf42acd73b603ec26c17197"],["/tags/clang/index.html","ac24a925853777c381d665d74574b0f6"],["/tags/cmake/index.html","d3397df8e84c1e55168b008abfcb968b"],["/tags/cmder/index.html","2358c8ecc0aa781c3751e8155d394fa5"],["/tags/colorwheel/index.html","1105d17f5af82df3f8dd415e100d0a74"],["/tags/concurrent-queue/index.html","88f6105a3ab99fd53e55081c5eb54710"],["/tags/const/index.html","b74f36a6ab9a3258af01e652fa44ef10"],["/tags/cpp/index.html","faeab3eb6d7db6c46d4850145a0047d0"],["/tags/cryptopp/index.html","364b428352300dc5d7d2147d1cbcfaaa"],["/tags/ctypes/index.html","8f5c1efe24b9188809e8c3c2f654bf04"],["/tags/cuda/index.html","4d3f471dc07e98f869a4cc5ac39f1545"],["/tags/cudnn/index.html","fe98e0b329d8f2bf0f1a17287923ff09"],["/tags/cupy/index.html","a12bba2c71dcd94c8d857b847bb0542c"],["/tags/curl/index.html","4429e75bc2ba0d3172bd780315dff232"],["/tags/darknet/index.html","7996b7dc6c14c9b15f4acd5c92d241fc"],["/tags/datetime/index.html","5e458cc897b7fc1f3a80fe1563a9ac73"],["/tags/deserialize/index.html","97c05d2ac9c1f60289c5a115d0e09f6f"],["/tags/dl4cv/index.html","cd9d617cc522ff4f05945f1dc478ff63"],["/tags/dlib/index.html","e83a06f43c6c3b5530c4da4f7ecfbecf"],["/tags/dnn/index.html","77fb0a0572fc6b311ed99a2391e3c434"],["/tags/docker/index.html","0dee4b0d3e99fc6c14edc483710825a3"],["/tags/doxygen/index.html","b045aa46395b844b6ccae22b27230ecf"],["/tags/efficientnet/index.html","83103587bf0dd221279d7f6bf882b207"],["/tags/eigen3/index.html","ea80dfb03f73c5d9c25679cc8e0e7bd7"],["/tags/extern/index.html","942f08ea1b4ba461bdfacb43dfb1ea05"],["/tags/faq/index.html","65887a74ef23738d3d7fe25c83c30306"],["/tags/faster-rcnn/index.html","ad8923e7dbcff9e7d201d107a5a68ee0"],["/tags/find-package/index.html","f9189e04c377c868ab08e871210d62d9"],["/tags/fine-tuning/index.html","b5d2eb2a32ad8bc4782cd7ad52bce6c9"],["/tags/flask/index.html","4812b99f1fee215f1c87547e7cf5075c"],["/tags/fsp/index.html","72688364d90c7b7b2c73d77927aa721b"],["/tags/gemm/index.html","2a4172e689ac2bb4d2456189887e748d"],["/tags/generator/index.html","b05509f181b5ff73daa122059e082cc1"],["/tags/gflags/index.html","a2bf3eba66c8136df11a325a6d8c4dd4"],["/tags/git/index.html","6877da1b18504b7eb81a454518479721"],["/tags/github-pages/index.html","7f86a5450b3e9ff58331fab4be3e2ef4"],["/tags/glog/index.html","2af8d81ee876abf4237263f3683fffa7"],["/tags/go/index.html","83fbdd28171c9d67f847d6c7c05c3396"],["/tags/grep/index.html","f8c0064b1a5f45b2615f21e1de71b230"],["/tags/gtest/index.html","8faba92ea5a6e382ebdfe7f653993b25"],["/tags/hexo-next/index.html","bd4792fdd2c3166cb4d910ef00fee64b"],["/tags/hexo/index.html","2ff0a92cde2ad30be54a5ba8fef5a843"],["/tags/httpd/index.html","fa81461e854185d468157819ddb803b6"],["/tags/image-classification/index.html","d28076413e1219b7ee7dcc9d1dda5205"],["/tags/imagezmq/index.html","d09325447c90f682a08c7c07cbf56a38"],["/tags/in-memory-database/index.html","a54bb86d1cea1e032f84e9a992e41f20"],["/tags/index.html","498687ba34c7276af62aff2e24b099ba"],["/tags/iterator/index.html","8e7ddb46d33d0b4161b04bc170b56794"],["/tags/json-net/index.html","99ef9c79db97c2d83ab48d98fa16789c"],["/tags/json/index.html","16d0bc21bb8409d4827fef6e7a7f03c4"],["/tags/kalman/index.html","fe52d97694f384bbf1f7039cc28b712c"],["/tags/karas/index.html","c5b1a8c4c7ecb3fefd0507e0102f3641"],["/tags/keras/index.html","bccee450b7e05b1984251e8f049e668a"],["/tags/kernel/index.html","295f4706560f0802470ade4d8075f522"],["/tags/key-press-event/index.html","6574e0fee1832d8b467a2c22d2561307"],["/tags/kml/index.html","9992eab9f59da44ff5697ed221e6e925"],["/tags/lambda/index.html","1f90a6ef08d6fe32b5f69a7918ad0e93"],["/tags/ldconfig/index.html","b68cde6e1082d858e71e2906b75298d3"],["/tags/ldd/index.html","a203a63e57d17577b90c5677e94c97b3"],["/tags/lfs/index.html","98233e26a2c930e1464bb2af94c43044"],["/tags/libjpeg-turbo/index.html","65641e1f5d36ea9254500cde166b8ae5"],["/tags/libjpeg/index.html","c702a9257029e5cd9e23fe62ddcb88b0"],["/tags/lightdm/index.html","dbb7ae7555066553d664b7eb463b0643"],["/tags/linuxdeployqt/index.html","fca730572efdcd322ece03fd8430334b"],["/tags/llvm/index.html","17f5dfa8ffe8fb4ad3729ef03a8361c3"],["/tags/longblob/index.html","03afa23723a6c87deb649ed33609aa97"],["/tags/macro/index.html","16d584a4dd70fb814991f91c1bfe1e44"],["/tags/mago3d/index.html","17ef6d6dc632da0b0389a2a87f1d2aa4"],["/tags/matlab/index.html","da5574ef8c5dcd54ed7479e3bd6aaab2"],["/tags/meanshift/index.html","c3acae91f96ea2187d9a25cf70e14b9b"],["/tags/ml/index.html","bca4f81966c86ca95ef94705b28d1b95"],["/tags/mlp/index.html","1b7d85a8c2ab13ffd46daadc13f08ffd"],["/tags/mlpack/index.html","16363e537b788a2bff41c63576815902"],["/tags/mnist/index.html","c47e6a71d785c6951eaaa6144e3f0ef7"],["/tags/mongo/index.html","3f5a72dacf7a635cb91d1410419d11f5"],["/tags/mongodb/index.html","ede295ce240d4a5685f1590d0e348804"],["/tags/mot/index.html","bb11b0a0db37ea00de44c47d670dc4c3"],["/tags/multi-gpu/index.html","ebc2d44e7dd185c2f212a0bb7ceceacc"],["/tags/mysql/index.html","eaac3f987ad8674df5d840bd109dc6ab"],["/tags/mysqlcppconn/index.html","3355c0fa90cacecea9cc53fc90fc938a"],["/tags/ncnn/index.html","59b42113c4f0ab7ad6bb1200aca42d35"],["/tags/network-proxy/index.html","236da81c19d37fe1ae7d48c1a062b447"],["/tags/network/index.html","e0863604116697898a74f186e1fe6c76"],["/tags/node/index.html","d1d9d0e93437b14965cb26f18eda2fd1"],["/tags/nodejs/index.html","32f7a7d2c57d84b86e95fc6043b77fcc"],["/tags/nohup/index.html","8341ad0c1b3fb5d1c40c62b9ee486cd0"],["/tags/npm/index.html","3e2c41f0830fd2f5b98ec3498ac9fdde"],["/tags/numpy/index.html","e11b1dc1aaf92873e3409db4a2fd4bec"],["/tags/nvidia-docker2/index.html","0c38d9b4f79056049302bdb287ac1518"],["/tags/nvidia/index.html","b9cbd8d4edeba3d7650a1bf9e3d33e9e"],["/tags/nvml/index.html","d27526b16bc619fdf0427fb03e5421cc"],["/tags/ocr/index.html","c4d2a9f4c5864a23f854354407a1ed82"],["/tags/octree/index.html","40c4b570a0ce5973ceaa906ab67d635b"],["/tags/oop/index.html","fbc95cec8853ef000e713aa21cbd99a9"],["/tags/opencl/index.html","65e6b79849cb88cd3246ec3fc9c9e8c6"],["/tags/opencv/index.html","512ae6f3bdad5124ddfbe54d8f313841"],["/tags/opengv/index.html","497af95d50e753f6f9b9aa1acb139394"],["/tags/openmp/index.html","345574ad5e05d06d032e6bb1c1b87207"],["/tags/pandas/index.html","0239d73e598a32dc803c24aefb88714f"],["/tags/pcap/index.html","542e7008779bf5ab183f6992df62642d"],["/tags/pcl/index.html","b250a1a4a83802916d2e360869b4d071"],["/tags/pip/index.html","9c82bdc541e39317391cd0bc05002f0e"],["/tags/poco/index.html","b58e59c26de2c1d886a2c73353477a5f"],["/tags/postman/index.html","012213a9f6658bc9d39f2deccca915b7"],["/tags/profiler/index.html","cdb604171a6c429b9c81127e5a549bb2"],["/tags/protobuf/index.html","a4f0b31f1725022816fba1622027e860"],["/tags/pybind11/index.html","baaefe81a28351e3c36dc36b8748d996"],["/tags/pycharm/index.html","88dccd106afa86ce2d63b78bc8ae2fc5"],["/tags/pyinstaller/index.html","82e4210247e3ef9d8358ab50a844f5b5"],["/tags/python/index.html","3802138e56624938ab1fc88631a5d602"],["/tags/pytorch/index.html","6def956f185c921892d4f3f833fcfac2"],["/tags/qt/index.html","051cc750046163631a180422293cbedf"],["/tags/qtcreator/index.html","7fdcaec34c1566fbaa6853d4fea2ce1b"],["/tags/quantile/index.html","d5e4268b228ba4df41b9b5e585f3a10a"],["/tags/radam/index.html","c62cedaaa314c73c6003dd5aacef46b5"],["/tags/random/index.html","d84734eba35c1765793e5eca8d1bae97"],["/tags/rcnn/index.html","7746b90e226b27de15c225ffc98a265e"],["/tags/refinedet/index.html","7088c5d253724b8152620df372c09ecb"],["/tags/requests/index.html","004c2cbf33fb74732fdc3e61a0d57e15"],["/tags/resty/index.html","02519fcb121569a9a4bc4f585c11af9d"],["/tags/ros/index.html","e0bf7869c0598c5893aa6eee32b2eb74"],["/tags/sed/index.html","fe5bd15a3833f693438b19e0b30fa1bd"],["/tags/seed/index.html","16c2789ce22ebe6a06aabbea46056dfb"],["/tags/selenium/index.html","dc3f4989dbf6dfea8891fd5c41593222"],["/tags/serialize/index.html","c65b29781843a9b3630deae632f3b2ed"],["/tags/sgd/index.html","08964ffd53d17014e97a6b0789714a40"],["/tags/shadowsocks-qt5/index.html","68b477e45f535d589309698621ee1307"],["/tags/shared-ptr/index.html","4c7d66fb4bd85b64dd8712843469bbc0"],["/tags/shell/index.html","99127e5c1f6aecf9b674f40c4c79187f"],["/tags/shuffle/index.html","79099aea444f5ee4fca361044a9b2835"],["/tags/simplekml/index.html","4e512b1ab5cf88501f8f36667897cff6"],["/tags/singleton/index.html","d0af66677117004e5c73cfd4c422be53"],["/tags/sklearn/index.html","b3911a0c2b0e0c213df2042bbc44841c"],["/tags/smote/index.html","962b121d5fddea4c13b4ec85160c45bb"],["/tags/sql/index.html","a19ee4b004579eb74bb7ad1771c1aaab"],["/tags/sqlite/index.html","de895bb10b1767615a11d67bf34f08b8"],["/tags/ssh/index.html","5d8f098c23ff3d210970b35bf1e719da"],["/tags/stackoverflow/index.html","b8c5052f982c2b0234271462607af7f8"],["/tags/std-move/index.html","9bce438a73d339c9d7b10a05fa32ec69"],["/tags/superdog/index.html","4922c7659e4865743a23906797be1de1"],["/tags/template/index.html","722f80da0ccbd915625e2bf076bfd15d"],["/tags/tensorflow-gpu/index.html","5216918942ec88a8cc882c0c0d8a1afa"],["/tags/tensorflow/index.html","d23bde5a4ba5ec3d8b6f7083e068beee"],["/tags/tensorrt/index.html","5507ec153eaa1877497bcfb6e7749344"],["/tags/terminal/index.html","fdcaaac29b5ecc5a0f0beeec176ea2ff"],["/tags/tesseract/index.html","c51a1ce6f8d88b94b1039a6988cf227c"],["/tags/theano/index.html","09df0bb36b2bb3f9ddf4e4e60025ac66"],["/tags/thread/index.html","93b7ed22f522f0048f19469f4916f6e7"],["/tags/threadpool/index.html","2b784b8f50f025251fe922a8b921664a"],["/tags/time-t/index.html","5f1bb3b36e76edc4632f89dafd5fa86a"],["/tags/tkinter/index.html","ec5f87dacddaadb86d3e7ef27c6fada1"],["/tags/tmux/index.html","ec0f9726d4bdb68acc21fbace2b85243"],["/tags/tools/index.html","5751c705d638ed31cc61333fdd6263e6"],["/tags/tracker/index.html","bc6e1d1067e4608a5748784b4b5ac7f3"],["/tags/ubuntu/index.html","09c6ad671ddb3ebeebcd50f3d5c0744b"],["/tags/vector/index.html","760a9ed41e9fba8008451d65c28a1ec3"],["/tags/velodyne/index.html","8ce124fd150a509b37ac37c04e01eb10"],["/tags/veloview/index.html","f6ca2625871e45ad68f22d13825c8a9f"],["/tags/vim/index.html","634aa78d8775facdcd996d0271c0ef2a"],["/tags/virtualenv/index.html","7a3403ceb8f1cd0b59cefcfacd78ccdb"],["/tags/vlp16/index.html","9709e4abec324ebbfe835792eabcbefd"],["/tags/vscode/index.html","d4b8ee532a0c40a60e34f51f192174ec"],["/tags/vtk/index.html","ac0a76598d1d49c9773ff57b303ae051"],["/tags/xaiver/index.html","35bd7b5389eb2ea455dea35bd871db49"],["/tags/xargs/index.html","cfb6ad9e47edf9a86c64a26f8b35051e"],["/tags/yaml/index.html","f827a78465d15d3d63fc7e8cf2c88225"],["/tags/yolov1/index.html","603cf3580f1f185e5d5dc3b0e07c8d35"],["/tags/yolov3/index.html","392f93e1a2138f26d3eaf4f99879a89e"],["/tags/zsh/index.html","cceb2c4d4401995eb6de8d0597a1f3df"]];
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
