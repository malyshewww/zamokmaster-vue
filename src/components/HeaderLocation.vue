<template lang="pug">
	.header__location.location-header
		.location-header__current(@click="toggleModal") {{ setCityStorage() }} 
		.location-header__choice(:class="[state.isShowLocation && !isHidden ? 'active': '']")
			.location-header__header Ваш город #[span {{ setCityStorage() }}?]
			.location-header__buttons 
				button(type="button" @click="closeLocation").location-header__button.btn Верно
				button(type="button" @click="toggleModal").location-header__button.btn.btn-border Выбрать другой
	Teleport(to="body")
		Modal(class="modal-search" :class="[state.isOpenModal ? 'open-modal' : '']" @closeModal="toggleModal")
			.modal__header 
					.modal__title Выберите город
			form(action="#").modal__form.form
				.form-item 
					input(type="text" @input="onSearchInput" name="city" placeholder="Введите название города" v-model="state.search")
					button(type="button" ref="btn_search" v-if="state.showBtnSearch").form-item__btn.btn-search
					button(type="button" ref="btn_delete" v-else @click="deleteSearch").form-item__btn.btn-delete
				.form-result(v-if="state.isOpenModal")
					ul.form-result__list 
						li(v-for="(city, index) in filteredCities" @click="selectCity") {{ city }}
</template>

<script setup>
import { reactive, onMounted, computed } from 'vue'
import Modal from '../layouts/Modal.vue'

const props = defineProps(['isHidden', 'defaultCity'])
const emit = defineEmits(['onChangeCity'])

const state = reactive({
  isOpenModal: false,
  isShowLocation: false,
  showModal: false,
  showBtnSearch: true,
  search: '',
  cities: [],
  localCity: props.defaultCity,
  token: '5ce8d1aaf3083ef146c27a68ecf9a5c065802258'
})

function toggleModal() {
  document.body.classList.toggle('lock')
  state.isOpenModal = !state.isOpenModal
  state.isShowLocation = false
  uploadCities()
}
function closeLocation() {
  state.isShowLocation = false
}
function onSearchInput(e) {
  state.showBtnSearch = state.search == '' ? true : false
}
function selectCity(e) {
  state.search = e.target.innerText
  replaceCityStorage(state.search)
  document.body.classList.toggle('lock')
  state.isOpenModal = !state.isOpenModal
  state.cities = []
  state.showBtnSearch = state.search !== '' ? false : true
}
function deleteSearch() {
  state.search = ''
  state.showBtnSearch = !state.showBtnSearch
}
function setCityStorage() {
  if (typeof window !== 'undefined') {
    let c = getCookie()
    if (c.city) {
      return getCityStorage()
    } else {
      return state.localCity
    }
  }
  // if (typeof window !== 'undefined') {
  //   if (localStorage.getItem('city') !== null) {
  //     return this.getCityStorage()
  //   } else {
  //     return this.localCity
  //   }
  // }
}
function replaceCityStorage(city) {
  // if (typeof window !== 'undefined') {
  //   localStorage.setItem('city', this.localCity)
  // }
  if (typeof window !== 'undefined') {
    state.localCity = city
    let cookie_date = new Date()
    cookie_date.setMonth(cookie_date.getMonth() + 1)
    document.cookie = `city=${city};expires=` + cookie_date.toUTCString()
    onChangeCity(state.localCity)
  }
}
function getCityStorage() {
  let c = getCookie()
  return c.city
  // if (typeof window !== 'undefined') {
  //   return localStorage.getItem('city')
  // }
}
function onChangeCity(city) {
  emit('onChangeCity', city)
}
function getCookie() {
  if (typeof window !== 'undefined') {
    return document.cookie.split('; ').reduce((acc, item) => {
      const [name, value] = item.split('=')
      acc[name] = value
      return acc
    }, {})
  }
}
function getApiCities() {
  try {
    fetch('https://apimarket.parserdata.ru/regions/', {
      method: 'GET',
      mode: 'cors',
      headers: {
        Authorization: `Token ${state.token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        state.cities = [...data]
      })
  } catch (error) {
    console.log('Ошибка', error)
  }
}
function uploadCities() {
  return state.isOpenModal ? getApiCities() : (state.cities = [])
}

const filteredCities = computed(() => {
  return state.cities
    .map((el) => el.name)
    .filter((item) => item.toLowerCase().indexOf(state.search.toLowerCase()) !== -1)
})
// const isEmptySearch = computed(() => {
//   return state.search == '' ? false : true
// })
onMounted(() => {
  window.addEventListener('load', () => {
    setCityStorage()
    state.isShowLocation = true
  })
})
</script>
