<template>
    <div class="panel-menu open">
        <!-- Main Menu -->
        <wp-menu :items="mainMenu" class="menu main-menu" />
    </div>
</template>

<script>
// Components
import WpMenu from "@/components/global/WpMenu"

export default {
    components: {
        WpMenu
    },
    props: {
        mainMenu: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
:root {
    --color-rpsg: #fdc760;
}
.panel-menu {
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    transform: translateY(-100%);
    transition: transform 0.4s $authenticMotion;
    // TODO remove, temporary style for visibility
    background-color: var(--color-rpsg);

    .menu {
        display: inline-block;
        margin: 0;
        padding: 10px 0 0 50px;
        list-style: none;
    }
    .mock-nuxt-link {
        font-family: var(--font-secondary);
        font-size: 7.7vw;
        font-weight: 700;
        color: var(--color-black);
        text-transform: uppercase;
    }

    // Opened state
    &.open {
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
    @media #{$lt-phone} {
        .menu {
            padding: 10px 0 0 20px;
        }
    }
}
</style>
