<template>
    <div class="grid-work">
        <block-work
            v-for="(item, i) in items"
            :key="item.id"
            :to="item.uri"
            :title="item.title"
            :credit="item.credit"
            :image="item.featuredImage"
        />
    </div>
</template>

<script>
// Components
import BlockWork from "@/components/BlockWork/BlockWork"

export default {
    components: {
        BlockWork
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
.grid-work {
    width: 100%;
    max-width: var(--unit-max-width);
    margin: 120px auto;
    padding: 0 var(--unit-gutter);
    box-sizing: border-box;

    .block-work {
        margin: -50px auto;

        // Reverse every other block-work
        &:nth-child(2n + 2) {
            padding-left: 0;
            padding-right: 50px;

            .block-text {
                right: 0;
                left: auto;
                text-align: right;
            }
            .block-image {
                margin-left: auto;
                transform-origin: right;
            }
        }
        // Set size of every 2nd out of 3 pattern
        &:nth-child(3n + 2) {
            .block-image {
                width: 38%;
            }
        }
        // Set size of every 3rd out of 3 pattern
        &:nth-child(3n + 3) {
            .block-image {
                width: 47%;
            }
        }
    }

    // Hovers
    @media #{$has-hover} {
        .block-work {
            &:nth-child(2n + 2):hover {
                .block-text {
                    transform: translate(-100px, -50%);
                }
            }
            &:nth-child(3n + 2):hover {
                .block-image {
                    transform: scale(1.4);
                }
            }
            &:nth-child(3n + 3):hover {
                .block-image {
                    transform: scale(1.1);
                }
            }
        }
    }
    // Breakpoints
    @media #{$lt-tablet} {
        .block-work {
            margin: 50px auto;

            &:nth-child(3n + 2) {
                .block-image {
                    width: 56%;
                }
            }
            &:nth-child(3n + 3) {
                .block-image {
                    width: 69%;
                }
            }
        }
    }
    @media #{$lt-phone} {
        margin: 50px auto;

        .block-work {
            &:nth-child(3n + 2) {
                .block-image {
                    width: 100%;
                }
            }
            &:nth-child(3n + 3) {
                .block-image {
                    width: 100%;
                }
            }
        }
    }
}
</style>
