import GridFeatured from "./GridFeatured"
import API from "@/static/db.json"

let pageItem = {
    ...API.pages[0]
}

const pageItems = [
    {
        ...pageItem,
        title: "Philip J. - Fry",
        credit: "Yoni Lappin"
    },
    {
        ...pageItem,
        title: "Headless Body - of Agnew",
        credit: "Yoni Lappin"
    },
    {
        ...pageItem,
        title: "Bender Bending - Rodriguez",
        credit: "Yoni Lappin"
    },
    {
        ...pageItem,
        title: "Amy - Wong",
        credit: "Yoni Lappin"
    },
    {
        ...pageItem,
        title: "Hermes - Conrad",
        credit: "Yoni Lappin"
    }
]

export default {
    title: "@austinblanchard / GridFeatured"
}

export const GridFeaturedDefault = () => ({
    components: { GridFeatured },
    data() {
        return {
            api: API,
            pageItems: pageItems
        }
    },
    template: `<grid-featured :items="pageItems" />`
})
