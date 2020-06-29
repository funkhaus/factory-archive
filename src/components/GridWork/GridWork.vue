<template lang="html">
    <div class="grid-work">
        <h3 v-if="title" class="title" v-text="title" />
        <div class="blocks">
            <block-work
                v-for="(item, i) in items"
                :key="item.id"
                :title="item.title"
                :image="item.featuredImage"
                :path="item.uri"
            />
            <block-work
                v-for="(item, i) in items"
                :key="item.id"
                :title="item.title"
                :image="item.featuredImage"
                :path="item.uri"
                hover-type="solid"
            />
        </div>
    </div>
</template>

<script>
import BlockWork from "@/components/BlockWork/BlockWork"

export default {
    components: {
        BlockWork
    },
    props: {
        title: {
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
.grid-work {
    background: black;

    .title {
        font-size: 120px;
        color: #fdc760;
        margin: 0 0 50px 0;
    }

    .blocks {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }

    // Hovers
    // @media #{$has-hover} {
    //     &:hover {
    //     }
    // }
    // Breakpoints
    @media #{$lt-phone} {
        .title {
            font-size: 60px;
        }
    }
}
</style>
