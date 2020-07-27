import PanelMenu from "./PanelMenu"
import API from "@/static/db.json"

let menuItem = {
    ...API.menuItems.nodes[0]
}

const mainMenu = [
    {
        ...menuItem,
        label: "Directors"
    },
    {
        ...menuItem,
        label: "Work"
    },
    {
        ...menuItem,
        label: "About"
    },
    {
        ...menuItem,
        label: "News"
    },
    {
        ...menuItem,
        label: "Contact"
    }
]

export default {
    title: "@austinblanchard / PanelMenu"
}

export const PanelMenuDefault = () => ({
    components: { PanelMenu },
    data() {
        return {
            api: API,
            mainMenu: mainMenu
        }
    },
    template: `<panel-menu :mainMenu="mainMenu" />`
})
