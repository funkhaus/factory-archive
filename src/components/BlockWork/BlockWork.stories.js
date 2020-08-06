import BlockWork from "./BlockWork"
import API from "@/static/db.json"

export default {
    title: "@austinblanchard / BlockWork"
}

export const BlockWorkDefault = () => ({
    components: { BlockWork },
    data() {
        return {
            api: API
        }
    },
    template: `<block-work
                :image="api.images[0]"
                title="HP - Meant To Move"
                credit="Yoni Lappin"
                to="" />`
})
