<template>
    <div class="grid-featured">
        <block-featured
            v-for="(item, i) in items"
            :key="item.id"
            :to="item.uri"
            :title="item.title"
            :credit="item.credit"
            :image-primary="item.featuredImage"
            :image-secondary="item.featuredImage"
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
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
.grid-featured {
    width: 100%;
    max-width: var(--unit-max-width);
    margin: 0 auto;
    padding: 0 var(--unit-gutter);
    box-sizing: border-box;

    .block-featured {
        &:nth-child(2n + 2) {
            .featured-text {
                left: 0;
                right: auto;
                text-align: left;
            }
            .title {
                text-align: left;
            }
            .primary-image {
                margin-left: auto;
            }
            .secondary-image.mode-intrinsic-ratio {
                left: 50px;
                right: auto;
            }
        }
    }

    // Hovers
    @media #{$has-hover} {
        .block-featured:nth-child(2n + 2):hover {
            .primary-image {
                transform: translateX(-50px);
            }
        }
    }
    // Breakpoints
    @media #{$lt-tablet} {
        .block-featured {
            &:nth-child(2n + 2) {
                .secondary-image.mode-intrinsic-ratio {
                    left: 0;
                    right: auto;
                }
            }
        }
    }
}
</style>
