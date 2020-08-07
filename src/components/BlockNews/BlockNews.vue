<template>
    <nuxt-link class="block-news">
        <div class="block-text">
            <h2 v-if="title" class="title" v-html="title" />
            <p v-if="date" v-html="formattedDate" class="date" />
        </div>
        <wp-image class="block-image" :image="image" />
    </nuxt-link>
</template>

<script>
// Components
import NuxtLink from "@/components/global/NuxtLink"
import WpImage from "@/components/global/WpImage"
// Helpers
// TODO changed the function in utils to match designs
import { formatDate } from "@/utils/tools"

export default {
    components: {
        NuxtLink,
        WpImage,
    },
    props: {
        image: {
            type: Object,
            default: () => {}
        },
        title: {
            type: String,
            default: ""
        },
        date: {
            type: String,
            default: ""
        },
        to: {
            type: String,
            default: ""
        }
    },
    computed: {
        formattedDate() {
            return formatDate(this.date)
        }
    },
}
</script>

<style lang="scss">
.block-news {
    position: relative;
    display: block;
    width: 100%;
    padding-left: 50px;
    box-sizing: border-box;

    // Text
    .block-text {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 40;
        max-width: 400px;
        transition: transform 0.4s $authenticMotion;
    }
    .title {
        margin: 0;
        font-family: var(--font-secondary);
        font-size: 20px;
        font-weight: 700;

    }
    .date {
        margin-top: 10px;
        margin-bottom: 0;
        font-size: 14px;
    }
    // Image
    .block-image {
        width: 34%;
        transform-origin: left;

        transition: transform 0.4s $authenticMotion;
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            z-index: 30;

            .block-image {
                transform: scale(1.4);
            }
            .block-text {
                transform: translate(100px, -50%);
            }
        }
    }
    // Breakpoints
    @media #{$lt-tablet} {
        .block-image {
            width: 50%;
        }
    }
    @media #{$lt-phone} {
        .title {
            font-size: 15px;
        }
        .date {
            font-size: 12px;
        }
        .block-image {
            width: 100%;
        }
    }
}
</style>
