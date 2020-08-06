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
        &:nth-child(3n + 2) {
            .block-image {
                width: 35%;
            }
        }
        &:nth-child(3n + 3) {
            .block-image {
                width: 43%;
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
                    transform: scale(1.3);
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
            &:nth-child(3n + 2) {
                .block-image {
                    width: 50%;
                }
            }
            &:nth-child(3n + 3) {
                .block-image {
                    width: 61%;
                }
            }
        }
    }
    @media #{$lt-phone} {
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
