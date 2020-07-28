<template>
    <div :class="{ open: menuOpen }" class="panel-menu">
        <!-- Site Hamburger -->
        <site-hamburger @click.native="toggleMenu" />

        <!-- Main Menu -->
        <wp-menu :items="mainMenu" class="menu main-menu" />
    </div>
</template>

<script>
// Components
import SiteHamburger from "@/components/SiteHamburger/SiteHamburger"
import WpMenu from "@/components/global/WpMenu"

export default {
    components: {
        SiteHamburger,
        WpMenu
    },
    props: {
        mainMenu: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            menuOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuOpen = !this.menuOpen
        }
    }
}
</script>

<style lang="scss">
.panel-menu {
    .menu {
        display: inline-block;
        margin: 0;
        padding: 10px 0 0 50px;
        list-style: none;
        transform: translateY(-100%);
        transition: transform 0.4s $authenticMotion;
    }
    .mock-nuxt-link {
        position: relative;
        z-index: 20;

        font-family: var(--font-secondary);
        font-size: 125px;
        font-weight: 700;
        color: var(--color-black);
        text-transform: uppercase;
    }

    // Opened state
    &.open .menu {
        transform: none;
    }

    // Hovers
    @media #{$has-hover} {
        .mock-nuxt-link:hover {
            color: transparent;
            -webkit-text-stroke: 1px var(--color-black);
        }
    }
    // Breakpoints
    @media #{$gt-wide} {
        .mock-nuxt-link {
            font-size: 180px;
        }
    }
    @media #{$lt-desktop} {
        .mock-nuxt-link {
            font-size: 84px;
        }
    }
    @media #{$lt-sm-tablet} {
        .menu {
            padding: 10px 0 0 20px;
        }
        .mock-nuxt-link {
            font-size: 34px;
        }
    }
}
</style>
