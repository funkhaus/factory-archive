import BlockWork from "./BlockWork"
import API from "@/static/db.json"

// When you develop your own components, this should be named like `@{githubusername} / CR{issueNumber} - {ComponentName}`
export default {
    title: "Examples / CR1 - BlockWork"
}

export const BlockWorkDefault = () => ({
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
