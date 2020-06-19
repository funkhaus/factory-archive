import ProjectSpecification from "./ProjectSpecification.md"
import AgencySpecifcation from "./AgencySpecifcation.md"

// Markdown component with github styles
import VueMarkdown from "vue-markdown"
import "@/styles/github-markdown.css"

export default {
    title: "Documentation / Specifcations"
}

export const Agency = () => ({
    components: { VueMarkdown },
    data() {
        return {
            markdown: AgencySpecifcation
        }
    },
    template: `<vue-markdown class="markdown-body" :source="markdown"/>`
})

export const Project = () => ({
    components: { VueMarkdown },
    data() {
        return {
            markdown: ProjectSpecification
        }
    },
    template: `<vue-markdown class="markdown-body" :source="markdown"/>`
})
