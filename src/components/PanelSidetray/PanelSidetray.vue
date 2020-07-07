<template lang="html">
    <div class="panel-sidetray">
        <nuxt-link
            v-for="(item, i) in items"
            v-if="item.featuredImage.sourceUrl"
            :key="item.id"
            :to="item.uri"
            @click.native="handleClick"
        >
            <wp-image
                :image="item.featuredImage"
                :aspect-ratio="56.25"
                :class="{ active: i == activeIndex }"
            >
                <div class="scrim">
                    <h4 v-if="i == activeIndex">Currently Viewing</h4>
                    <h4 v-else v-html="item.title" />
                </div>
            </wp-image>
        </nuxt-link>
    </div>
</template>

<script>
import WpImage from "@/components/global/WpImage"
import NuxtLink from "@/components/global/NuxtLink"

export default {
    components: {
        WpImage,
        NuxtLink
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
    },
    methods: {
        handleClick() {
            this.$emit("panel-interacted", event)
        }
    }
}
</script>

<style lang="scss" scoped>
.panel-sidetray {
    height: var(--unit-100vh);
    overflow-y: auto;
    background-color: var(--color-black);
    padding: 20px;
    box-sizing: border-box;
    width: 420px;

    .wp-image {
        display: block;
        transition: transform 0.2s ease-in-out;
        position: relative;
        z-index: 20;
        cursor: pointer;

        .scrim {
            position: absolute;
            z-index: 20;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: rgba(black, 0);
            color: var(--color-company);
            transition: background-color 0.2s ease-in-out;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;

            h4 {
                font-size: 16px;
                font-weight: 300;
                opacity: 0;
                transition: opacity 0.2s ease-in-out;
            }
        }

        &.active .scrim {
            background-color: rgba(black, 0.6);
            h4 {
                opacity: 1;
            }
        }
    }

    // Hovers
    @media #{$has-hover} {
        .wp-image:hover:not(.active) {
            .scrim {
                background-color: rgba(black, 0.6);
                h4 {
                    opacity: 1;
                }
            }
        }
    }
}
</style>
