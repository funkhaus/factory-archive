import GridNews from "./GridNews"
import API from "@/static/db.json"

// Just mocking more items for testing
const manyPages = API.pages
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)

export default {
    title: "@austinblanchard / GridNews"
}

export const GridNewsDefault = () => ({
    components: { GridNews },
    data() {
        return {
            api: API,
            blocks: manyPages
        }
    },
    template: `<grid-news :blocks="blocks" />`
})
