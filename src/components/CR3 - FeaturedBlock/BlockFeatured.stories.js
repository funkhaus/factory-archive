import BlockFeatured from "./BlockFeatured"
import API from "@/static/db.json"

export default {
    title: "CR2 - BlockFeatured"
}

export const FeaturedBlockLogos = () => ({
    components: { BlockFeatured },
    data() {
        return {
            api: API
        }
    },
    template: `<block-featured
                :to="api.page.uri"
                :title="api.page.title"
                :image="api.page.featuredImage"
                :logos="api.logos.slice(2, 5)"
                />`
})

export const FeaturedBlockCredits = () => ({
    components: { BlockFeatured },
    data() {
        return {
            api: API
        }
    },
    template: `<block-featured
                :to="api.page.uri"
                :title="api.page.title"
                :image="api.page.featuredImage"
                credits="Artists – Angus Wall & Hazel Baird"
                />`
})

export const FeaturedBlockDate = () => ({
    components: { BlockFeatured },
    data() {
        return {
            api: API
        }
    },
    template: `<block-featured
                isPost="true"
                :to="api.page.uri"
                :title="api.page.title"
                :date="api.page.date"
                />`
})
