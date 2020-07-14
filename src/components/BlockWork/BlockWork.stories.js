import BlockWork from "./BlockWork"
import API from "@/static/db.json"

export default {
    title: "@dchiamp / BlockWork"
}

export const BlockWorkDefaultHover = () => ({
    components: { BlockWork },
    data() {
        return {
            api: API
        }
    },
    template: `<block-work
        :key="api.pages[1].childPages[0].id"
        title="Split title &#8211; Bottom title"
        :image="api.pages[1].childPages[0].featuredImage"
        :to="api.pages[1].childPages[0].uri"
    />`
})

export const BlockWorkSolidHover = () => ({
    components: { BlockWork },
    data() {
        return {
            api: API
        }
    },
    template: `<block-work
        :key="api.pages[1].childPages[0].id"
        :title="api.pages[1].childPages[0].title"
        :image="api.pages[1].childPages[0].featuredImage"
        :to="api.pages[1].childPages[0].uri"
        hover-type="solid"
    />`
})
