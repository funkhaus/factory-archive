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
                :to="api.page.uri"
                :date="api.page.date"
                :title="api.page.title"
                :excerpt="api.page.excerpt"
                :image="api.page.featuredImage"
                :categories="api.categories"
                />`
})

export const BlockNewsPrompt = () => ({
    components: { BlockNews },
    data() {
        return {
            api: API
        }
    },
    template: `<block-news
                :to="api.page.uri"
                :date="api.page.date"
                :title="api.page.title"
                :excerpt="api.page.excerpt"
                :image="api.page.featuredImage"
                :categories="api.categories"
                :hasPrompt="true"
                />`
})
