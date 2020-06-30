import GalleryText from "./GalleryText.vue"
import API from "@/static/db.json"

export default {
    title: "@ibanzajoe / CR8 - GalleryText"
}

export const GalleryTextMockAllBrands = () => ({
    components: { GalleryText },
    data() {
        return {
            api: API
        }
    },
    template: `<gallery-text
                :rpsImages="api.images"
                :elasticImages="api.images"
                :primaryImages="api.images"
                :a52Images="api.images"
                :jaxImages="api.images"
                :indestructibleImages="api.images"
            />`
})