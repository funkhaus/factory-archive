import GridNews from "./GridNews"
import API from "@/static/db.json"

let pageItem = {
    ...API.pages[0]
}

const pageItems = [
    {
        ...pageItem,
        title: "Why Doomsday Entertainment Is a Much Nicer Production Company than the Name Suggests",
        id: "cG9zDoxMTY="
    },
    {
        ...pageItem,
        title: "“How are you?” It’s something we ask people in passing every day, at times losing its meaning with our busy and crowded lives.",
        id: "cG9zdDoxMY="
    },
    {
        ...pageItem,
        title: "Sending love and positivity from Doomsday.",
        id: "G9zdDoxMTY="
    },
    {
        ...pageItem,
        title: "Doomsday is 10 years old, the old girl!",
        id: "cG9zdDoxMTdY="
    },
    {
        ...pageItem,
        title: "Doomsday is to announce that we are producing the upcoming documentary “Women in the Wilderness”.",
        id: "cG9zsdDoxMTY="
    },
    {
        ...pageItem,
        title: "Our fearless leader discusses music videos and what makes them go viral!",
        id: "cG9zsdDeeoxMTY="
    }
]

export default {
    title: "@austinblanchard / GridNews"
}

export const GridNewsDefault = () => ({
    components: { GridNews },
    data() {
        return {
            api: API,
            pageItems: pageItems
        }
    },
    template: `<grid-news :items="pageItems" />`
})
