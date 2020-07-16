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

const companyMenu = [
    {
        label: "rpsg",
        services:
            "Editing for Feature Film - Television - Music Videos - Commercial"
    },
    {
        label: "a52",
        services: "VFX - Photo-Real CG - Seamless Compositing"
    },
    {
        label: "primary",
        services: "Digital Color Correction & Grading - Post Pipeline"
    },
    {
        label: "elastic",
        services: "Animation - Main Titles - Motion Design"
    },
    {
        label: "jax",
        services: "Film & Television Marketing - Movie Teasers & Trailers"
    },
    {
        label: "indestrucible",
        services:
            "Composition - Sound Engineering -&nbsp;Liscensing -&nbsp;Mixing"
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
            socialMenu: socialMenu,
            companyMenu: companyMenu
        }
    },
    template: `<panel-menu :mainMenu="mainMenu" :socialMenu="socialMenu" :companyMenu="companyMenu" />`
})
