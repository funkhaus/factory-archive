<template>
    <ul :class="classes">
        <slot name="before" />

        <wp-menu-item
            v-for="(item, i) in menuItems"
            :key="i"
            class="menu-item"
            :item="item"
        />

        <slot name="after" />
    </ul>
</template>

<script>
// Components
import WpMenuItem from "@/components/global/WpMenuItem"
// Helpers
import _kebabCase from "lodash/kebabCase"
import _get from "lodash/get"

export default {
    components: {
        WpMenuItem
    },
    props: {
        location: {
            type: String,
            default: ""
        },
        items: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        classes() {
            return ["wp-menu", `location-${_kebabCase(this.location)}`]
        },
        menuItems() {
            let items = this.items
            // Use menu from store if name provided
            if (this.location) {
                items = _get(
                    this,
                    `$store.state.menus.locations.${this.location}`,
                    []
                )
            }
            return items
        }
    },
    methods: {
        menuInteracted(event) {
            this.$emit("menu-interacted", event)
            this.$store.commit("SET_MENU", false)
        }
    }
}
</script>
