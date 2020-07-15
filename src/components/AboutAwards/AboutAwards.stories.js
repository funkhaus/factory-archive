import AboutAwards from "./AboutAwards"
import API from "@/static/db.json"

const Awards = [
    {
        slug: "logo-aicp",
        total: 52
    },
    {
        slug: "logo-aice",
        total: 120
    },
    {
        slug: "logo-aicp",
        total: 52
    },
    {
        slug: "logo-aice",
        total: 120
    },
    {
        slug: "logo-aicp",
        total: 52
    },
    {
        slug: "logo-aice",
        total: 120
    },
    {
        slug: "logo-aicp",
        total: 52
    },
    {
        slug: "logo-aice",
        total: 120
    }
]

export default {
    title: "@dchiamp / AboutAwards"
}

export const Default = () => ({
    components: { AboutAwards },
    data() {
        return {
            api: API,
            awards: Awards
        }
    },
    template: `<about-awards :image="api.images[0]" :awards="awards" />`
})
