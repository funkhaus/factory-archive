import PanelSidetray from "./PanelSidetray"
import API from "@/static/db.json"

const manyPages = API.pages
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)
    .concat(API.pages)

export default {
    title: "@dchiamp / PanelSidetray"
}

export const Default = () => ({
    components: { PanelSidetray },
    data() {
        return {
            api: API,
            items: manyPages
        }
    },
    template: `<panel-sidetray  :items="items"/>`
})

export const PanelActiveItem = () => ({
    components: { PanelSidetray },
    data() {
        return {
            api: API,
            items: manyPages
        }
    },
    template: `<panel-sidetray  :items="items" :active-index="1"/>`
})
