import ProjectSpecification from "./ProjectSpecification.md"
import AgencySpecifcation from "./AgencySpecifcation.md"

import VueMarkdown from "vue-markdown"

export default {
    title: "Documentation | Specifcations"
}

console.log(AgencySpecifcation)

export const Agency = () => ({
    components: { VueMarkdown },
    data() {
        return {
            markdown: AgencySpecifcation
        }
    },
    template: `<vue-markdown :source="markdown"/>`
})

export const Project = () => ({
    components: { VueMarkdown },
    data() {
        return {
            markdown: ProjectSpecification
        }
    },
    template: `<vue-markdown :source="markdown"/>`
})
