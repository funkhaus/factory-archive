import BlockPost from "./BlockPost"
import API from "@/static/db.json"

export default {
    title: "@austinblanchard / CR2 - BlockPost"
}

export const BlockPostDefault = () => ({
    components: { BlockPost },
    data() {
        return {
            api: API
        }
    },
    template: `<block-post
                :to="api.page.uri"
                :date="api.page.date"
                :title="api.page.title"
                :excerpt="api.page.excerpt"
                :image="api.page.featuredImage"
                :categories="api.page.categories.nodes"
                />`
})
