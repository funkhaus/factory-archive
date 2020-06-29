import GridWork from "./GridWork"
import API from "@/static/db.json"

export default {
    title: "@dchiamp / GridWork"
}

export const GridWorkWithTitle = () => ({
    components: { GridWork },
    data() {
        return {
            api: API
        }
    },
    template: `<grid-work title="Sample title" :items="api.pages[1].childPages"/>`
})
