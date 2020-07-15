import PanelMenu from "./PanelMenu"
import API from "@/static/db.json"

export default {
    title: "@austinblanchard / PanelMenu"
}

export const PanelMenuDefault = () => ({
    components: { PanelMenu },
    data() {
        return {
            api: API
        }
    },
    template: `<panel-menu />`
})
