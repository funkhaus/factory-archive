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

            <div class="prompt-container">
                <span class="prompt" v-html="prompt" />
                <svg-arrow class="arrow" />
            </div>
        </div>
    </nuxt-link>
</template>

<script>
// Components
import NuxtLink from "@/components/global/NuxtLink";
import WpImage from "@/components/global/WpImage";
import SvgArrow from "@/assets/svgs/arrow.svg";

export default {
    components: {
        NuxtLink,
        WpImage,
        SvgArrow
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
        font-weight: 300;
    }

    .prompt-container {
        position: relative;
        margin-top: 10px;

        .prompt {
            font-size: 28px;
            padding: 0 15px 0 0;
            margin: 0;
            padding-left: 8px;
        }

        .arrow {
            transition: transform 200ms ease;
        }
    }

    @media #{$has-hover} {
        &:hover .arrow {
            left: 100%;
            transform: translateX(30%);
        }
    }

    @media #{$lt-tablet} {
        .text {
            font-size: 59px;
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
