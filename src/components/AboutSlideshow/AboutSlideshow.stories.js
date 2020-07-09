import AboutSlideshow from "./AboutSlideshow"
import API from "@/static/db.json"

export default {
    title: "@dchiamp / AboutSlideshow"
}

export const Default = () => ({
    components: { AboutSlideshow },
    data() {
        return {
            api: API
        }
    },
    template: `<about-slideshow  :slides="api.images" :text="api.page.content" />`
})
