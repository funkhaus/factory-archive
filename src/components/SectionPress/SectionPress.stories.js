import SectionPress from "./SectionPress"
import API from "@/static/db.json"

const Items = [
    {
        title:
            "AdWeek - Beats by Dre Brings in an A-List of Athletes for An Ad You Can’t Take Your Eyes Off Of"
    },
    {
        title: "Vice - The Poetic Work of Filmmaker Savanah Leaf"
    },
    {
        title:
            "Far & Wide - TIFF 2018: Interview With EXIT Director Claire Edmondson"
    },
    {
        title:
            "The New York Times - Hiro Murai Doesn’t Want to Get on a Soapbox"
    },
    {
        title:
            "Little Black Book: The Story Behind Donald Glover and Hiro Murai’s Creative Love Affair"
    },
    {
        title:
            "The Ringer - The Vimeo Blog: Introducing: music video exec. Mama Doom Danielle Hinde"
    }
]

export default {
    title: "@dchiamp / SectionPress"
}

export const Default = () => ({
    components: { SectionPress },
    data() {
        return {
            api: API,
            items: [...Items, ...Items]
        }
    },
    template: `<section-press  :items="items" title="Recent Press" />`
})
