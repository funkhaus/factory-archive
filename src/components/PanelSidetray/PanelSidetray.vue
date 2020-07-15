<template lang="html">
    <div class="panel-sidetray">
        <svg-icon-reel class="svg" />
        <!-- TODO: replace :key with item.id -->
        <nuxt-link
            v-for="(item, i) in items"
            v-if="item.featuredImage.sourceUrl"
            :key="i"
            :to="item.uri"
        >
            <wp-image
                :image="item.featuredImage"
                :aspect-ratio="56.25"
                :class="{ active: i == activeIndex }"
            >
                <div class="scrim">
                    <h4 v-if="i == activeIndex" class="title">
                        Currently Viewing
                    </h4>
                    <h4 v-else class="title" v-html="item.title" />
                </div>
            </wp-image>
        </nuxt-link>
    </div>
</template>

<script>
import WpImage from "@/components/global/WpImage"
import NuxtLink from "@/components/global/NuxtLink"
import SvgIconReel from "@/assets/svgs/icon-reel.svg"

export default {
    components: {
        WpImage,
        NuxtLink,
        SvgIconReel
    },
    props: {
        items: {
            type: Array,
            default: () => []
        },
        activeIndex: {
            type: Number,
            default: -1
        }
    }
}
</script>

<style lang="scss" scoped>
.panel-sidetray {
    width: 420px;
    min-height: var(--unit-100vh);
    // NOTE: causes issue with abs pos svg: https://css-tricks.com/popping-hidden-overflow/
    // overflow-y: auto;
    // overflow-x: visible;
    background-color: var(--color-black);
    padding: 20px;
    box-sizing: border-box;

    position: absolute;
    right: 0px;
    top: 0;

    .svg {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -35px;
        z-index: 100;
    }

    /deep/ .wp-image {
        display: block;
        transition: transform 0.2s ease-in-out;
        position: relative;
        z-index: 20;
        cursor: pointer;
    }

    .scrim {
        position: absolute;
        z-index: 20;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background-color: rgba(black, 0);
        transition: background-color 0.2s ease-in-out;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        .title {
            color: var(--color-company);
            font-size: 16px;
            font-weight: 300;
            opacity: 0;
            transition: opacity 0.2s ease-in-out;
            margin: 0;
            padding: 10px;
        }
    }

    .wp-image.active .scrim {
        background-color: rgba(black, 0.6);
        .title {
            opacity: 1;
        }
    }

    // Hovers
    @media #{$has-hover} {
        /deep/ .wp-image:hover:not(.active) {
            .scrim {
                background-color: rgba(black, 0.6);
                .title {
                    opacity: 1;
                }
            }
        }
        .svg:hover {
            cursor: pointer;
        }
    }
}
</style>
