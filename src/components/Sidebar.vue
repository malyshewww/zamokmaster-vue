<template lang="pug">
	aside.aside
		.castle-list__questions.questions-castle
			.questions-castle__title Остались вопросы?
			.questions-castle__sub-title Мастер проконсультирует вас по всем вопросам
			a(href="tel:+79958881086").questions-castle__button.btn-blue #[span +7 (995) 888-10-86]
		.castle-list__module 
			div(style="width:382px;height:546px;overflow:hidden;position:relative;")
				iframe(style="width:100%;height:100%;border:1px solid #e6e6e6;border-radius:8px;box-sizing:border-box" src="https://yandex.ru/maps-reviews-widget/158778930985?comments")
				a(href="https://yandex.ru/maps/org/dom_byta/158778930985/" target="_blank" style="box-sizing:border-box;text-decoration:none;color:#b3b3b3;font-size:10px;font-family:YS Text,sans-serif;padding:0 20px;position:absolute;bottom:8px;width:100%;text-align:center;left:0;overflow:hidden;text-overflow:ellipsis;display:block;max-height:14px;white-space:nowrap;padding:0 16px;box-sizing:border-box") Дом Быта на карте Москвы — Яндекс Карты
			//- img(src="../../images/castlelist/module.png", alt="")
</template>
