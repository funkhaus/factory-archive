import BlockWork from "./BlockWork"
import API from "@/static/db.json"

export default {
    title: "Examples / CR1 - BlockWork"
}

export const BlockWorkWithTitle = () => ({
    components: { BlockWork },
    data() {
        return {
            api: API
        }
    },
    template: `<block-work title="Sample title" :image="api.image"/>`
})

export const BlockWorkWithoutTitle = () => ({
    components: { BlockWork },
    data() {
        return {
            api: API
        }
    },
    template: `<block-work :image="api.image"/>`
})
