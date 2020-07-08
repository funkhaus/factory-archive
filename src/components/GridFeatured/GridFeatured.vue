<template>
    <div class="grid-featured">
        <block-featured
            v-for="(block, i) in blocks"
            :key="i"
            :to="block.uri"
            :title="block.title"
            :image="block.featuredImage"
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
