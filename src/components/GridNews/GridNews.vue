<template>
    <div class="grid-news">
        <block-news
            v-for="(block, i) in blocks"
            :key="block.id"
            :to="block.uri"
            :date="block.date"
            :title="block.title"
            :excerpt="block.excerpt"
            :image="block.featuredImage"
        />
    </div>
</template>

<script>
// Components
import BlockNews from "@/components/BlockNews/BlockNews"

export default {
    components: {
        BlockNews
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
.grid-news {
    width: 100%;
    padding: 0 var(--unit-gutter);
    box-sizing: border-box;

    .block-news {
        margin: var(--unit-vertical-gap) 0 calc(var(--unit-vertical-gap) * 2);

        // Flip every other block
        &:nth-child(2n + 2) {
            flex-direction: row-reverse;

            .block-text {
                padding: 0 var(--unit-gutter) 0 0;
                box-sizing: border-box;
            }
        }
        // Every 3rd and 4th have extra gutter
        &:nth-child(3n + 3),
        &:nth-child(4n + 4) {
            padding: 0 var(--unit-gutter);
            box-sizing: border-box;
        }
    }

    // Hovers
    @media #{$has-hover} {
        .block-news:nth-child(2n + 2):hover {
            .block-text {
                transform: translateX(calc(var(--unit-gutter) * -1));
            }
        }
    }
    // Breakpoints
    @media #{$lt-tablet} {
        .block-news {
            &:nth-child(3n + 3),
            &:nth-child(4n + 4) {
                padding: 0;
            }
        }
    }
    @media #{$lt-phone} {
        .block-news {
            margin-bottom: var(--unit-vertical-gap);

            &:nth-child(2n + 2) {
                flex-direction: column;

                .block-text {
                    padding: 0;
                }
            }
        }
    }
}
</style>
