<template>
    <div class="grid-featured">
        <block-featured
            v-for="(block, i) in blocks"
            :key="i.id"
            :to="block.uri"
            :is-news="block.isNews"
            :has-hover="hasHover(block)"
            :title="block.title"
            :image="block.featuredImage"
            :date="block.date"
            :logo-names="block.logoNames"
            :credits-primary="block.creditsPrimary"
            :credits-secondary="block.creditsSecondary"
        />
    </div>
</template>

<script>
// Components
import BlockFeatured from "@/components/BlockFeatured/BlockFeatured"

export default {
    components: {
        BlockFeatured
    },
    props: {
        blocks: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        hasHover(block) {
            return block.hasHover
        }
    }
}
</script>

<style lang="scss">
.grid-featured {
    width: 100%;
    display: flex;
    flex-wrap: wrap;

    .block-featured {
        width: 50%;

        &:nth-child(3n + 1) {
            width: 100%;
        }
    }

    // Breakpoints
    @media #{$lt-phone} {
        .block-featured {
            width: 100%;
        }
    }
}
</style>
