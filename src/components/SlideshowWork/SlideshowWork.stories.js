import SlideshowWork from "./SlideshowWork"
import API from "@/static/db.json"

export default {
    title: "@dchiamp / SlideshowWork"
}

export const Default = () => ({
    components: { SlideshowWork },
    data() {
        return {
            images: API.images
        }
    },
    template: `<slideshow-work  :images="images"/>`
})
