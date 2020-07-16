<template lang="html">
    <nuxt-link v-if="image" :to="to" :class="classes">
        <wp-image class="image" :image="image" :aspect-ratio="56.25">
            <div class="scrim" />
        </wp-image>

        <div class="credits">
            <svg-icon-play v-if="hoverType == 'default'" class="svg" />

            <split-text :text="title" element="h2" />
        </div>
    </nuxt-link>
</template>

<script>
// Components
import NuxtLink from "@/components/global/NuxtLink"
import WpImage from "@/components/global/WpImage"
import SplitText from "@/components/global/SplitText"
import SvgIconPlay from "@/assets/svgs/icon-play.svg"

export default {
    components: {
        NuxtLink,
        WpImage,
        SplitText,
        SvgIconPlay
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
        to: {
            type: String,
            default: ""
        },
        hoverType: {
            type: String,
            default: "default"
        }
    },
    computed: {
        classes() {
            return ["block-work", `hover-${this.hoverType}`]
        }
    }
}
</script>

<style lang="scss" scoped>
.block-work {
    background-color: var(--color-company);
    width: 50%;
    position: relative;
    overflow: hidden;
    display: block;

    .image {
        transition: transform 0.2s ease-in-out;
        position: relative;
        z-index: 20;

        .scrim {
            position: absolute;
            z-index: 20;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            transition: background-color 0.2s ease-in-out;
        }
    }

    .credits {
        padding: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
        color: var(--color-black);
        h2 {
            margin: 0;
            font-size: 20px;
        }
        /deep/ .line {
            margin: 0;
            font-weight: 300;
            display: block;
        }
        .svg {
            width: 15px;
            height: auto;
            path {
                fill: var(--color-black);
            }
        }
    }

    &.hover-solid {
        .credits {
            z-index: 30;
            color: var(--color-company);
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
        }
    }

    // Hovers
    @media #{$has-hover} {
        &:hover:not(.hover-solid) {
            .image {
                transform: translateY(-110px);
                .scrim {
                    background-color: rgba(black, 0.2);
                }
            }
        }
        &.hover-solid:hover {
            .image .scrim {
                background-color: rgba(black, 0.2);
            }
            .credits {
                opacity: 1;
            }
        }
    }
    // Breakpoints
    @media #{$lt-phone} {
        width: 100%;
        &.hover-solid .credits,
        .credits {
            z-index: 30;
            opacity: 1;
            h2 {
                font-size: 16px;
                color: var(--color-company);
            }
            .svg path {
                fill: var(--color-company);
            }
        }
        .image .scrim {
            background-color: rgba(black, 0.2);
        }
    }
}
</style>
