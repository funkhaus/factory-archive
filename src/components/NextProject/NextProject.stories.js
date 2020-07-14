import NextProject from "./NextProject"
import API from "@/static/db.json"

const Credits = `Artists – Angus Wall & Hazel Baird
Editor – Jamie Foord
Production Co. – Placeholder
Agency – Placeholder`

export default {
    title: "@dchiamp / NextProject"
}

export const Default = () => ({
    components: { NextProject },
    data() {
        return {
            api: API,
            credits: Credits
        }
    },
    template: `<next-project :image="api.page.featuredImage" title="Placeholder &#8211; Subtitle" :credits="credits" :to="api.page.uri" />`
})

export const AspectRatio = () => ({
    components: { NextProject },
    data() {
        return {
            api: API,
            credits: Credits
        }
    },
    template: `<next-project :image="api.page.featuredImage" title="Placeholder &#8211; Subtitle" :credits="credits" :to="api.page.uri" :aspect-ratio="true"/>`
})
