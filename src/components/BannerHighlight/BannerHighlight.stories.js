import BannerHighlight from "./BannerHighlight"
import API from "@/static/db.json"

export default {
    title: "@uptownhr / BannerHighlight"
}

export const Default = () => ({
    components: { BannerHighlight },
    data() {
        return {
            api: API
        }
    },
    template: `<banner-highlight :image="api.image" to="/" />`
})

export const WithTitle = () => ({
    components: { BannerHighlight },
    data() {
        return {
            api: API
        }
    },
    template: `<banner-highlight text="Sample" :image="api.image" to="/" />`
})

export const WithPrompt = () => ({
    components: { BannerHighlight },
    data() {
        return {
            api: API
        }
    },
    template: `<banner-highlight prompt="Sample" :image="api.image" to="/" />`
})
