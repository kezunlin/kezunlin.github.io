/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/README.html","321847c8c3e2d636952f300b38fdfce2"],["/about/index.html","5ef3f8d197f13b0646a537e607a6a6ed"],["/archives/2017/12/index.html","98b050881aaa564883925a9b551506e0"],["/archives/2017/index.html","64adbd71cfe7936677f7b9c14a9425f3"],["/archives/2018/01/index.html","79b8d4014438efbc65e9b5ef1f1d80a8"],["/archives/2018/01/page/2/index.html","4df5339646edcfa24dca78cc5d30a5c0"],["/archives/2018/02/index.html","7c366d01e0a282a6443fe678bfda5511"],["/archives/2018/03/index.html","ac134d26d1fdce814700ecdadd658c05"],["/archives/2018/04/index.html","683622e51aa64ab6bf541c48361a4d3f"],["/archives/2018/05/index.html","493a0cb7e4b16dc5596444a7cccacae2"],["/archives/2018/07/index.html","faa94cece85b48131738fb89c991fe1d"],["/archives/2018/08/index.html","b44f37c211fceda1b05edc74622ec4a0"],["/archives/2018/08/page/2/index.html","4950ac094b7cc411404ace836e4825b8"],["/archives/2018/09/index.html","09a0780ad4b4a8fe973d09604b3ad1f1"],["/archives/2018/10/index.html","9fcfd9a9e50a28dfd78ad63848e23f43"],["/archives/2018/11/index.html","b2d5cebe66f64a392aed4d2fd913c4b5"],["/archives/2018/12/index.html","fb8f251128be0f9fd88380151b3e4af6"],["/archives/2018/index.html","af0ba00bdbaf9b4dcbb353d76bd092a6"],["/archives/2018/page/2/index.html","28bddd4d4b00f39a82a9a0eca65d4abf"],["/archives/2018/page/3/index.html","3b5871f59d5521bdf22ae8c62ac1bc90"],["/archives/2018/page/4/index.html","852ee9499dea4a6f2f471d429bd36cd5"],["/archives/2018/page/5/index.html","ee4329b14cc94003958d0f2baf934d07"],["/archives/2018/page/6/index.html","78d72d9190781d76951c775c04592889"],["/archives/2018/page/7/index.html","c56966dc0632e333516893586685d89d"],["/archives/2019/01/index.html","e87da246cf155a6578ab0d787b93b3c5"],["/archives/2019/02/index.html","8ada1de5b7b478e14787ed4ca1f18ec6"],["/archives/2019/03/index.html","a8d999a0d58f7cccd6b49d848858c4b4"],["/archives/2019/04/index.html","e629d897b3d06493548c86bf12c354a4"],["/archives/2019/05/index.html","3e26e61f0b000bee467de89987bb2325"],["/archives/2019/06/index.html","a43a009565b2f1f5e7f072113b750c89"],["/archives/2019/07/index.html","700db4a8e70675f2ddb377bb2237f1a9"],["/archives/2019/08/index.html","61d107e9c1b29ac671ca0817559a2df2"],["/archives/2019/09/index.html","a5f0a8c26eefc735eaa86d62cdbd6244"],["/archives/2019/10/index.html","edf0f50d718ae1428923b0cc3fd54213"],["/archives/2019/11/index.html","94b1d82c87d94e75fef22fa04ef95593"],["/archives/2019/index.html","e4b046d71854e983479d71beedac7fbf"],["/archives/2019/page/2/index.html","aa03013beb91cafab6d8620aabee7486"],["/archives/2019/page/3/index.html","5465c4c8072432e83b41d8f2e5faad11"],["/archives/2019/page/4/index.html","08cebde24993fcf774738148e9ce1a08"],["/archives/index.html","503778dac5b1b60d956d174113d84360"],["/archives/page/10/index.html","c62eb97ae14f1da4bc4cb4d874d5434b"],["/archives/page/11/index.html","4e22ea7948deb30689c1bc444def3dce"],["/archives/page/2/index.html","932bae240556006d4865982dc974df9d"],["/archives/page/3/index.html","d9c29e643deaf0724addbd353a7ddb54"],["/archives/page/4/index.html","69c43b029950bf5896573b09601d7d1e"],["/archives/page/5/index.html","fc837cdff2a36433fcaa35da50cd0448"],["/archives/page/6/index.html","59201cf0f0973eb83587acac7002d787"],["/archives/page/7/index.html","7fe21c61fb4ba72e83d7c0f86c07f8b9"],["/archives/page/8/index.html","12459eb0e03413a7cd1f1ec1472bf119"],["/archives/page/9/index.html","4cafd34b38122328b8333dba02fc84d0"],["/categories/autodrive/index.html","8446647486d90d781d9159851da29705"],["/categories/book/deep-learning/index.html","bc8cf1b9cfa554c31762407b0769f2b5"],["/categories/book/index.html","0bbca41c66cc431a021901e10260c841"],["/categories/book/machine-learning/index.html","d204381665e9b9af7151682f5d380406"],["/categories/caffe/index.html","633f87a017af78d5ebf0e529cbcee913"],["/categories/caffe/page/2/index.html","788d8e509ce05c15fb7ae35e435a416d"],["/categories/caffe/tutorials/index.html","922a768066636f90a098eed6570ab2b1"],["/categories/cmake/index.html","188350003c2e3aa1dcbced89cf0ca28c"],["/categories/cpp/boost/index.html","abad30113142b9b7c0e60e9685192aa5"],["/categories/cpp/cuda/index.html","2b46318f7e2cd5e0e0959d75c2ece284"],["/categories/cpp/index.html","98b968d43ebc377c96e52200765c873d"],["/categories/cpp/page/2/index.html","307c2f7ba2be0b59139ee56c27bb765e"],["/categories/cpp/page/3/index.html","461112b9dcbf634cc996068e62c6eaa3"],["/categories/cpp/page/4/index.html","0857152172fd21dc1537f4a68952446d"],["/categories/cpp/page/5/index.html","5831ca526d588b75cbea267445225c58"],["/categories/cpp/page/6/index.html","ff8303de6a882a94fbbd7380904141a4"],["/categories/cpp/page/7/index.html","5810e32fe9fa26047f94d0ce53d1645d"],["/categories/cpp/python/index.html","4dcbaab2f23fb3d164a172fd9fc4b66c"],["/categories/cpp/tools/index.html","2e65007a0a29e93b9c206e85fd2cc75b"],["/categories/csharp/index.html","c62412d2ef0d48fb3bf3fece1db20d05"],["/categories/db/index.html","e5724f85f04588da7a73356722c1279c"],["/categories/deep-learning/index.html","00bdae887900131fb886d2d2e2f57c4d"],["/categories/deep-learning/inference-framework/index.html","c6ea161c9dd99163fe1b433a0e9d5d93"],["/categories/deep-learning/neural-networks-and-deep-learning/index.html","09a51fa33c5a5480e5f19ab779278a73"],["/categories/deep-learning/page/2/index.html","306861f740e3ed933d1d6d23a88743ff"],["/categories/docker/index.html","3ab3743dea6bdea1059357a2377c1100"],["/categories/gis/index.html","0618a733337c95097d22b9a13444abd9"],["/categories/git/index.html","4417c1dda83052e6268f240743b828ee"],["/categories/golang/index.html","964ff851d860e0b0bba9bf7893f094af"],["/categories/hexo/index.html","39b3679ac98bfa7e0e1fc639e6cf881d"],["/categories/index.html","725c2ca47f7d58afb3dd94415eaf85e4"],["/categories/kaggle/index.html","9c8c8833f9a1556d0423b3879f34aff7"],["/categories/keras/index.html","ecd7b9de2b5a4cea3b675180e5e5d555"],["/categories/linux/index.html","fe691aaab4d35feeabf90a325d03dafe"],["/categories/linux/page/2/index.html","1504129074a02f212967be8edbe2e007"],["/categories/mysql/index.html","eef7cd143ddaebcc1fecfed236ccb18f"],["/categories/nvidia/index.html","afd452d13881d6c563148ca1fa8bcda5"],["/categories/object-detect/index.html","bbc918cd550fa959d408fd9c1d1bde40"],["/categories/object-detect/yolo/index.html","0fe67eb5a8e9fab2351190d6948f7e6e"],["/categories/opencv/index.html","59b29cbe3cc4716369b07994c5ed3643"],["/categories/pcl/index.html","f9ad117aa4cc3fe815ca20673bd2d4ba"],["/categories/python/gui/index.html","b9e0c0917adcff2d3d5dcfa810ccb26e"],["/categories/python/index.html","6be7ffc0fdfd9fbc09dd7c02a6d7dbb1"],["/categories/python/numpy/index.html","5183cc849f443a9844b83a0655990131"],["/categories/python/opencv/index.html","be298da169a99bfc5972185e7d91b941"],["/categories/python/page/2/index.html","889da76a71e331fd3b7ae5d11dfbf64d"],["/categories/python/page/3/index.html","b44479697b0a2d9c2b8c444b29a2b14b"],["/categories/python/theano/index.html","2b42af040bc6a4d82604c5f68ee0c1a4"],["/categories/python/web/index.html","9d41ad04fe8cce24ad8a9310c70215b8"],["/categories/pytorch/index.html","fb609fad6deb3edff89a56b9550941a4"],["/categories/ref/index.html","05d66daeb771d1a2603131696952163c"],["/categories/ros/index.html","503edd7649e0a5ba0bc216f5c6f5beef"],["/categories/tensorflow/index.html","2591f81b4e6c86d7d35895c972957cff"],["/categories/ubuntu/index.html","05bbc065dfbb5a56631ca7e72ef4f450"],["/categories/web/index.html","8fd86c8d7443d6fe2583072bf3c99d79"],["/categories/windows/index.html","be47dd3ddbb89a72be7f41e1e0e974e3"],["/css/main.css","245968afe1b97e0c47eb71046eeef048"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/kezunlin_avatar.jpg","f0ee2c3bc4ff6e3197dfae29762eb490"],["/images/kezunlin_logo.png","0f26fd63ce2f1f424300020adbcd54f6"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","ed1729cf5fa86517a229f81a25a0caed"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/md5.min.js","677f893f6f521d7fe9bfcbe171394db4"],["/js/src/motion.js","3234c3c5bb08da2af78a188cb5784f9e"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","d1ee25b7823708d89469b27b6232257c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/font/han.woff2","2b06aa1c952a2dfaf00d99218689d147"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7e33723f6b8a9f55a1ce3979e3d505ed"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/font-awesome/fonts/fontawesome-webfont.woff2","af7ae505a9eed503f8b8e6982036873e"],["/lib/gitmint/dist/gitmint.browser.js","36b9f7b70e385691c3cfeaeb5af9d044"],["/lib/gitmint/style/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","cffa5707f0d54c9f561715e0809487bd"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","b6eb9499ee422ca962fa2c719d8617c1"],["/page/10/index.html","b6ba3b2557df94ae4a392df596f41810"],["/page/11/index.html","f8bb7ac1a146e92c8ad84b31b6c9f04e"],["/page/12/index.html","f33186867719d4b0a4dee26685a7939d"],["/page/13/index.html","480d46aa1749a4268d2bc87946a446c9"],["/page/14/index.html","07ce58aea1266b080670815336183e65"],["/page/15/index.html","9ef6058b96e7735b5648e4d0fb0dfaec"],["/page/16/index.html","525f3c1f87f9fbcd0d057c50d6968444"],["/page/17/index.html","6d83752a620eb8f2eeca27502e043f58"],["/page/18/index.html","02c65ad64c936f957517c077a34fab95"],["/page/19/index.html","6ffa4f2c0256572677c068b95c3df530"],["/page/2/index.html","61008e48aab292c5a7b9409074567a29"],["/page/20/index.html","5a118e9bd935bc6a1f769e4889a792d2"],["/page/21/index.html","be0710eb230239b3911dd5881efbdf02"],["/page/22/index.html","427a00fb227e185af577c30215029d4f"],["/page/3/index.html","88077180ce52bc6b1a47ae698976a041"],["/page/4/index.html","f111d698b3aef7155a466cd97f8a981d"],["/page/5/index.html","e198081ce359329cac3b2bec6639fa11"],["/page/6/index.html","9996004b1719f9c013d356724386cd82"],["/page/7/index.html","9e934caaf61b88fe40cf5d5ed2e80e2a"],["/page/8/index.html","6271f853b8d66e686bb973e6e769b52d"],["/page/9/index.html","bb4b96a5da688edaeebf159edf9e17bf"],["/post/107cbcbb/index.html","04215373878c9534f8e18190018c61e5"],["/post/12766fe4/index.html","38382727993b802307f3fe345856e215"],["/post/12ab5707/index.html","d896118e98d027ca6dd33ef72a59c7a0"],["/post/137aa5fc/index.html","313afb9e290e8aec4264fea4ccb4c900"],["/post/13f1a6ca/index.html","2a6c58dfb0cecec7656730533562f77f"],["/post/15f5c3e8/index.html","136d82ecec3a09ad14bde87e74f6d376"],["/post/168bc2b4/index.html","afac8771db0e663450292f8bc6c06ac7"],["/post/1739694c/index.html","eeb3f2b9dcda309b56f8c1d097f5cd1c"],["/post/18a77a36/index.html","39a274ca092bae6858ac6eaf014f8fda"],["/post/18a8ed49/index.html","dcaf84f088e024a60a45d93632e5bacb"],["/post/1cd6a04d/index.html","fc38e71cad635c965ab9a4564f80de66"],["/post/1e37a6/index.html","064b8bae17ce4e437d654c501efe9ab4"],["/post/1e5d14ee/index.html","e0bb59547c82a52567eea98224801853"],["/post/2059dc88/index.html","6100f383fa85e4d803a691672e8c31cb"],["/post/22391aa3/index.html","eacf0dd731ecb25cc53c8c8c7bd6cc5c"],["/post/2273a34f/index.html","1be24faccca2382f634bffddeb1d4421"],["/post/22f1214e/index.html","7dd08bb3135f0fadafeeb7b26862748c"],["/post/23014ca5/index.html","dec7b74f398ec14965a11cd3ad7b59a3"],["/post/23b14b43/index.html","aa084854b2cf68fe47417b7a5ad0ea3c"],["/post/24d22b46/index.html","38f630fa743ef86ba910ff3471dd0184"],["/post/24e94603/index.html","e9945227fa8cc01529eebfedd8d52bec"],["/post/24fbab5/index.html","3759a82074a3ee5ae208ab380e5c78ba"],["/post/2613961a/index.html","86af7811782257b1bba048f82392dd0c"],["/post/281dd8cd/index.html","b30513b90658fa1a7f470337834d00b5"],["/post/28dec829/index.html","97bd12d9f5fb3010892b2c778ad33f19"],["/post/2d809f92/index.html","00b5d50cda058af60d094d8c33a74266"],["/post/30e0cb19/index.html","bfc7d7ee4b6f0ab44b61fbc273886cf1"],["/post/32533b9f/index.html","8cb309a612134ed6c1af623d3bafd85e"],["/post/32d1b25/index.html","19f9db38ef606a0b6eedd0613b8fe84c"],["/post/34e2a097/index.html","2152b724699ae2ab8e03a2fa9c4c88b3"],["/post/3620a857/index.html","59385d07898b7c0c94690849dd1cc20d"],["/post/3670803a/index.html","9bbd1b628ac58b98cdb1e30922d46fb5"],["/post/36e618e7/index.html","4524f8b5b49f0491f6d2cdda5443ae7f"],["/post/39ab7ed9/index.html","948cde652a31b90efce03263f458c268"],["/post/3a558aa4/index.html","fcfd95bfd3121aceb09728ceecbc5859"],["/post/3ae35270/index.html","61bc7137b3501d1162a2ad138989ed63"],["/post/3bee8fac/index.html","65c0a465c22ff360db23809de6e092f5"],["/post/3f33896b/index.html","cc06a8d678da9fce5696a0fb2f27a6df"],["/post/40e625a8/index.html","5aa21024456be77f00c83413f69af36a"],["/post/41448ed1/index.html","39baa4c138b4f939bede6bb61dcee1fa"],["/post/41fe963e/index.html","47dbd8614b0b8416a28cb972cabf47ec"],["/post/431550df/index.html","786da94518ff0238d104f752c5a16fe7"],["/post/4509c582/index.html","351f9638e33f7e39586aae4cda2dc1bd"],["/post/48d0ac2/index.html","5752a620b46e4315939d09040ff419b2"],["/post/4a1427cf/index.html","7ce3803f03414bbb30e7278687f83a28"],["/post/4a17b156/index.html","9bf2626590e112d94a1442f0242eb933"],["/post/4bc343c9/index.html","1d2ee887a6e01832d810a3de55d04d73"],["/post/4ec4ae49/index.html","6732a56ebbed6adf7b2874a03c8ce78e"],["/post/4f5f98b9/index.html","ffa04f35ad2513ae932e7b127c61d10c"],["/post/5076bc45/index.html","d23637e751ed66901b2a9adfae11a416"],["/post/514b8abd/index.html","8d856f9422f6bd765bdf07ad7c8be109"],["/post/51cd9fa0/index.html","2385ad5fd94420a952f2ed87cf9dc863"],["/post/52a71f5d/index.html","42b39f23f99ec44a8c61e0f29e016b07"],["/post/54e7a3d8/index.html","ec1c6b52b22f1271db10e93e72f82352"],["/post/54ef4797/index.html","3a8ad55e17f40197f9b5f7bf43b653de"],["/post/566c93e7/index.html","f2cd683e0805801d813a45502351d7ff"],["/post/5898412/index.html","b00fbd9b62d69428d5ad756e7683817a"],["/post/593a3fb4/index.html","48bc88ace7d15b30688c284ece2ab2b1"],["/post/59afd8b3/index.html","7a590eb0692793ba62926b23c6b29d46"],["/post/5ee0feb/index.html","023838883a798d92ac3fd85c6477ea0a"],["/post/60df7e87/index.html","2590a97d585a9bb0d99d6153e674e79d"],["/post/61d55ab4/index.html","4c868e3a8d926396424b8a13ac2a290a"],["/post/62433a8c/index.html","3da89cfc7e01349f2226d2c26c870dda"],["/post/62811272/index.html","0d356474470d51acafe26c45b2fe8998"],["/post/6293dd25/index.html","0a99d28d3473ae4ada8233d496e39584"],["/post/63392b1e/index.html","90ae277021fcd46d93ba5c693d27bf73"],["/post/63b5dbef/index.html","5ee4df24e63ac6c217e47f6a39e0375f"],["/post/649fded6/index.html","0af69c3182fa5adaf82f72da9d56187d"],["/post/654a6d04/index.html","896b51b1a6a21fa2af5cfd0382954eda"],["/post/6580691f/index.html","fdf1f21b1dc7084bd1763db10cc4c69d"],["/post/65dc693d/index.html","55e0fa6d2a528ba975a04268afad11e7"],["/post/66241a6b/index.html","a26babe85eed11aac8ac02eefb93a255"],["/post/66242a23/index.html","e3e94562fc26e271aeac0d64b39ac648"],["/post/67b8e780/index.html","c13faac3ccf46d96d6d6aeda1c9858c1"],["/post/6887a6ee/index.html","acc82b3fa0a62575dabc5b4eae03b9ba"],["/post/6b505d27/index.html","41e4c1a9b6dd01ce604556b0a5321d9b"],["/post/6dcf96c5/index.html","d8d50d7244d8dc6a82818537b76e1bf6"],["/post/722778b1/index.html","e66f694f78d23a07b7b77309065ea312"],["/post/74399d1c/index.html","9c14a2b3b95524dee24215f68ffe84da"],["/post/76d1a936/index.html","e8107d726c081bdc2b48f420708d6648"],["/post/7734e0f4/index.html","9001f9795855de9cf869e30d5eb33677"],["/post/779b45d6/index.html","f3b9da57b5ff0b5fdfc9a51899131830"],["/post/7813e5f8/index.html","ec5d3c0d8db77e8d244e156d5541fa21"],["/post/79b257c8/index.html","e02bccbbe1921c3b03dcef6065b6f088"],["/post/7a6ba82e/index.html","899940cf12456d02ebdb03ff7078e51b"],["/post/7d02ce04/index.html","e186db653c092d30dd5c8f6b461a0008"],["/post/7d7131f4/index.html","4cd190684d7f0b95c54e0fa784932e7e"],["/post/7f53edb9/index.html","c500892bd76c55355ea2a073bf8d4061"],["/post/82f14f26/index.html","a91cbf79bf78c88f93f65408fb2a924a"],["/post/83828674/index.html","05bb9bfd9f0211255bddaadd0a9789bb"],["/post/84daa1ca/index.html","e83fcbce80118132e5ac5576e042fbf6"],["/post/85230b59/index.html","f9cded8f7973afe438ee8236439d5306"],["/post/854071ac/index.html","c1eb0e5a9cf5efa34160b0c1cb74ae92"],["/post/876d75f2/index.html","7cecce04044aea77e3cd52449cd28d73"],["/post/88fbc049/index.html","6ab849801acec1ff6053e7a1c2b5dc44"],["/post/8932eaec/index.html","63d346d8d30a3e8b6f8cbc9785d35cec"],["/post/898963b1/index.html","785d98a70101e4342abe0a9d05e354d1"],["/post/8a012fb9/index.html","87423b068f07ecef37d8e0ab21b8cb5c"],["/post/8b2d002b/index.html","aacd558f632be0342f82b9ea6bea7185"],["/post/8b45c159/index.html","26286b1da3acba93b2422ddd3626e34f"],["/post/8b6f15b4/index.html","67f54af3e5a0fb6e825f334b598c2de5"],["/post/8b9c051d/index.html","009fb45fc9a22e2c0d94852ab91f2f63"],["/post/8bdc1938/index.html","3cd2120f2350545bfd4715736188dc16"],["/post/8ce3f979/index.html","ef7a0ffb078f78a6a007409d6c4c7915"],["/post/8d4707b6/index.html","6652365dc7b28bda0b7d262a6598e612"],["/post/8d877e63/index.html","299d38efa2af2378db29f90b1a7665d9"],["/post/8db507ff/index.html","b654f74c4eabfc8fe8149cf4f35cb83b"],["/post/8e6eb7bb/index.html","a39a06cd0a0925efdd26a0be0c8026f7"],["/post/9054e84f/index.html","dcd3d9febadc8b53a894f9e1af8bf1d4"],["/post/917a155d/index.html","464a333d2c66eaf23f4af182c32404cc"],["/post/91842b71/index.html","239b2a329fea23841107717144eb495b"],["/post/91b7cf13/index.html","c73107306d677ba03bb229116443a742"],["/post/924c1a5a/index.html","15096319848dfa661b9356b74909ebec"],["/post/9282a9ab/index.html","68ff131c6057207479c473e6ecf1e975"],["/post/9324eee6/index.html","8da2a7f436aec616f3cedc49aaf167a2"],["/post/95370db7/index.html","b5d1c7e474e6088bc576cfb5c15a8efe"],["/post/9587bb47/index.html","a7b85a2f84b2e73b3c01c0feaa500ea3"],["/post/959269de/index.html","db34898c188fc6aa7ac2d4117a635b3e"],["/post/977f5125/index.html","40fdaf4a211cd86ad0312c6c1ef9b328"],["/post/97ff1ee9/index.html","433fdfd9faecc1544db21f2c35bf8fd5"],["/post/98df88a8/index.html","66de3dbb1873dc1bb34cb7ede0d1c7b1"],["/post/9ab374d4/index.html","046e538ff1be598d51bcb41c233725a7"],["/post/9b6567b2/index.html","87c6f5582ed4045ba92ccb54f8a2a431"],["/post/9cffdbe3/index.html","8750b48d80154474b1d8bebf25330485"],["/post/9eb841ce/index.html","c3a06b6f30802531ecaf836352920c30"],["/post/9ede2c87/index.html","e3d8671e45079a8db984c9033c1b0920"],["/post/9f24ebb5/index.html","d29aaea7e5e7175d3a672d8f7133327a"],["/post/9f5552a3/index.html","2efdf993352e2d082efb4dc3e79df9c4"],["/post/9f626e7a/index.html","1da643f8f3eba4fbb67d84b5ac42429e"],["/post/a0bd766b/index.html","96ce3cbea31b65e1b390a8c8b787cbd8"],["/post/a0fb7f06/index.html","d90e536b121d6e6688a319f19ee8ce3f"],["/post/a123bf9e/index.html","7c55a8df4ca5a1ad1a457dbd9b1a040b"],["/post/a201e11b/index.html","ecd412610ba5080fdb4c9817784af1fe"],["/post/a2962194/index.html","e31c1ede0d7d0ac0a53c638d9b23f4a6"],["/post/a41adc1/index.html","9abf6e7d6341c90bc10c36653b160964"],["/post/a5c428f1/index.html","81e794a49c8ee5968794a3cc3e876715"],["/post/a64926e8/index.html","47c2c9583bc8dfc9b9a5e969d557005f"],["/post/a9ff6f3d/index.html","864ce5321d126837533b87ab23ec2c31"],["/post/aa0bed86/index.html","4baf30713b7cb5b52ad3540278530811"],["/post/aca50ff8/index.html","9bf3f432973dce208160637f77e59782"],["/post/ad5c5bd9/index.html","adaa5866a84b5d04c4e5bf5907d62348"],["/post/af038717/index.html","2fe93e868a27e50ee8822b6f7dad495a"],["/post/b2310ca0/index.html","4252ad44c5ea409d331f10dfb127339f"],["/post/b58ee955/index.html","6476179a8cca559c137059249af21033"],["/post/b6d18d6c/index.html","94083e7dbbe9d2a27ead3fd80a75b9dc"],["/post/b6e8d46e/index.html","abac3b786e8ad51612ddb0c1ed10e352"],["/post/b82753fc/index.html","8a0ae57162f6cac981e93fa73dec64ba"],["/post/b83bc460/index.html","845bdbdbb591e08910347611d77edfbb"],["/post/b8792f9f/index.html","9331a0cd28918cce2cd48fa4a10aac4c"],["/post/b8847d9f/index.html","cab1c6e763a5975e2eae18a477c919b5"],["/post/b90033a9/index.html","48e32092e83d1e939d9d7390db40e0f0"],["/post/b901735e/index.html","b79f217fa807506ef32f7765a020a4d7"],["/post/ba8b6dea/index.html","f3216edeb927be42e07d8af6f97930f4"],["/post/bb64e398/index.html","4ea773379c5deb4b0e09c47b1e0e1ff8"],["/post/bcdfb73c/index.html","2df4eef3262101c53c3c52d72ae01b74"],["/post/bd00031e/index.html","cea95e1ab0b56e3162425b88bb8242db"],["/post/bf6232fa/index.html","6099987ac2050f99c8e8cdee957a0e4b"],["/post/c04efbf/index.html","9cf8df733402ae45d2ff6398e4e142a0"],["/post/c10d5f0/index.html","c98927eaf285b7e7d77a953d739fe2ff"],["/post/c385fcf5/index.html","784ae52cec8ead79fbfbd11d49e85017"],["/post/c50b0018/index.html","5c756a5f83883a8f39c82564509b170a"],["/post/c5e67530/index.html","5b75b4f99455fa771914130f05d6eebf"],["/post/c691f02b/index.html","41d2116916254ba715139851f490befd"],["/post/c6ead512/index.html","cc7bd891ec658fe148c635c9405816e5"],["/post/c93b6ba6/index.html","ed766e4ee188e03c88dad37ee86693c7"],["/post/cabccf5c/index.html","bc732283e3d7f7da6b9755588035ccfd"],["/post/caef83a3/index.html","5fa155719fab8b55b16ca5789b4c791f"],["/post/cb7c0126/index.html","3d5e32e118562f987b6ce53c767eb12c"],["/post/ccc7d1db/index.html","a167aefbe1919403ec8778795e355f81"],["/post/cf496af3/index.html","ae84c7984c657f0630737de8305a7f0a"],["/post/cf628dd8/index.html","020f3ed63fa2ce0d2ff72fbdfa2e7d4f"],["/post/cfeb28a4/index.html","9ca9a9a999461f87ae0867c644ba67e7"],["/post/d0fb133a/index.html","f4f2b6f40a8ebd192cb6b20e4782cdec"],["/post/d18f7712/index.html","9c47a4034ee159e05a4d21211adfd53e"],["/post/d29c6c94/index.html","e3e3ba42779ea84f00d3665db71c9628"],["/post/d3079d23/index.html","74eaaf59b663a12da9a2d5d322db489c"],["/post/d5c57f56/index.html","16275789557bf7d9cea5348754e80ced"],["/post/d5d4a460/index.html","723a3774648432289a78ed2707c60afc"],["/post/d60ff6fe/index.html","27642c317d1d1a1d825836b27c387fc1"],["/post/d63ad249/index.html","2199a29c296fdaa29f64093d628b10e4"],["/post/d6cb0655/index.html","8b60f1852e8277421e9230453ae775d9"],["/post/d97b21ee/index.html","2e83e86adeb2a0dc8924d1130a2dbb35"],["/post/d98c80b7/index.html","cc85b098bf8e2d02820d992b5fd1db72"],["/post/da4e5d62/index.html","909a8622189cac8e7d0b8d823858e61c"],["/post/da9d93d6/index.html","ff75221dee2b07cb23f4266690229e6b"],["/post/dacc4196/index.html","8176880bb93f32154dced5468970ac7d"],["/post/dcffb1c7/index.html","49434dc890ff44dd24ca38bf9b7ea300"],["/post/ddec790c/index.html","5f4f8e233eafa1ab41b54532dd8bea21"],["/post/deab4886/index.html","7a79023b7fdee02cbd5235326ac251af"],["/post/dfd1ebf4/index.html","8acacf95f71544fcb90fd0cfaaa81d73"],["/post/e1d9f990/index.html","30c3f0b4369f46a8afe877964ea03e14"],["/post/e2780b93/index.html","3fec08427c34f8f89310811b8b56d34e"],["/post/e2c16468/index.html","bdd597bcddb7850e2ff88716cd28b9a0"],["/post/e88f04e5/index.html","d9323ea4b9380b0c2662e97e2b5d35dd"],["/post/e8f8aadd/index.html","28bebca5390c10c810dff1218002a0fe"],["/post/e94764ea/index.html","1e5488cc3a37830ed49f4efb5b962692"],["/post/eab0dfbb/index.html","fa344eb9f6d1361b39d6482d1801dc47"],["/post/eb97b6e9/index.html","d0c5f2e763b917e6e39cd2373495cf88"],["/post/ed043da/index.html","02ec9a2342afcbc1a87936058eabacbe"],["/post/ee123cac/index.html","798b76462489439dfc1237d636aef858"],["/post/eed0f482/index.html","655b4f724c7e317e423d658aba2db99b"],["/post/f0474806/index.html","30decb86cb4f4b6e37cbad477b079dd5"],["/post/f07cae6a/index.html","1acdc8d5c1f363234e7c978deba8ae2d"],["/post/f241bd30/index.html","93d53247337eba8338e14bf1f356f5a0"],["/post/f2522e33/index.html","ef83800d98357356476a09b2b50477a2"],["/post/f294cd50/index.html","01b7b2fcadc7515e191a0ca482a3ab43"],["/post/f33ba73e/index.html","b48cb758202b7af0e2a320e708690dd1"],["/post/f3c3eb8/index.html","41700b1d95e93a206db1b13ab688c33d"],["/post/f58b86f8/index.html","ce70bf488eaca17a21e5c4a3bdc20e49"],["/post/f7eab850/index.html","61af436a86bde2b6fdddbc18fc65e063"],["/post/f941981b/index.html","2e675049703226856a902a5cab324474"],["/post/fc655b6c/index.html","4cb49af239f8143f39c326c7e03bdc4a"],["/sw-register.js","c1dca561044ef2c98228b18bffdf9603"],["/tags/DependencyWalker/index.html","b05f7f1de389e88dd7e6c36f41100663"],["/tags/GeForce/index.html","2a47175367699b9f1661f7d01c01f9c3"],["/tags/Jetson/index.html","0f577d3329e9659d52839e3739121996"],["/tags/JsonConvert/index.html","aa17865aecbf277539c58fbd07837d75"],["/tags/LeNet/index.html","cb85845a026ffff04a8b0372418c548f"],["/tags/OpenDRIVE/index.html","aded72c70b806a297a2cb58c8775124f"],["/tags/Tesla/index.html","e3e30892719a82b33a8d56387654ec11"],["/tags/VeloView/index.html","3f80d6c2d5ecc8d74d9b954bbcd5024a"],["/tags/address-space/index.html","8446e215cd1e5f5d4a52e6e550332515"],["/tags/anaconda/index.html","e32bac14f56e49b10c3ac291b562f8d8"],["/tags/anakin/index.html","67d32a6d061e8a628bd87831a1018eee"],["/tags/apache/index.html","515b3a23e89f1816f00c01aa85ecf78f"],["/tags/apollo/index.html","a28c3f25c18f2235fd5d7bd20f153975"],["/tags/app-config/index.html","625af07dfd2c13591aca32fcb65a0d00"],["/tags/argmax/index.html","4a87fa6455b49f47303a21bcbc05329b"],["/tags/arm/index.html","59a2f6cb2be96dc5f044b1e188518a7f"],["/tags/artipub/index.html","710841407105fca9fdad1081a63eafb4"],["/tags/babun/index.html","a090d51dea3e80ac712a1a7d6f617005"],["/tags/base64/index.html","e17ae1fd7d830e21649c4fd19bb47dc4"],["/tags/bash/index.html","377841c99a9fae198136c2586b134461"],["/tags/bazel/index.html","37dc9368dcc3b2202605c8212043064e"],["/tags/blocking-queue/index.html","2fb2d0e81f21ff55515fd4f1e69748cd"],["/tags/boost/index.html","66b2ebd3b95f5daa9e2707252bb38600"],["/tags/cache/index.html","4a0fbd0c1d3ac9c6972c32956181fae0"],["/tags/caffe/index.html","03f353d84f574f45797a90bd27caba94"],["/tags/cgal/index.html","291389d3ca0c906b920eb8c9ebf7d961"],["/tags/chrome/index.html","0f32f5046f9d94091c527cb5311b8e65"],["/tags/clang/index.html","1049eb9e11df54ac9775bf59a59931be"],["/tags/cmake/index.html","fdebdf4d450afd3bb6007645f5f07892"],["/tags/cmder/index.html","ee6b5d361bc95fbc105f02f488a533a3"],["/tags/colorwheel/index.html","c7d9b6207b9be4fd93bd81df2a340e4e"],["/tags/concurrent-queue/index.html","221efa961d3d24120b3575e597c86e40"],["/tags/const/index.html","7602d5e94d0506ed3f8290226e8721e9"],["/tags/cpp/index.html","fb9ce13022837a752747f6f36e71111f"],["/tags/cryptopp/index.html","d53cd668ba8a4afbf58ca61059e1cff1"],["/tags/ctypes/index.html","1e8387ca05f0be1b4fe64cb454ffce0b"],["/tags/cuda/index.html","865c10a86824cffa9f38ad2a606390c0"],["/tags/cudnn/index.html","ea9fb82c432ec35b63578f51294fc4c9"],["/tags/cupy/index.html","8775c6d736b509dde18f2f19aaaf880a"],["/tags/curl/index.html","d7bc8ec519d1d5e3395a2d12d419dafd"],["/tags/darknet/index.html","01b7872061df37504c64226276a2fe0e"],["/tags/datetime/index.html","1910f3b9906af78a8383e51246000aee"],["/tags/deserialize/index.html","8b7bcb168e2ca8bca7e83ecfd49d5456"],["/tags/dl4cv/index.html","d7a2073f0ce5f87efc8f5f68f9727f94"],["/tags/dlib/index.html","c8a1a7127f52f5d455116581b33b40ea"],["/tags/dnn/index.html","6c6e9ce5594ce2cae781369a3f424b82"],["/tags/docker/index.html","15a8436fc13d487d3e764bb7a39e14b3"],["/tags/doxygen/index.html","345d6820806c3424f723eb6e9760de7b"],["/tags/efficientnet/index.html","db0a66ba633bd5f4a0096f6f67e30499"],["/tags/eigen3/index.html","7087a8d1fc137eac02508730735ba008"],["/tags/extern/index.html","5d14565006c06d6a1d8de2c451fa0c50"],["/tags/faq/index.html","ba7374f9a68363f5233fe70b68e18067"],["/tags/faster-rcnn/index.html","d205016443ae38866b123c801ca1d883"],["/tags/find-package/index.html","f9189e04c377c868ab08e871210d62d9"],["/tags/fine-tuning/index.html","eb67035eaa6cdcbb67a06dd2d34a89ac"],["/tags/flask/index.html","e75dcfb5dd7cfcae8bff73f276b53fac"],["/tags/fsp/index.html","72688364d90c7b7b2c73d77927aa721b"],["/tags/gemm/index.html","3f713757e06139ace1a0fc880deb2cd8"],["/tags/generator/index.html","fca0f73064d46f5441926b0d3a627bc8"],["/tags/gflags/index.html","da425877c6ac1562cd619ba4eb6efdff"],["/tags/git/index.html","8abf2ef0b2786deea91e74b08f0d663c"],["/tags/github-pages/index.html","7f86a5450b3e9ff58331fab4be3e2ef4"],["/tags/glog/index.html","7a291497ec5e66b24cc4805d82c9b501"],["/tags/go/index.html","bedeb0d6a64816d433ed927c6341c56a"],["/tags/grep/index.html","a048add88aa439637b4d693289fbb321"],["/tags/gtest/index.html","84912cc27dd4c5a5660f7c07ed7479eb"],["/tags/hexo-next/index.html","58878e1fd77cb1721b256e3f75ed8bf2"],["/tags/hexo/index.html","72af67114f873b7aa5dfbb67289a4efc"],["/tags/httpd/index.html","7656a8926d350ecb9d84041fe538f6f4"],["/tags/image-classification/index.html","5c2e5f5b0af5dd4bd3368355e4b31a55"],["/tags/imagezmq/index.html","de6041097d8a87b5b381659a9cb5d767"],["/tags/in-memory-database/index.html","a54bb86d1cea1e032f84e9a992e41f20"],["/tags/index.html","e62a64de3ec18cbe19c5cb91cdfa1deb"],["/tags/iterator/index.html","9261a2bfdc08cbe1d85caf2dbb81c4fc"],["/tags/json-net/index.html","9db082fd3e4f9019779aa32411ec6dbe"],["/tags/json/index.html","c6b3cbb9c87aec09680f8fe5479c1a24"],["/tags/kalman/index.html","d3b703c59aea7a6a9c0655104a35891f"],["/tags/karas/index.html","b2993e33cc2eced34cc3dd9927d7712f"],["/tags/keras/index.html","0d0d27774a5b1ef1d3c89658b7147e08"],["/tags/kernel/index.html","a0abfc6b857d5b4de890361f80a5e76f"],["/tags/key-press-event/index.html","c051bee24492e13b9a10461582e8e318"],["/tags/kml/index.html","95de62fc3f5fc20d3fc44162198b1bd8"],["/tags/lambda/index.html","b0ec548b931f53a87fcf18f23819a312"],["/tags/ldconfig/index.html","3ed2a6e1c041192837d46ef08caab87c"],["/tags/ldd/index.html","590f21c3112f0d6f22dbb2710e589117"],["/tags/lfs/index.html","511c2223b13500266142c06921c68721"],["/tags/libjpeg-turbo/index.html","ce4f72cd4f6298f8e7f0c80f8a84d7ce"],["/tags/libjpeg/index.html","b4294ebcedff11768437e7840a01bb92"],["/tags/lightdm/index.html","db59ef51d18885b7049c772bfe374896"],["/tags/linuxdeployqt/index.html","d8113df70a2fb87069e9f06552ff9945"],["/tags/llvm/index.html","0195ac812797c2f7d840c972411791e6"],["/tags/longblob/index.html","2e44fbb8b7cd23192fb9aff6ea2883e8"],["/tags/macro/index.html","6239d49331f0a7b90291bd758562399e"],["/tags/mago3d/index.html","b226a3dcb1d28d237f306fd2a6613737"],["/tags/matlab/index.html","5e32242ca39ca69133cb8d2db8d02a07"],["/tags/meanshift/index.html","0b075dfb391bda911300c1fe12c2ddd9"],["/tags/ml/index.html","3357fd45841982f000758af9a87ce394"],["/tags/mlp/index.html","a448116042710cd3a4979779fe4e3d45"],["/tags/mlpack/index.html","b1cff2bcb5d3c89db8f9f530afacc077"],["/tags/mnist/index.html","c47e6a71d785c6951eaaa6144e3f0ef7"],["/tags/mongo/index.html","70c796146609ec2ed17c49de79a2db9b"],["/tags/mongodb/index.html","9f4a237b7772dc64e41ad007ace1552e"],["/tags/mot/index.html","595da06fb0485b1aaf3c973d3c3a21b2"],["/tags/multi-gpu/index.html","722864a53f2e58a23b1e8ffde510563f"],["/tags/mysql/index.html","ce184e0af03656959bf23f02180529b6"],["/tags/mysqlcppconn/index.html","98b53fe355cc2a6b7ce0e1ed3a5b5b1d"],["/tags/ncnn/index.html","66647b0ba644e6ce664973f2c0e4d308"],["/tags/network-proxy/index.html","236da81c19d37fe1ae7d48c1a062b447"],["/tags/network/index.html","93eacbaec36be43a48a2e540db1ff2ec"],["/tags/node/index.html","a7ef4704c60dd6d6a3e7c01e8f69ab0a"],["/tags/nodejs/index.html","1e4567ba330f98d19f44c9fc4d61dca6"],["/tags/nohup/index.html","f92cdde170b3e3c3563336f3005149ca"],["/tags/npm/index.html","9109bb7bb0b36e6d3ad4f7c00b6492ad"],["/tags/numpy/index.html","a688d5bd7fecc4d4eaba828f91bbdf61"],["/tags/nvidia-docker2/index.html","a0aa5b6b6869608e62359dc06c4025aa"],["/tags/nvidia/index.html","fd25bcad89cc0ef10e1e5c09ade45fad"],["/tags/nvml/index.html","7f630718ba2a101ff7ebf7ca8ab198ad"],["/tags/ocr/index.html","f4a187dac51b49ef3aaeebab8d4549a4"],["/tags/octree/index.html","40c4b570a0ce5973ceaa906ab67d635b"],["/tags/oop/index.html","73cc7d2307a3080f28eed053aea0a2ec"],["/tags/opencl/index.html","885ecd39a61a0ca7254beecd844a464e"],["/tags/opencv/index.html","18faa760627f81a45ad1965a565ba2c1"],["/tags/opengv/index.html","a121a3a52c83fa7b1730d290405d0070"],["/tags/openmp/index.html","b29c91c9b0f7f5907f86c6824afbe3b8"],["/tags/pandas/index.html","1a16a3f9fcd112aeb91c2fdaa78dc378"],["/tags/pcap/index.html","8286ef9bbc9ebc1076a69ecd7ee55ef3"],["/tags/pcl/index.html","00d3a412e30fcfdcdb04c1bbd9dc7112"],["/tags/pip/index.html","58dfe3411891661cedc07fd31e9abce7"],["/tags/poco/index.html","72069643710ebec8e65cbc1f1bf5183f"],["/tags/postman/index.html","012213a9f6658bc9d39f2deccca915b7"],["/tags/profiler/index.html","443ea9e15ec239332461711f6dff5cef"],["/tags/protobuf/index.html","4e851912a21cc03db7dbd7fc749003fb"],["/tags/pybind11/index.html","5ba21728ae905d8c9997ed002b333a93"],["/tags/pycharm/index.html","7107dbcdaade756d4aa78f18e16a624d"],["/tags/pyinstaller/index.html","275f0d2c1439312500080685eb783a4f"],["/tags/python/index.html","e06b4cf0d1fde13d7f5c3d0494d8b446"],["/tags/pytorch/index.html","c37e87b821b4c35ac71adf3b58300071"],["/tags/qt/index.html","2bac628cb5d53c2997922c796011de78"],["/tags/qtcreator/index.html","c1502fd1e8c5b33a6c791b3955aff8c5"],["/tags/quantile/index.html","fb4471eb5c6da35a08888bb6db24e0fb"],["/tags/radam/index.html","2337571c3f3c3c747eaa8d4c665c2ab1"],["/tags/random/index.html","3d59379052f3608cbe61557f3ddd0797"],["/tags/rcnn/index.html","75db7e41f8d368f6d587fc507c5b107b"],["/tags/refinedet/index.html","2b023eaac2d3131df6cfde478e118664"],["/tags/requests/index.html","ffed3efc1ab64b8bf153632c185fb5b4"],["/tags/resty/index.html","02519fcb121569a9a4bc4f585c11af9d"],["/tags/ros/index.html","ee091b0b678d23a387b36c7b5e9213b5"],["/tags/sed/index.html","48c1f297408f59c3b8cf831e22979c2e"],["/tags/seed/index.html","41e887aa50836b247c7655600540e273"],["/tags/selenium/index.html","97b036d3a530c4de4a5848e6a0f2e508"],["/tags/serialize/index.html","c17c4ac306e6f79de5a608c0a96b51a0"],["/tags/sgd/index.html","13b696da00e0ffa2065a84282993432a"],["/tags/shadowsocks-qt5/index.html","68b477e45f535d589309698621ee1307"],["/tags/shared-ptr/index.html","b842a4ba7ade8b49deee46d0fb6732ad"],["/tags/shell/index.html","5bac1a7964dd9f32ea59c14c323052d3"],["/tags/shuffle/index.html","e470836974da3e4398fa37178bd51826"],["/tags/simplekml/index.html","01aeabcf769949e3663e59e1808b4563"],["/tags/singleton/index.html","4b48150c0caf37369d4cbd902dd9e6f6"],["/tags/sklearn/index.html","bed605e3945f71fef43b8a0454ca2f86"],["/tags/smote/index.html","f0376fc42bc019c994ee2197e85dcebd"],["/tags/sql/index.html","bafd717380cb2d6faf31aebb08a6fe85"],["/tags/sqlite/index.html","7ad1916ae8b4af7161b844b546475cfe"],["/tags/ssh/index.html","af384c8d408d4e433a14719239894a6c"],["/tags/stackoverflow/index.html","a0487489e1cfd55c2b19934a4f92230e"],["/tags/std-move/index.html","9bce438a73d339c9d7b10a05fa32ec69"],["/tags/superdog/index.html","85832ea55fe12d6ecf39239adeed46c7"],["/tags/template/index.html","fbf425bc4cd2ade8d9359a2131131799"],["/tags/tensorflow-gpu/index.html","9657f2df6e22aa88dc1bdee2f4c3dac8"],["/tags/tensorflow/index.html","78e7ff5eb789f8984ba8c21212b84b0f"],["/tags/tensorrt/index.html","080402ea031d1160eff795bbdf4efdee"],["/tags/terminal/index.html","f8815528ab1bc924e6fdf862e3294950"],["/tags/tesseract/index.html","84cc1c8d1b964d1ba8da9381f2a6eded"],["/tags/theano/index.html","dd51087f915065c3764399152ff2b3a8"],["/tags/thread/index.html","093ea525701ed4bdbc27c3570a1d57b0"],["/tags/threadpool/index.html","a19dfd1eb2fc0a351753f5401970b7a5"],["/tags/time-t/index.html","5f1bb3b36e76edc4632f89dafd5fa86a"],["/tags/tkinter/index.html","2b8230b8701b5d77cc0f4c5d89c2c273"],["/tags/tmux/index.html","948c068408b1db98bccc99d27d814adb"],["/tags/tools/index.html","46d812d7ec500b4438b88369ad6a959c"],["/tags/tracker/index.html","b30f866d8d2532b151b52fd7775d2a36"],["/tags/ubuntu/index.html","06e4b87433997d67474f750696877dd2"],["/tags/vector/index.html","aadecca36fcdd6399e96edf8e78d6f17"],["/tags/velodyne/index.html","9313f0463cd8d84255431a200d10114f"],["/tags/veloview/index.html","27e840fbafd5c9456cd9b94de6bbc5f5"],["/tags/vim/index.html","575d360fea4b32b59af9b215eb2bf1f3"],["/tags/virtualenv/index.html","7b6f3858d3caf25a9242a1f9842ddbe5"],["/tags/vlp16/index.html","705150672491a70e53ae29c8bda3bd33"],["/tags/vscode/index.html","2013a30bafa3a700bccd6054ee1b1e9c"],["/tags/vtk/index.html","d17130f83f88eda5ba337c2e4309e6ed"],["/tags/xaiver/index.html","1ee8a0a8c3a42264c2b789dc83d68f0d"],["/tags/xargs/index.html","e11d64932ced4ae7e8e51aed3892496d"],["/tags/yaml/index.html","f341314c10244552376439dbf439a83f"],["/tags/yolov1/index.html","069ec4e37fcf58bf4ada13dccb7a60a8"],["/tags/yolov3/index.html","aa970427e025c3701e06a5c596752620"],["/tags/zsh/index.html","9ee4282149cc10f10f58410bcc40165d"]];
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
