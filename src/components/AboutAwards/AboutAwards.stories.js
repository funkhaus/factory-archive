import AboutAwards from "./AboutAwards"
import API from "@/static/db.json"

export default {
    title: "@dchiamp / AboutAwards"
}

export const Default = () => ({
    components: { AboutAwards },
    data() {
        return {
            api: API,
            awards: [
                {
                    slug: "aicp",
                    total: 52
                },
                {
                    slug: "aice",
                    total: 120
                }
            ]
        }
    },
    template: `<about-awards :image="api.images[0]" :awards="awards" />`
})
