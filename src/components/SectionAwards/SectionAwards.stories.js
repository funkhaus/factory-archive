import SectionAwards from "./SectionAwards"
import API from "@/static/db.json"

const Awards = [
    {
        total: 2,
        text: "BET awards"
    },
    {
        total: 20,
        text: "Clio awards"
    },
    {
        total: 13,
        text: "Cannes Lions"
    },
    {
        total: 5,
        text: "Webby Awards"
    },
    {
        total: 12,
        text: "Grammys"
    },
    {
        total: 5,
        text: "Latin Grammys"
    },
    {
        total: 8,
        text: "Cyclope Awards"
    },
    {
        total: 6,
        text: "Shorts Awards"
    },
    {
        total: 2,
        text: "Music Video Festival Brazil"
    },
    {
        total: 7,
        text: "Berlin Music Video Awards"
    }
]

export default {
    title: "@dchiamp / SectionAwards"
}

export const Default = () => ({
    components: { SectionAwards },
    data() {
        return {
            api: API,
            awards: Awards
        }
    },
    template: `<section-awards  :awards="awards" title="Awards" />`
})
