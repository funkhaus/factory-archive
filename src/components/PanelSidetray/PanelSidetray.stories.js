import PanelSidetray from "./PanelSidetray";
import API from "@/static/db.json";

export default {
    title: "@dchiamp / PanelSidetray"
};

export const Panel = () => ({
    components: { PanelSidetray },
    data() {
        return {
            api: API
        };
    },
    template: `<panel-sidetray  :items="api.pages"/>`
});

export const PanelActiveItem = () => ({
    components: { PanelSidetray },
    data() {
        return {
            api: API
        };
    },
    template: `<panel-sidetray  :items="api.pages" :active-index="1"/>`
});
