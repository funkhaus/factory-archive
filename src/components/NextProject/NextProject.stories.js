import NextProject from "./NextProject";
import API from "@/static/db.json";

export default {
    title: "@dchiamp / NextProject"
};

export const Next = () => ({
    components: { NextProject },
    data() {
        return {
            api: API
        };
    },
    template: `<next-project :image="api.page.featuredImage" title="Placeholder &#8211; Subtitle" credits="" :path="api.page.uri" />`
});
