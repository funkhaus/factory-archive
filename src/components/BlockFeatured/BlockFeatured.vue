<template>
    <nuxt-link class="block-featured">
        <div class="featured-text">
            <split-text
                v-if="title"
                element="h2"
                :text="title"
                class="title"
                separator=" - "
            />
            <p class="credit">by {{ credit }}</p>
        </div>
        <wp-image
            class="primary-image"
            :aspect-ratio="56.25"
            :image="imagePrimary"
        />
        <wp-image
            class="secondary-image"
            :aspect-ratio="56.25"
            :image="imageSecondary"
        />
    </nuxt-link>
</template>

<script>
// Components
import NuxtLink from "@/components/global/NuxtLink"
import WpImage from "@/components/global/WpImage"
import SplitText from "@/components/global/SplitText"

export default {
    components: {
        NuxtLink,
        WpImage,
        SplitText
    },
    props: {
        imagePrimary: {
            type: Object,
            default: () => {}
        },
        imageSecondary: {
            type: Object,
            default: () => {}
        },
        title: {
            type: String,
            default: ""
        },
        credit: {
            type: String,
            default: ""
        },
        to: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss">
.block-featured {
    position: relative;
    display: block;
    width: 100%;
    margin: 200px auto 600px;

    // Text
    .featured-text {
        position: absolute;
        top: 50%;
        right: 0;
        transform: translateY(-50%);
        z-index: 40;
        text-align: right;
    }
    .title {
        display: flex;
        flex-direction: column;

        margin: 0;
        font-family: var(--font-secondary);
        font-weight: 700;
        text-align: right;
    }
    .line-1 {
        font-size: 50px;
    }
    .line-2 {
        font-size: 25px;
    }
    .credit {
        margin-top: 10px;
        margin-bottom: 0;
        font-size: 20px;
    }
    // Images
    .primary-image {
        width: 83%;
        max-width: 980px;
        transition: transform 0.4s $authenticMotion;
    }
    .secondary-image.mode-intrinsic-ratio {
        width: 66%;
        max-width: 780px;

        position: absolute;
        top: 50%;
        right: 50px;
        transform: translateY(45%);
        z-index: 30;

        pointer-events: none;
        transition: transform 0.4s $authenticMotion;
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            .primary-image {
                transform: translateX(50px);
            }
            .secondary-image.mode-intrinsic-ratio {
                transform: translateY(-50%);
            }
        }
    }
    // Breakpoints
    @media #{$lt-tablet} {
        margin: 100px auto 400px;

        .secondary-image.mode-intrinsic-ratio {
            right: 0;
        }
    }
    @media #{$lt-phone} {
        margin: 50px auto 300px;

        .line-1 {
            font-size: 25px;
        }
        .line-2 {
            font-size: 15px;
        }
        .credit {
            font-size: 12px;
        }
    }
    @media only screen and (max-width: 500px) {
        margin: 50px auto 200px;
    }
}
</style>
