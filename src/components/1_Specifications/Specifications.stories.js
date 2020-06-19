import MarkdownComponent from "./MarkdownComponent"
//import AgencySpecifcation from "./AgencySpecifcation";
//import ProjectSpecifcation from "./ProjectSpecifcation";

export default {
    title: "Specifcations | Specifcations"
}

export const Agency = () => ({
    components: { MarkdownComponent },
    template: "<markdown-component/>"
})

export const Project = () => ({
    components: { MarkdownComponent },
    template: "<markdown-component/>"
})
