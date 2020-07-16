<template lang="html">
    <div class="menu-category">
        <h3 v-if="caption" v-html="caption" />
        <p v-if="items.length" v-html="'Refine By —'" />
        <wp-menu v-if="items.length" :items="items" />
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

        li {
            display: inline-block;
            list-style: none;
            padding: 0 15px;

            a {
                color: var(--color-black);
                font-size: 14px;
                font-weight: 300;
            }
        }

        // QUESTION: Should i just exclude this menu item with subItems?
        .sub-menu {
            display: none;
        }
    }
    // Hovers
    @media #{$has-hover} {
    }
    // Breakpoints
    @media #{$lt-phone} {
        padding: 20px;

        /deep/ .wp-menu li {
            margin: 10px 0;
        }
    }
}
</style>
