<template lang="html">
    <section v-if="items.length" :class="`footer-socials theme-${colorTheme}`">
        <wp-menu :items="items" />
    </section>
</template>

<script>
//  Components
import WpMenu from "@/components/global/WpMenu"
import WpMenuItem from "@/components/global/WpMenuItem"

export default {
    components: {
        WpMenu,
        WpMenuItem
    },
    props: {
        items: {
            type: Array,
            default: () => []
        },
        colorTheme: {
            type: String,
            default: "pink"
        }
    }
}
</script>

<style lang="scss" scoped>
.footer-socials {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 255px;
    padding: 50px;
    box-sizing: border-box;
    background-color: var(--color-pink);

    /deep/ .wp-menu {
        display: block;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
        color: var(--color-yellow);
        text-transform: uppercase;
        font-size: 50px;
        flex-direction: column;

        a,
        .mock-nuxt-link {
            // DELETE .mock-nuxt-link when adding to project (will be an a tag)
            display: inline-flex;
            font-family: var(--font-secondary);
            font-weight: 500;
            transition: color 0.4s ease-in-out,
                -webkit-text-stroke 0.4s ease-in-out 0.2s;
        }
    }

    &.theme-orange {
        background-color: var(--color-orange);
        /deep/ .wp-menu {
            color: var(--color-yellow);
        }
    }
    &.theme-black {
        background-color: var(--color-black);
        /deep/ .wp-menu {
            color: var(--color-red);
        }
    }

    @media #{$has-hover} {
        /deep/ .wp-menu a:hover,
        /deep/ .wp-menu .mock-nuxt-link:hover {
            color: var(--color-pink);
            -webkit-text-stroke: 1px var(--color-black);
            transition: color 0.4s ease-in-out,
                -webkit-text-stroke 0.4s ease-in-out;
        }
        &.theme-black {
            /deep/ .wp-menu a:hover,
            /deep/ .wp-menu .mock-nuxt-link:hover {
                color: var(--color-black);
                -webkit-text-stroke: 1px var(--color-red);
            }
        }
        &.theme-orange {
            /deep/ .wp-menu a:hover,
            /deep/ .wp-menu .mock-nuxt-link:hover {
                color: var(--color-orange);
                -webkit-text-stroke: 1px var(--color-black);
            }
        }
    }

    // Breakpoints
    @media #{$lt-phone} {
        padding: 20px;
        height: auto;

        /deep/ .wp-menu {
            font-size: 25px;
        }
    }
}
</style>
