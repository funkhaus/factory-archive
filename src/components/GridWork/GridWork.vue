<template lang="html">
    <div class="grid-work">
        <h3 v-if="title" class="title" v-html="title" />

        <block-work
            v-for="(item, i) in items"
            :key="item.id"
            :title="item.title"
            :image="item.featuredImage"
            :path="item.uri"
            :hover-type="blockType"
        />
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
        },
        blockType: {
            type: String,
            default: ""
        }
    }
}
</script>

<style lang="scss" scoped>
.grid-work {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-top: 200px; // placeholder

    .title {
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
        font-size: 120px;
        color: var(--color-company);
    }

    // Breakpoints
    @media #{$lt-phone} {
        .title {
            font-size: 60px;
        }
    }
}
</style>
