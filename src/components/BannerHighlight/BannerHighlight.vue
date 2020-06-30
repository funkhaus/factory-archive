<template>
    <nuxt-link class="banner-highlight" :to="to">
        <wp-image
            v-if="image"
            class="block-image"
            :image="image"
            mode="fullbleed"
        />

        <div class="block-text">
            <h3 class="text" v-html="text" />
            <!-- prompt -->

            <div class="prompt-container">
                <p class="prompt" v-html="prompt" />
                <span class="arrow">Arrow</span>
            </div>
        </div>
    </nuxt-link>
</template>

<script>
// Helpers
import { formatDate } from "@/utils/tools";
// Components
import NuxtLink from "@/components/global/NuxtLink";
import WpImage from "@/components/global/WpImage";

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
        text: {
            type: String,
            default: "Originals"
        },
        prompt: {
            type: String,
            default: "Explore"
        }
    }
};
</script>

<style lang="scss" scoped>
.banner-highlight {
    color: var(--color-company);
    display: block;
    position: relative;
    height: 80vh;

    .block-text {
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        z-index: 10;

        padding: 110px 50px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .text {
        margin: 0;
        font-size: 89px;
        padding-bottom: 43px;
        font-weight: 300;
    }

    .prompt-container {
        position: absolute;

        .prompt {
            font-size: 28px;
            overflow: hidden;
            transition: opacity 200ms ease;
            opacity: 0;
            padding: 0 15px 0 0;
            margin: 0;
            padding-left: 8px;
        }

        .arrow {
            position: absolute;
            left: 8px;
            top: 50%;

            transform: translateY(-50%);
            transition: left 200ms ease;
        }

        &:hover .prompt {
            opacity: 1;
        }

        &:hover .arrow {
            left: 100%;
        }
    }

    @media #{$lt-tablet} {
        .text {
            font-size: 59px;
            padding-bottom: 29px;
        }

        .prompt-container .prompt {
            font-size: 19px;
        }

        .block-text {
            padding: 30px 15px;
        }
    }
}
</style>
