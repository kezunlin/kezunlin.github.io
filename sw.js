/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/about/index.html","95631717ad523800c18235b4a9e04f29"],["/archives/2017/12/index.html","b4531dbc0facd6a4220604310b9418dd"],["/archives/2017/index.html","3014ddd9c4331704a6e204fae536a4be"],["/archives/2018/01/index.html","dc2c80a12f154038351516dc2816df14"],["/archives/2018/01/page/2/index.html","10a61114bb3e6fcbe834d22e13b9942d"],["/archives/2018/02/index.html","566078ace0d9d5fc83973dbab46de928"],["/archives/2018/03/index.html","68b577fab185cb59ba3afc3bcdfbc248"],["/archives/2018/04/index.html","60c47f7d48be8327889175ba0ff79e84"],["/archives/2018/05/index.html","8ca4046d1b026e05e0e4ae1b8970b358"],["/archives/2018/07/index.html","8932eb3d1f2861afb6f5d5b7d5b96edb"],["/archives/2018/08/index.html","b21aa5aee6dfbb1d435df5658eea6b7f"],["/archives/2018/08/page/2/index.html","c1ec5f62498d856a12a9f9caf27d4e57"],["/archives/2018/09/index.html","4df62a3d805896468033820e223c9853"],["/archives/2018/10/index.html","a01bdc00fbb531d91b43d553fee0173a"],["/archives/2018/11/index.html","eff16ea18e3cd329d414a3d5d71889f8"],["/archives/2018/12/index.html","d87a1189311193c23a5da8434d24a7e6"],["/archives/2018/index.html","4bf31364883c78457c6352ca4f7aaf4b"],["/archives/2018/page/2/index.html","3e8b5489f13137fcc75b018733e6b55e"],["/archives/2018/page/3/index.html","539a37a7ea7df5357759ad952f2f90ed"],["/archives/2018/page/4/index.html","faf210a49d29d1e0c0870a9c31fc01f7"],["/archives/2018/page/5/index.html","9c5308a2a0f418a63ead25da7be47ae6"],["/archives/2018/page/6/index.html","c452326499bf10b0b14a286907ddbfdf"],["/archives/2018/page/7/index.html","1c0cf3f7e5cd9f68b3ce057449065ffc"],["/archives/2019/01/index.html","024e28386495591eeae5ae7924a47ed0"],["/archives/2019/02/index.html","3a071ebbf6d6c3461b258a3c599e38c3"],["/archives/2019/03/index.html","efae5ea07df2d548bf8f42c2d8d7cc6c"],["/archives/2019/04/index.html","854b41cb22e315f383d1994512fd063c"],["/archives/2019/05/index.html","3fd5ab0a4a44e83f13e4f0a8cc3bf624"],["/archives/2019/06/index.html","ab081ec0a29ec42c8a2fbef0d670f265"],["/archives/2019/07/index.html","6e0d06a27e2fad16df8658a1561b8438"],["/archives/2019/08/index.html","4fb41bf2647e4ec7e9400c3e17465d6a"],["/archives/2019/09/index.html","282472d38c63d3fcd6eaced483239c02"],["/archives/2019/10/index.html","aa6728e473789163642cebab5b7d38f3"],["/archives/2019/11/index.html","a4536471e159ce67e56b4bb5ef248ba5"],["/archives/2019/index.html","9a99384aca75eef4c0ae7fe1949d6c7c"],["/archives/2019/page/2/index.html","a4b17a49a093bab9a559b7d9073c0dba"],["/archives/2019/page/3/index.html","a3bacde494d9a8a8f65952be47ab72a9"],["/archives/2019/page/4/index.html","4d0f296a36fd0321136cb9557c099bf0"],["/archives/index.html","18d9653346470bea416e9c6db75aa312"],["/archives/page/10/index.html","81d937e02fd4d31f2ad0ca2c8a92ba3a"],["/archives/page/11/index.html","156fb0f744c4a3c5f23afeaaf39d9f08"],["/archives/page/2/index.html","74ada1a1a225d240d0b9ecf0aec139ed"],["/archives/page/3/index.html","ac3abe5207a1d31dea611b390e0c9efc"],["/archives/page/4/index.html","5a82ea33310eb861a69f7aa5de464a1b"],["/archives/page/5/index.html","659ca98d7736dc9b35a19b26cd88ba00"],["/archives/page/6/index.html","aed2ad06cfe4ee513d626811e433b068"],["/archives/page/7/index.html","d24a7593b30821ced63bfa996f09abf6"],["/archives/page/8/index.html","3574d8ff5df9fc4ec171e923abbe62f4"],["/archives/page/9/index.html","5c705504abef523475723047f087a7d5"],["/categories/autodrive/index.html","5b61556495f316b899331193ad23bfc8"],["/categories/book/deep-learning/index.html","8435698cd9d6da2285b667dfdc112e13"],["/categories/book/index.html","9e8c08478f1738e5480cd1c59f35088f"],["/categories/book/machine-learning/index.html","827df25e21dc8e3b45c7e86436be400f"],["/categories/caffe/index.html","961c430ba1549269339082683e18c6c3"],["/categories/caffe/page/2/index.html","4f0ada30dabb63157471d4634832bd2a"],["/categories/caffe/tutorials/index.html","b09fe7e7bd9d818563a5fab11903b061"],["/categories/cpp/boost/index.html","cbecd93cec757f0fb98ffff08d43a01f"],["/categories/cpp/cuda/index.html","54bd4ad786df4e366fdf03a41a508c96"],["/categories/cpp/index.html","a222e002dca69082258e0798476b4faf"],["/categories/cpp/page/2/index.html","b7fd8151bd64989bba4481716b2c44c9"],["/categories/cpp/page/3/index.html","a93268efda7504c70f7f2959fe8355bb"],["/categories/cpp/page/4/index.html","9ef5e4d17360161fe0c6155d9abb3e88"],["/categories/cpp/page/5/index.html","a93fc2dbdea8ebe0ebf78457f39854a1"],["/categories/cpp/page/6/index.html","d67264ece29cb4bd90fd12d06eccbc81"],["/categories/cpp/page/7/index.html","bf5360242008cd47a6208693419b587c"],["/categories/cpp/python/index.html","bd0a3a6897019ea0122cb35348fab7bb"],["/categories/cpp/tools/index.html","05760a7e4839a7b6ffb7df20b0a5625d"],["/categories/csharp/index.html","7a14ccf595e76d81934e370c753e4933"],["/categories/db/index.html","beed0f8eb37bf5bd45cc53060cb02e0b"],["/categories/deep-learning/index.html","dbb6ed570fae2f67a716155ffb820c1c"],["/categories/deep-learning/inference-framework/index.html","81c793d24e95990f6ba645c6588c0500"],["/categories/deep-learning/neural-networks-and-deep-learning/index.html","99a015af80b9ff93e9b119be930a20ec"],["/categories/deep-learning/page/2/index.html","17bf4cfef4d827fb85b27f79c4b80903"],["/categories/docker/index.html","b3f663aad8be04f610b81f23170e50cb"],["/categories/gis/index.html","557af79da8bfb42144422288d7cc7f68"],["/categories/git/index.html","95496ff6719c38afbe1feb5abd6bf8dc"],["/categories/golang/index.html","19f2190d5e5d4d657bd62981ee37480d"],["/categories/hexo/index.html","ec85bb691040c431c3b6a021838dfbeb"],["/categories/index.html","e72646947daa4056ebfd5eb1b35f95df"],["/categories/keras/index.html","1484dfc24592b3f69cac4af9e7d6a346"],["/categories/linux/index.html","09d5c9d4b769580e6d5bbb31e1d66979"],["/categories/linux/page/2/index.html","c0b343daf23d6ab607479223941a4ba8"],["/categories/mysql/index.html","a251a46a8ed38677a25e0e884d80fa92"],["/categories/nvidia/index.html","a9ea426e8c3a57bcd35ca2769d2d42ca"],["/categories/object-detect/index.html","ec88e0d97a9b93e1e48190e0a1cc3b09"],["/categories/object-detect/yolo/index.html","e926b3d1ecd3c720d0ec775115b11e60"],["/categories/opencv/index.html","7d39c6ee20ed192285fcb15cd7a8e3ee"],["/categories/pcl/index.html","cf8e4a8c95732d429427e397529f63ee"],["/categories/python/gui/index.html","777187e0a3709d051ff4649ea25c94be"],["/categories/python/index.html","1390b29d916e9473db70ffe6384e1fa2"],["/categories/python/numpy/index.html","1ccd32535395dde72126bb75ef896c31"],["/categories/python/opencv/index.html","d54a1cd5c09a8fd43aee393cbc1e4c35"],["/categories/python/page/2/index.html","62eafd7694c7575186e1798568339d49"],["/categories/python/page/3/index.html","d4836956c01f33dff78e6d34cd6e3c8f"],["/categories/python/theano/index.html","7330e6355b780b4ebce5de85f93328ea"],["/categories/python/web/index.html","6d86e3890da1a30156384162f40d695c"],["/categories/pytorch/index.html","33ff3eed31dc29fe8f8112e4b42a8e54"],["/categories/ref/index.html","d8a8869c4d5ce8d68afe02b70035015b"],["/categories/ros/index.html","7f40d6033aecc3c12e06d054769b1ad0"],["/categories/tensorflow/index.html","5cf697b95a06f9dfe3b6dbee44e38aea"],["/categories/ubuntu/index.html","463f62fdc7c0b078bfa6fa1d58adad5f"],["/categories/web/index.html","83957fd6f166ef12ad92f38cdc1f8351"],["/categories/windows/index.html","96887b1fff2b81060a4b937e2343466a"],["/css/main.css","3c4ba269531d6a85106eb48d7be86679"],["/images/algolia_logo.svg","fd40b88ac5370a5353a50b8175c1f367"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","2bed513bc5f13733cf9a8a12c4e1a971"],["/images/cc-by-nc-nd.svg","1c681acc4a150e7236254c464bb5a797"],["/images/cc-by-nc-sa.svg","12b4b29e8453be5b7828b524d3feabce"],["/images/cc-by-nc.svg","dd9cfe99ed839a4a548114f988d653f4"],["/images/cc-by-nd.svg","2d80546af20128215dc1e23ef42d06c2"],["/images/cc-by-sa.svg","c696b3db81cbbfba32f66c1dc88b909a"],["/images/cc-by.svg","6c4f8422b3725cb9f26b6c00e95fc88b"],["/images/cc-zero.svg","79deee77a07fcb79ff680ac0125eacb9"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/kezunlin_avatar.jpg","f0ee2c3bc4ff6e3197dfae29762eb490"],["/images/loading.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/logo.svg","ddad9027e42111ccd5b466bc18188970"],["/images/placeholder.gif","c2196de8ba412c60c22ab491af7b1409"],["/images/quote-l.svg","1238a4baccd02c6025ec85b58f4282d4"],["/images/quote-r.svg","85787c6fa27965c81f7be70252b43bed"],["/images/searchicon.png","3d6b5c9d6d6c26a2b76a14b8fdf3438a"],["/index.html","24c9ab4bed7a52f0a5135087c971b6c7"],["/js/src/affix.js","683c19859764baf0d17538897ea1eba2"],["/js/src/algolia-search.js","f5fa392318805997089ceb3a925979ba"],["/js/src/bootstrap.js","2a1083772854ae2663748e0a25c17285"],["/js/src/exturl.js","2b444179b3145e5007b4d371dac07cd3"],["/js/src/hook-duoshuo.js","45997b0c06abff3cd88efd901f614065"],["/js/src/js.cookie.js","6e9eb1f53afb135aedaf90739c867738"],["/js/src/md5.min.js","677f893f6f521d7fe9bfcbe171394db4"],["/js/src/motion.js","3234c3c5bb08da2af78a188cb5784f9e"],["/js/src/post-details.js","b8e8e27c27c697567879c52888ffc24c"],["/js/src/schemes/pisces.js","827b5ad25e1142277c1e7dfe0cacebe5"],["/js/src/scroll-cookie.js","890406ae3539e4721ef5f314542e5e46"],["/js/src/scrollspy.js","fafdd7ab6af233b701506c733910b7f5"],["/js/src/utils.js","d1ee25b7823708d89469b27b6232257c"],["/lib/Han/dist/font/han-space.woff","b09f2dd7d3ad8ad07f3b8495133909d9"],["/lib/Han/dist/font/han.woff","e841c6b547bc06a06f60f4de52bf906e"],["/lib/Han/dist/han.css","cfcc552e7aebaef5e2f34aee030b956b"],["/lib/Han/dist/han.js","575b6c1667c01798730fbd972e959c9c"],["/lib/Han/dist/han.min.css","cab466d758269b437167422c4a16b364"],["/lib/Han/dist/han.min.js","96482c9c2b3c5ea9bf5a40db162c7f34"],["/lib/algolia-instant-search/instantsearch.min.css","029a13b44e6807955106ff3c075a02f9"],["/lib/algolia-instant-search/instantsearch.min.js","0db46eba0c8133693ee839507b1612f2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/canvas-ribbon/canvas-ribbon.js","16dc214240913551986593808c2efcfc"],["/lib/fancybox/source/blank.gif","325472601571f31e1bf00674c368d335"],["/lib/fancybox/source/fancybox_loading.gif","328cc0f6c78211485058d460e80f4fa8"],["/lib/fancybox/source/fancybox_loading@2x.gif","f92938639fa894a0e8ded1c3368abe98"],["/lib/fancybox/source/fancybox_overlay.png","77aeaa52715b898b73c74d68c630330e"],["/lib/fancybox/source/fancybox_sprite.png","783d4031fe50c3d83c960911e1fbc705"],["/lib/fancybox/source/fancybox_sprite@2x.png","ed9970ce22242421e66ff150aa97fe5f"],["/lib/fancybox/source/helpers/fancybox_buttons.png","b448080f8615e664b7788c7003803b59"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.css","cac75538c2e3ddfadef839feaca8e356"],["/lib/fancybox/source/helpers/jquery.fancybox-buttons.js","f53c246661fb995a3f12e67fa38e0fa0"],["/lib/fancybox/source/helpers/jquery.fancybox-media.js","c017067f48d97ec4a077ccdf056e6a2e"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.css","52ddd84a9f42c1d4cd86d518a7f7e8bc"],["/lib/fancybox/source/helpers/jquery.fancybox-thumbs.js","cf1fc1df534eede4cb460c5cbd71aba6"],["/lib/fancybox/source/jquery.fancybox.css","6c55951ce1e3115711f63f99b7501f3a"],["/lib/fancybox/source/jquery.fancybox.js","921e9cb04ad6e2559869ec845c5be39b"],["/lib/fancybox/source/jquery.fancybox.pack.js","cc9e759f24ba773aeef8a131889d3728"],["/lib/fastclick/README.html","7e33723f6b8a9f55a1ce3979e3d505ed"],["/lib/fastclick/lib/fastclick.js","6e9d3b0da74f2a4a7042b494cdaa7c2e"],["/lib/fastclick/lib/fastclick.min.js","a0fc6c24d1f3ff9ac281887c92b24acd"],["/lib/font-awesome/css/font-awesome.css","c495654869785bc3df60216616814ad1"],["/lib/font-awesome/css/font-awesome.min.css","269550530cc127b6aa5a35925a7de6ce"],["/lib/font-awesome/fonts/fontawesome-webfont.eot","674f50d287a8c48dc19ba404d20fe713"],["/lib/font-awesome/fonts/fontawesome-webfont.svg","912ec66d7572ff821749319396470bde"],["/lib/font-awesome/fonts/fontawesome-webfont.ttf","b06871f281fee6b241d60582ae9369b9"],["/lib/font-awesome/fonts/fontawesome-webfont.woff","fee66e712a8a08eef5805a46892932ad"],["/lib/gitmint/dist/gitmint.browser.js","36b9f7b70e385691c3cfeaeb5af9d044"],["/lib/gitmint/style/default.css","e5e684d21cb02e9f7e81a2b722bddafc"],["/lib/jquery/index.js","32015dd42e9582a80a84736f5d9a44d7"],["/lib/jquery_lazyload/CONTRIBUTING.html","7287727950845c8a1010f3933691afef"],["/lib/jquery_lazyload/README.html","cffa5707f0d54c9f561715e0809487bd"],["/lib/jquery_lazyload/jquery.lazyload.js","8b427f9e86864ee3aaf1ae33e6e14263"],["/lib/jquery_lazyload/jquery.scrollstop.js","f163fd8f02361928853668a96f8a1249"],["/lib/needsharebutton/font-embedded.css","dd8861d10d1ed6b5e0c0011adfb39be9"],["/lib/needsharebutton/needsharebutton.css","30f2f800e13f7b6b83629a4cbd9749ef"],["/lib/needsharebutton/needsharebutton.js","6c6f855f7d50f4bc3c804f52b03bbfbb"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/canvas_lines.min.js","1324174ae6190fbf63b7bf0ad0a8a5bd"],["/lib/three/canvas_sphere.min.js","5c6bc45b137448b5b9df152ccfb2659c"],["/lib/three/three-waves.min.js","41059bd5e5c7aa520b1b411919e5121f"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/ua-parser-js/dist/ua-parser.min.js","a6e833266c4b41fabb9ba94a145322d8"],["/lib/ua-parser-js/dist/ua-parser.pack.js","6b627e4d61a7135952824bb9c1a4a134"],["/lib/velocity/velocity.js","0361fa6dcf4cf4d19c593cdab0937dd0"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.js","f55d22cc592c9f8d4ffd3b41a6b90081"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/links/index.html","f053e5190abbe5c88fb1a8c6514d83af"],["/page/10/index.html","c9c8ae257ec1df90612d95cc4b63a096"],["/page/11/index.html","174fb2f421d90842b9630d7a954ee8b5"],["/page/12/index.html","a299354d998a3b9d2a349598243b51e2"],["/page/13/index.html","a9d807cf943d5b57f9d823f35dbfe35b"],["/page/14/index.html","a34c884e4c53b6f57892531f4ea106d9"],["/page/15/index.html","fafd13ed24db8b7620a7df0d93bed861"],["/page/16/index.html","926c61057f615459bc5b324fdc1863b2"],["/page/17/index.html","63dfbeb464ecef0762c0c24de59a9d9e"],["/page/18/index.html","30a0875264b0db597b5d5298687e0fc1"],["/page/19/index.html","a14a2a2130e9803ca5c46f087e2f2440"],["/page/2/index.html","39bbf680484c6a1cee75bf7443aedbab"],["/page/20/index.html","6ce3ce4be6fe78c2fa3bdaea0ed35092"],["/page/21/index.html","629539f80ae1d7362f19b9291627bacd"],["/page/3/index.html","1d8bae32ebe90dde83435f13ede6c0dd"],["/page/4/index.html","6b5aa93907d5318b84b8d2eb31130d3c"],["/page/5/index.html","9f276ea6742d3ec2446f6e2b563b58d0"],["/page/6/index.html","0f7c677f35e6f2690f5ec7e270e49c16"],["/page/7/index.html","590d3628821cda3b3152f23c0709485f"],["/page/8/index.html","17411ed774c3fd7848aab20f79c69337"],["/page/9/index.html","20af70c6aaed998097a0e19e4f28db5f"],["/post/107cbcbb/index.html","622302f2fd2a3f2089449655472caf55"],["/post/12766fe4/index.html","2a76628325a0b23c9b298a783e6a5f55"],["/post/12ab5707/index.html","e0778abef17c8684f6defccf84d75527"],["/post/137aa5fc/index.html","d9ec180f79a9a56d62d97121d43d19a6"],["/post/13f1a6ca/index.html","9bcfab9ab9141ec8c3f0aeaf978dd032"],["/post/15f5c3e8/index.html","f26bc230b5487a402cf009e06ac54ce4"],["/post/168bc2b4/index.html","83799911d400bccf3e46bfcaedc18805"],["/post/1739694c/index.html","d73645248f50cc145ba3ed8309ed29ed"],["/post/18a77a36/index.html","2080f78123d36570d5ec64e67ba05f20"],["/post/18a8ed49/index.html","661e077bbb4d4efca036a162d11eced0"],["/post/1cd6a04d/index.html","4020abf3023192b3d1094541ecde73a0"],["/post/1e37a6/index.html","9ff014469f51baad3698b3163826feda"],["/post/1e5d14ee/index.html","eca9c9616a6693f3979bd7d5bfd98322"],["/post/2059dc88/index.html","d5adadceb59a965b25d14ebc45b982ba"],["/post/22391aa3/index.html","ebb3c63451a39e04c5acce280e36d7ad"],["/post/2273a34f/index.html","effcee093f1dca467f1ab9f4453b42fa"],["/post/22f1214e/index.html","293d413a28375f83d9272194954eb052"],["/post/23014ca5/index.html","3621dc3da47215dbc86d328829ddd78c"],["/post/23b14b43/index.html","0f3d4d8652dcb0ee70ad96714bbbfdcf"],["/post/24d22b46/index.html","d41b40d601bd07ed4327a64ec28dedb8"],["/post/24e94603/index.html","5b9ef1739e4f709f5e2e3b5d129a7799"],["/post/24fbab5/index.html","d55ff2211afbf9360faf28e5ce0f48a4"],["/post/2613961a/index.html","0c30c608c53e32fb67b4da593751937d"],["/post/281dd8cd/index.html","7c35f252a365f3188b82ca933957ccbf"],["/post/28dec829/index.html","f49835c4cd41e65ce3a1903ddff27926"],["/post/2d809f92/index.html","8cbae2f154ba6f39e05ae2ebb132f074"],["/post/30e0cb19/index.html","0379b938e93a794d971fa6c24df49c9d"],["/post/32533b9f/index.html","850bb97fd41eda74e49a3b52622e4830"],["/post/32d1b25/index.html","bce01438c69aff5224700a1b6a71c4ff"],["/post/34e2a097/index.html","7b9d097f914435d75bdcbb5a6969f8cb"],["/post/3620a857/index.html","b8d267936cdbd68b22988d96fa0f38fc"],["/post/3670803a/index.html","c3782a985e8b8fbcd232cdddd3e4ad20"],["/post/36e618e7/index.html","bfa958759cf70c70c3550f0304ba2274"],["/post/39ab7ed9/index.html","5b0074599af1ec81edae2fdf0fd2f45a"],["/post/3a558aa4/index.html","023df99b97fcade7b6548418a0cc5c6a"],["/post/3ae35270/index.html","5349d424d91ad797a8408f83bc8cdb80"],["/post/3bee8fac/index.html","8131690633bd3030e368ca997201ae79"],["/post/3f33896b/index.html","afc9601a9f84dc1c6a5252d02f20a373"],["/post/40e625a8/index.html","30bb07945c8ecb1f11592933f9e629bc"],["/post/41448ed1/index.html","9a67614ba95a569b9a1cd206df29eda8"],["/post/41fe963e/index.html","7cdce80397c4b00ad4641904629f14ce"],["/post/431550df/index.html","f4b666004b08719a7dd6f39aab13c4d1"],["/post/4509c582/index.html","3d456a0ead1a72dc6aab2fb66ae645ab"],["/post/48d0ac2/index.html","b294a7826803c1ca15acdd6d71614672"],["/post/4a1427cf/index.html","71a8a3e4549bfd009fa27b789dffdcf2"],["/post/4a17b156/index.html","9c6581afb210b7ba783112440fe68586"],["/post/4bc343c9/index.html","c27228c9290dc9d587e398c5f70931ea"],["/post/4ec4ae49/index.html","285d5e7d211a00f511f6b8e3488c904f"],["/post/5076bc45/index.html","23c7fc3d795700f2e12f8c3ba2285898"],["/post/514b8abd/index.html","9c403a99f050787e11904c5dca7fa4e7"],["/post/51cd9fa0/index.html","c38ed1f516c4d00d8ac91326c950ff78"],["/post/52a71f5d/index.html","09505f69c5fbd3fb52ce68a0686f0eab"],["/post/54e7a3d8/index.html","22590c16e5208584373358d7948de2d8"],["/post/54ef4797/index.html","8cfa614418827efc7ed2d8e26868baa6"],["/post/566c93e7/index.html","3a4b0b035bceb3a47eaab8a5ba9be32f"],["/post/5898412/index.html","ec113e0f0a9185fa1949fc356ec55ce1"],["/post/593a3fb4/index.html","2a92439dd8474bd30ffd79265fb00a2f"],["/post/59afd8b3/index.html","cc574c2b275bb1d6c90ecdf5054e5d9a"],["/post/60df7e87/index.html","b5c74baaf58159ad33c33af5f7540814"],["/post/61d55ab4/index.html","e320ae977d6ae149d3d4a82a4cf4e3de"],["/post/62433a8c/index.html","e7cd6a0d97918eb38f6ce484219a152a"],["/post/62811272/index.html","60fe776697c231d98484fbcebc264404"],["/post/6293dd25/index.html","c2a7f4976e7a207b22efe76eadc8a9ab"],["/post/63392b1e/index.html","bba02814d06dc2327caf4c91c069ae8c"],["/post/63b5dbef/index.html","492c7462ebefff046400e6abc8415e0f"],["/post/654a6d04/index.html","862ce375ed74f40d1884936ddbe28d27"],["/post/6580691f/index.html","ae864fc01a5964fe7dc90f1ae991690a"],["/post/65dc693d/index.html","c065c53b01e07ef7acf866e815ccd77a"],["/post/66241a6b/index.html","63efc68e8c73e8048640b533365af6ea"],["/post/66242a23/index.html","344582d54dbb75ada5364ba9cf74d412"],["/post/67b8e780/index.html","a466f30dd212c827756ec9304203d5a8"],["/post/6887a6ee/index.html","d873b0926588c582af129372cd355ccd"],["/post/6b505d27/index.html","9154275049e9dfc8357b2eb3cc0a41e7"],["/post/6dcf96c5/index.html","1d86d7656524ea5fae0bd0c52dc5ddde"],["/post/722778b1/index.html","7a93bb1274260d1151762339dac8c2cc"],["/post/74399d1c/index.html","55f205a174fa0745bcdf0d23a516774f"],["/post/76d1a936/index.html","e78d769cceff1bdfcfad90de445c2707"],["/post/7734e0f4/index.html","05366b9906dadfbc7ea17661bf3ee427"],["/post/779b45d6/index.html","4b9ab3b34331c264fd5cbbc31f328a2e"],["/post/7813e5f8/index.html","70a27cc78ce5ee8f145f4048b1f651ac"],["/post/79b257c8/index.html","42d6f4726dc0326f69b4632e5c440d8c"],["/post/7a6ba82e/index.html","743840fd00bdfde870a2f24146687e6a"],["/post/7d02ce04/index.html","9d0060ee6bcb828894f9a8d0672cbf7a"],["/post/7d7131f4/index.html","3790f49dc17a82865af90bc49740ee2d"],["/post/7f53edb9/index.html","62ec6e1f8da1f990462b751eaecc0eec"],["/post/82f14f26/index.html","65e0b1b96bc764eff828ef95d4ffce93"],["/post/83828674/index.html","b9437fe57305742e5b1ac4102dd30abd"],["/post/84daa1ca/index.html","d0c0e39e948767dec3b17f859e0118e8"],["/post/85230b59/index.html","2b1c7c16dae5d7c6c77facc5ab60e38c"],["/post/854071ac/index.html","1f5fb33281f9f1adf1541166c16a951b"],["/post/876d75f2/index.html","00b1da907b68a96dc0ba1c13179ff357"],["/post/88fbc049/index.html","136179f6e43e39ebcedcb6fc69baadb4"],["/post/8932eaec/index.html","a3c3f26d9f9e20250caf6fd3bad383ac"],["/post/898963b1/index.html","aad14942689a95a226a0d150b326cc06"],["/post/8a012fb9/index.html","85f2672500e813ba704d3dac8bb4de53"],["/post/8b2d002b/index.html","9c3e4a34860d83c47d0cbe1d5543b016"],["/post/8b45c159/index.html","80e8f574f00e154d8c36751f3dbc296a"],["/post/8b6f15b4/index.html","f90beb1100135a2183f8a0bc3e997859"],["/post/8b9c051d/index.html","882c22544e0b2ac101a9b057adc4be5f"],["/post/8bdc1938/index.html","ca031b58cff4310fe2997d5d82ee5f05"],["/post/8ce3f979/index.html","05a7f78ae4df5100794becc22962620e"],["/post/8d4707b6/index.html","5d1f6ca0b99c97eb06828f73af1cf962"],["/post/8d877e63/index.html","b2e65aed3e7c4a3ef1b08e349abd9f03"],["/post/8db507ff/index.html","dbc0d9d14891d4cd24f6cecae6cd4aaa"],["/post/8e6eb7bb/index.html","842afa0054f4ef19c2b489cc2b7917f8"],["/post/9054e84f/index.html","a3581f0ffd7247dd8efd16fa3cfc9189"],["/post/917a155d/index.html","e88acb39773aa9eedff2c75ddbcc5003"],["/post/91842b71/index.html","0d9dcbc11eb1ab53b580c55324554404"],["/post/91b7cf13/index.html","f70885e489cbc0400d4af5fe47333946"],["/post/924c1a5a/index.html","1f93e781762b1ad84bb060151f4b0c80"],["/post/9282a9ab/index.html","695ffea3c3450f201dd158b76da670fd"],["/post/95370db7/index.html","5a376a4d19bacb606f701e2fffc35904"],["/post/9587bb47/index.html","030ba4088b699eb605bcd606638b9bbb"],["/post/959269de/index.html","1d17c28b3d9026f445c7ef5a1d95bbe0"],["/post/977f5125/index.html","5ca30619b0e7e5f9f2760e48884c1d14"],["/post/97ff1ee9/index.html","0d071244c2f51d556386f8c8ded368a7"],["/post/98df88a8/index.html","1ace0f60ab5109c5067c7d1e68de14ec"],["/post/9ab374d4/index.html","df6c63b06e2c47d3848d8aa491333ef9"],["/post/9b6567b2/index.html","8cae5783afea45e8f53c61184185c845"],["/post/9cffdbe3/index.html","5db2dbe2e5f9cd921a96a47776a9dc87"],["/post/9eb841ce/index.html","f3be96ccc416e94cdeb994eaa60cb5a9"],["/post/9ede2c87/index.html","eda5ba28904306bfc319ca8a14ad642e"],["/post/9f24ebb5/index.html","0ee137c12ed0232b1b366d860b553c9a"],["/post/9f5552a3/index.html","07f121cf9cc3b81198637513a5a14441"],["/post/9f626e7a/index.html","309489d09c810bbd69188e8d0aee99df"],["/post/a0bd766b/index.html","44b5623eebcc55ffd12a641112ecfdab"],["/post/a0fb7f06/index.html","281b8dfd7f68f6639ce033f270d4c7cf"],["/post/a123bf9e/index.html","f4ee5b011ace59b90aee85a0d8122a69"],["/post/a201e11b/index.html","364a5df3cfc50f7c92f24d264430bd6d"],["/post/a2962194/index.html","3995fdda958d22489658ccc095e8ff0a"],["/post/a41adc1/index.html","e16468be0e0096c8ad8fb086f5a7ab5e"],["/post/a5c428f1/index.html","b053aa11cf6fca295eb2a0f952e39c80"],["/post/a64926e8/index.html","41c85216896c5e607498168265cab413"],["/post/a9ff6f3d/index.html","ebf4aaa650e65fceaba216be432cc882"],["/post/aa0bed86/index.html","82059895efd8e54642220fb94eedb837"],["/post/aca50ff8/index.html","f51352ded4f1c93ba35d922b65967c74"],["/post/ad5c5bd9/index.html","0dc7d804f1eab0ba31f6860e72a54087"],["/post/af038717/index.html","2f64fd061284c045edc296a3bc3fe9bb"],["/post/b58ee955/index.html","50ee2fb7359018da42b7eecdaa10b080"],["/post/b6d18d6c/index.html","9c0df63c879982cd488d7ee09e64cd75"],["/post/b6e8d46e/index.html","1a6423fa812efe75fce4d417330f4ec1"],["/post/b82753fc/index.html","e28c1281c03205d654e0f5e52c649898"],["/post/b83bc460/index.html","8ffdc8e8b644e7558668bc3eff6ecd68"],["/post/b8792f9f/index.html","a08032479dc8ea8798b3608c2c7f3e93"],["/post/b8847d9f/index.html","dfff098aabf4be33bc9f315dcd4dbf3e"],["/post/b90033a9/index.html","fa553024c34e6f59bcaf94ad929ef142"],["/post/b901735e/index.html","d7eb58fbbfd4d417ddde0497dd0392cb"],["/post/ba8b6dea/index.html","ac9b85cf5fa2219a6a32b3abe4ab26be"],["/post/bb64e398/index.html","24b540dc1337dd981dee4defc2c21077"],["/post/bcdfb73c/index.html","e3f3132e436d51dc72f088b6c3ec4e28"],["/post/bf6232fa/index.html","2528198fa78747c8d22c8065c0faa934"],["/post/c04efbf/index.html","bda5820c942f6794a97c16aee7fcd38a"],["/post/c10d5f0/index.html","7a2ffba592a6eb6e4c653a80f4588623"],["/post/c385fcf5/index.html","3e104e7e014508d32e1035b7bd2fbe5b"],["/post/c50b0018/index.html","8c0cbe0a181cb9785ab79f70ee6aa36c"],["/post/c5e67530/index.html","a31c04462991d8948e081d524e96e86a"],["/post/c691f02b/index.html","74c08a860a4da8d710c91061a706f7cc"],["/post/c6ead512/index.html","c4298d9121af4af7797ada4e5e3bc18d"],["/post/c93b6ba6/index.html","488510622446d4ce09ab07a04a6d4364"],["/post/cabccf5c/index.html","375241633270571e1a7e714a9592e542"],["/post/caef83a3/index.html","6ef7e2d06053cea39cf893a5f0ce5edf"],["/post/cb7c0126/index.html","39e7b0a5acbd0cfaf225f0cf83827bde"],["/post/ccc7d1db/index.html","605a47676a6bfd4b1f8774538462ee68"],["/post/cf496af3/index.html","2ebdbbcab90b2a8a91810add5574fd26"],["/post/cf628dd8/index.html","724db0bf399e76b9eeab0ca7468feb87"],["/post/cfeb28a4/index.html","053876601e0b786b4c293512a97fcd5a"],["/post/d0fb133a/index.html","64bd7414c1238895978e0e5bc25f90fa"],["/post/d18f7712/index.html","31d9c1b768a33845173736ebde920c93"],["/post/d29c6c94/index.html","2b293e38c72e5b2a264cbc1b2b20dfbf"],["/post/d3079d23/index.html","8b082c45a66bcd45abac613e46bda6dd"],["/post/d5c57f56/index.html","cae2ca10f34a8b34228ddbcd5996efa4"],["/post/d5d4a460/index.html","4512cc82420211bfe3fc8a273412a530"],["/post/d60ff6fe/index.html","2ec6490fae5266ebaab56b9a42c675a9"],["/post/d63ad249/index.html","d317e61c13a4a572b2f5d4cd3a8b0b94"],["/post/d6cb0655/index.html","939b765e169177d4e3eea4f9eeddd7bc"],["/post/d97b21ee/index.html","817ec454541137fae44188b742611e67"],["/post/d98c80b7/index.html","a1e5bd3acd7cf832869b03c90a9cdcae"],["/post/da4e5d62/index.html","9ed47460504f390805c7423d2a84cec2"],["/post/da9d93d6/index.html","ee7efcbc3ff6623b93700ae9451f3684"],["/post/dacc4196/index.html","86bf54e0796a10e41a42cf7da5e5f5f1"],["/post/dcffb1c7/index.html","055b13e9b407554dbffdf69ca5f1fff6"],["/post/ddec790c/index.html","57bf585d389992ec39ccf2f5379d53a8"],["/post/deab4886/index.html","0c920ee5b6a9086c195696fd22a67863"],["/post/dfd1ebf4/index.html","e5465e175f8202d7f2698873019f299e"],["/post/e1d9f990/index.html","b78a8cdfe74b1251149f27f63c5ab328"],["/post/e2780b93/index.html","06cc457eccf27f36c7e7c5a8f6ddb06d"],["/post/e2c16468/index.html","6333e8463a1d175a4189ce2ce3f43956"],["/post/e88f04e5/index.html","ceb06b9c444313c39f79240cc89d437b"],["/post/e8f8aadd/index.html","6afbded457bca3da8b953002e4d687d8"],["/post/e94764ea/index.html","019cf7d3d765edd78ec21039d74b041c"],["/post/eab0dfbb/index.html","8d21872ddf900a3fe84859601cff21eb"],["/post/eb97b6e9/index.html","0a0b8d1b58c2a2a9384d765cbf7ef41f"],["/post/ed043da/index.html","0fba342355f1b5bcd975aab7e4f8ff60"],["/post/ee123cac/index.html","fd62022f2b1aa52c1f28b47594605e08"],["/post/eed0f482/index.html","b84f60b42534adb5d724d17de2d6e530"],["/post/f0474806/index.html","f2da4db842c12c72fb05f256570f2de5"],["/post/f07cae6a/index.html","3b3ab45f7e6fdf5007772422204014ae"],["/post/f241bd30/index.html","f9b2313095061f020de8132a2066a306"],["/post/f2522e33/index.html","75b0bfccd7b5c53713566b0e7e777b36"],["/post/f294cd50/index.html","ec7e104ae14616643257b1943f00948d"],["/post/f33ba73e/index.html","ce0c34bdb593b0b46358495f41ef1db9"],["/post/f3c3eb8/index.html","3e1fa4ed887fd93d919205e4413aee06"],["/post/f58b86f8/index.html","e1941ae1ad0188ceb23aa66a0f1ad0e9"],["/post/f7eab850/index.html","d3f004b83f007ef7eca16bd036e1ca2c"],["/post/fc655b6c/index.html","7d969e1693cb70303eab831231a6f049"],["/sw-register.js","cb1aa598b69795a027b5bc27a68b178b"],["/tags/DependencyWalker/index.html","893bfbe67f3e523ed8d5f1aed663bb29"],["/tags/GeForce/index.html","90bf98b495445b5dd691aa98f6d8d36d"],["/tags/Jetson/index.html","f6cfad85d6129e92377196cd414b8bf3"],["/tags/JsonConvert/index.html","c51a765d79ce51ad40a911e5b9769ca2"],["/tags/LeNet/index.html","f9df96eba0de5744507be9e8a308bc36"],["/tags/OpenDRIVE/index.html","8705ba9a2342b5b8deec23a17a19d797"],["/tags/Tesla/index.html","1d18743e70d8f8e30104b9f295b45d5f"],["/tags/VeloView/index.html","b2a23e64b74afb570d4760be1f671662"],["/tags/address-space/index.html","a076e1be5dff2a73ce4612224d80911f"],["/tags/anaconda/index.html","97d897bf3be683613258f4baac841100"],["/tags/anakin/index.html","d0c353ab2f2d989c981a53d2655ccfd7"],["/tags/apache/index.html","ac882bafaba78957b0007db3b8d79c45"],["/tags/apollo/index.html","0bb659d59c37f9549c14744b85f6647c"],["/tags/app-config/index.html","c162b6ca68c25dfb03b6ffe25c590856"],["/tags/argmax/index.html","40c0ce7d31be18dd6556624d9350c15d"],["/tags/arm/index.html","edfd08c71297f2565e664d1f580026e4"],["/tags/artipub/index.html","e6affe026235841b028fd6f2e5d559bb"],["/tags/babun/index.html","881efe833410ad827361bb38c1572730"],["/tags/base64/index.html","01fffdd3da3a5029d34e50396dde2e01"],["/tags/bash/index.html","0949cf4e5bd84daba709bac08aadb009"],["/tags/bazel/index.html","659e1c4008d23d40a125c69056127b3e"],["/tags/blocking-queue/index.html","38104b36fbf2a5b3b121d53dc7fbdc1b"],["/tags/boost/index.html","e5217374b2733a8698aeafd7c152e6c9"],["/tags/cache/index.html","bd490227a10d41a6d4514c901a393349"],["/tags/caffe/index.html","35f4325d2dcbcd787e7f165c0eb760b9"],["/tags/cgal/index.html","7285f4d49fcd3a0c511ca873e2e0eee8"],["/tags/chrome/index.html","2289b38785228deb084f57eef0312797"],["/tags/clang/index.html","c3808935c657e493f1fa554866ac4f9a"],["/tags/cmake/index.html","26fcdacc10048b0b79bd5987f2ec34f9"],["/tags/cmder/index.html","ac956c5294aa55e034a233091e99301c"],["/tags/colorwheel/index.html","afe70aaace36c924fece511365d9090f"],["/tags/concurrent-queue/index.html","e07967708aabccf30badf4f6a74069cb"],["/tags/const/index.html","1895f4b955948509fc3b21ab503afe82"],["/tags/cpp/index.html","c75ce0a81a536207f5e8bbb94dd58db9"],["/tags/cryptopp/index.html","051cac25e20d8bac51e726ff842d9e94"],["/tags/ctypes/index.html","b1c42f086af68225902990ac85d6979b"],["/tags/cuda/index.html","7b216b32cca5c0988b1f9ed22b6779d3"],["/tags/cudnn/index.html","6db0c58d5bd24133e32a606af211d1d7"],["/tags/cupy/index.html","0764ce254b5e29ac92c35b6af01d3c64"],["/tags/curl/index.html","feda9a99051231171550618b531342fa"],["/tags/darknet/index.html","ee60a84d63411cddedf2c7d79b24751c"],["/tags/datetime/index.html","94f628f762c95b6dc1769ec647fb03b6"],["/tags/deserialize/index.html","e69e3c8eda6dec84279de2f30c5896da"],["/tags/dl4cv/index.html","12625d44c4a210ab5f54ac019683ca46"],["/tags/dlib/index.html","edf7b90534b5dc5e12e13677d4543d17"],["/tags/dnn/index.html","fa65d148d55e6e9505186504aaa26c20"],["/tags/docker/index.html","4633494971014d972ab084dbe96afb70"],["/tags/doxygen/index.html","8a20a2407c06900c6985eeb877c103e7"],["/tags/efficientnet/index.html","5ee909c475c3175f3deb6c1c622db953"],["/tags/eigen3/index.html","4cf6437b4b79ec2136b3a4d931c4d73c"],["/tags/extern/index.html","273b710596ef5e15f5e4c3a4fe02631a"],["/tags/faq/index.html","64cda43725f23dff297e096a1420278a"],["/tags/faster-rcnn/index.html","8f0c2aaf657333f0d67d652d72d8f8e8"],["/tags/fine-tuning/index.html","51aa2e8cb1a0599cc37732a3c2ebda6a"],["/tags/flask/index.html","9974b38b6d2d5a66a0708c8b324b4759"],["/tags/gemm/index.html","1680d5b8aad30af24e96f9bbe58aa549"],["/tags/generator/index.html","980ecf6ae563f3bfd99aa8e0f6580951"],["/tags/gflags/index.html","1f557bf8e98e559bee9f383329bfce5e"],["/tags/git/index.html","f332884cc1b8b65c4b3be7e568e654ac"],["/tags/glog/index.html","d830ce63119444abb00dd1afbf11b2d6"],["/tags/go/index.html","98a71775b0589ddc5adfc3e80e1dca55"],["/tags/grep/index.html","6d47be74f16f1e77db94b93856ef9b13"],["/tags/gtest/index.html","64bcbba0e5a010f3bcc9875a793c4d87"],["/tags/hexo-next/index.html","42d066fe3a8699ee6289ead0778987f1"],["/tags/hexo/index.html","075525a70e17e10e2fd9fae80206ed71"],["/tags/httpd/index.html","700e7ff89e8d57f272b5e504404e61f5"],["/tags/image-classification/index.html","96e43d6ad9c4b1aa8f0516d1c51eec97"],["/tags/imagezmq/index.html","847a0d52fc0d50ac674e5c85e054dd12"],["/tags/index.html","007d2e5a4919db050db73c5686992d79"],["/tags/iterator/index.html","aa7a3e66b56790593b6934d3ed1ed2b7"],["/tags/json-net/index.html","f4f8a21aa730151f98d6d461b1e707a2"],["/tags/json/index.html","5abdd7d90758a939e8d1875d9b71608b"],["/tags/kalman/index.html","39cc58047cde0186a715480145f009b3"],["/tags/karas/index.html","4e4fc8fde82143c0a80bca9e64a0bc2d"],["/tags/keras/index.html","75e4e944282c85d587699cf60dbdf7e3"],["/tags/kernel/index.html","10c92c286bbc933f88d33ea2d8564ebc"],["/tags/key-press-event/index.html","a3049826a3ad1ce89f7d1732a1998797"],["/tags/kml/index.html","f8d288a78745c6085f5adf285151a12d"],["/tags/lambda/index.html","61cdfd575ddd8532c46eff63a2304b0f"],["/tags/ldconfig/index.html","469c90eba5ce634be4f54ebcf0854285"],["/tags/ldd/index.html","6f20fed61f4b61111de2bd1e4bb829aa"],["/tags/lfs/index.html","5299eb323337fb113fd5f45e12b27a7e"],["/tags/libjpeg-turbo/index.html","b69227068642e3f0e6948284ec62f1d0"],["/tags/libjpeg/index.html","508e68086baa9c1eaccd1be3789bceda"],["/tags/lightdm/index.html","f3eeb3e46ad4f6682ee59e5b70cadd6f"],["/tags/linuxdeployqt/index.html","5fbe82f5c1cedb40d8c6ed9c3a648268"],["/tags/llvm/index.html","0d8e8dec63747d8085df98146c0f82fa"],["/tags/longblob/index.html","e1a73b73eb4343d8820759d326940efb"],["/tags/macro/index.html","503d98ebf04c856e8dad3151495a938b"],["/tags/mago3d/index.html","d351bf412bc781bb4cce5143cccf3d92"],["/tags/matlab/index.html","de4c7010858d987d89bdf7db696386b0"],["/tags/meanshift/index.html","c2eb1214d58edabd487fc9e5a7a98fc6"],["/tags/ml/index.html","7233eaadad1069bc5b33454c3bec55e9"],["/tags/mlp/index.html","fd397e12453a79d5107ed6c3f3d72160"],["/tags/mlpack/index.html","904b4ef32eeff7d7d6cc2f0ce9b31c29"],["/tags/mongo/index.html","ab52e1c94b1eae664c4116de43229141"],["/tags/mongodb/index.html","78ac31867d442309d36b0c95f61ebee9"],["/tags/mot/index.html","f8e0707e5dd4a615f006dd65b739dd69"],["/tags/multi-gpu/index.html","f5367796945518bc4c5956e05b36833a"],["/tags/mysql/index.html","a7be4f12312f2c226612883dd5a641f8"],["/tags/mysqlcppconn/index.html","6478bb3741a04e06c3d3a7fb21e840e9"],["/tags/ncnn/index.html","502d02826a00de747161ceb7f2582734"],["/tags/network/index.html","2c5c047b9800f2406f7fb59131a5671e"],["/tags/node/index.html","17bc596e2b46e054dafd58057d22cfeb"],["/tags/nodejs/index.html","efe42006389f66022c915c3b81d76e27"],["/tags/nohup/index.html","8e1e28c0bca09312ed6292c874c607d5"],["/tags/npm/index.html","014d4150ee79fa5e58836c4f91db8879"],["/tags/numpy/index.html","b245406c6a3315c0f7ee1c5e8f6bac54"],["/tags/nvidia-docker2/index.html","a6c64ecb14cccad881b5f6f4f87f51e7"],["/tags/nvidia/index.html","40aacb2bd37b047874668c474a811a9e"],["/tags/nvml/index.html","8989590b4062ebab7ab6bea318d53f5b"],["/tags/ocr/index.html","084e612d80927b330617619933ec8cb4"],["/tags/oop/index.html","979c3febad0d25ef95fb5290de8dde40"],["/tags/opencl/index.html","ba7acef9fa2c3eb89e821b49a29c8eb7"],["/tags/opencv/index.html","ef1781687297545ccc022d2646a60f9d"],["/tags/opengv/index.html","d3dcecfc44b2b2dbf287683ee2a4da54"],["/tags/openmp/index.html","05e636f31fd64f21e6364a5ebded7b44"],["/tags/pandas/index.html","dd87b55ed59d9d0185d8687ae5accc72"],["/tags/pcap/index.html","beb12093cf27bfdc36337a1a775b5659"],["/tags/pcl/index.html","d06ae984f3c3b88b91836df76312d926"],["/tags/pip/index.html","1164696c858db65ee5279c52becb0448"],["/tags/poco/index.html","1b2f18631aa1f05542bff716c915a403"],["/tags/profiler/index.html","780e0c7262843afd5ea4f4a6e745e7ae"],["/tags/protobuf/index.html","e2223d838d98ff4e7b63d86e8959e59e"],["/tags/pybind11/index.html","1fffc8ca68f9e725e6627b3ca724bf25"],["/tags/pycharm/index.html","0be4b4e8204d15a42b739ec85c4f949b"],["/tags/pyinstaller/index.html","b549346508c4b2a449d5fb77fbb77dae"],["/tags/python/index.html","7f032e3e02c8b3e19544e6c7c408f55d"],["/tags/pytorch/index.html","1dba197c5f1ff88aefc166117d3d14de"],["/tags/qt/index.html","81b20f672d7cd9a473eb5f74eee7932b"],["/tags/qtcreator/index.html","6258f769130dd771b3bdca82e15d6092"],["/tags/quantile/index.html","42734251288dc29b4d79415318742725"],["/tags/radam/index.html","7fe50e84b4bc8c99a8c348e38f60060b"],["/tags/random/index.html","440fa830aaee04c51e861238f0ebccdf"],["/tags/rcnn/index.html","421c4cd0a48ce8d48aee457c4dfb1c82"],["/tags/refinedet/index.html","e07f45a0a91861e1e2513768d7420700"],["/tags/requests/index.html","c8cb7a8f1137a946ed3b3f08159ce463"],["/tags/ros/index.html","72f388e2ac8d89795d12307ffc704c8c"],["/tags/sed/index.html","e2080fc46c8afc3e139959b401e83e26"],["/tags/seed/index.html","fba408d59ed24742b5eaf21e51ef4b85"],["/tags/selenium/index.html","cd0ed276e5c5a6bceaa338d9f2fbfe2d"],["/tags/serialize/index.html","25050e892d4f8cbbe978821c0fef4f8f"],["/tags/sgd/index.html","1e6d5901f5dc6a92eb484ac29833fd84"],["/tags/shared-ptr/index.html","9d4faf4b436804fd64a0378978bd6a93"],["/tags/shell/index.html","43d54bfc4f069234c5c6a563ec0594da"],["/tags/shuffle/index.html","fca1e3a3a4fbd6741758cf7e19c4e301"],["/tags/simplekml/index.html","8edd3a5a21f1fdb5360e71c4ecab005a"],["/tags/singleton/index.html","62e33e457421bbff295ef3a4c570c394"],["/tags/sklearn/index.html","ef8e74bb61dcec074b2ee1f9d61b5632"],["/tags/smote/index.html","fcb16397b68dba26aa4a06497764d3c7"],["/tags/sql/index.html","6326dc9bd187b5d80bd10b2e2343a347"],["/tags/sqlite/index.html","489a5d909f197f39c3178bb9dce06611"],["/tags/ssh/index.html","b1e2e36c057268478b088e9eb1f04f86"],["/tags/stackoverflow/index.html","0838f3787a2562e0016a9f3c89ef6e02"],["/tags/superdog/index.html","719ede4528c5e46ab0d5eab3fbef7def"],["/tags/template/index.html","37146ca4509c8d93624fff85fc8efaa2"],["/tags/tensorflow-gpu/index.html","4fe78e38f40eb09c8ae5ef5c918ac205"],["/tags/tensorflow/index.html","426cfe809ca42f056d778827d6dae124"],["/tags/tensorrt/index.html","093c61379383229da83d301c7dbe8db6"],["/tags/terminal/index.html","357130729f5f2e012b21e668a8c506f7"],["/tags/tesseract/index.html","a4e65a1a444677525a2577115aa97e68"],["/tags/theano/index.html","5a82de524133d0d956b69aa3098fcfc0"],["/tags/thread/index.html","fed68e203c9368b9887bafa9c16c7d0e"],["/tags/threadpool/index.html","d71059825e80de88feb10cf14b2da29e"],["/tags/tkinter/index.html","f3994b1e261b24f27abde9ff9fef771c"],["/tags/tmux/index.html","ba74472b74e700516fd1d5ca47e0fced"],["/tags/tools/index.html","4b6031290bf7b5f7614bfab9bd99ac03"],["/tags/tracker/index.html","c8c256d0d2d462ec271c302bbeebc309"],["/tags/ubuntu/index.html","6bce1b0fc1119e9c129271c992a1db73"],["/tags/vector/index.html","8105399ab37c5b8354ea9c8cd64795a6"],["/tags/velodyne/index.html","3d0b658a31665357d4fdf38318057ed0"],["/tags/veloview/index.html","0a791538dc93314af06aeeca9960a794"],["/tags/vim/index.html","6de40cb1660ce1541587da7119dad230"],["/tags/virtualenv/index.html","c99fa12551b0a10f37b37017652d1c62"],["/tags/vlp16/index.html","57ea3582046f05294af033f92589272f"],["/tags/vscode/index.html","54b117ce5654fa3e9d69470161f5ac93"],["/tags/vtk/index.html","c5ef644f51a62671be03b167fb7d5bd3"],["/tags/xaiver/index.html","d90f1db6a76ff3b91aab19a199112bc2"],["/tags/xargs/index.html","1ed0ef3e062ef25a198d1e73bbe981e9"],["/tags/yaml/index.html","78fd3a036c4f403193760a8544238c98"],["/tags/yolov1/index.html","f4fa032ea4fb3f05f7d5df8cc5ea263e"],["/tags/yolov3/index.html","02333b25f828cbc9c61456ae0d306f83"],["/tags/zsh/index.html","b96ab5120a4d13889a938d8055e8c389"]];
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
