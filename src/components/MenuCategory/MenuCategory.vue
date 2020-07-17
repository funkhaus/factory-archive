<template lang="html">
    <div class="menu-category">
        <h3 v-if="caption" v-html="caption" />

        <p v-if="items.length" @click="toggleMenu" v-html="'Refine By —'" />

        <wp-menu
            v-if="items.length"
            ref="menu"
            :items="items"
            :class="{ 'is-open': menuIsOpen }"
        />
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

    p {
        margin: 20px 0;
        font-size: 14px;
        font-weight: 400;
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

            a {
                color: var(--color-black);
                font-size: 14px;
                font-weight: 300;
                transition: all 0.4s ease-in-out;
                padding: 5px 10px;

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
        /deep/ .wp-menu li a:hover {
            background-color: var(--color-black);
            color: white;
        }
        p:hover {
            cursor: pointer;
        }
    }
    // Breakpoints
    @media #{$lt-phone} {
        padding: 20px;

        /deep/ .wp-menu {
            max-height: 0;
            &.is-open {
                max-height: 300px;
            }
            li {
                margin: 10px 0;
                display: block;
            }
        }
    }
}
</style>
