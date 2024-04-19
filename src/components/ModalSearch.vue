<template lang="pug">
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
export default {
  components: {},
  props: ['showModal'],
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
      this.$emit('showModal')
      console.log('openPopup')
    },
    closeModal(e) {
      this.showModal = false
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
