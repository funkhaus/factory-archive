<!-- Author: @drewbaker -->
<template>
    <nuxt-link class="block-work" :to="to">
        <!-- Component declartion is kebab cased -->
        <wp-image class="image" :image="image" />

        <!-- We use v-html because most of the time the text comes out of our CMS with HTML tags in it-->
        <h2 class="title" v-html="title" />

        <!-- Nice to prepend SVG component names to not confuse them with regaulr components -->
        <svg-logo-funkhaus class="logo" />
    </nuxt-link>
</template>

<script>
import NuxtLink from "@/components/global/NuxtLink"
import WpImage from "@/components/global/WpImage"
import SvgLogoFunkhaus from "@/assets/svgs/logo-funkhaus.svg"

export default {
    // Name matches filename and top-level class name
    name: "BlockWork",
    components: {
        NuxtLink,
        WpImage,
        SvgLogoFunkhaus
    },
    props: {
        // All props have type and default on them
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
        }
    }
}
</script>

<style lang="scss" scoped>
// SCSS with scoped tag

.block-work {
    position: relative;
    z-index: 0; // Localize the z-index to this component
    display: block;
    max-width: 50%;

    .image {
        border: 4px solid var(--color-black);
        transition: border 0.4s ease-in-out; // Only animate properties that are needed. 1s, 0.8s, 0.4s are common durations.
    }
    .title {
        font-size: 18px;
        font-weight: bold;
        margin: 0; // It's OK to use pixel for margins (no need for REM or anything like that)

        position: absolute;
        top: 0;
        left: 0;
        z-index: 10; // Increment z-index by 10's
        height: 100%;
        width: 100%;

        // Text over image normally gets a slight color over it.
        // It's tempting to use a brightness filter on the image, but wp-image image can also be a video,
        // which has really bad performance with CSS filters.
        background-color: rgba(#000000, 0.2); // Always use full color code, lowercase.
        color: #ffffff; // Always use full color code, lowercase.

        // Nice to group related styles, no need for prefixes thanks to build process.
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-content: center;
        align-items: center;
    }
    .logo {
        position: absolute;
        top: 20px;
        right: 20px;
        width: 100px;
        height: auto;
        z-index: 20;

        // This is how you style an SVG
        path {
            fill: #ffffff;
        }
    }

    // Hover states
    @media #{$has-hover} {
        &:hover .image {
            border: 4px solid var(--color-brand);
        }
    }

    // Breakpoints
    @media #{$lt-tablet} {
        max-width: 100%;

        .image {
            border: 4px solid #ff0000; // Always use full color code, lowercase.
        }
    }
}
</style>
