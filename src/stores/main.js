import { defineStore } from 'pinia'
import ajax from '@/ajax.js'

export const useMainStore = defineStore('main', () => {
  // const db = reactive({
  //   data: {},
  //   meta: {},
  //   links: {}
  // })
  // const getData = async () => {
  //   try {
  //     const axios = await ajax()
  //     const { data } = await axios.get('/wsapi/packs/maininfo')
  //     this.mainInfo.data = data.data
  //     this.mainInfo.meta = data.data
  //     this.mainInfo.links = data.links
  //   } catch (e) {
  //     console.log('MainInfo Error: ' + e)
  //   }
  // }
  // return { db, getData }
})
