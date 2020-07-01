import GridNews from "./GridNews"
import API from "@/static/db.json"

export default {
    title: "@austinblanchard / GridNews"
}

export const GridNewsDefault = () => ({
    components: { GridNews },
    data() {
        return {
            api: API
        }
    },
    template: `<grid-news :blocks="api.pages" />`
})
