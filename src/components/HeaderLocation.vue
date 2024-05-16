<template lang="pug">
	.header__location.location-header
		.location-header__current(@click="toggleModal") {{ setCityStorage() }} 
		.location-header__choice(:class="[isShowLocation && !isHidden ? 'active': '']")
			.location-header__header Ваш город #[span {{ setCityStorage() }}?]
			.location-header__buttons 
				button(type="button" @click="closeLocation").location-header__button.btn Верно
				button(type="button" @click="toggleModal").location-header__button.btn.btn-border Выбрать другой
	Teleport(to="body")
		Modal(class="modal-search" :class="[isOpenModal ? 'open-modal' : '']" @closeModal="toggleModal")
			.modal__header 
					.modal__title Выберите город
			form(action="#").modal__form.form
				.form-item 
					input(type="text" @input="onSearchInput" name="city" placeholder="Введите название города" v-model="search")
					button(type="button" ref="btn_search" v-if="showBtnSearch").form-item__btn.btn-search
					button(type="button" ref="btn_delete" v-else @click="deleteSearch").form-item__btn.btn-delete
				.form-result(v-if="isOpenModal")
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
      // cities: [
      //   'Москва',
      //   'Санкт-Петербург',
      //   'Нижний Новгород',
      //   'Казань',
      //   'Екатеринбург',
      //   'Владивосток',
      //   'Мурманск',
      //   'Воронеж',
      //   'Владимир'
      // ],
      cities: [],
      token: '5ce8d1aaf3083ef146c27a68ecf9a5c065802258'
    }
  },
  methods: {
    toggleModal() {
      document.body.classList.toggle('lock')
      this.isOpenModal = !this.isOpenModal
      this.isShowLocation = false
      this.uploadCities()
    },
    closeLocation() {
      this.isShowLocation = false
    },
    onSearchInput(e) {
      this.showBtnSearch = this.search == '' ? true : false
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
      if (typeof window !== 'undefined') {
        let c = this.getCookie()
        if (c.city) {
          return this.getCityStorage()
        } else {
          return this.localCity
        }
      }
      // if (typeof window !== 'undefined') {
      //   if (localStorage.getItem('city') !== null) {
      //     return this.getCityStorage()
      //   } else {
      //     return this.localCity
      //   }
      // }
    },
    replaceCityStorage(city) {
      // if (typeof window !== 'undefined') {
      //   localStorage.setItem('city', this.localCity)
      // }
      if (typeof window !== 'undefined') {
        this.localCity = city
        let cookie_date = new Date()
        cookie_date.setMonth(cookie_date.getMonth() + 1)
        document.cookie = `city=${city};expires=` + cookie_date.toUTCString()
        this.onChangeCity(this.localCity)
      }
    },
    getCityStorage() {
      let c = this.getCookie()
      return c.city
      // if (typeof window !== 'undefined') {
      //   return localStorage.getItem('city')
      // }
    },
    onChangeCity(city) {
      this.$emit('onChangeCity', city)
    },
    getCookie() {
      if (typeof window !== 'undefined') {
        return document.cookie.split('; ').reduce((acc, item) => {
          const [name, value] = item.split('=')
          acc[name] = value
          return acc
        }, {})
      }
    },
    getApiCities() {
      try {
        fetch('https://apimarket.parserdata.ru/regions/', {
          method: 'GET',
          mode: 'cors',
          headers: {
            Authorization: `Token ${this.token}`
          }
        })
          .then((res) => res.json())
          .then((data) => {
            this.cities = [...data]
            // console.log(this.cities);
          })
      } catch (error) {
        console.log('Ошибка', error)
      }
    },
    uploadCities() {
      return this.isOpenModal ? this.getApiCities() : (this.cities = [])
    }
  },
  computed: {
    filteredCities() {
      return this.cities
        .map((el) => el.name)
        .filter((item) => item.toLowerCase().indexOf(this.search.toLowerCase()) !== -1)
    }
    // localCity: {
    //   get() {
    //     return this.defaultCity
    //   },
    //   set(localCity) {
    //     this.$emit('update:onChangeCity', localCity)
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
