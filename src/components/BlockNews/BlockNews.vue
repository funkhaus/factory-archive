<template>
    <nuxt-link :class="classes" :to="to">
        <wp-image class="block-image" :image="image">
            <span class="more">More</span>
        </wp-image>
        <div class="block-text">
            <span v-if="hasPrompt" class="prompt">Next</span>
            <div class="meta">
                <time class="date" v-html="formattedDate" />
                <h3 class="title" v-html="title" />
                <p class="excerpt" v-html="stripTags(excerpt)" />
                <div v-if="categories" class="categories">
                    <span
                        v-for="(category, i) in categories"
                        v-html="category.name + comma(i)"
                    />
                </div>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
// Helpers
import { formatDate } from "@/utils/tools"
import { stripTags } from "@/utils/tools"
// Components
import NuxtLink from "@/components/global/NuxtLink"
import WpImage from "@/components/global/WpImage"

export default {
    components: {
        NuxtLink,
        WpImage
    },
    props: {
        to: {
            type: String,
            required: true
        },
        image: {
            type: Object,
            default: () => {}
        },
        title: {
            type: String,
            default: ""
        },
        excerpt: {
            type: String,
            default: ""
        },
        date: {
            type: String,
            default: ""
        },
        categories: {
            type: Array,
            default: () => []
        },
        hasPrompt: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        classes() {
            return ["block-news", { "has-prompt": this.hasPrompt }]
        },
        formattedDate() {
            return formatDate(this.date)
        }
    },
    methods: {
        stripTags(text) {
            return stripTags(text)
        },
        comma(i) {
            let output = ", "
            if (i == this.categories.length - 1) {
                output = ""
            }
            return output
        }
    }
}
</script>

<style lang="scss">
.block-news {
    width: 100%;
    box-sizing: border-box;

    display: flex;
    align-items: center;

    .block-image {
        width: 50%;
        overflow: hidden;
        max-width: 640px;

        &.is-orientation-portrait {
            max-width: 440px;
        }
        &.has-loaded {
            .more {
                opacity: 1;
            }
        }
        .media {
            transition: transform 0.2s $authenticMotion;
        }
    }
    .block-text {
        width: 50%;
        max-width: 500px;
        padding: 0 0 0 var(--unit-gutter);
        box-sizing: border-box;
        transition: transform 0.2s $authenticMotion;
    }
    .title {
        margin: 15px 0;
        font-size: 30px;
        font-weight: 300;
    }
    .excerpt {
        margin: 15px 0;
        font-size: 14px;
    }
    .date {
        font-size: 14px;
    }
    .more {
        position: absolute;
        bottom: 0;

        height: 40px;
        width: 100%;
        padding-left: 14px;
        box-sizing: border-box;

        display: flex;
        align-items: center;

        background-color: var(--color-company);
        color: var(--color-black);
        opacity: 0;
    }
    .prompt {
        display: none;
        margin: 0;
        font-size: 25px;
        font-weight: 300;
    }
    // Promt styles
    &.has-prompt {
        align-items: normal;

        .block-text {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
        .categories {
            display: none;
        }
        .excerpt {
            margin-bottom: 30px;
        }
        .prompt {
            display: block;
            margin-top: 30px;
        }
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            .media {
                transform: translateY(-40px);
            }
            .block-text {
                transform: translateX(var(--unit-gutter));
            }
        }
    }
    // Breakpoints
    @media #{$lt-phone} {
        flex-direction: column;

        .block-image,
        .block-text {
            width: 100%;
        }
        .block-text {
            margin-top: 15px;
            padding: 0;
        }
        &.has-prompt {
            align-items: center;
        }
    }
}
</style>
