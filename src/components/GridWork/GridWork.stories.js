import GridWork from "./GridWork"
import API from "@/static/db.json"

let pageItem = {
    ...API.pages[0]
}

const pageItems = [
    {
        ...pageItem,
        title: "Philip J. - Fry",
        credit: "Yoni Lappin",
        id: "cG9zDoxMTY="
    },
    {
        ...pageItem,
        title: "Headless Body - of Agnew",
        credit: "Yoni Lappin",
        id: "cG9zdDoxMY="
    },
    {
        ...pageItem,
        title: "Bender Bending - Rodriguez",
        id: "G9zdDoxMTY="
    },
    {
        ...pageItem,
        title: "Amy - Wong",
        credit: "Yoni Lappin",
        id: "cG9zdDoxMTdY="
    },
    {
        ...pageItem,
        title: "Hermes - Conrad",
        id: "cG9zsdDoxMTY="
    }
]

export default {
    title: "@austinblanchard / GridWork"
}

export const GridWorkDefault = () => ({
    components: { GridWork },
    data() {
        return {
            api: API,
            pageItems: pageItems
        }
    },
    template: `<grid-work :items="pageItems" />`
})
