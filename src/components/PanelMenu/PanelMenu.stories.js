import PanelMenu from "./PanelMenu"
import API from "@/static/db.json"

let menuItem = {
    ...API.menuItems.nodes[0]
}

const mainMenu = [
    {
        ...menuItem,
        label: "Originals"
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

const socialMenu = [
    {
        ...menuItem,
        label: "Facebook"
    },
    {
        ...menuItem,
        label: "Instagram"
    },
    {
        ...menuItem,
        label: "Twitter"
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
            mainMenu: mainMenu,
            socialMenu: socialMenu
        }
    },
    template: `<panel-menu :mainMenu="mainMenu" :socialMenu="socialMenu" />`
})
