import FooterSocials from "./FooterSocials"
import API from "@/static/db.json"

const Items = API.menuItems.nodes.slice(0, 3)

export default {
    title: "@dchiamp / FooterSocials"
}

export const Default = () => ({
    components: { FooterSocials },
    data() {
        return {
            items: Items
        }
    },
    template: `<footer-socials :items="items" />`
})
