import SectionPress from "./SectionPress"

const Items = [
    {
        title:
            "AdWeek &#8211; Beats by Dre Brings in an A-List of Athletes for An Ad You Can’t Take Your Eyes Off Of"
    },
    {
        title: "Vice &#8211; The Poetic Work of Filmmaker Savanah Leaf"
    },
    {
        title:
            "Far & Wide &#8211; TIFF 2018: Interview With EXIT Director Claire Edmondson"
    },
    {
        title:
            "The New York Times &#8211; Hiro Murai Doesn’t Want to Get on a Soapbox"
    },
    {
        title:
            "Little Black Book &#8211; The Story Behind Donald Glover and Hiro Murai’s Creative Love Affair"
    },
    {
        title:
            "The Ringer &#8211; The Vimeo Blog: Introducing: music video exec. Mama Doom Danielle Hinde"
    }
]

export default {
    title: "@dchiamp / SectionPress"
}

export const Default = () => ({
    components: { SectionPress },
    data() {
        return {
            items: [...Items, ...Items]
        }
    },
    template: `<section-press  :items="items" title="Recent Press" />`
})
