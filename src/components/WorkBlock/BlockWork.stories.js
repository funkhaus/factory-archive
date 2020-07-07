import BlockWork from "./BlockWork"
import API from "@/static/db.json"

// When you develop your own components, this should be named like `{ComponentName}`
export default {
    title: "Examples / BlockWork"
}

export const Default = () => ({
    components: { BlockWork },
    data() {
        return {
            api: API
        }
    },
    template: `<block-work title="Sample title" :image="api.image"/>`
})

export const WithoutTitle = () => ({
    components: { BlockWork },
    data() {
        return {
            api: API
        }
    },
    template: `<block-work :image="api.image"/>`
})
