<template lang="html">
    <div class="panel-sidetray">
        <wp-image
            v-for="(item, i) in items"
            :key="item.id"
            :image="item"
            :aspect-ratio="56.25"
            :class="{ active: i == activeIndex }"
            v-if="item.sourceUrl"
        >
            <div class="scrim">
                <span v-if="i == activeIndex">Currently Viewing</span>
            </div>
        </wp-image>
    </div>
</template>

<script>
import WpImage from "@/components/global/WpImage";

export default {
    components: {
        WpImage
    },
    props: {
        items: {
            type: Array,
            default: () => []
        },
        activeIndex: {
            type: Number,
            default: -1
        }
    }
};
</script>

<style lang="scss" scoped>
.panel-sidetray {
    padding: 20px;
    box-sizing: border-box;
    width: 420px;
    background-color: var(--color-black); //placeholder

    .wp-image {
        display: block;

        transition: transform 0.2s ease-in-out;
        position: relative;
        z-index: 20;
        cursor: pointer;

        .scrim {
            position: absolute;
            z-index: 20;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            background-color: rgba(black, 0);
            color: var(--color-company);
            transition: background-color 0.2s ease-in-out;

            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
        }

        &.active .scrim {
            background-color: rgba(black, 0.6);
        }
    }

    // Hovers
    @media #{$has-hover} {
        .wp-image:hover:not(.active) {
            .scrim {
                background-color: rgba(black, 0.6);
            }
        }
    }
}
</style>
