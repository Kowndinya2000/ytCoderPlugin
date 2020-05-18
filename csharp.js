setTimeout(() => {
   document.head.innerHTML += '<style>::-webkit-scrollbar{width: 0.7rem;}::-webkit-scrollbar-track {box-shadow: inset 0 0 5px grey;border-radius: 10px;}::-webkit-scrollbar-thumb{background: #53588b;border-radius: 10px;}::-webkit-scrollbar-thumb:hover{background: #000;}</style>';
   document.querySelectorAll('.jd-nav.is-marginless.has-background-white-ter')[0].style.display = 'none'
   document.getElementById('codefund').style.display = 'none'
   document.getElementsByClassName('control')[3].style.display = 'none'
   document.querySelectorAll('.accordion-header.toggle.has-text-weight-semibold')[0].setAttribute('style','background: #343A40 !important')
   document.querySelectorAll('.is-hidden-print.has-text-centered.vilambaram-area-bottom')[0].style.display = 'none'
   document.querySelectorAll('.title.has-text-centered.is-marginless')[0].style.display = 'none'
   document.getElementsByClassName('columns')[2].style.display = 'none'
   document.getElementsByClassName('is-hidden-print')[5].style.display = 'none'
   document.querySelectorAll('.footer.has-text-weight-semibold.is-hidden-print')[0].style.display = 'none'
   document.getElementsByClassName('has-text-centered')[7].style.display = 'none'
   document.getElementsByClassName('has-text-centered')[9].style.display = 'none'
   document.querySelectorAll('.title.is-marginless.custom-grey')[0].style.display = 'none'
   
}, 4000);