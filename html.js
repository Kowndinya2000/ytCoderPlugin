setTimeout(() => {
   document.querySelectorAll('.jd-nav.is-marginless.has-background-white-ter')[0].style.display = 'none'
   document.getElementsByClassName('control')[3].style.display = 'none'
   document.querySelectorAll('.has-text-centered.comment-box-title.has-text-weight-semibold')[0].setAttribute('style','display: none')
   document.querySelectorAll('.has-text-centered.title-section.is-marginless')[0].style.display = 'none'
   document.getElementsByClassName('container')[0].style.display = 'none'
   document.querySelectorAll('.footer.has-text-weight-semibold.is-hidden-print')[0].style.display = 'none'
   document.getElementsByClassName('columns')[2].style.display = 'none'
   // document.querySelectorAll('.title.is-marginless.custom-grey')[0].style.display = 'none'
   // document.getElementById('codefund').style.display = 'none'
   // document.querySelectorAll('.is-hidden-print.has-text-centered.vilambaram-area-bottom')[0].style.display = 'none'
   document.head.innerHTML += '<style>::-webkit-scrollbar{width: 0.7rem;}::-webkit-scrollbar-track {box-shadow: inset 0 0 5px grey;border-radius: 10px;}::-webkit-scrollbar-thumb{background: #53588b;border-radius: 10px;}::-webkit-scrollbar-thumb:hover{background: #000;}</style>';
   var key_words = document.querySelectorAll('span.keyword')
   for(var i=0;i<key_words.length;i++)
   {
      key_words[i].setAttribute('style','color: #53588b !important')
   }
   key_words = document.querySelectorAll('div.keyword')
   for(var i=0;i<key_words.length;i++)
   {
      key_words[i].setAttribute('style','color: #53588b !important')
   }
   document.querySelectorAll('p.control')[1].style.display = 'none'
   document.querySelectorAll('.button.is-info.has-text-dark.has-text-weight-bold')[0].setAttribute('style','color: #fff !important')
}, 4000);