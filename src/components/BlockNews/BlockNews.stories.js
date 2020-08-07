import BlockNews from "./BlockNews"
import API from "@/static/db.json"

export default {
    title: "@austinblanchard / BlockNews"
}

export const BlockNewsDefault = () => ({
    components: { BlockNews },
    data() {
        return {
            api: API
        }
    },
    template: `<block-news
                :image="api.images[0]"
                title="Why Doomsday Entertainment Is a Much Nicer Production Company than the Name Suggests"
                date="2020-06-03T14:14:01"
                to="" />`
})
