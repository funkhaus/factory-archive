import GridFeatured from "./GridFeatured"
import API from "@/static/db.json"

// Logos
const logos = []
    .concat({
        ...API.pages[0],
        logoNames: ["rpsg", "jax", "elastic", "indestrucible"]
    })
    .concat({
        ...API.pages[1],
        logoNames: ["a52-color", "jax", "indestrucible"]
    })
    .concat({ ...API.pages[2], logoNames: ["elastic", "rpsg", "a52"] })
    .concat({ ...API.pages[0], logoNames: ["a52", "jax", "indestrucible"] })
    .concat({
        ...API.pages[1],
        logoNames: ["a52-color", "jax", "indestrucible"]
    })
    .concat({ ...API.pages[2], logoNames: ["elastic", "rpsg", "a52"] })
    .concat({ ...API.pages[0], logoNames: ["a52", "jax", "indestrucible"] })

// News and Credits
const newsAndCredits = []
    .concat({
        ...API.pages[0],
        hasHover: true,
        creditsPrimary: `Artists – Angus Wall & Hazel Baird
        Editor – Jamie Foord`,
        creditsSecondary: `Production Co. – Placeholder
        Agency – Placeholder`
    })
    .concat({
        ...API.page,
        isNews: true,
        title:
            "Mikkel EG Nielsen’s first spot for the new year is an inverted twist to the story of Narcissus"
    })
    .concat({
        ...API.pages[2],
        hasHover: true,
        creditsPrimary: `Artists – Angus Wall & Hazel Baird
        Agency – Placeholder`,
        creditsSecondary: `Production Co. – Placeholder
        Agency – Placeholder`
    })
    .concat({
        ...API.page,
        hasHover: true,
        creditsPrimary: `Artists – Angus Wall & Hazel Baird
        Production Co. – Placeholder`,
        creditsSecondary: `Editor – Jamie Foord
        Agency – Placeholder`
    })
    .concat({
        ...API.page,
        isNews: true,
        title:
            "A whole lot more than deep dish pizza in Nike’s ‘Chicago Style.’"
    })
    .concat({
        ...API.pages[0],
        hasHover: true,
        creditsPrimary: `Artists – Angus Wall & Hazel Baird
        Editor – Jamie Foord
        Agency – Placeholder`
    })

export default {
    title: "@austinblanchard / GridFeatured"
}

export const GridFeaturedLogos = () => ({
    components: { GridFeatured },
    data() {
        return {
            api: API,
            blocks: logos
        }
    },
    template: `<grid-featured :blocks="blocks" />`
})

export const GridFeaturedNewsAndCredits = () => ({
    components: { GridFeatured },
    data() {
        return {
            api: API,
            blocks: newsAndCredits
        }
    },
    template: `<grid-featured :blocks="blocks" />`
})
