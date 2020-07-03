<template>
    <div :class="classes">
        <h2 v-if="title" class="title" v-html="title" />

        <div class="items">
            <ul v-for="column in columns" class="list">
                <li v-for="item in column" class="list-item">
                    <nuxt-link class="link" :to="item.uri">
                        {{ item.title
                        }}<span
                            v-if="!isColumn"
                            class="sep"
                            v-html="',&nbsp;'"
                        />
                    </nuxt-link>

                    <wp-image
                        class="image"
                        :image="item.featuredImage"
                        mode="fullbleed"
                    />
                </li>
            </ul>
        </div>

        <span v-if="date" class="date" v-html="date" />
    </div>
</template>

<script>
import { sortColumns } from "@/utils/tools"
import WpImage from "@/components/global/WpImage"
import NuxtLink from "@/components/global/NuxtLink"

export default {
    components: { WpImage, NuxtLink },
    props: {
        items: {
            type: Array,
            default: () => []
        },
        title: {
            type: String,
            default: ""
        },
        variant: {
            type: String,
            default: "column" // Or comma
        },
        date: {
            type: String,
            default: ""
        }
    },
    computed: {
        isColumn() {
            return this.variant == "column"
        },
        columns() {
            // If not column varient, return all items as one column
            if (!this.isColumn) {
                return [this.items]
            }

            // Split items into arrays of columns
            const itemsLength = this.items.length
            let columnCount = 1
            switch (true) {
                case itemsLength > 7:
                    columnCount = 2
                case itemsLength > 14:
                    columnCount = 3
            }

            return sortColumns(this.items, columnCount)
        },
        classes() {
            return [
                "gallery-list",
                { "is-variant-column": this.isColumn },
                { "is-variant-comma": !this.isColumn },
                { "has-many-items": this.items.length > 7 }
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.gallery-list {
    position: relative;
    z-index: 0;
    min-height: 75vh;
    padding: var(--unit-gutter);
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-content: center;
    align-items: center;

    .title {
        font-size: 25px;
        font-weight: 300;
        margin-bottom: 35px;
    }

    // Name list
    .items {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: center;
        align-content: center;
        align-items: center;

        width: 100%;
    }
    .list {
        list-style: none;
        margin: 0;
        padding: 0;
        font-size: 70px;
    }
    .list-item {
        white-space: nowrap;
    }
    .link {
        position: relative;
        z-index: 20;
        cursor: pointer;
        display: block; // This makes the link fill the list-item perfectly
    }

    // Images
    .image {
        position: absolute;
        top: 15%;
        left: 15%;
        right: 15%;
        bottom: 15%;
        margin: auto;
        z-index: 10;
        opacity: 0;
        transition: opacity 0.4s ease-in-out;
        pointer-events: none;
    }

    .date {
        position: absolute;
        bottom: var(--unit-gutter);
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
    }

    // Vairents
    &.is-variant-column {
        .items {
            max-width: var(--unit-max-width);
            margin: calc(var(--unit-gutter) * 2) 0;
        }

        &.has-many-items {
            .list {
                font-size: 24px;
            }
            .items {
                justify-content: space-between;
                align-content: space-between;
            }
        }
    }
    &.is-variant-comma {
        align-content: flex-start;
        align-items: flex-start;

        background-color: var(--color-company);

        .items {
            margin-left: -4px; // NOTE accounting for bad font letter spacing
        }
        .list {
            font-weight: 300;
        }
        .list-item {
            display: inline-block;
        }
        .list-item:last-child .sep {
            display: none;
        }
        .image {
            z-index: 30;
        }
    }

    // Hover states
    @media #{$has-hover} {
        .list-item:hover .image {
            opacity: 1;
        }

        // Variants
        &.is-variant-column {
            .link:hover {
                color: var(--color-company);
            }
        }
        &.is-variant-comma {
            .link:hover {
                z-index: 40;
                color: #ffffff;
            }
        }
    }

    // Breakpoints
    @media #{$lt-tablet} {
        // NOTE might want to change font sizes on mobile, no designs provided
    }
}
</style>
