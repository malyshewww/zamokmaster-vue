<template lang="pug">
  Modal(class="modal-search" :class="[isOpenModal ? 'open-modal' : '']" id="modal-search")
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
import Modal from '../../layouts/Modal.vue'

export default {
  props: ['isOpenModal'],
  components: { Modal },
  data() {
    return {
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
    closeLocation() {
      this.isShowLocation = false
    },
    closeModal(e) {
      this.$emit('closeModal')
    },
    noCloseModal(e) {
      e.stopPropagation()
    },
    onSearchInput(e) {
      if (this.search !== '') {
        this.showBtnSearch = false
      } else {
        this.showBtnSearch = true
      }
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
  }
}
</script>
