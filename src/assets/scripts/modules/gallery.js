import { Fancybox } from '@fancyapps/ui'

// // Fancybox
// Fancybox.bind(':not(.swiper-slide-duplicate) > [data-fancybox]', {
// 	groupAll: true,
// 	placeFocusBack: false, // Починить баг с фенсибоксом и свипером
// 	Image:{
// 		wheel: "slide",
// 	},
// });
// // Исправить баг с дублированием изображений в фенсибоксе, если свипер бесконечный
// document.addEventListener("DOMContentLoaded", function(){
// 	let fancyboxInSlider = document.querySelectorAll('.swiper-slide-duplicate [data-fancybox]');
// 	if(fancyboxInSlider.length){
// 		fancyboxInSlider.forEach(function(item){
// 			item.addEventListener("click", function(e){
// 				e.preventDefault();
// 				let href = item.getAttribute("href");
// 				item.closest(".swiper").querySelector(".swiper-slide:not(.swiper-slide-duplicate) [data-fancybox][href='"+href+"']").click();
// 			});
// 		});
// 	};
// });
