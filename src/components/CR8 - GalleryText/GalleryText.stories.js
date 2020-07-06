import GalleryText from "./GalleryText.vue"
import API from "@/static/db.json"

export default {
    title: "@ibanzajoe / CR8 - GalleryText"
}

export const GalleryTextMockAllBrands = () => ({
    components: { GalleryText },
    data() {
        return {
            api: API,
            companies: [
                { name: 'rock-paper-scissors', images: API.images, text: 'edits films, television, commercials, and music videos.'},
                { name: 'elastic', images: API.images, text: 'creates animation, motion design, and main titles.'},
                { name: 'a52', images: API.images, text: 'is a leader in visual effects.'},
                { name: 'primary', images: API.images, text: 'grades color and manages workflows and telecine.'},
                { name: 'jax', images: API.images, text: 'markets films, tv shows, and games.'},
                { name: 'indestructible', images: API.images, text: 'supervises musical direction, composition, and licensing.'},
            ]
        }
    },
    template: `<gallery-text
                :companies="companies"
            />`
})