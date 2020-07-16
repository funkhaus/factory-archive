<template>
    <div class="panel-menu">
        <div class="background-filter" />
        <div class="menus">
            <div class="left">
                divs
            </div>
            <div class="right">
                <p class="menu-title">MakeMake</p>
                <wp-menu :items="mainMenu" class="menu main-menu" />
                <p class="menu-title">Social</p>
                <wp-menu :items="socialMenu" class="menu social-menu" />
            </div>
        </div>
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
        },
        socialMenu: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
.panel-menu {
    position: absolute;
    top: 0;
    left: 0;
    height: var(--unit-100vh);
    width: 100%;
    color: var(--color-company);

    .background-filter {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        height: 100%;
        width: 100%;
        background-color: var(--color-black);
        opacity: 0.6;
        transition: opacity 0.5s $authenticMotion;
    }
    .menus {
        height: 100%;
        width: 100%;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .menu {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: right;
    }
    .right {
        padding-right: 110px;
    }
    .menu-title {
        margin: 0 0 10px;
        font-weight: 300;
        text-align: right;
    }
    .main-menu {
        font-size: 50px;
        font-weight: 300;
        margin-bottom: 35px;
    }
    .social-menu {
        font-size: 14px;

        .menu-item {
            margin: 5px 0;
        }
    }

    // Hovers
    // @media #{$has-hover} {
    // }
    // Breakpoints
    // @media #{$lt-phone} {
    // }
}
</style>
