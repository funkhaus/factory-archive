<template>
    <nuxt-link class="block-work">
        <div class="block-text">
            <split-text
                v-if="title"
                element="h2"
                :text="title"
                class="title"
                separator=" - "
            />
            <p v-if="credit" class="credit">by {{ credit }}</p>
        </div>
        <wp-image class="block-image" :image="image" />
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
        image: {
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
.block-work {
    position: relative;
    display: block;
    width: 100%;
    margin: -50px auto;
    padding-left: 50px;
    box-sizing: border-box;

    // Text
    .block-text {
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        z-index: 40;
        transition: transform 0.4s $authenticMotion;
    }
    .title {
        display: flex;
        flex-direction: column;

        margin: 0;
        font-family: var(--font-secondary);
        font-weight: 700;
    }
    .line-1 {
        font-size: 30px;
    }
    .credit {
        margin-top: 10px;
        margin-bottom: 0;
        font-size: 14px;
    }
    // Image
    .block-image {
        width: 31%;
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
        margin: 100px auto;

        .block-image {
            width: 44%;
        }
    }
    @media #{$lt-phone} {
        // margin: 100px auto;

        .line-1 {
            font-size: 25px;
        }
        .line-2 {
            font-size: 15px;
        }
        .credit {
            font-size: 12px;
        }
        .block-image {
            width: 100%;
        }
    }
}
</style>
