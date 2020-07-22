<template lang="html">
    <section class="section-press">
        <h2 class="title" v-html="title" />

        <ul class="press">
            <li v-for="(item, i) in items" class="item">
                <p v-html="item.title" />
            </li>
        </ul>
    </section>
</template>

<script>
//  Components
import SplitText from "@/components/global/SplitText"

export default {
    components: {
        SplitText
    },
    props: {
        title: {
            type: String,
            default: "Recent Press"
        },
        items: {
            type: Array,
            default: () => []
        }
    }
}
</script>

<style lang="scss">
.section-press {
    position: relative;
    color: var(--color-pink);
    background-color: var(--color-black);
    padding: 60px 50px;
    box-sizing: border-box;
    .title {
        font-size: 75px;
        font-weight: 500;
        text-transform: uppercase;
        color: var(--color-black);
        -webkit-text-stroke: 1.5px var(--color-pink);
        margin: 0;
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translate(-50%);
    }

    .press {
        list-style: none;
        margin: 0;
        padding: 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        .item {
            font-size: 20px;
        }
    }
}
</style>
