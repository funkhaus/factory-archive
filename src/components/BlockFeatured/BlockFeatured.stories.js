import BlockFeatured from "./BlockFeatured"
import API from "@/static/db.json"

export default {
    title: "@austinblanchard / BlockFeatured"
}

export const BlockFeaturedDefault = () => ({
    components: { BlockFeatured },
    data() {
        return {
            api: API
        }
    },
    template: `<block-featured
                :imagePrimary="api.images[0]"
                :imageSecondary="api.images[1]"
                title="HP - Meant To Move"
                credit="Yoni Lappin"
                to="" />`
})
