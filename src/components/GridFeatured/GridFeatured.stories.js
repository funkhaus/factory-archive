import GridFeatured from "./GridFeatured"
import API from "@/static/db.json"

// Just mocking more items for testing
const manyPages = API.pages
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)

export default {
    title: "@austinblanchard / GridFeatured"
}

export const GridFeaturedDefault = () => ({
    components: { GridFeatured },
    data() {
        return {
            api: API,
            blocks: manyPages
        }
    },
    template: `<grid-featured :blocks="blocks" />`
})
