<template lang="pug">
	.header__location.location-header
		.location-header__current {{ getCityStorage() }}
		.location-header__choice(:class="[isShowLocation && !isHidden ? 'active': '']")
			.location-header__header Ваш город #[span {{getCityStorage()}}?]
			.location-header__buttons 
				button(type="button" @click="closeLocation").location-header__button.btn Верно
				button(type="button" @click="toggleModal").location-header__button.btn.btn-border Выбрать другой
	Modal(class="modal-search" :class="[isOpenModal ? 'open-modal' : '']" id="modal-call" @close="toggleModal")
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
import Modal from '../layouts/Modal.vue'
export default {
  props: ['isHidden', 'defaultCity'],
  emits: ['onChangeCity'],
  components: {
    Modal
  },
  data() {
    return {
      localCity: this.defaultCity,
      isOpenModal: false,
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
        'Владивосток',
        'Мурманск',
        'Воронеж',
        'Владимир'
      ]
    }
  },
  methods: {
    toggleModal() {
      document.body.classList.toggle('lock')
      this.isOpenModal = !this.isOpenModal
      this.isShowLocation = false
    },
    closeLocation() {
      this.isShowLocation = false
    },
    onSearchInput(e) {
      this.showBtnSearch = this.search == '' ? false : true
    },
    selectCity(e) {
      this.search = e.target.innerText
      this.showBtnSearch = false
      this.replaceCityStorage(this.search)
    },
    deleteSearch() {
      this.search = ''
      this.showBtnSearch = true
    },
    setCityStorage() {
      if (localStorage.getItem('city') == '') return
      this.getCityStorage()
    },
    replaceCityStorage(city) {
      this.localCity = city
      localStorage.setItem('city', this.localCity)
      this.$emit('onChangeCity', this.localCity)
    },
    getCityStorage() {
      return localStorage.getItem('city')
    }
  },
  computed: {
    filteredCities() {
      return this.cities.filter(
        (item) => item.toLowerCase().indexOf(this.search.toLowerCase()) !== -1
      )
    }
    // localCity: {
    //   get() {
    //     return this.defaultCity
    //   },
    //   set(localCity) {
    //     this.$emit('update:defaultCity', localCity)
    //   }
    // }
  },
  watch() {},
  mounted() {
    window.addEventListener('load', () => {
      this.setCityStorage()
      this.isShowLocation = true
    })
  }
}
</script>
