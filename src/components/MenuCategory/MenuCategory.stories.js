import MenuCategory from "./MenuCategory"
import API from "@/static/db.json"

export default {
    title: "@dchiamp / MenuCategory"
}

export const Default = () => ({
    components: { MenuCategory },
    data() {
        return {
            api: API
        }
    },
    template: `<menu-category :items="api.menuItems.nodes" caption="The very latest in studio news from the world of MakeMake."/>`
})
