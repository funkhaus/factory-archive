<template lang="html">
    <div :class="['menu-category', { 'is-open': menuIsOpen }]">
        <h3 v-if="caption" v-html="caption" />

        <div v-if="items.length" class="select" @click="toggleMenu">
            <p>Refine By</p>
            <div class="bars">
                <div class="bar bar-1" />
                <div class="bar bar-2" />
            </div>
        </div>

        <wp-menu v-if="items.length" ref="menu" :items="items" />
    </div>
</template>

<script>
import WpMenu from "@/components/global/WpMenu"

export default {
    components: {
        WpMenu
    },
    props: {
        caption: {
            type: String,
            default: ""
        },
        items: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            menuIsOpen: false
        }
    },
    methods: {
        toggleMenu() {
            this.menuIsOpen = !this.menuIsOpen
        }
    }
}
</script>

<style lang="scss" scoped>
.menu-category {
    background-color: var(--color-company);
    text-align: center;
    padding: var(--unit-gutter);
    box-sizing: border-box;

    h3 {
        font-size: 30px;
        font-weight: 300;
        margin: 50px 0;
    }

    .select {
        position: relative;
        margin: 10px 0;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        p {
            font-size: 14px;
            font-weight: 400;
            margin: 0;
        }
    }

    .bars {
        position: relative;
        width: 20px;
        height: 10px;
        padding: 10px;
        display: inline-flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .bar {
            height: 2px;
            width: 20px;
            transition: 0.3s;
            background-color: var(--color-black);
            transform-origin: center center;
        }
        .bar-1 {
            display: none;
        }
    }

    /deep/ .wp-menu {
        padding: 0;
        margin: 0;
        width: 100%;
        overflow: hidden;
        transition: all 0.4s ease-in-out;

        li {
            display: inline-block;
            list-style: none;
            margin: 0 5px;
            padding: 5px 10px;
            transition: all 0.4s ease-in-out;

            a {
                color: var(--color-black);
                font-size: 14px;
                font-weight: 300;
                transition: all 0.4s ease-in-out;
                margin: 0;
                padding: 0;

                &.exact-active-link {
                    background-color: var(--color-black);
                    color: white;
                }
            }
        }
        // QUESTION: Should i just exclude this menu item with subItems?
        .sub-menu {
            display: none;
        }
    }
    // Hovers
    @media #{$has-hover} {
        /deep/ .wp-menu li:hover {
            background-color: var(--color-black);
            a {
                color: white;
            }
        }
    }
    // Breakpoints
    @media #{$lt-phone} {
        padding: 20px;

        .bars {
            justify-content: space-between;
            align-items: center;
            .bar-1 {
                display: block;
            }
        }
        &.is-open {
            .bar-1 {
                transform: rotate(-45deg) translate(-3px, 3px);
            }
            .bar-2 {
                transform: rotate(45deg) translate(-2px, -3px);
            }
        }

        /deep/ .wp-menu {
            max-height: 0;
            li {
                margin: 10px 0;
                display: block;
            }
        }
        &.is-open /deep/ .wp-menu {
            max-height: 300px;
        }
    }
}
</style>
