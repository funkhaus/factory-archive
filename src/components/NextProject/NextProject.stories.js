import NextProject from "./NextProject"
import API from "@/static/db.json"

export default {
    title: "@dchiamp / NextProject"
}

export const Defualt = () => ({
    components: { NextProject },
    data() {
        return {
            api: API,
            credits: `Artists - Angus Wall & Hazel Baird
                    Editor - Jamie Foord
                    Production Co. - Placeholder
                    Agency - Placeholder`
        }
    },
    template: `<next-project :image="api.page.featuredImage" title="Placeholder &#8211; Subtitle" :credits="credits" :to="api.page.uri" />`
})
