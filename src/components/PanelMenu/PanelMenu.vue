<template>
    <div :class="{ open: menuOpen }" class="panel-menu" @click="toggleMenu">
        <!-- Site Hamburger -->
        <site-hamburger />

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
        position: relative;
        z-index: 20;

        display: inline-block;
        list-style: none;
        margin: 0;
        padding: 0;

        transform: translateY(-100%);
        transition: transform 0.4s $authenticMotion;
    }
    .mock-nuxt-link {
        font-family: var(--font-secondary);
        font-size: 100px;
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
    // @media #{$lt-phone} {
    // }
}
</style>
