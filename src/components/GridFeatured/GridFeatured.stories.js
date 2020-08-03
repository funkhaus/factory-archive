import GridFeatured from "./GridFeatured"
import API from "@/static/db.json"

let creditsItem = {
    ...API.pages[0]
}

let logosItem = {
    ...API.pages[0],
    logoNames: ["rpsg", "jax", "elastic"]
}

// Logos
const logos = [
    { ...logosItem },
    {
        ...logosItem,
        ...API.pages[1],
        logoNames: ["rpsg", "jax", "elastic", "indestrucible"]
    },
    {
        ...logosItem,
        ...API.pages[2],
        logoNames: ["a52-color", "jax", "indestrucible"]
    },
    { ...logosItem },
    {
        ...logosItem,
        ...API.pages[1],
        logoNames: ["rpsg", "jax", "elastic", "indestrucible"]
    },
    { ...logosItem }
]

// News and Credits
const newsAndCredits = [
    {
        ...creditsItem,
        hasHover: true,
        creditsPrimary: `Artists – Angus Wall & Hazel Baird
            Editor – Jamie Foord`,
        creditsSecondary: `Production Co. – Placeholder
            Agency – Placeholder`
    },
    {
        ...creditsItem,
        ...API.pages[1],
        isNews: true
    },
    {
        ...creditsItem,
        ...API.pages[1],
        hasHover: true,
        creditsPrimary: `Artists – Angus Wall & Hazel Baird`,
        creditsSecondary: `Production Co. – Placeholder
            Agency – Placeholder
            Editor – Jamie Foord`
    },
    {
        ...creditsItem,
        hasHover: true,
        creditsPrimary: `Artists – Angus Wall & Hazel Baird
            Editor – Jamie Foord`,
        creditsSecondary: `Production Co. – Placeholder
            Agency – Placeholder
            Editor – Jamie Foord`
    },
    {
        ...creditsItem,
        ...API.pages[2],
        isNews: true
    },
    {
        ...creditsItem,
        ...API.pages[2],
        hasHover: true,
        creditsPrimary: `Artists – Angus Wall & Hazel Baird
            Editor – Jamie Foord`
    }
]

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
