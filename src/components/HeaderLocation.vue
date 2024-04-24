<template lang="pug">
	.header__location.location-header
		.location-header__current Санкт-Петербург
		.location-header__choice(:class="[isShowLocation ? 'active': '']")
			.location-header__header Ваш город #[span Санкт-Петербург?]
			.location-header__buttons 
				button(type="button" @click="closeLocation()").location-header__button.btn Верно
				button(type="button" @click="openModal").location-header__button.btn.btn-border Выбрать другой
	.modal(class="modal-search" id="modal-search" :class="[showModal ? 'open-modal' : '']" @click="closeModal")
		.modal__wrapper 
			.modal__content(@click="noCloseModal") 
				button(type="button" @click="closeModal").modal__close
				.modal__header 
						.modal__title Выберите город
				form(action="#").modal__form.form
					.form-item 
						input(type="text" @input="onSearchInput" placeholder="Введите название города" v-model="search")
						button(type="button" ref="btn_search" v-if="showBtnSearch").form-item__btn.btn-search
						button(type="button" ref="btn_delete" v-else @click="deleteSearch").form-item__btn.btn-delete
					.form-result
						ul.form-result__list 
							li(v-for="(city, index) in filteredCities" @click="selectCity") {{ city }}
</template>

<script>
import ModalSearch from './ModalSearch.vue'
export default {
  components: { ModalSearch },
  props: ['isShowMenu'],
  data() {
    return {
      top: '',
      left: '',
      isShowLocation: false,
      showModal: false,
      showBtnSearch: true,
      search: '',
      cities: [
        'Москва',
        'Санкт-Петербург',
        'Нижний Новгород',
        'Казань',
        'Екатеринбург',
        'Москва',
        'Санкт-Петербург',
        'Нижний Новгород',
        'Казань',
        'Екатеринбург'
      ]
    }
  },
  methods: {
    closeLocation() {
      this.isShowLocation = false
    },
    openModal(e, modalId) {
      console.log('openPopup')
      this.showModal = true
    },
    closeModal(e) {
      this.showModal = false
    },
    noCloseModal(e) {
      e.stopPropagation()
    },
    onSearchInput(e) {
      this.showBtnSearch = this.search == '' ? false : true
    },
    selectCity(e) {
      this.search = e.target.innerText
      this.showBtnSearch = false
    },
    deleteSearch() {
      this.search = ''
      this.showBtnSearch = true
    }
  },
  computed: {
    filteredCities() {
      return this.cities.filter(
        (item) => item.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      )
    }
  },
  mounted() {
    this.isShowLocation = true
  }
}
</script>
