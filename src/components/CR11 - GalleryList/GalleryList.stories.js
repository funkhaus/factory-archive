import GalleryList from './GalleryList.vue'
import API from '@/static/db.json'

export default {
  title: "@ibanzajoe / CR11 - GalleryList"
}

export const GalleryListColumns = () => ({
  components: { GalleryList },
  data() {
    return { api: API }
  },
  template: `<gallery-list
              :items="api.images"
              variant="column"
              
            />`
})

export const GalleryListComma = () => ({
  components: { GalleryList },
  data() {
    return { api: API }
  },
  template: `<gallery-list
              :items="api.images"
              variant="comma"
            />`
})