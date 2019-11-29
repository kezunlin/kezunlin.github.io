/*When page loaded, create copy button */
!function (e, t, a) {
    /* code */
    var initCopyCode = function(){
      var copyHtml = '';
      copyHtml += '<button class="btn-copy" data-clipboard-snippet="">';
      //fa fa-globe  replace with custom font icon 
      copyHtml += '  <i class="fa fa-clipboard"></i><span>Copy Code</span>';
      copyHtml += '</button>';
      $(".highlight .code pre").before(copyHtml);
      new ClipboardJS('.btn-copy', {
        target: function(trigger) {
          return trigger.nextElementSibling;
        }
      });
    }
    initCopyCode();
  }(window, document);