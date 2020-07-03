import { storiesOf } from '@storybook/vue';
import { withKnobs, text } from '@storybook/addon-knobs';
import BannerHighlight from "./BannerHighlight"
import API from "@/static/db.json"

export default {
    title: "@uptownhr / BannerHighlight",
    decorators: [withKnobs]
}

export const BlockWorkDefault = () => ({
    components: { BannerHighlight },
    data() {
        return {
            api: API
        }
    },
    template: `<banner-highlight :image="api.image" to="/" />`
})

export const BlockWorkWithTitle = () => ({
    components: { BannerHighlight },
    data() {
        return {
            api: API
        }
    },
    template: `<banner-highlight text="Sample" :image="api.image" to="/" />`
})

export const BlockWorkWithPrompt = () => ({
    components: { BannerHighlight },
    data() {
        return {
            api: API
        }
    },
    template: `<banner-highlight prompt="Sample" :image="api.image" to="/" />`
})

export const BlockWorkPlayground = () => ({
    components: { BannerHighlight },
    props: {
        prompt: { default: text('Prompt', 'Hello') },
        text: { default: text('Title', 'helloo2') }
    },
    data() {
        return {
            api: API
        }
    },
    template: `<banner-highlight :prompt="prompt" :text="text" :image="api.image" to="/" />`
})
