<template lang="html">
    <nuxt-link v-if="image" :to="path" class="block-work">
        <wp-image class="image" :image="image" :aspect-ratio="56.25" />
        <div class="credits">
            <svg-icon-play class="play" />
            <split-text :text="title" />
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
        path: {
            type: String,
            default: ""
        },
        hoverType: {
            type: String,
            default: "default" // || solid
        }
    }
}
</script>

<style lang="scss" scoped>
.block-work {
    background-color: #fdc760;

    width: 50%;
    position: relative;
    overflow: hidden;

    .image {
        transition: transform 0.2s ease-in-out;
        position: relative;
        z-index: 20;
    }

    .credits {
        padding: 20px;
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
        color: black;
        span {
            margin: 0;
            font-weight: 300;
            display: block;
        }
        svg path {
            fill: black;
        }
    }

    // Hovers
    @media #{$has-hover} {
        &:hover {
            .image {
                transform: translateY(-33%);
            }
        }
    }
    // Breakpoints
    @media #{$lt-phone} {
        width: 100%;
    }
}
</style>
