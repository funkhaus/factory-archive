<template>
    <nuxt-link class="banner-highlight" :to="to">
        <wp-image
            v-if="image"
            class="block-image"
            :image="image"
            mode="fullbleed"
        >
        </wp-image>
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

<style lang="scss">
.banner-highlight {
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

        padding: 50px;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .text {
        margin: 0;
        font-size: 50px;
        padding-bottom: 50px;
    }
    
    .prompt-container {
        position: absolute;
        
        .prompt {
            overflow: hidden;
            transition: opacity 200ms ease;
            opacity: 0;
            padding: 0 1rem 0 0;
        }

        .arrow {
            position: absolute;
            left: 0;
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

    // Hovers
    // @media #{$has-hover} {
    //     &:hover {
    //     }
    // }
    // Breakpoints
    // @media #{$lt-phone} {
    // }
}
</style>
