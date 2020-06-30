<template>
    <nuxt-link class="block-news" :to="to">
        <wp-image class="block-image" :image="image">
            <span class="more">More</span>
        </wp-image>
        <div class="block-text">
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
        }
    },
    computed: {
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
    justify-content: space-between;
    align-items: center;

    .block-image {
        width: calc(50% - (var(--unit-gutter) / 2));

        &.has-loaded {
            .more {
                opacity: 1;
            }
        }
        .media {
            transition: transform 0.2s;
        }
    }
    .block-text {
        width: calc(50% - (var(--unit-gutter) / 2));
    }
    .title {
        margin: 15px 0;
        font-size: 30px;
    }
    .excerpt {
        margin: 15px 0;
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

        // TODO set this with theme
        background-color: var(--color-company);
        color: var(--color-black);
        opacity: 0;
    }

    // // Hovers
    @media #{$has-hover} {
        &:hover {
            // TODO move this into the grid where text hover state will live
            .media {
                transform: translateY(-40px);
            }
        }
    }
    // // Breakpoints
    @media #{$lt-phone} {
        flex-direction: column;

        .block-image,
        .block-text {
            width: 100%;
        }
        .block-text {
            margin-top: 15px;
        }
    }
}
</style>
