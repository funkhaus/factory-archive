import AboutSlideshow from "./AboutSlideshow"
import API from "@/static/db.json"

export default {
    title: "@dchiamp / AboutSlideshow"
}

export const Default = () => ({
    components: { AboutSlideshow },
    data() {
        return {
            api: API,
            images: [API.images[0], API.images[1]]
        }
    },
    template: `<about-slideshow  :slides="api.images" :text="api.page.content" />`
})
