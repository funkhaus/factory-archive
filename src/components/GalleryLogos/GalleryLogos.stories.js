import GalleryLogos from "./GalleryLogos";
import API from "@/static/db.json";

export default {
    title: "@dchiamp / GalleryLogos"
};

export const GalleryLogosTwoCols = () => ({
    components: { GalleryLogos },
    data() {
        return {
            api: API,
            logoNames: [
                "nyt-brand-studio",
                "vanity-fair",
                "vayner-media",
                "vogue"
            ]
        };
    },
    template: `<gallery-logos title="Sample title" :logo-names="logoNames"/>`
});

export const GalleryLogosThreeCols = () => ({
    components: { GalleryLogos },
    data() {
        return {
            api: API,
            logoNames: [
                "nyt-brand-studio",
                "vanity-fair",
                "vayner-media",
                "vogue",
                "vox",
                "wsj"
            ]
        };
    },
    template: `<gallery-logos title="Sample title" :logo-names="logoNames"/>`
});
