import SectionVisit from "./SectionVisit"
import API from "@/static/db.json"

const Address =
    "<h4>DTLA HQ</h4><div><p>811 Traction Ave. Suite 1D <br />Los Angeles, CA 90013</p><br /><p>Main Line – 213 395 0998</p></div>"

export default {
    title: "@dchiamp / SectionVisit"
}

export const Default = () => ({
    components: { SectionVisit },
    data() {
        return {
            address: Address
        }
    },
    template: `<section-visit :address="address" />`
})
