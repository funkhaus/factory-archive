import SiteHamburger from "./SiteHamburger"
import API from "@/static/db.json"

export const SiteHamburgerDefault = () => ({
    components: { SiteHamburger },
    data() {
        return {
            api: API
        }
    },
    template: `<site-hamburger />`
})
