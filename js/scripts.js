/*- header -*/
headerFix();

$(window).scroll(function() {
	headerFix();
});

function headerFix() {
	if ($(window).scrollTop() == 0) {
	 	$('.header').removeClass('fixed');
	} else {
	 	$('.header').addClass('fixed');
	}
};

/*- language-panel -*/
$('.language-panel__item').click(function(){
	$('.language-panel__item').removeClass('active');
	$(this).addClass('active');
})

/*- dropdown-menu -*/
$('.menu-btn').click(function(e) {
    $('.dropdown-menu').addClass('show');
    $('body').addClass('no-scroll');
});

$('.close-btn').click(function(e) {
    $('.dropdown-menu').removeClass('show');
    $('body').removeClass('no-scroll');
});

/*- phone -*/
$.mask.definitions['9'] = false;
$.mask.definitions['0'] = "[0-9]";
$(".phone-input").mask("8(000) 000-00-00");

/*- interior-slider -*/
var menu = ['Гостинная', 'Спальня', 'Детская', 'Кухня', 'Ванная']
var mySwiper = new Swiper ('.interior-slider', {
	slidesPerView: 1,
	loop: false,
	autoHeight: true,
    pagination: {
      el: '.interior-slider .swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '">' + (menu[index]) + '</span>';
        },
    },
});

/*- interior-gallery -*/
const tabs = document.querySelectorAll(".interior-gallery__bullet");
const contents = document.querySelectorAll(".interior-gallery__item");

for (let i = 0; i < tabs.length; i++) {
	tabs[i].addEventListener("click", ( event ) => {
		let tabsChildren = event.target.parentElement.children;
		for (let t = 0; t < tabsChildren.length; t++) {
			tabsChildren[t].classList.remove("active");
		}
		tabs[i].classList.add("active");
		let tabContentChildren = event.target.parentElement.nextElementSibling.children;
		for (let c = 0; c < tabContentChildren.length; c++) {
			tabContentChildren[c].classList.remove("active");
		}
		contents[i].classList.add("active");
	});
};

/*- gallery-slider -*/
var menu = ['1 этап', '2 этап', '3 этап', '4 этап']
var mySwiper = new Swiper ('.stages-slider', {
	autoHeight: true,
	slidesPerView: 1,
	loop: true,
	spaceBetween: 10,
    pagination: {
      el: '.stages-list.swiper-pagination',
			clickable: true,
        renderBullet: function (index, className) {
          return '<span class="' + className + '"><span>' + (menu[index]) + '</span></span>';
        },
    },
    navigation: {
        nextEl: '.stages-slider .swiper-button-next',
    },
});

/*- gallery-slider -*/
var swiper = new Swiper('.products-slider', {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: false,
	breakpoints: {
		0: {
		  slidesPerView: 2,
		  spaceBetween: 10,
		},
		500: {
		  slidesPerView: 2,
		  spaceBetween: 10,
		},
		680: {
		  slidesPerView: 3,
		  spaceBetween: 10,
		},
		1024: {
		  slidesPerView: 3,
		  spaceBetween: 20,
		},
  	}, 
});

/*- modal -*/
const myModal = new HystModal({
    closeOnEsc: true,
    backscroll: true,
    afterClose: function(modal){
        let videoframe = modal.openedWindow.querySelector('iframe');
        if(videoframe){
            videoframe.contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
        }
    },        
});