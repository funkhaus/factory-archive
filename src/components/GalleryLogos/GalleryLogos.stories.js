import GalleryLogos from "./GalleryLogos";
import API from "@/static/db.json";

export default {
    title: "@dchiamp / GalleryLogos"
};

export const GalleryLogosTwoCols = () => ({
    components: { GalleryLogos },
    data() {
        return {
            api: API
        };
    },
    template: `<gallery-logos title="Sample title" :logos="api.logos.slice(0, 4)"/>`
});

export const GalleryLogosThreeCols = () => ({
    components: { GalleryLogos },
    data() {
        return {
            api: API
        };
    },
    template: `<gallery-logos title="Sample title" :logos="api.logos.slice(0, 6)"/>`
});
