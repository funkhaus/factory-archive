<template>
    <div class="panel-menu">
        <div class="background-filter" />
        <div class="menus">
            <!-- Company Menu -->
            <div
                v-for="(name, i) in companyMenu"
                :key="name.label"
                :class="`company-menu-item company-${name.label}`"
            >
                <!-- Company SVG -->
                <component
                    :is="`svg-logo-${name.label}`"
                    :class="`logo logo-${name.label}`"
                />
                <!-- Company Services -->
                <p class="service" v-html="name.services"></p>
            </div>
            <!-- Main Menu + Social Menu -->
            <div class="right-menus">
                <!-- TODO is this title dynamic? -->
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
// Assets
import SvgLogoRpsg from "@/assets/svgs/menu-logos/logo-rpsg.svg"
import SvgLogoA52 from "@/assets/svgs/menu-logos/logo-a52.svg"
import SvgLogoPrimary from "@/assets/svgs/menu-logos/logo-primary.svg"
import SvgLogoElastic from "@/assets/svgs/menu-logos/logo-elastic.svg"
import SvgLogoJax from "@/assets/svgs/menu-logos/logo-jax.svg"
import SvgLogoIndestrucible from "@/assets/svgs/menu-logos/logo-indestrucible.svg"

export default {
    components: {
        WpMenu,
        SvgLogoRpsg,
        SvgLogoA52,
        SvgLogoPrimary,
        SvgLogoElastic,
        SvgLogoJax,
        SvgLogoIndestrucible
    },
    props: {
        mainMenu: {
            type: Array,
            default: () => []
        },
        socialMenu: {
            type: Array,
            default: () => []
        },
        companyMenu: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
:root {
    --color-rpsg: #fdc760;
    --color-a52: #f58220;
    --color-primary: #cd1a45;
    --color-elastic: #3695b6;
    --color-jax: #1b8e83;
    --color-indestrucible: #52a94d;
}
.panel-menu {
    position: absolute;
    top: 0;
    left: 0;
    height: var(--unit-100vh);
    width: 100%;
    color: var(--color-company);
    overflow: hidden;

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
        align-items: center;
    }
    .menu {
        list-style: none;
        margin: 0;
        padding: 0;
        text-align: right;
    }
    .right-menus {
        margin-left: auto;
        padding-right: 110px;
        transition: transform 0.5s $authenticMotion,
            opacity 0.5s $authenticMotion;
    }
    .menu-title {
        margin: 0 0 10px;
        font-weight: 300;
        text-align: right;
    }
    .mock-nuxt-link {
        display: block;
        transition: transform 0.5s $authenticMotion;
    }
    // Main Menu
    .main-menu {
        font-size: 50px;
        font-weight: 300;
        margin-bottom: 35px;
    }
    // Social Menu
    .social-menu {
        font-size: 14px;

        .menu-item {
            margin: 5px 0;
        }
    }
    // Company Menu
    .company-menu-item {
        position: absolute;
        // right: 100%;

        height: var(--unit-100vh);
        width: 100vw;
        background-color: rebeccapurple;

        padding: 25px 40px 0 0;
        box-sizing: border-box;
        cursor: pointer;

        display: flex;
        flex-direction: column;
        align-items: flex-end;
        justify-content: flex-start;

        transition: transform 0.5s $authenticMotion, right 0.5s $authenticMotion;
    }
    @for $i from 1 through 6 {
        .company-menu-item:nth-child(6n + #{$i}) {
            // transform: translateX(calc(43vw - (#{$i} * 40px)));
            right: calc(55vw + (#{$i} * 40px));
            top: calc(100% - (640px - (#{$i} * 80px)));
        }
    }
    .company-rpsg {
        background-color: var(--color-rpsg);
    }
    .company-a52 {
        background-color: var(--color-a52);
    }
    .company-primary {
        background-color: var(--color-primary);
    }
    .company-elastic {
        background-color: var(--color-elastic);
    }
    .company-jax {
        background-color: var(--color-jax);
    }
    .company-indestrucible {
        background-color: var(--color-indestrucible);
    }
    // Logos
    .logo {
        height: 30px;
        width: auto;
    }
    .logo-rpsg {
        height: 36px;
        .a {
            fill: var(--color-black);
        }
        .b {
            fill: var(--color-white);
        }
        .c {
            fill: var(--color-rpsg);
        }
    }
    .logo-elastic {
        height: 23px;
    }
    .logo-jax {
        height: 36px;
    }
    .logo-indestrucible {
        height: 17px;
    }
    // Services
    .service {
        color: var(--color-black);
        margin: 5px 0 0;
        font-weight: 300;
        font-size: 14px;
        text-align: right;
        opacity: 0;
        transition: opacity 0.5s $authenticMotion;
    }
    .company-indestrucible {
        .service {
            max-width: 300px;
        }
    }
    // Closed State
    &.closed {
        .company-menu-item {
            // transform: none;
            right: 100%;
        }
        .right-menus {
            transform: translateX(100%);
            opacity: 0;
        }
        .background-filter {
            opacity: 0;
        }
    }

    // Hovers
    @media #{$has-hover} {
        .company-menu-item:hover {
            transform: translate(10px, -10px);

            .service {
                opacity: 1;
            }
        }
        .menu .mock-nuxt-link:hover {
            transform: translateX(-10px);
        }
    }
    // Breakpoints
    @media #{$lt-tablet} {
        @for $i from 1 through 6 {
            .company-menu-item:nth-child(6n + #{$i}) {
                right: calc(100% - 50px);
                top: calc(100% - (350px - (#{$i} * 50px)));
            }
        }
        .logo {
            opacity: 0;
        }
    }
    @media #{$lt-phone} {
        .right-menus {
            padding-right: 15px;
        }
        .main-menu {
            font-size: 30px;
        }
    }
}
</style>
